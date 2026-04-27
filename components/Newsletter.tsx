"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Welcome to the elite.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Connection lost.");
    }
  };

  return (
    <section className="py-40 bg-white/5 border-y border-white/10">
      <div className="container flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Join the <br />
          <span className="text-primary-crimson">Renance Elite.</span>
        </h2>
        <p className="text-text-gray text-lg mb-12 max-w-lg">
          Get notified when we drop new commands and performance patches.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="relative group">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-primary-crimson transition-all"
            />
            <button 
              type="submit"
              disabled={status === "loading"}
              className="absolute right-3 top-2 bottom-3 px-6 bg-text-white text-black rounded-xl font-bold flex items-center gap-2 hover:bg-primary-crimson hover:text-white transition-all disabled:opacity-50"
            >
              {status === "loading" ? "..." : "SUBSCRIBE"}
              <Send size={16} />
            </button>
          </div>
          {message && (
            <p className={`mt-6 text-sm font-bold ${status === "success" ? "text-accent-green" : "text-primary-crimson"}`}>
              {message.toUpperCase()}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
