"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import {
    Brain,
    Sparkles,
    FileText,
    MessageSquare,
    Search,
    Zap,
    Shield,
    Cloud,
    GitBranch,
    Upload,
    Link,
    Bot,
    Database,
    Lock,
    ChevronRight,
    ArrowRight,
    Globe,
    Layers,
    Activity,
    Star,
    CheckCircle2,
    Play,
    LayoutGrid,
} from "lucide-react";

export default function LandingPage() {
    const router = useRouter();

    const features = [
        {
            icon: Brain,
            title: "AI-Powered Intelligence",
            description:
                "Advanced RAG (Retrieval-Augmented Generation) technology for contextual document understanding and intelligent responses.",
            gradient: "from-purple-500 to-indigo-500",
        },
        {
            icon: FileText,
            title: "Multi-Format Support",
            description:
                "Seamlessly process PDFs, web pages, and various document types with intelligent parsing and extraction.",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            icon: MessageSquare,
            title: "Natural Conversations",
            description:
                "Chat with your documents using natural language. Get instant answers with cited sources and context.",
            gradient: "from-emerald-500 to-teal-500",
        },
        {
            icon: Search,
            title: "Intelligent Search",
            description:
                "Context-aware semantic search that understands meaning, not just keywords. Find exactly what you need.",
            gradient: "from-amber-500 to-orange-500",
        },
        {
            icon: Zap,
            title: "Real-Time Processing",
            description:
                "Background task processing with Celery ensures fast document ingestion without blocking your workflow.",
            gradient: "from-rose-500 to-pink-500",
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description:
                "Clerk-powered authentication with secure project isolation. Your data stays private and protected.",
            gradient: "from-violet-500 to-purple-500",
        },
    ];

    const workflowSteps = [
        {
            icon: Upload,
            title: "Upload Documents",
            description: "Drag & drop PDFs or add URLs for web content ingestion",
        },
        {
            icon: Layers,
            title: "Automatic Processing",
            description: "AI extracts, chunks, and indexes your content intelligently",
        },
        {
            icon: Bot,
            title: "Start Chatting",
            description: "Ask questions and get accurate answers with citations",
        },
    ];

    const techStack = [
        { icon: Globe, name: "Next.js 15", description: "React Framework" },
        { icon: Database, name: "Supabase", description: "Vector Database" },
        { icon: Cloud, name: "Cloudflare R2", description: "Cloud Storage" },
        { icon: GitBranch, name: "LangChain", description: "LLM Orchestration" },
        { icon: Lock, name: "Clerk", description: "Authentication" },
        { icon: Activity, name: "Celery", description: "Task Queue" },
    ];

    const stats = [
        { value: "99.9%", label: "Uptime SLA" },
        { value: "<500ms", label: "Response Time" },
        { value: "100+", label: "File Formats" },
        { value: "∞", label: "Conversations" },
    ];

    return (
        <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            {/* Navigation */}
            <header className="relative z-50 border-b border-white/5">
                <nav className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/logo.png"
                                    alt="Mindbook"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold text-gradient">Mindbook</span>
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Features
                            </a>
                            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">
                                How it Works
                            </a>
                            <a href="#tech-stack" className="text-gray-400 hover:text-white transition-colors text-sm">
                                Technology
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => router.push("/sign-in")}
                                className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => router.push("/sign-up")}
                                className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-100 transition-all hover:shadow-lg hover:shadow-white/10 hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Get Started
                                <ArrowRight className="inline-block ml-2 w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative z-10 pt-20 pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-down">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span className="text-sm text-gray-300">Powered by Advanced AI</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
                            Transform Your{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                                Documents
                            </span>{" "}
                            Into{" "}
                            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                Knowledge
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                            Upload, analyze, and chat with your documents using cutting-edge RAG technology.
                            Get instant, accurate answers with source citations.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                            <button
                                onClick={() => router.push("/sign-up")}
                                className="group px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
                            >
                                Start for Free
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="group px-8 py-4 border border-white/20 rounded-xl hover:bg-white/5 transition-all flex items-center gap-2 text-gray-300 hover:text-white">
                                <Play className="w-5 h-5" />
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="mt-20 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent z-10 pointer-events-none" />
                        <div className="relative mx-auto max-w-5xl">
                            {/* Glowing border effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur-xl opacity-20 animate-pulse" />

                            {/* Main preview card */}
                            <div className="relative bg-[#1a1a1a] rounded-2xl border border-white/10 p-1 shadow-2xl">
                                <div className="bg-[#0f0f0f] rounded-xl overflow-hidden">
                                    {/* Browser Header */}
                                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                        </div>
                                        <div className="flex-1 flex justify-center">
                                            <div className="px-4 py-1 bg-white/5 rounded-lg text-xs text-gray-500">
                                                mindbook.app/projects
                                            </div>
                                        </div>
                                    </div>

                                    {/* App Preview */}
                                    <div className="flex min-h-[400px]">
                                        {/* Sidebar Preview */}
                                        <div className="w-64 bg-[#1a1a1a] border-r border-white/5 p-4">
                                            <div className="flex items-center gap-3 mb-6">
                                                {/* <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"> */}
                                                <Image
                                                    src="/logo.png"
                                                    alt="Logo"
                                                    width={32}
                                                    height={32}
                                                    className="object-contain rounded-md"
                                                />
                                                {/* </div> */}
                                                <span className="font-semibold">Mindbook</span>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="p-2.5 bg-white/5 rounded-lg text-sm flex items-center gap-2">
                                                    <LayoutGrid className="w-4 h-4 text-gray-400" />
                                                    Projects
                                                </div>
                                                {/* <div className="p-2.5 rounded-lg text-sm text-gray-500 flex items-center gap-2">
                                                    <MessageSquare className="w-4 h-4" />
                                                    Conversations
                                                </div> */}
                                            </div>
                                        </div>

                                        {/* Main Content Preview */}
                                        <div className="flex-1 p-6">
                                            <div className="flex items-center justify-between mb-6">
                                                <div>
                                                    <h3 className="text-lg font-semibold mb-1">Your Projects</h3>
                                                    <p className="text-sm text-gray-500">Manage your document collections</p>
                                                </div>
                                                <div className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg">
                                                    + New Project
                                                </div>
                                            </div>

                                            {/* Project Cards */}
                                            <div className="grid grid-cols-2 gap-4">
                                                {[
                                                    { name: "Research Papers", docs: 24, color: "from-purple-500 to-indigo-500" },
                                                    { name: "Legal Documents", docs: 18, color: "from-emerald-500 to-teal-500" },
                                                    { name: "Product Specs", docs: 12, color: "from-amber-500 to-orange-500" },
                                                    { name: "Meeting Notes", docs: 45, color: "from-rose-500 to-pink-500" },
                                                ].map((project, i) => (
                                                    <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                                                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} opacity-80 mb-3 flex items-center justify-center`}>
                                                            <FileText className="w-5 h-5 text-white" />
                                                        </div>
                                                        <h4 className="font-medium text-sm mb-1">{project.name}</h4>
                                                        <p className="text-xs text-gray-500">{project.docs} documents</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative z-10 py-16 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="relative z-10 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                            <Star className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-purple-300">Premium Features</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Everything You Need to{" "}
                            <span className="text-gradient">Master Your Documents</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Powerful features designed to help you extract insights, accelerate research,
                            and unlock the full potential of your document library.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div
                                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 shadow-lg`}
                                    style={{ boxShadow: `0 8px 32px -8px rgba(var(--${feature.gradient.split("-")[1]}-rgb), 0.3)` }}
                                >
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                            <Zap className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-300">Simple Workflow</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Get Started in{" "}
                            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                Three Steps
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            From document upload to intelligent conversations in minutes.
                            No complex setup required.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {workflowSteps.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Connector Line */}
                                {index < workflowSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-white/20 to-transparent" />
                                )}

                                <div className="relative text-center p-8">
                                    {/* Step Number */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-sm font-bold">
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/20 mb-6">
                                        <step.icon className="w-8 h-8 text-emerald-400" />
                                    </div>

                                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-gray-400 text-sm">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section id="tech-stack" className="relative z-10 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                            <GitBranch className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300">Built with Modern Tech</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Powered by{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Cutting-Edge Technology
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Enterprise-grade infrastructure designed for reliability, scalability, and performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-white/[0.02] rounded-xl border border-white/5 hover:border-white/20 transition-all duration-300 text-center hover:-translate-y-1"
                            >
                                <tech.icon className="w-8 h-8 text-gray-400 group-hover:text-white mx-auto mb-3 transition-colors" />
                                <h4 className="font-medium text-sm mb-1">{tech.name}</h4>
                                <p className="text-xs text-gray-500">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl blur-2xl" />

                        <div className="relative p-12 bg-[#1a1a1a] rounded-3xl border border-white/10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm text-gray-300">No credit card required</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to Transform Your{" "}
                                <span className="text-gradient">Document Workflow?</span>
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                Join thousands of researchers, developers, and teams who use Mindbook
                                to unlock insights from their documents.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button
                                    onClick={() => router.push("/sign-up")}
                                    className="group px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:translate-y-0 flex items-center gap-2"
                                >
                                    Get Started Free
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => router.push("/sign-in")}
                                    className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/5 transition-all text-gray-300 hover:text-white"
                                >
                                    Sign In to Dashboard
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/5 py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/logo.png"
                                    alt="Mindbook"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-semibold text-gradient">Mindbook</span>
                        </div>

                        <div className="flex items-center gap-8 text-sm text-gray-500">
                            <a href="#features" className="hover:text-white transition-colors">Features</a>
                            <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
                            <a href="#tech-stack" className="hover:text-white transition-colors">Technology</a>
                        </div>

                        <p className="text-sm text-gray-500">
                            © 2026 Mindbook. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
