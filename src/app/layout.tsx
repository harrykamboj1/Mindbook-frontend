import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/Toast";
import { dark } from "@clerk/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f0f0f",
};

export const metadata: Metadata = {
  title: {
    default: "Mindbook - Your Personalized AI Assistant",
    template: "%s | Mindbook",
  },
  description: "Transform your documents into knowledge with AI-powered conversations. Upload, analyze, and chat with your documents using advanced RAG technology.",
  keywords: ["AI", "RAG", "document analysis", "knowledge base", "chatbot", "PDF analysis"],
  authors: [{ name: "Mindbook Team" }],
  creator: "Mindbook",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mindbook",
    title: "Mindbook - Your Personalized AI Assistant",
    description: "Transform your documents into knowledge with AI-powered conversations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindbook - Your Personalized AI Assistant",
    description: "Transform your documents into knowledge with AI-powered conversations.",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl={"/sign-in"}
      appearance={{
        baseTheme: dark,
        elements: {
          footer: "hidden",
        }
      }}
    >
      <html lang="en" className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f0f0f] text-white`}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
