import AboutPage from "@/components/About";
import Contact from "@/components/Contact2";
import Project from "@/components/Project";
import TrangChu from "@/components/TrangChu";
import { JSX } from "react";

export default async function Page({ params }: { params: { page: string } }) {
  const { page } = await params;
  const pages: Record<string, JSX.Element> = {
    home: <TrangChu />,
    contact: <Contact />,
    projects: <Project />,
    about: <AboutPage />
  };

  return (
    pages[page] ?? (
      <h1 className="flex justify-center items-center h-screen text-3xl font-mono">
        404 – Không tìm thấy trang
      </h1>
    )
  );
}
