"use client";

import { useEffect, useState } from "react";
import { Github, MessageCircle, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Commands", href: "/commands" },
    { name: "Deploy", href: "#features" },
    { name: "Media", href: "#features" },
    { name: "Hacker", href: "#features" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? "glass py-3" : "py-6"} bg-black/10 backdrop-blur-md border-b border-white/5`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-primary-crimson">Renance</span>
          <span className="text-text-white">DevTools</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-text-gray hover:text-text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/Resolutefemi/devtools-cli.git" 
            target="_blank" 
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <Github size={20} />
          </Link>
          <Link 
            href="https://wa.me/2347046203544" 
            target="_blank" 
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-accent-green text-black rounded-full text-xs font-bold hover:scale-105 transition-transform"
          >
            <MessageCircle size={16} />
            WHATSAPP
          </Link>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-glass-border animate-in">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="https://wa.me/2347046203544" 
              className="flex items-center justify-center gap-2 py-3 bg-accent-green text-black rounded-xl font-bold"
            >
              <MessageCircle size={18} />
              WHATSAPP
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
