"use client";

import { DialogDemo } from "@/components/Dialog";
import HeaderPage from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Ứng dụng mua bán quần áo",
    description:
      "Ứng dụng mua bán quần áo với giỏ hàng, lọc sản phẩm, tìm kiếm sản phẩm, thanh toán online,... và trang quản trị để quản lý đơn hàng, sản phẩm, người dùng.",
    tech: ["React Native", "React.js", "Node.js", "MongoDB"],
    img: "/logo_duan1.png",
    apk: "/Fireworks-1.0.0.apk",
  },
  {
    title: "ứng dụng mua bán cây cảnh",
    description:
      "Ứng dụng mua bán cây cảnh với giỏ hàng, tìm kiếm sản phẩm, có tích hợp AI về cây cảnh,... và trang quản trị cho người bán hàng.",
    tech: ["React Native", "React.js", "Node.js", "MongoDB"],
    img: "/logo_duan2.png",
    apk: "/Fireworks-1.0.0.apk",
  },
  {
    title: "Website tư vấn nông nghiệp AgriAI",
    description:
      "Trang web tư vấn nông nghiệp đơn giản có tích hợp AI để hỗ trợ người dùng trong việc chăm sóc cây trồng và giải đáp các thắc mắc liên quan đến nông nghiệp.",
    tech: ["TypeScript", "Vite", "Gemini AI"],
    img: "/logo_duan3.png",
    apk: "/Fireworks-1.0.0.apk",
  },
];

export default function Project() {
  return (
    <div className="min-h-screen dark:bg-[#0A1A2F]">
      <HeaderPage pageOpen="projects" />
      <section className="px-6 md:px-20 py-32">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 text-center md:text-left"
        >
          Dự án của tôi
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="p-6 rounded-xl bg-black/10 dark:bg-white/10 backdrop-blur-md
            border border-white/10 hover:border-blue-500 transition shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-3">{p.title}</h2>
              <div className="w-25 h-25 mb-4">
                {/* <Image
                  src={p.img}
                  alt={p.title}
                  width={100}
                  height={100}
                  className="rounded-xl object-cover"
                /> */}
                <DialogDemo image={p.img} />
              </div>
              <p className="opacity-80 text-sm mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-500 text-xs border border-blue-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
