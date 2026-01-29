"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { ProjectsGrid } from "@/components/projects/ProjectGrid";
import { CreateProjectModal } from "@/components/projects/CreateProjectModal";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

import toast from "react-hot-toast";
import { apiClient } from "@/lib/api";
import { ConversationsList } from "@/components/projects/ConversationsList";
import { KnowledgeBaseSidebar } from "@/components/projects/KnowledgeBaseSidebar";

interface Project {
    id: string;
    name: string;
    description: string;
    created_at: string;
    clerk_id: string;
}

function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    const { getToken, userId } = useAuth();
    const router = useRouter();

    const loadProjects = async () => {
        try {
            setLoading(true);

            const token = await getToken();

            const result = await apiClient.get("/api/projects/", token);

            const { data } = result || {};

            setProjects(data);
        } catch (err) {
            console.error("Error Loading Projects", err);
            toast.error("Failed to load projects");
        } finally {
            setLoading(false);
        }
    };

    const handleCreateProject = async (name: string, description: string) => {
        try {
            setError(null);
            setIsCreating(true);

            const token = await getToken();

            const result = await apiClient.post(
                "/api/projects/",
                {
                    name,
                    description,
                },
                token
            );

            const savedProject = result?.data || {};
            setProjects((prev) => [savedProject, ...prev]);

            setShowCreateModal(false);
            toast.success("Project created successfully!");
        } catch (err) {
            toast.error("Failed to create project");
            console.error("Failed to create project", err);
        } finally {
            setIsCreating(false);
        }
    };

    const handleDeleteProject = async (projectId: string) => {
        try {
            setError(null);
            const token = await getToken();

            await apiClient.delete(`/api/projects/${projectId}`, token);

            setProjects((prev) => prev.filter((project) => project.id !== projectId));

            toast.success("Project deleted successfully!");
        } catch (err) {
            toast.error("Failed to delete project");
            console.error("Failed to delete project", err);
        }
    };



    const handleProjectClick = (projectId: string) => {
        router.push(`/projects/${projectId}`);
    };

    const handleOpenModal = () => {
        setShowCreateModal(true);
    };

    const handleCloseModal = () => {
        setShowCreateModal(false);
    };

    useEffect(() => {
        if (userId) {
            loadProjects();
        }
    }, [userId]);

    const filteredProjects = projects.filter(
        (project) =>
            project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return <LoadingSpinner message="Loading projects..." />;
    }

    return (
        <div>
            <ProjectsGrid
                projects={filteredProjects}
                loading={loading}
                error={error}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                onProjectClick={handleProjectClick}
                onCreateProject={handleOpenModal}
                onDeleteProject={handleDeleteProject}
            />

            <CreateProjectModal
                isOpen={showCreateModal}
                onClose={handleCloseModal}
                onCreateProject={handleCreateProject}
                isLoading={isCreating}
            />
        </div>
    );
}

export default ProjectsPage;
