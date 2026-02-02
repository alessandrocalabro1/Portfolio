import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ManagementSkills from "./components/ManagementSkills";
import WorkHistory from "./components/WorkHistory";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-blue-500/30">
      <Hero />
      <ManagementSkills />
      <WorkHistory />
      <Projects />

      {/* Simple Footer */}
      <footer className="py-12 text-center text-zinc-600 border-t border-zinc-900 mt-20 bg-zinc-950">
        <p className="mb-2">© {new Date().getFullYear()} Alessandro Calabrò. All rights reserved.</p>
        <p className="text-sm">Built with Next.js, Tailwind & Passion.</p>
      </footer>
    </main>
  );
}
