import Hero from "@/components/landing/Hero";
import Prizes from "@/components/landing/Prizes";
import Timeline from "@/components/landing/Timeline";
import About from "@/components/landing/About";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <Prizes />
      <Timeline />
      <About />
      <Footer />
    </main>
  );
}
