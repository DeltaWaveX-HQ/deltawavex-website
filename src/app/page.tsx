import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Technologies from "@/components/Technologies";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SceneSection from "@/components/SceneSection";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />

      {/* Hero — starts visible, recedes into depth as you scroll */}
      <SceneSection isHero zIndex={1}>
        <Hero />
      </SceneSection>

      {/* Each section enters from below and recedes when you scroll past */}
      <SceneSection zIndex={2}>
        <Services />
      </SceneSection>

      <SceneSection zIndex={3}>
        <Products />
      </SceneSection>

      <SceneSection zIndex={4}>
        <Technologies />
      </SceneSection>

      <div className="relative z-[5]">
        <Process />
      </div>

      <SceneSection zIndex={6}>
        <WhyUs />
      </SceneSection>

      <SceneSection zIndex={7}>
        <Testimonials />
      </SceneSection>

      <SceneSection zIndex={8}>
        <CTA />
      </SceneSection>

      <Footer />
    </main>
  );
}
