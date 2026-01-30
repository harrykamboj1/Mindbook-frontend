"use client";

import { UserButton } from "@clerk/nextjs";
import { Plus, Briefcase, PanelLeftClose, PanelLeftOpen, Sparkles } from "lucide-react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const router = useRouter();
    const pathname = usePathname();

    const handleProjectsClick = () => {
        router.push("/projects");
    };

    const handleNewProject = () => {
        router.push("/projects");
    };

    return (
        <div
            className={`bg-[#1a1a1a] text-white flex flex-col transition-all duration-300 ease-out border-r border-gray-800/50 ${isCollapsed ? "w-16" : "w-64"
                }`}
        >
            {/* Header */}
            <div className="p-3 flex items-center justify-between">
                <div className={`flex items-center gap-2 overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}>
                    <div className="relative w-8 h-8 shrink-0">
                        <Image
                            src="/logo.png"
                            alt="Mindbook"
                            fill
                            className="object-contain rounded-lg"
                        />
                    </div>
                    <h1 className="text-lg font-semibold text-gradient whitespace-nowrap">Mindbook</h1>
                </div>
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 hover:bg-[#252525] rounded-lg transition-all duration-200 group shrink-0"
                    title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    {isCollapsed ? (
                        <PanelLeftOpen size={16} className="text-gray-400 group-hover:text-gray-200 transition-colors" />
                    ) : (
                        <PanelLeftClose size={16} className="text-gray-400 group-hover:text-gray-200 transition-colors" />
                    )}
                </button>
            </div>

            {/* Divider */}
            <div className="mx-3 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

            {/* New Project Button */}
            <div className="p-3">
                <button
                    onClick={handleNewProject}
                    title={isCollapsed ? "New project" : undefined}
                    className={`w-full bg-white hover:bg-gray-100 text-black font-medium rounded-xl transition-all duration-200 flex items-center gap-3 hover:shadow-lg hover:shadow-white/10 transform hover:-translate-y-0.5 active:translate-y-0 ${isCollapsed ? "p-3 justify-center" : "p-3"
                        }`}
                >
                    <Plus size={18} className="shrink-0" />
                    <span className={`whitespace-nowrap transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}>
                        New project
                    </span>
                </button>
            </div>

            {/* Navigation */}
            <div className={`px-3 pb-3 transition-all duration-300 ${isCollapsed ? "opacity-0 pointer-events-none h-0" : "opacity-100 h-auto"}`}>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 px-2">
                    Workspace
                </p>
                <nav className="space-y-1">
                    <button
                        onClick={handleProjectsClick}
                        className={`w-full flex items-center gap-3 p-2.5 text-sm rounded-lg transition-all duration-200 group ${pathname?.startsWith("/projects")
                            ? "bg-[#252525] text-white border border-gray-700 shadow-sm"
                            : "text-gray-400 hover:bg-[#252525] hover:text-gray-200"
                            }`}
                    >
                        <Briefcase size={16} className="shrink-0" />
                        <span>Projects</span>
                        {pathname?.startsWith("/projects") && (
                            <Sparkles size={12} className="ml-auto text-gray-500" />
                        )}
                    </button>
                </nav>
            </div>

            {/* Collapsed Navigation Icons */}
            {isCollapsed && (
                <div className="px-3 py-2 animate-fade-in">
                    <button
                        onClick={handleProjectsClick}
                        title="Projects"
                        className={`w-full flex justify-center p-2.5 rounded-lg transition-all duration-200 ${pathname?.startsWith("/projects")
                            ? "bg-[#252525] text-white border border-gray-700"
                            : "text-gray-400 hover:bg-[#252525] hover:text-gray-200"
                            }`}
                    >
                        <Briefcase size={16} />
                    </button>
                </div>
            )}

            {/* Spacer */}
            <div className="flex-1" />

            {/* Divider */}
            <div className="mx-3 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

            {/* User Section */}
            <div className="p-3">
                <div
                    className={`flex items-center rounded-lg p-2 hover:bg-[#252525] transition-all duration-200 cursor-pointer ${isCollapsed ? "justify-center" : "gap-3"
                        }`}
                >
                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox: "w-8 h-8"
                            }
                        }}
                    />
                    <div className={`transition-all duration-300 overflow-hidden ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}>
                        <p className="text-sm font-medium text-gray-200 whitespace-nowrap">Profile</p>
                        <p className="text-xs text-gray-500 whitespace-nowrap">Settings & Account</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
