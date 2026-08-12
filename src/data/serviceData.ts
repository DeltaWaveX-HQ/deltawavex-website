import {
  Smartphone,
  Globe,
  Cloud,
  Brain,
  Store,
  Building2,
  Server,
  Rocket,
  LucideIcon,
} from "lucide-react";

export interface MetricItem {
  label: string;
  value: string;
  detail: string;
}

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
}

export interface ArchLayer {
  step: string;
  label: string;
  tech: string;
  detail: string;
}

export interface TechItem {
  name: string;
  purpose: string;
  category: string;
}

export interface ProjectRef {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  techs: string[];
  gradient: string;
}

export interface ServiceConfig {
  slug: string;
  category: string;
  icon: LucideIcon;
  title: string;
  gradientWord: string;
  subtitle: string;
  description: string;
  accentColor: string; // e.g. "blue", "cyan", "purple", "pink", "amber", "emerald", "sky", "violet"
  accentGlow: string;
  accentBorder: string;
  techPills: string[];
  visualType: "mobile" | "web" | "saas" | "ai" | "marketplace" | "business" | "cloud" | "mvp";
  hudIndicators: { label: string; value: string }[];
  metrics: MetricItem[];
  capabilities: CapabilityItem[];
  architectureTitle: string;
  architectureLayers: ArchLayer[];
  techStack: TechItem[];
  projects: ProjectRef[];
}

export const REAL_PROJECTS = {
  zomico: {
    name: "Zomico",
    tagline: "Home Services Marketplace",
    description: "Premium home services marketplace connecting customers with verified professionals for on-demand home maintenance and repairs.",
    features: ["Customer App", "Technician App", "Admin Dashboard"],
    techs: ["React Native", "Flutter", "Node.js", "Firebase"],
    gradient: "from-blue-600 to-cyan-500",
  },
  shootkaro: {
    name: "ShootKaro",
    tagline: "Photographer Booking Platform",
    description: "On-demand photographer discovery and booking platform with real-time availability, portfolio showcases, and instant scheduling.",
    features: ["Photographer Discovery", "Smart Booking System", "Real-Time Scheduling"],
    techs: ["React Native", "Next.js", "Firebase", "PostgreSQL"],
    gradient: "from-purple-600 to-pink-500",
  },
  inventoryPro: {
    name: "Inventory Pro",
    tagline: "Dual-Tier Retail & Wholesale Billing System",
    description: "Full-stack POS & billing engine supporting Retail, Wholesale & Hybrid invoicing with dynamic margin calculations, POS barcode scanning, and Supabase PostgreSQL inventory sync.",
    features: ["Retail / Wholesale / Hybrid Modes", "POS Barcode Checkout", "Sales & Expense Analytics"],
    techs: ["Next.js", "Django REST", "Supabase", "PostgreSQL"],
    gradient: "from-emerald-600 to-cyan-500",
  },
  cortex: {
    name: "Cortex",
    tagline: "On-Device AI Assistant",
    description: "Privacy-first local AI assistant running full LLM models directly on-device with zero server latency or data transit.",
    features: ["100% On-Device AI", "Zero Server Transit", "Offline LLM Engine"],
    techs: ["CoreML", "On-Device LLM", "Swift", "C++"],
    gradient: "from-purple-600 to-indigo-500",
  },
};

