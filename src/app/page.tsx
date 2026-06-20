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

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Technologies />
      <Process />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
