"use client";

import { CheckCircle, XCircle, AlertCircle, Info, X } from "lucide-react";
import { toast, Toaster as HotToaster, Toast } from "react-hot-toast";

interface ToastOptions {
    title?: string;
    description?: string;
    duration?: number;
}

// Custom toast functions with better styling
export const customToast = {
    success: (message: string, options?: ToastOptions) => {
        return toast.custom((t: Toast) => (
            <div
                className={`${t.visible ? "animate-fade-in-up" : "animate-fade-out"
                    } max-w-md w-full bg-[#1a1a1a] border border-gray-700 shadow-xl rounded-xl pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="shrink-0">
                            <div className="w-8 h-8 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center">
                                <CheckCircle className="h-4 w-4 text-green-400" />
                            </div>
                        </div>
                        <div className="ml-3 flex-1">
                            {options?.title && (
                                <p className="text-sm font-medium text-white">{options.title}</p>
                            )}
                            <p className={`text-sm ${options?.title ? "text-gray-400 mt-1" : "text-gray-200"}`}>
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-700">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>
        ), { duration: options?.duration || 4000 });
    },

    error: (message: string, options?: ToastOptions) => {
        return toast.custom((t: Toast) => (
            <div
                className={`${t.visible ? "animate-fade-in-up" : "animate-fade-out"
                    } max-w-md w-full bg-[#1a1a1a] border border-red-500/30 shadow-xl rounded-xl pointer-events-auto flex ring-1 ring-red-500/10`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="shrink-0">
                            <div className="w-8 h-8 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center">
                                <XCircle className="h-4 w-4 text-red-400" />
                            </div>
                        </div>
                        <div className="ml-3 flex-1">
                            {options?.title && (
                                <p className="text-sm font-medium text-white">{options.title}</p>
                            )}
                            <p className={`text-sm ${options?.title ? "text-gray-400 mt-1" : "text-gray-200"}`}>
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-700">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>
        ), { duration: options?.duration || 5000 });
    },

    info: (message: string, options?: ToastOptions) => {
        return toast.custom((t: Toast) => (
            <div
                className={`${t.visible ? "animate-fade-in-up" : "animate-fade-out"
                    } max-w-md w-full bg-[#1a1a1a] border border-blue-500/30 shadow-xl rounded-xl pointer-events-auto flex ring-1 ring-blue-500/10`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="shrink-0">
                            <div className="w-8 h-8 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center">
                                <Info className="h-4 w-4 text-blue-400" />
                            </div>
                        </div>
                        <div className="ml-3 flex-1">
                            {options?.title && (
                                <p className="text-sm font-medium text-white">{options.title}</p>
                            )}
                            <p className={`text-sm ${options?.title ? "text-gray-400 mt-1" : "text-gray-200"}`}>
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-700">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>
        ), { duration: options?.duration || 4000 });
    },

    warning: (message: string, options?: ToastOptions) => {
        return toast.custom((t: Toast) => (
            <div
                className={`${t.visible ? "animate-fade-in-up" : "animate-fade-out"
                    } max-w-md w-full bg-[#1a1a1a] border border-yellow-500/30 shadow-xl rounded-xl pointer-events-auto flex ring-1 ring-yellow-500/10`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="shrink-0">
                            <div className="w-8 h-8 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-center justify-center">
                                <AlertCircle className="h-4 w-4 text-yellow-400" />
                            </div>
                        </div>
                        <div className="ml-3 flex-1">
                            {options?.title && (
                                <p className="text-sm font-medium text-white">{options.title}</p>
                            )}
                            <p className={`text-sm ${options?.title ? "text-gray-400 mt-1" : "text-gray-200"}`}>
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-700">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>
        ), { duration: options?.duration || 4000 });
    },

    loading: (message: string) => {
        return toast.loading(message, {
            style: {
                background: "#1a1a1a",
                color: "#fff",
                border: "1px solid #3a3a3a",
            },
        });
    },

    dismiss: (toastId?: string) => {
        toast.dismiss(toastId);
    },

    promise: <T,>(
        promise: Promise<T>,
        messages: {
            loading: string;
            success: string;
            error: string;
        }
    ) => {
        return toast.promise(promise, messages, {
            style: {
                background: "#1a1a1a",
                color: "#fff",
                border: "1px solid #3a3a3a",
            },
            success: {
                icon: <CheckCircle className="h-4 w-4 text-green-400" />,
            },
            error: {
                icon: <XCircle className="h-4 w-4 text-red-400" />,
            },
        });
    },
};

// Enhanced Toaster component
export function Toaster() {
    return (
        <HotToaster
            position="top-right"
            gutter={12}
            containerStyle={{
                top: 20,
                right: 20,
            }}
            toastOptions={{
                style: {
                    background: "#1a1a1a",
                    color: "#fff",
                    border: "1px solid #3a3a3a",
                    borderRadius: "12px",
                    padding: "12px 16px",
                },
                success: {
                    iconTheme: {
                        primary: "#22c55e",
                        secondary: "#1a1a1a",
                    },
                },
                error: {
                    iconTheme: {
                        primary: "#ef4444",
                        secondary: "#1a1a1a",
                    },
                },
            }}
        />
    );
}
