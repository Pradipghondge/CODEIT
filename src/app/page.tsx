import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      {/* The Hero component is not needed as FeatureScene serves as the hero */}
      <Hero />
      <Testimonials />
    </main>
  );
}
