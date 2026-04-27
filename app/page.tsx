import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Newsletter />
      <About />
      
      <footer className="py-20 border-t border-white/5">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-xl font-bold tracking-tighter">
            <span className="text-primary-crimson">Renance</span> DevTools
          </div>
          
          <div className="flex gap-8 text-sm text-text-gray font-medium">
            <a href="https://github.com/Resolutefemi/devtools-cli.git" target="_blank" className="hover:text-text-white">GITHUB</a>
            <a href="https://wa.me/2347046203544" target="_blank" className="hover:text-text-white">WHATSAPP</a>
            <a href="mailto:hello@renance.dev" className="hover:text-text-white">EMAIL</a>
          </div>
          
          <div className="text-xs text-text-gray tracking-widest uppercase">
            © 2026 RENANCE DT. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </main>
  );
}
