import Landing from "@/components/Landing";
import Landing2 from "@/components/Landing2";
import ScrollShowcase from "@/components/Hero";
import Questions from "@/components/Questions";
import Testimonials from "@/components/Testimonials";
import Address from "@/components/address";

export default function Home() {
  return (
    <main>
      <Landing />
      <Landing2 />
      <ScrollShowcase />
      <Testimonials />
      <Questions />
      <Address />
    </main>
  );
}
