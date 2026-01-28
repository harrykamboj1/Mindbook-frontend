import { SignIn } from "@clerk/nextjs";
import { Book, Lock, MessageSquareMore } from "lucide-react";
import Image from "next/image";

function SignInPage() {
    return (
        <div className="min-h-screen flex bg-[#0f0f0f]">
            {/* Left Panel - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a] p-12 flex-col justify-between border-r border-gray-800">
                <div>
                    <div className="mb-8 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 blur-3xl rounded-full scale-150 opacity-60" />
                        <Image
                            src="/logo.png"
                            alt="Mindbook Logo"
                            width={200}
                            height={200}
                            className="w-40 h-40 object-contain relative z-10 drop-shadow-2xl rounded-2xl"
                            priority
                        />
                    </div>

                    <h1 className="text-4xl font-bold text-white mb-4">
                        Welcome back
                    </h1>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Your personal AI-powered knowledge companion. Upload documents,
                        ask questions, and get intelligent answers from your own data.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#252525] border border-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white"><Book /></span>
                        </div>
                        <div>
                            <h3 className="text-gray-200 font-semibold">Smart Document Analysis</h3>
                            <p className="text-gray-500 text-sm">Upload PDFs, docs, and more. Get instant insights.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#252525] border border-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white"><MessageSquareMore /></span>
                        </div>
                        <div>
                            <h3 className="text-gray-200 font-semibold">Natural Conversations</h3>
                            <p className="text-gray-500 text-sm">Chat with your documents like talking to an expert.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#252525] border border-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white"><Lock /></span>
                        </div>
                        <div>
                            <h3 className="text-gray-200 font-semibold">Private & Secure</h3>
                            <p className="text-gray-500 text-sm">Your data stays yours. Enterprise-grade security.</p>
                        </div>
                    </div>
                </div>

                <p className="text-gray-600 text-sm">
                    © 2026 Mindbook. All rights reserved.
                </p>
            </div>

            {/* Right Panel - Sign In Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#0f0f0f] p-8">
                <SignIn signUpUrl="/sign-up" forceRedirectUrl="/" />
            </div>
        </div>
    );
}

export default SignInPage;
