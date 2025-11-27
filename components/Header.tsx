"use client";

import { ModeToggle } from "@/components/toogleTheme";
// import { useThemeApp } from "@/components/theme-provider";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

export default function HeaderPage({ pageOpen }: { pageOpen: string }) {
  // const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="text-xl font-semibold flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-linear-to-br from-[#04293A] to-[#0B2545] flex items-center justify-center">
          <Link
            href="/home"
            className="text-white w-full h-full flex items-center justify-center"
          >
            TL
          </Link>
        </div>
        <span>Thành Long</span>
      </div>

      <div className="flex items-center gap-4 relative">
        <nav className="hidden md:flex gap-6 text-sm opacity-90">
          <Link
            href="/projects"
            className={`hover:underline ${
              pageOpen === "projects" ? "underline" : ""
            }`}
          >
            Dự án
          </Link>
          <Link
            href="/about"
            className={`hover:underline ${
              pageOpen === "about" ? "underline" : ""
            }`}
          >
            Giới thiệu
          </Link>
          <Link
            href="/contact"
            className={`hover:underline ${
              pageOpen === "contact" ? "underline" : ""
            }`}
          >
            Liên hệ
          </Link>
        </nav>

        <ModeToggle />

        <button
          className="ml-2 md:hidden p-2 rounded-md bg-white/5"
          onClick={() => {
            console.log("da vao", menuOpen);
            setMenuOpen(!menuOpen);
          }}
        >
          ☰
        </button>
        {/* {menuOpen && ( */}
        <nav
          //     className="absolute top-full right-0 mt-2 bg-[#0088f820] backdrop-blur-md
          // flex flex-col gap-2.5 p-4 rounded-lg w-40 text-sm z-50"
          className={`absolute top-full right-0 mt-2 bg-[#0088f820] backdrop-blur-md
          flex flex-col gap-4 p-4 rounded-lg w-40 text-sm z-[9999]
          transition-all duration-300 ease-out origin-top
          ${
            menuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
          }
        `}
        >
          <Link
            href="/projects"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Dự án
          </Link>
          <Link
            href="/about"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Giới thiệu
          </Link>
          <Link
            href="/contact"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Liên hệ
          </Link>
        </nav>
        {/* )} */}
      </div>
    </header>
  );
}
