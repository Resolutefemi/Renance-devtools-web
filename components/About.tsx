export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Built by <br />
            <span className="text-primary-crimson">Resolutefemi.</span>
          </h2>
          <p className="text-xl text-text-gray leading-relaxed mb-8">
            Renance DevTools was born from a simple need: making high-level system operations as simple as a single word.
          </p>
          <p className="text-lg text-text-gray leading-relaxed opacity-70">
            What started as a set of personal automation scripts has evolved into a unified ecosystem of over 200 commands, used by developers to deploy, diagnose, and automate their daily workflows.
          </p>
        </div>
        
        <div className="p-12 glass rounded-[3rem] border-white/5">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-text-gray font-medium">VERSION</span>
              <span className="font-bold">3.0.0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-gray font-medium">COMMANDS</span>
              <span className="font-bold text-accent-green">215+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-gray font-medium">PLATFORMS</span>
              <span className="font-bold">WIN | MAC | LINUX | ANDROID</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-gray font-medium">LICENSE</span>
              <span className="font-bold">MIT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
