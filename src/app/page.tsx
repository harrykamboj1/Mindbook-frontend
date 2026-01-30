import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import LandingPage from "@/components/landing/LandingPage";

async function HomePage() {
  const { userId } = await auth();

  if (userId) {
    redirect("/projects");
  }

  return <LandingPage />;
}

export default HomePage;
