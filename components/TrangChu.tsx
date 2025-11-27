"use client";

import { useState, Suspense, useEffect } from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { Canvas } from "@react-three/fiber";
// import Contact from "@/app/contact/page";
import {
  // Sphere,
  // MeshDistortMaterial,
  Environment,
} from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { motion } from "framer-motion";
import HeaderPage from "@/components/Header";
import Link from "next/link";

export default function TrangChu() {
  // const [theme, setTheme] = useState("dark");
  const [copied, setCopied] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mwglongden7112005@gmail.com");
    setCopied(true);

    setTimeout(() => setCopied(false), 2000); // Reset message
  };
  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 768) {
  //       setMenuOpen(false);
  //     }
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  // const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return (
    <div
      className="dark:bg-[#0A1A2F]"
      //   theme === "dark"
      //     ? "min-h-screen bg-[#0A1A2F] text-white"
      //     : "min-h-screen bg-white text-slate-900"
      // }
    >
      <HeaderPage pageOpen="home" />
      {/* <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-xl font-semibold flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-linear-to-br from-[#04293A] to-[#0B2545] flex items-center justify-center">
            <a href="#" className="text-white h-full w-full flex items-center justify-center">TL</a>
          </div>
          <span>Thành Long</span>
        </div>

        <div className="flex items-center gap-4 relative">
          <nav className="hidden md:flex gap-6 text-sm opacity-90">
            <a href="#projects" className="hover:underline">
              Dự án
            </a>
            <a href="#about" className="hover:underline">
              Giới thiệu
            </a>
            <a href="/contact" className="hover:underline">
              Liên hệ
            </a>
          </nav>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-white/10 hover:scale-105 transition-transform duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <a
            href="#projects"
            className="ml-2 px-4 py-2 rounded-md bg-linear-to-r from-[#007CF0] to-[#00A8E8] text-white text-sm shadow-lg hidden sm:inline-block"
          >
            View Projects
          </a>

          <button
            className="ml-2 md:hidden p-2 rounded-md bg-white/5"
            onClick={() => {
              console.log("da vao", menuOpen);
              setMenuOpen(!menuOpen);
            }}
          >
            ☰
          </button> */}
      {/* {menuOpen && ( */}
      {/* <nav */}
      {/* //     className="absolute top-full right-0 mt-2 bg-[#0088f820] backdrop-blur-md */}
      {/* // flex flex-col gap-2.5 p-4 rounded-lg w-40 text-sm z-50" */}
      {/* className={`absolute top-full right-0 mt-2 bg-[#0088f820] backdrop-blur-md */}
      {/* flex flex-col gap-4 p-4 rounded-lg w-40 text-sm z-[9999] */}
      {/* transition-all duration-300 ease-out origin-top */}
      {/* ${
            menuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
          }
        `}
          >
            <a
              href="#projects"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Dự án
            </a>
            <a
              href="#about"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Giới thiệu
            </a>
            <a
              href="/contact"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Liên hệ
            </a>
          </nav>
        </div>
      </header> */}

      <main className="max-w-6xl mx-auto px-6 pt-12">
        <section className="gap-8 items-center flex flex-col-reverse md:flex-row">
          <div className="space-y-6">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Xin chào, Mình là{" "}
              <span className="text-[#00A8E8]">Lê Thành Long</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg max-w-xl"
            >
              Tôi là một Frontend Developer đam mê xây dựng ứng dụng Mobile và Web hiện đại. Tôi
              làm việc chủ yếu với React Native, React.js, Javascript và luôn ưu
              tiên trải nghiệm người dùng cùng chất lượng sản phẩm. Tôi thích
              khám phá công nghệ mới và tạo ra những giao diện trực quan, mượt
              mà, mang lại sự hài lòng cho người dùng. Ngoài ra tôi cũng có một
              chút kiến thức về backend sử dụng Node.js và MongoDB
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="flex gap-4"
            >
              <Link
                href="/projects"
                className="px-5 py-3 rounded-md bg-[#00A8E8] text-black font-medium shadow hover:scale-105 transition-transform"
              >
                Dự án
              </Link>
              <Link
                href="/contact"
                className="px-5 py-3 rounded-md border border-gray-400 hover:scale-105 transition-transform"
              >
                Liên hệ
              </Link>
            </motion.div>

            <div className="flex gap-4 mt-6 items-center text-slate-400">
              <span>Sẵn sàng làm việc full time</span>
              <span className="hidden sm:inline">•</span>
              <a onClick={copyEmail} href="#" className="hover:underline">
                {copied ? (
                  <span className="flex items-center gap-1.5">
                    Copied{" "}
                    <BiSolidBadgeCheck className="text-green-500 text-lg" />
                  </span>
                ) : (
                  "mwglongden7112005@gmail.com"
                )}
              </a>
            </div>
          </div>

          <div className="h-80 md:h-96">
            <Canvas>
              <ambientLight intensity={1.3} />
              <directionalLight position={[2, 2, 2]} />
              <AvatarCard3D />
              <Suspense fallback={null}>
                <Environment preset="city" />
              </Suspense>
            </Canvas>
          </div>
        </section>

        {/* quick features row */}
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <FeatureCard
            title="Nhanh chóng & SEO thân thiện"
            desc="Được xây dựng với Next.js để có hiệu suất và SEO tốt nhất."
          />
          <FeatureCard
            title="Animations"
            desc="Sử dụng Framer Motion cho chuyển động UI mượt mà."
          />
          <FeatureCard
            title="Điểm nhấn 3D"
            desc="Sử dụng React Three Fiber cho các chi tiết 3D."
          />
        </section>
      </main>

      <footer className="mt-20 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Thành Long — Được xây bằng Next.js •
        Tailwind
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ translateY: -6 }}
      className="p-6 rounded-xl bg-white/3 backdrop-blur-md border border-gray-400/10"
    >
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-slate-400">{desc}</p>
    </motion.div>
  );
}
export function AvatarCard3D() {
  const texture = useTexture("/avata.png");
  const [isMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768 || "ontouchstart" in window;
  });
  if (!isMobile) {
    return (
      <mesh rotation={[0.05, -0.2, 0]}>
        <planeGeometry args={[4, 5]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    );
  } else {
    return (
      <mesh rotation={[0, 0, 0]}>
        <planeGeometry args={[4, 5]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    );
  }
}

// function RotatingSphere() {
//   return (
//     <mesh rotation={[0.2, 0.6, 0]}>
//       <Sphere args={[1.2, 64, 64]} scale={1}>
//         <MeshDistortMaterial
//           color="#0ea5e9"
//           roughness={0.15}
//           metalness={0.6}
//           distort={0.35}
//           speed={1.5}
//         />
//       </Sphere>
//     </mesh>
//   );
// }
