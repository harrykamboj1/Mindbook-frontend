# Mindbook Frontend

Frontend for **Mindbook** — built with Next.js 15, TypeScript, and Tailwind CSS.

---

## Features

### Authentication
- Clerk-powered sign-in/sign-up pages
- Dark-themed auth components
- Protected dashboard routes

### Dashboard
- Collapsible sidebar navigation
- Project grid/list views
- Real-time search filtering

### Project Management
- Create and organize projects
- Document upload with drag & drop
- URL ingestion for web content
- RAG settings configuration

### Chat Interface
- Real-time streaming responses
- Message citations with sources
- Feedback system (like/dislike)
- Agent status indicators


## Project Structure

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
│   │       ├── LoadingSpinner.tsx
│   │       ├── NotFound.tsx
│   │       
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

## Getting Started

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

## Development

### Available Scripts


npm run dev        # Start development server (port 3000)

## Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 15.x | React framework |
| react | 19.x | UI library |
| typescript | 5.x | Type safety |
| tailwindcss | 4.x | Styling |
| @clerk/nextjs | latest | Authentication |
| lucide-react | latest | Icons |
| react-hot-toast | latest | Notifications |
| react-dropzone | latest | File upload |


## 👤 Author

**harrykamboj1** — [singhharnoor116@gmail.com](mailto:singhharnoor116@gmail.com)
