"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeaderPage from "@/components/Header";
import emailjs from "@emailjs/browser";
import { title } from "process";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    try {
      setLoading(true);

      const res = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (data.success) {
        setSent(true);
        setStatus("Tin nhắn đã được gửi thành công!");

        // Reset form
        setForm({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false);
        setTimeout(() => setSent(false), 3000);
      } else {
        setStatus(data.msg || "Đã xảy ra lỗi, vui lòng thử lại.");
      }
    } catch (error) {
      setStatus("Lỗi kết nối server.");
    }
  }
  //   const [theme, setTheme] = useState("dark");
  //   const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return (
    <div className={`dark:bg-[#0A1A2F]`}>
      <HeaderPage pageOpen="contact" />
      <div
        className={`min-h-screen flex flex-col items-center justify-center px-6 dark:bg-[#0A1A2F]`}
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Liên hệ với tôi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center max-w-lg mb-10 opacity-80"
        >
          Nếu bạn có câu hỏi — hãy gửi tin nhắn cho tôi!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-gray-300/10 backdrop-blur-md p-6 rounded-xl border border-black/10 flex flex-col gap-4"
        >
          <div>
            <label className="text-sm opacity-80">Tên của bạn</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className={`w-full mt-1 p-3 rounded-md bg-black/5 border outline-none focus:border-[#00A8E8] transition`}
            />
          </div>

          <div>
            <label className="text-sm opacity-80">Email của bạn</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className={`w-full mt-1 p-3 rounded-md bg-black/5 border outline-none focus:border-[#00A8E8] transition`}
            />
          </div>

          <div>
            <label className="text-sm opacity-80">Tin nhắn</label>
            <textarea
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className={`w-full mt-1 p-3 rounded-md bg-black/5 border outline-none focus:border-[#00A8E8] transition`}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full py-3 bg-linear-to-r from-[#007CF0] to-[#00A8E8] rounded-md text-white font-medium hover:opacity-90 transition active:scale-95"
          >
            {loading ? "Đang gửi..." : "Gửi tin nhắn"}
          </button>

          {sent && (
            <p className="text-green-400 text-center mt-2">
              ✅ Tin nhắn đã được gửi!
            </p>
          )}
        </motion.form>

        <div className="mt-12 opacity-80 text-sm">
          Hoặc email trực tiếp:
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mwglongden7112005@gmail.com"
            target="_blank"
            className="text-[#00A8E8] ml-1 underline"
          >
            mwglongden7112005@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
