"use client";

import HeaderPage from "@/components/Header";
import { map } from "framer-motion/client";
import Image from "next/image";

export default function AboutPage() {
  const skill = [
    {
      title: "Ngôn ngữ",
      list: ["JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      list: ["React Native", "ReactJS", "Next.js", "shadcn/ui"],
    },
    {
      title: "Backend",
      list: ["Express.js (cơ bản)"],
    },
    {
      title: "Runtime",
      list: ["Node.js"],
    },
    {
        title: "Database",
        list: ["MongoDB"],
    },
    {
      title: "Công cụ",
      list: ["Git/GitHub", "MongoDB", "Node.js"],
    },
  ];
  return (
    <div className="dark:bg-[#0A1A2F]">
      <HeaderPage pageOpen="about" />
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-3xl">
          {/* Avatar */}
          <div className="flex justify-center w-40 h-40 mb-6 mx-auto">
            <Image
              src="/avata.png"
              alt="avatar"
              width={150}
              height={150}
              className="rounded-full shadow-lg border border-white/20 object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl font-bold mb-3 text-center">Thành Long</h1>

          {/* Short Role */}
          <p className="text-lg opacity-80 mb-6 text-center">
            Front-end Developer
          </p>

          {/* Description */}
          <p className="text-base leading-relaxed opacity-90">
            Xin chào, tôi là một lập trình viên Frontend chuyên về Mobile App &
            Website. <br />
            {/* Mình có kiến thức về: <br />
            • Ngôn ngữ & Libraries: JavaScript, TypeScript, shadcn/ui <br />•
            Framework: React Native, ReactJS, Next.js, Express.js (cơ bản){" "} */}
            {/* • Công cụ & Database: Git/GitHub, MongoDB, Node.js <br /> */}
            Hiện tại, tôi đang theo định hướng phát triển thành Frontend
            Developer chuyên sâu về Mobile App và Website hiện đại, đồng thời
            mong muốn tham gia vào những dự án ứng dụng thực tế, chú trọng trải
            nghiệm người dùng, có quy mô rõ ràng và quy trình phát triển chuyên
            nghiệp. <br />
            <span className="font-bold">Mục tiêu ngắn hạn:</span> Nâng cao kỹ năng TypeScript/JavaScript và tối ưu
            hiệu năng ứng dụng. <br />
            <span className="font-bold">Mục tiêu dài hạn:</span> Trở thành Frontend Engineer chuyên sâu về mobile &
            web, có khả năng dẫn dắt đội nhóm trong các dự án lớn. <br />
            {/* Mình là một <span className="font-semibold">Developer</span> với định
            hướng trở thành{" "}
            <span className="font-semibold">Front-end Engineer</span>. Hiện tại
            mình đang học thêm <span className="font-semibold">Next.js</span> và
            có nền tảng về <span className="font-semibold">React Native</span>.
            Ngôn ngữ chính mà mình sử dụng nhiều nhất là{" "}
            <span className="font-semibold">JavaScript</span>. */}
          </p>

          {/* Skills */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Có kiến thức về</h3>
            <div>
              {skill.map((s, i) => (
                <div key={i}>
                  <div className="flex flex-row items-center mb-5">
                    {s.title}:
                    {s.list.map((l, j) => (
                      <span
                        key={j}
                        className="px-4 py-2 ml-2 text-sm rounded-lg bg-gray-400/10 backdrop-blur-sm border border-white/20"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              {/* <span className="px-4 py-2 text-sm rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                JavaScript
              </span>
              <span className="px-4 py-2 text-sm rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                React Native
              </span>
              <span className="px-4 py-2 text-sm rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                Next.js
              </span>
              <span className="px-4 py-2 text-sm rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                Tailwind CSS
              </span> */}
            </div>
          </div>
          {/* strengths */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Điểm mạnh</h3>
            <div className="flex justify-center gap-3 flex-wrap">
              <span className="px-4 py-2 text-sm rounded-lg bg-gray-400/10 backdrop-blur-sm border border-white/20">
                Thiết kế giao diện trực quan, dễ sử dụng.
              </span>
              <span className="px-4 py-2 text-sm rounded-lg bg-gray-400/10 backdrop-blur-sm border border-white/20">
                Chủ động học hỏi và cập nhật công nghệ mới.
              </span>
              <span className="px-4 py-2 text-sm rounded-lg bg-gray-400/10 backdrop-blur-sm border border-white/20">
                Hòa đồng và dễ hợp tác trong môi trường làm việc nhóm.
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 mb-5">
            <h3 className="text-2xl font-semibold mb-3">Liên hệ</h3>
            <a className="opacity-80 hover:underline" href="https://mail.google.com/mail/?view=cm&fs=1&to=mwglongden7112005@gmail.com" target="_blank">mwglongden7112005@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