export const serviceDataMap: Record<string, ServiceConfig> = {
  "mobile-app": {
    slug: "mobile-app",
    category: "MOBILE ENGINEERING",
    icon: Smartphone,
    title: "Next-Gen Mobile Apps",
    gradientWord: "Built for Scale",
    subtitle: "High-performance native & cross-platform mobile apps.",
    description:
      "We engineer high-performance mobile applications on React Native and Flutter with fluid 60FPS UI, offline-first data sync, and enterprise reliability.",
    accentColor: "#3B82F6",
    accentGlow: "rgba(59, 130, 246, 0.25)",
    accentBorder: "rgba(59, 130, 246, 0.35)",
    techPills: ["React Native", "Flutter", "iOS & Android", "Firebase"],
    visualType: "mobile",
    hudIndicators: [
      { label: "FRAME RATE", value: "60 FPS" },
      { label: "ARCHITECTURE", value: "Offline-First" },
      { label: "BACKEND", value: "Firebase / REST" },
      { label: "TARGET", value: "iOS + Android" },
    ],
    metrics: [
      { label: "CROSS-PLATFORM", value: "iOS & Android", detail: "Single unified codebase" },
      { label: "PERFORMANCE", value: "60 FPS", detail: "Native GPU rendering" },
      { label: "RELIABILITY", value: "Offline Sync", detail: "Local SQLite caching" },
      { label: "DEPLOYMENT", value: "Store Ready", detail: "App Store & Play Store" },
    ],
    capabilities: [
      { number: "01", title: "Cross-Platform Mobile Apps", description: "Shared business logic and pixel-perfect design systems for iOS and Android." },
      { number: "02", title: "Native Feature Integration", description: "Deep integration with device hardware including GPS, Camera, Bluetooth, and Biometrics." },
      { number: "03", title: "Offline Data Synchronization", description: "Robust SQLite/WatermelonDB local caching with automated background sync." },
      { number: "04", title: "Real-Time Push Notifications", description: "Targeted push messaging via Firebase Cloud Messaging (FCM) and APNs." },
      { number: "05", title: "In-App Payments & Subscriptions", description: "Secure integration with StoreKit, Google Play Billing, Stripe, and RevenueCat." },
      { number: "06", title: "Store Submission & CI/CD", description: "Automated Fastlane build pipelines and hands-off App Store approval management." },
    ],
    architectureTitle: "Mobile Client to Cloud Architecture",
    architectureLayers: [
      { step: "LAYER 1", label: "Mobile Client", tech: "React Native / Flutter", detail: "UI Components, Local State & Device APIs" },
      { step: "LAYER 2", label: "State & Cache Layer", tech: "Redux / SQLite", detail: "Offline Storage & Event Queuing" },
      { step: "LAYER 3", label: "API Transport Layer", tech: "GraphQL / REST APIs", detail: "JWT Auth & Edge Rate Limiting" },
      { step: "LAYER 4", label: "Backend Microservices", tech: "Node.js / Express", detail: "Business Logic & Push Notification Dispatch" },
      { step: "LAYER 5", label: "Database & Cloud", tech: "PostgreSQL / Firebase", detail: "Persistent Data & Real-Time Listeners" },
    ],
    techStack: [
      { name: "React Native", purpose: "Cross-Platform Framework", category: "Mobile" },
      { name: "Flutter", purpose: "High-Performance UI Engine", category: "Mobile" },
      { name: "Node.js", purpose: "Scalable API Runtime", category: "Backend" },
      { name: "Firebase", purpose: "Realtime DB & Auth", category: "Cloud" },
      { name: "PostgreSQL", purpose: "Relational Database", category: "Database" },
    ],
    projects: [REAL_PROJECTS.zomico, REAL_PROJECTS.shootkaro],
  },

  "web-development": {
    slug: "web-development",
    category: "WEB ENGINEERING",
    icon: Globe,
    title: "High-Performance Web Apps",
    gradientWord: "Engineered for Conversion",
    subtitle: "Modern full-stack web applications with Next.js & React.",
    description:
      "We design and build ultra-fast, SEO-optimized web applications leveraging Server Components, Edge rendering, and robust microservices.",
    accentColor: "#06B6D4",
    accentGlow: "rgba(6, 182, 212, 0.25)",
    accentBorder: "rgba(6, 182, 212, 0.35)",
    techPills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    visualType: "web",
    hudIndicators: [
      { label: "CORE WEB VITALS", value: "99/100" },
      { label: "RENDERING", value: "SSR & Edge" },
      { label: "SEO SCORE", value: "Optimized" },
      { label: "TYPE SAFETY", value: "100% TS" },
    ],
    metrics: [
      { label: "SPEED", value: "Sub-Second", detail: "Edge caching & SSR" },
      { label: "SEO", value: "Lighthouse 95+", detail: "Optimized metadata & schema" },
      { label: "TYPE SAFETY", value: "Strict TS", detail: "End-to-end typed APIs" },
      { label: "HOSTING", value: "Vercel Edge", detail: "Global CDN distribution" },
    ],
    capabilities: [
      { number: "01", title: "Full-Stack Next.js Apps", description: "Server-side rendering, static generation, and streaming UI components for ultra-fast load times." },
      { number: "02", title: "Responsive Interface Engineering", description: "Pixel-perfect, mobile-first design systems built with Tailwind CSS and CSS Grid." },
      { number: "03", title: "API & Microservice Integration", description: "Type-safe tRPC and REST endpoints with automated validation and rate limiting." },
      { number: "04", title: "Core Web Vitals Optimization", description: "Lighthouse-driven performance tuning, asset compression, and lazy hydration." },
      { number: "05", title: "Authentication & RBAC", description: "Secure multi-tenant authentication using NextAuth, Auth0, or Supabase Auth." },
      { number: "06", title: "Headless CMS Integration", description: "Structured content management with Sanity, Strapi, or Custom GraphQL APIs." },
    ],
    architectureTitle: "Full-Stack Web Application Topology",
    architectureLayers: [
      { step: "LAYER 1", label: "Edge Gateway", tech: "Vercel Edge Network", detail: "Global CDN, Edge Middleware & SSL" },
      { step: "LAYER 2", label: "Frontend App", tech: "Next.js (App Router)", detail: "React Server Components & Client Hydration" },
      { step: "LAYER 3", label: "API Layer", tech: "Route Handlers / tRPC", detail: "Type-Safe Endpoints & Request Validation" },
      { step: "LAYER 4", label: "Database ORM", tech: "Prisma / Drizzle", detail: "Structured Data Access & Connection Pooling" },
      { step: "LAYER 5", label: "Data Store", tech: "PostgreSQL / Redis", detail: "Relational Storage & Edge Caching" },
    ],
    techStack: [
      { name: "Next.js", purpose: "React Framework & SSR", category: "Frontend" },
      { name: "React", purpose: "UI Component Library", category: "Frontend" },
      { name: "TypeScript", purpose: "Static Type Safety", category: "Language" },
      { name: "Prisma", purpose: "Type-Safe Database ORM", category: "Database" },
      { name: "PostgreSQL", purpose: "Production Database", category: "Database" },
    ],
    projects: [REAL_PROJECTS.shootkaro, REAL_PROJECTS.inventoryPro],
  },

  "saas-development": {
    slug: "saas-development",
    category: "CLOUD PLATFORMS",
    icon: Cloud,
    title: "Multi-Tenant SaaS Systems",
    gradientWord: "Architected for Scale",
    subtitle: "Enterprise-grade SaaS architectures built for recurring revenue.",
    description:
      "We engineer multi-tenant software platforms featuring tiered subscription engines, role-based access control, automated billing, and isolated data security.",
    accentColor: "#8B5CF6",
    accentGlow: "rgba(139, 92, 246, 0.25)",
    accentBorder: "rgba(139, 92, 246, 0.35)",
    techPills: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    visualType: "saas",
    hudIndicators: [
      { label: "TENANCY", value: "Multi-Tenant" },
      { label: "SECURITY", value: "RBAC & JWT" },
      { label: "BILLING", value: "Automated" },
      { label: "UPTIME", value: "High Avail" },
    ],
    metrics: [
      { label: "ARCHITECTURE", value: "Multi-Tenant", detail: "Isolated tenant contexts" },
      { label: "SECURITY", value: "AES-256", detail: "Encrypted data & RBAC" },
      { label: "BILLING", value: "Stripe Sync", detail: "Webhooks & usage metering" },
      { label: "ANALYTICS", value: "Real-Time", detail: "System-wide metrics" },
    ],
    capabilities: [
      { number: "01", title: "Multi-Tenant Database Architecture", description: "Row-level security and schema isolation ensuring zero cross-tenant data leakage." },
      { number: "02", title: "Subscription & Metered Billing", description: "Stripe integration for recurring subscriptions, seat management, and usage metrics." },
      { number: "03", title: "Role-Based Access Control (RBAC)", description: "Granular permissions for Admins, Managers, and Users across organizational units." },
      { number: "04", title: "Self-Serve Admin Portals", description: "Intuitive tenant onboarding dashboards, team management, and billing portals." },
      { number: "05", title: "Webhooks & Third-Party APIs", description: "Extensible webhook engine and developer APIs for external integrations." },
      { number: "06", title: "Audit Logging & Security", description: "Comprehensive activity logging, session revocation, and SOC2 compliance readiness." },
    ],
    architectureTitle: "Multi-Tenant SaaS Infrastructure Model",
    architectureLayers: [
      { step: "LAYER 1", label: "Client Applications", tech: "Next.js Dashboard", detail: "Tenant Branded UI & Subdomain Routing" },
      { step: "LAYER 2", label: "Auth & Identity", tech: "JWT / NextAuth", detail: "Multi-Tenant Session & Role Verification" },
      { step: "LAYER 3", label: "Core SaaS Services", tech: "Node.js / Express", detail: "Subscription Logic & Webhook Handlers" },
      { step: "LAYER 4", label: "Tenant Isolation Layer", tech: "Prisma Middleware", detail: "Automated Row-Level Security Filtering" },
      { step: "LAYER 5", label: "Managed Database", tech: "PostgreSQL Database", detail: "Encrypted Backups & Tenant Data Partitioning" },
    ],
    techStack: [
      { name: "Next.js", purpose: "SaaS Web Platform", category: "Frontend" },
      { name: "Node.js", purpose: "Backend Services", category: "Backend" },
      { name: "PostgreSQL", purpose: "Multi-Tenant Database", category: "Database" },
      { name: "Prisma", purpose: "Database Access Layer", category: "ORM" },
    ],
    projects: [REAL_PROJECTS.inventoryPro],
  },

  "ai-machine-learning": {
    slug: "ai-machine-learning",
    category: "ARTIFICIAL INTELLIGENCE",
    icon: Brain,
    title: "Intelligent AI Systems",
    gradientWord: "Applied ML Engineering",
    subtitle: "Custom LLM workflows, ML models, and automated inference.",
    description:
      "We integrate production AI capabilities—from OpenAI and Gemini APIs to custom Python ML pipelines—creating intelligent, automated software workflows.",
    accentColor: "#EC4899",
    accentGlow: "rgba(236, 72, 153, 0.25)",
    accentBorder: "rgba(236, 72, 153, 0.35)",
    techPills: ["Python", "TensorFlow", "OpenAI APIs", "Gemini APIs"],
    visualType: "ai",
    hudIndicators: [
      { label: "INFERENCE", value: "Low Latency" },
      { label: "PIPELINE", value: "Automated" },
      { label: "MODELS", value: "LLM + ML" },
      { label: "ACCURACY", value: "Optimized" },
    ],
    metrics: [
      { label: "INTEGRATION", value: "LLM & ML", detail: "Custom & API-based AI" },
      { label: "PIPELINES", value: "Automated", detail: "ETL & Vector embeddings" },
      { label: "LANGUAGES", value: "Python / JS", detail: "Full stack AI integration" },
      { label: "SECURITY", value: "Private Data", detail: "No model retraining leaks" },
    ],
    capabilities: [
      { number: "01", title: "Generative AI & LLM Integration", description: "Integrating GPT-4, Gemini, and Claude models into production application workflows." },
      { number: "02", title: "Custom Machine Learning Pipelines", description: "Predictive analytics and classification models developed with Python & scikit-learn." },
      { number: "03", title: "Vector Search & Embeddings", description: "Semantic search and retrieval-augmented generation (RAG) using Pinecone or pgvector." },
      { number: "04", title: "Automated Document Processing", description: "Intelligent OCR, entity extraction, and automated document analysis." },
      { number: "05", title: "AI-Powered Chat & Agents", description: "Context-aware conversational agents with custom tool invocation capabilities." },
      { number: "06", title: "Model Monitoring & Guardrails", description: "Input sanitization, output validation, latency tracking, and cost optimization." },
    ],
    architectureTitle: "AI Pipeline & Inference Architecture",
    architectureLayers: [
      { step: "LAYER 1", label: "User Interface", tech: "React / Web & Mobile", detail: "Streaming Response UI & Chat Component" },
      { step: "LAYER 2", label: "AI Gateway", tech: "Node.js Middleware", detail: "Token Guardrails & Prompt Sanitization" },
      { step: "LAYER 3", label: "Vector Search Engine", tech: "Vector Index / Embeddings", detail: "Semantic Context Retrieval & RAG" },
      { step: "LAYER 4", label: "Inference Engine", tech: "OpenAI / Gemini / Python ML", detail: "Model Execution & Function Calling" },
      { step: "LAYER 5", label: "Data Pipeline", tech: "PostgreSQL & Vector Store", detail: "Persistent Conversation History" },
    ],
    techStack: [
      { name: "Python", purpose: "AI & Machine Learning Runtime", category: "Language" },
      { name: "TensorFlow", purpose: "Deep Learning Framework", category: "ML Framework" },
      { name: "scikit-learn", purpose: "Predictive Analytics", category: "ML Library" },
      { name: "OpenAI APIs", purpose: "Generative AI Inference", category: "AI Models" },
      { name: "Gemini APIs", purpose: "Multimodal AI Inference", category: "AI Models" },
    ],
    projects: [],
  },

  "marketplace-platforms": {
    slug: "marketplace-platforms",
    category: "TWO-SIDED PLATFORMS",
    icon: Store,
    title: "Marketplace Infrastructure",
    gradientWord: "Engineered for Liquidity",
    subtitle: "Two-sided platforms connecting buyers, sellers, and service pros.",
    description:
      "We design and build complete two-sided marketplace platforms featuring split payments, real-time messaging, review systems, and administrative control.",
    accentColor: "#F59E0B",
    accentGlow: "rgba(245, 158, 11, 0.25)",
    accentBorder: "rgba(245, 158, 11, 0.35)",
    techPills: ["React Native", "Next.js", "Node.js", "Firebase"],
    visualType: "marketplace",
    hudIndicators: [
      { label: "PLATFORMS", value: "Buyer + Provider" },
      { label: "PAYMENTS", value: "Automated Split" },
      { label: "MATCHING", value: "Real-Time" },
      { label: "CONTROL", value: "Admin Suite" },
    ],
    metrics: [
      { label: "SIDES", value: "Two-Sided", detail: "Consumer & Provider apps" },
      { label: "PAYMENTS", value: "Escrow Split", detail: "Automated payout distribution" },
      { label: "MESSAGING", value: "Real-Time", detail: "In-app chat & status updates" },
      { label: "GOVERNANCE", value: "Admin Panel", detail: "Dispute & verification management" },
    ],
    capabilities: [
      { number: "01", title: "Dual App Ecosystems", description: "Dedicated application interfaces tailored for both demand (customers) and supply (providers)." },
      { number: "02", title: "Automated Split Payments", description: "Seamless escrow and payout distribution via Stripe Connect with commission management." },
      { number: "03", title: "Smart Scheduling & Booking", description: "Real-time calendar availability, instant booking confirmation, and location tracking." },
      { number: "04", title: "In-App Chat & Notifications", description: "Direct customer-provider messaging with image attachments and automated SMS alerts." },
      { number: "05", title: "Ratings & Review Engine", description: "Verified review systems with fraud prevention and provider performance scores." },
      { number: "06", title: "Centralized Admin Dashboard", description: "Comprehensive oversight of orders, disputes, provider verifications, and platform analytics." },
    ],
    architectureTitle: "Marketplace Ecosystem Architecture",
    architectureLayers: [
      { step: "LAYER 1", label: "Customer & Provider Apps", tech: "React Native / Next.js", detail: "Dedicated Mobile & Web Apps" },
      { step: "LAYER 2", label: "Realtime Gateway", tech: "Firebase / WebSockets", detail: "Instant Messaging & Order State Sync" },
      { step: "LAYER 3", label: "Marketplace Core", tech: "Node.js Microservices", detail: "Booking Matching & Commission Logic" },
      { step: "LAYER 4", label: "Payment Engine", tech: "Stripe Connect API", detail: "Escrow, Split Payouts & Refunds" },
      { step: "LAYER 5", label: "Data Persistence", tech: "PostgreSQL Database", detail: "Order History, Profiles & Audit Trails" },
    ],
    techStack: [
      { name: "React Native", purpose: "Mobile App Engine", category: "Frontend" },
      { name: "Next.js", purpose: "Web & Admin Portal", category: "Frontend" },
      { name: "Node.js", purpose: "Backend Service Logic", category: "Backend" },
      { name: "Firebase", purpose: "Real-Time Database", category: "Cloud" },
    ],
    projects: [REAL_PROJECTS.zomico, REAL_PROJECTS.shootkaro],
  },

  "business-software": {
    slug: "business-software",
    category: "ENTERPRISE TOOLS",
    icon: Building2,
    title: "Custom Business Software",
    gradientWord: "Built for Operations",
    subtitle: "Internal ERP, CRM, and workflow tools designed for speed.",
    description:
      "We replace bloated legacy software with tailored internal tools, automated billing, live inventory tracking, and custom business dashboards.",
    accentColor: "#10B981",
    accentGlow: "rgba(16, 185, 129, 0.25)",
    accentBorder: "rgba(16, 185, 129, 0.35)",
    techPills: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    visualType: "business",
    hudIndicators: [
      { label: "WORKFLOW", value: "Automated" },
      { label: "SYNC", value: "Excel & API" },
      { label: "DATA", value: "Real-Time" },
      { label: "INTERFACE", value: "Optimized" },
    ],
    metrics: [
      { label: "AUTOMATION", value: "End-to-End", detail: "Eliminate manual data entry" },
      { label: "INTEGRATION", value: "Excel & DB", detail: "Seamless import & export" },
      { label: "SPEED", value: "Instant Query", detail: "Optimized database indexes" },
      { label: "CONTROL", value: "Role Access", detail: "Granular department views" },
    ],
    capabilities: [
      { number: "01", title: "Custom ERP & CRM Solutions", description: "Tailored operational dashboards that mirror your exact business processes without bloat." },
      { number: "02", title: "Live Stock & Inventory Engines", description: "Real-time stock level monitoring, low-inventory alerts, and warehouse management." },
      { number: "03", title: "Automated Billing & Invoicing", description: "Generating PDF invoices, tracking payment statuses, and automating recurring billing." },
      { number: "04", title: "Excel & Legacy Data Sync", description: "Importing and exporting bulk business data via Excel, CSV, and legacy database adapters." },
      { number: "05", title: "Operational Analytics", description: "Custom business intelligence reports, sales trends, and executive dashboards." },
      { number: "06", title: "Departmental Role Security", description: "Restricting sensitive financial data to authorized personnel with audit history." },
    ],
    architectureTitle: "Internal Operations System Architecture",
    architectureLayers: [
      { step: "LAYER 1", label: "Operations Interface", tech: "Next.js Dashboard", detail: "High-Density Data Grids & Form Controls" },
      { step: "LAYER 2", label: "Business API", tech: "Node.js / Express", detail: "Validation Rules & Reporting Services" },
      { step: "LAYER 3", label: "Data Processing Engine", tech: "Prisma ORM", detail: "Bulk Operations & Transactional Integrity" },
      { step: "LAYER 4", label: "Integration Adapter", tech: "Excel & CSV Sync", detail: "Automated File Parsing & Export Generators" },
      { step: "LAYER 5", label: "Enterprise Store", tech: "PostgreSQL Database", detail: "ACID-Compliant Relational Data" },
    ],
    techStack: [
      { name: "Next.js", purpose: "Dashboard Web UI", category: "Frontend" },
      { name: "Node.js", purpose: "Backend API Framework", category: "Backend" },
      { name: "PostgreSQL", purpose: "Relational Database", category: "Database" },
      { name: "Prisma", purpose: "ORM & Query Engine", category: "Database" },
    ],
    projects: [REAL_PROJECTS.inventoryPro],
  },

  "cloud-solutions": {
    slug: "cloud-solutions",
    category: "DEVOPS & INFRASTRUCTURE",
    icon: Server,
    title: "Scalable Cloud Systems",
    gradientWord: "Engineered for Uptime",
    subtitle: "Cloud architecture, containerization, and automated CI/CD.",
    description:
      "We design, deploy, and maintain cloud infrastructure on AWS and Firebase, featuring containerized deployments, automated CI/CD pipelines, and high availability.",
    accentColor: "#0EA5E9",
    accentGlow: "rgba(14, 165, 233, 0.25)",
    accentBorder: "rgba(14, 165, 233, 0.35)",
    techPills: ["AWS", "Firebase", "Docker", "CI/CD"],
    visualType: "cloud",
    hudIndicators: [
      { label: "PLATFORM", value: "AWS / Firebase" },
      { label: "CONTAINERS", value: "Docker" },
      { label: "PIPELINE", value: "Automated" },
      { label: "MONITORING", value: "Active" },
    ],
    metrics: [
      { label: "CLOUDS", value: "AWS & Firebase", detail: "Proven cloud providers" },
      { label: "DEPLOYMENT", value: "Automated", detail: "Zero-downtime CI/CD" },
      { label: "CONTAINERS", value: "Dockerized", detail: "Consistent dev/prod runtime" },
      { label: "SECURITY", value: "IAM & SSL", detail: "Hardened infrastructure" },
    ],
    capabilities: [
      { number: "01", title: "AWS Cloud Infrastructure", description: "Architecting EC2, S3, RDS, and CloudFront resources tailored for production scale." },
      { number: "02", title: "Firebase Managed Services", description: "Deploying serverless functions, Firestore databases, and static hosting with zero devops overhead." },
      { number: "03", title: "Docker Containerization", description: "Packaging application services into lightweight, reproducible Docker containers." },
      { number: "04", title: "Automated CI/CD Pipelines", description: "Automated testing, linting, build, and deployment pipelines using GitHub Actions." },
      { number: "05", title: "Edge Deployment & CDN", description: "Configuring global content delivery networks and edge routing for low latency." },
      { number: "06", title: "Monitoring & Log Management", description: "Real-time error tracking, health alerts, and centralized log aggregation." },
    ],
    architectureTitle: "Cloud & DevOps Infrastructure Topology",
    architectureLayers: [
      { step: "LAYER 1", label: "Edge & CDN Layer", tech: "CloudFront / Vercel Edge", detail: "Global SSL Termination & Caching" },
      { step: "LAYER 2", label: "Container Orchestration", tech: "Docker / AWS ECS", detail: "Isolated App Runtime Instances" },
      { step: "LAYER 3", label: "CI/CD Pipeline", tech: "GitHub Actions", detail: "Automated Test, Build & Blue/Green Deploy" },
      { step: "LAYER 4", label: "Cloud Services", tech: "AWS S3 / Firebase", detail: "Object Storage & Serverless Triggers" },
      { step: "LAYER 5", label: "Managed Relational DB", tech: "AWS RDS PostgreSQL", detail: "Auto-Scaling & Multi-AZ Replicas" },
    ],
    techStack: [
      { name: "AWS", purpose: "Cloud Compute & Infrastructure", category: "Cloud" },
      { name: "Firebase", purpose: "Serverless Cloud Services", category: "Cloud" },
      { name: "Docker", purpose: "Containerization Runtime", category: "DevOps" },
      { name: "Vercel", purpose: "Edge Application Platform", category: "Deployment" },
    ],
    projects: [],
  },

  "startup-mvp": {
    slug: "startup-mvp",
    category: "RAPID PRODUCT LAUNCH",
    icon: Rocket,
    title: "Rapid MVP Engineering",
    gradientWord: "From Idea to Launch",
    subtitle: "Validation-ready MVPs built for speed and future scale.",
    description:
      "We help founders ship production-ready MVPs in weeks, not months. Clean code, essential features, and flexible architecture designed to iterate fast.",
    accentColor: "#7C3AED",
    accentGlow: "rgba(124, 58, 237, 0.25)",
    accentBorder: "rgba(124, 58, 237, 0.35)",
    techPills: ["React Native", "Next.js", "Node.js", "Firebase"],
    visualType: "mvp",
    hudIndicators: [
      { label: "TIMELINE", value: "4-6 Weeks" },
      { label: "CODEBASE", value: "Production-Ready" },
      { label: "FOCUS", value: "Core Value" },
      { label: "SCALABILITY", value: "Extensible" },
    ],
    metrics: [
      { label: "TIMELINE", value: "Fast Execution", detail: "Focused scope prioritization" },
      { label: "QUALITY", value: "No Shortcuts", detail: "Clean scalable codebase" },
      { label: "PLATFORMS", value: "Web & Mobile", detail: "Cross-platform reach" },
      { label: "HANDOFF", value: "Full Ownership", detail: "100% IP & code transfer" },
    ],
    capabilities: [
      { number: "01", title: "Product Scope & Feature Discovery", description: "Filtering feature sets down to the core value proposition for rapid user testing." },
      { number: "02", title: "Rapid Full-Stack Build", description: "Leveraging Next.js and Firebase to ship working web or mobile software in weeks." },
      { number: "03", title: "Scalable Foundation", description: "Writing modular TypeScript code so your MVP doesn't need to be rewritten later." },
      { number: "04", title: "Authentication & Payments", description: "Out-of-the-box user login and Stripe billing integrations ready on day one." },
      { number: "05", title: "User Analytics Integration", description: "Tracking user events and funnel progression from the first launch." },
      { number: "06", title: "Iterative Post-Launch Sprints", description: "Gathering early user feedback and shipping weekly enhancements seamlessly." },
    ],
    architectureTitle: "Rapid MVP Product Architecture",
    architectureLayers: [
      { step: "LAYER 1", label: "Cross-Platform UI", tech: "React Native / Next.js", detail: "Unified Design System & Fast Prototyping" },
      { step: "LAYER 2", label: "Managed Backend", tech: "Firebase / Supabase", detail: "Zero-Boilerplate Auth & Instant DB" },
      { step: "LAYER 3", label: "Core API Services", tech: "Node.js Serverless", detail: "Key Business Logic & Payment Webhooks" },
      { step: "LAYER 4", label: "Third-Party APIs", tech: "Stripe & Analytics", detail: "Turnkey Billing & Event Telemetry" },
      { step: "LAYER 5", label: "Cloud Deployment", tech: "Vercel & App Stores", detail: "Instant Global Hosting & Store Distribution" },
    ],
    techStack: [
      { name: "Next.js", purpose: "Rapid Web MVP Framework", category: "Frontend" },
      { name: "React Native", purpose: "Cross-Platform Mobile MVP", category: "Mobile" },
      { name: "Firebase", purpose: "Instant Backend & Auth", category: "Backend" },
      { name: "Node.js", purpose: "Scalable API Layer", category: "Backend" },
    ],
    projects: [REAL_PROJECTS.zomico, REAL_PROJECTS.shootkaro],
  },
};
