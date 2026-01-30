# 🎨 Mindbook Frontend

A modern, premium dark-themed frontend for **Mindbook** — built with Next.js 15, TypeScript, and Tailwind CSS.

---

## ✨ Features

### 🔐 Authentication
- Clerk-powered sign-in/sign-up pages
- Dark-themed auth components
- Protected dashboard routes

### 🎯 Dashboard
- Collapsible sidebar navigation
- Project grid/list views
- Real-time search filtering

### 📁 Project Management
- Create and organize projects
- Document upload with drag & drop
- URL ingestion for web content
- RAG settings configuration

### 💬 Chat Interface
- Real-time streaming responses
- Message citations with sources
- Feedback system (like/dislike)
- Agent status indicators

### 🎨 UI Polish
- Custom animations (fade, slide, scale)
- Glass morphism effects
- Skeleton loading states
- Enhanced toast notifications
- Gradient text effects

---

## 🏗️ Architecture Diagrams

### High-Level Design
![High Level Design](./public/hld.png)

### RAG Pipeline
![RAG Pipeline](./public/Rag_pipeline_architecture.png)

### RAG Agent Flow
![RAG Agent](./public/rag_agent.png)

### Retrieval Pipeline
![Retrieval Pipeline](./public/retreival_pipeline.png)

### Database Schema
![Database Schema](./public/database_schema.png)

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (auth)/                 # Auth pages (sign-in, sign-up)
│   │   ├── (dashboard)/            # Protected dashboard
│   │   │   └── projects/
│   │   │       ├── page.tsx        # Projects list
│   │   │       └── [projectId]/
│   │   │           ├── page.tsx    # Project detail
│   │   │           └── chats/
│   │   │               └── [chatId]/
│   │   │                   └── page.tsx  # Chat interface
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home redirect
│   │   └── globals.css             # Design system
│   │
│   ├── components/
│   │   ├── chat/                   # Chat components
│   │   │   ├── ChatInterface.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   ├── MessageList.tsx
│   │   │   ├── MessageItem.tsx
│   │   │   ├── ErrorDisplay.tsx
│   │   │   └── MessageFeedbackModel.tsx
│   │   │
│   │   ├── layout/                 # Layout components
│   │   │   └── Sidebar.tsx
│   │   │
│   │   ├── projects/               # Project components
│   │   │   ├── ProjectsGrid.tsx
│   │   │   ├── CreateProjectModal.tsx
│   │   │   ├── ConversationsList.tsx
│   │   │   ├── KnowledgeBaseSidebar.tsx
│   │   │   ├── FileDetailsModal.tsx
│   │   │   └── document-details/   # Document pipeline steps
│   │   │
│   │   └── ui/                     # Reusable UI primitives
│   │       ├── Button.tsx
│   │       ├── Skeleton.tsx
│   │       ├── EmptyState.tsx
│   │       ├── Toast.tsx
│   │       ├── LoadingSpinner.tsx
│   │       ├── NotFound.tsx
│   │       └── index.ts            # Barrel exports
│   │
│   ├── lib/
│   │   ├── api/                    # API client
│   │   │   └── index.ts
│   │   └── types/                  # TypeScript interfaces
│   │       └── index.ts
│   │
│   └── middleware.ts               # Clerk auth middleware
│
├── public/                         # Static assets
│   ├── logo.png
│   ├── hld.png
│   ├── Rag_pipeline_architecture.png
│   ├── database_schema.png
│   └── ...
│
├── .env.sample                     # Environment template
├── next.config.ts                  # Next.js config
├── tailwind.config.ts              # Tailwind config
├── tsconfig.json                   # TypeScript config
└── package.json                    # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn** or **pnpm**
- **Clerk account** (for authentication)

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.sample .env.local

# Start development server
npm run dev
```

### Environment Variables

Create a `.env.local` file with:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Backend API
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 🛠️ Development

### Available Scripts

```bash
npm run dev        # Start development server (port 3000)
npm run build      # Create production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run lint:fix   # Fix linting issues
```

### Design System

The design system is defined in `src/app/globals.css`:

#### CSS Variables
```css
--dark-bg: #0f0f0f
--dark-surface: #1a1a1a
--dark-surface-hover: #252525
--dark-border: #2a2a2a
```

#### Animation Classes
```css
.animate-fade-in      /* Fade in */
.animate-fade-in-up   /* Fade in from bottom */
.animate-scale-in     /* Scale in */
.animate-pulse-glow   /* Pulsing glow effect */
.animate-shimmer      /* Shimmer loading effect */
.animate-float        /* Floating effect */
```

#### Utility Classes
```css
.glass               /* Glass morphism */
.glow-md             /* Medium glow */
.gradient-mesh       /* Mesh gradient background */
.text-gradient       /* Gradient text */
.skeleton            /* Loading skeleton */
.btn-primary         /* Primary button */
.card                /* Card container */
```

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| **next** | 15.x | React framework |
| **react** | 19.x | UI library |
| **typescript** | 5.x | Type safety |
| **tailwindcss** | 4.x | Styling |
| **@clerk/nextjs** | latest | Authentication |
| **lucide-react** | latest | Icons |
| **react-hot-toast** | latest | Notifications |
| **react-dropzone** | latest | File upload |

---

## 🎨 Component Usage

### Button Component
```tsx
import { Button, IconButton } from "@/components/ui";
import { Plus, Trash2 } from "lucide-react";

<Button variant="primary" leftIcon={Plus}>
  Create Project
</Button>

<Button variant="secondary" isLoading>
  Saving...
</Button>

<IconButton icon={Trash2} variant="danger" aria-label="Delete" />
```

### Skeleton Loading
```tsx
import { Skeleton, ProjectCardSkeleton } from "@/components/ui";

<Skeleton height="100px" className="rounded-xl" />
<ProjectCardSkeleton />
```

### Empty State
```tsx
import { EmptyState } from "@/components/ui";
import { FileText } from "lucide-react";

<EmptyState
  icon={FileText}
  title="No documents yet"
  description="Upload your first document to get started"
  action={{
    label: "Upload Document",
    onClick: handleUpload
  }}
/>
```

### Custom Toast
```tsx
import { customToast } from "@/components/ui";

customToast.success("Project created!");
customToast.error("Failed to save");
customToast.promise(apiCall, {
  loading: "Saving...",
  success: "Saved!",
  error: "Failed"
});
```

---

## 🌐 API Integration

The frontend communicates with the backend via the `apiClient`:

```tsx
import { apiClient } from "@/lib/api";
import { useAuth } from "@clerk/nextjs";

const { getToken } = useAuth();
const token = await getToken();

// GET request
const projects = await apiClient.get("/api/projects/", token);

// POST request
const newProject = await apiClient.post("/api/projects/", data, token);

// DELETE request
await apiClient.delete(`/api/projects/${id}`, token);
```

---

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy!

```bash
# Or use Vercel CLI
npx vercel
```

### Build for Production

```bash
npm run build
npm run start
```

---

## 📝 License

This project is private and proprietary.

---

## 👤 Author

**harrykamboj1** — [singhharnoor116@gmail.com](mailto:singhharnoor116@gmail.com)
