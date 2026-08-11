"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service-detail/ServiceHero";
import EngineeringMetrics from "@/components/service-detail/EngineeringMetrics";
import CapabilityGrid from "@/components/service-detail/CapabilityGrid";
import ArchitectureDiagram from "@/components/service-detail/ArchitectureDiagram";
import ServiceTechStack from "@/components/service-detail/ServiceTechStack";
import ServiceProcess from "@/components/service-detail/ServiceProcess";
import FeaturedProjects from "@/components/service-detail/FeaturedProjects";
import ServiceWhyUs from "@/components/service-detail/ServiceWhyUs";
import ServiceCTA from "@/components/service-detail/ServiceCTA";
import { serviceDataMap } from "@/data/serviceData";
import { notFound } from "next/navigation";

interface ServiceDetailPageProps {
  slug: string;
}

export default function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const service = serviceDataMap[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white relative selection:bg-cyan-500/30 font-sans">
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <ServiceHero service={service} />

        {/* 2. Technical Metrics Strip */}
        <EngineeringMetrics metrics={service.metrics} accentColor={service.accentColor} />

        {/* 3. What We Engineer Capabilities */}
        <CapabilityGrid capabilities={service.capabilities} accentColor={service.accentColor} />

        {/* 4. Service Architecture Diagram */}
        <ArchitectureDiagram
          title={service.architectureTitle}
          layers={service.architectureLayers}
          accentColor={service.accentColor}
        />

        {/* 5. Production Technology Stack */}
        <ServiceTechStack techStack={service.techStack} accentColor={service.accentColor} />

        {/* 6. Development Process Timeline */}
        <ServiceProcess accentColor={service.accentColor} />

        {/* 7. Featured Projects (hidden if no matching projects) */}
        <FeaturedProjects projects={service.projects} />

        {/* 8. Why Teams Choose DeltaWaveX */}
        <ServiceWhyUs accentColor={service.accentColor} />

        {/* 9. Final CTA Section */}
        <ServiceCTA accentColor={service.accentColor} />
      </main>

      <Footer />
    </div>
  );
}
