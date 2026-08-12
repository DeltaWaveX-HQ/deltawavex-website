import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SceneSection from "@/components/SceneSection";
import ThreeCanvas from "@/components/three/ThreeCanvas";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen relative overflow-hidden">
      {/* Persistent Three.js 3D Visual & Interactive Layer */}
      <ThreeCanvas />

      <Navbar />

      {/* Hero — starts visible, recedes into depth as you scroll */}
      <SceneSection isHero zIndex={1}>
        <Hero />
      </SceneSection>

      {/* Services Built for Scale */}
      <SceneSection zIndex={2}>
        <Services />
      </SceneSection>

      {/* Products & Projects */}
      <SceneSection zIndex={3}>
        <Products />
      </SceneSection>

      {/* Development Process */}
      <div className="relative z-[4]">
        <Process />
      </div>

      {/* Why Choose DeltaWaveX */}
      <SceneSection zIndex={5}>
        <WhyUs />
      </SceneSection>

      {/* Testimonials */}
      <SceneSection zIndex={6}>
        <Testimonials />
      </SceneSection>

      {/* Contact Form CTA */}
      <SceneSection zIndex={7}>
        <CTA />
      </SceneSection>

      <Footer />
    </main>
  );
}
