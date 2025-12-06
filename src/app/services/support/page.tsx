"use client";

import {
  ArrowLeft,
  CheckCircle,
  ChevronRight,
  Cloud,
  Database,
  Globe,
  Headphones,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import React from "react";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

// --- Reusable Section Component ---
const Section = ({ children }: { children: React.ReactNode }) => (
  <motion.section variants={itemVariants}>{children}</motion.section>
);

export default function ApplicationSupportPage() {
  const PRIMARY_COLOR = "#0F4F3F";
  const SECONDARY_BG = "#F7F8FA";

  const capabilities = [
    {
      icon: <Globe size={32} />,
      title: "Web & Mobile Application Support",
      items: [
        "Tech Stack: Java, Python, PHP, .NET, Ruby",
        "Frontend: HTML5, CSS3, JavaScript, Angular, React",
        "Mobile: Android + iOS (Swift)",
        "Scope: Bug fixing, patching, enhancements",
      ],
    },
    {
      icon: <Database size={32} />,
      title: "Database Administration & Support",
      items: [
        "Capabilities: Query optimization, backup/recovery, integrity checks",
        "Tech: SQL, MySQL, + Data Science methodologies",
      ],
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud & Infrastructure Monitoring",
      items: ["Cloud: AWS, Azure, GCP", "DevOps: CI/CD, Docker, Kubernetes"],
    },
    {
      icon: <Shield size={32} />,
      title: "Security & Compliance Monitoring",
      items: [
        "Threat detection, log analysis, vulnerability assessment",
        "Ethical Hacking + Network Security skills",
      ],
    },
  ];

  const supportModels = [
    { level: "L1", title: "Help Desk Support", description: "Initial point of contact for user issues, basic troubleshooting, and ticket logging." },
    { level: "L2", title: "Technical Support", description: "In-depth technical investigation, incident resolution, and escalation management." },
    { level: "L3", title: "Expert Support", description: "Handling complex issues, code-level analysis, and coordination with development teams." },
  ];

  const whyChooseUs = [
    "Trained & Certified Experts",
    "Wide Technology Coverage",
    "Rapid Deployment",
    "Cost-Effective Quality",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <motion.section
        className="py-20 sm:py-24"
        style={{ backgroundColor: SECONDARY_BG }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
            style={{ color: PRIMARY_COLOR }}
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <h1
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"
            style={{ color: PRIMARY_COLOR }}
          >
            Application Support Services
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
            We ensure your application performance is optimized round-the-clock.
          </p>
        </div>
      </motion.section>

      {/* MAIN CONTENT */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16 sm:py-24 space-y-20 sm:space-y-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Service Overview */}
        <Section>
          <div className="max-w-4xl mx-auto text-center">
            <Headphones className="w-16 h-16 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: PRIMARY_COLOR }}>
              Reliable Support for a Digital-First World
            </h2>
            <p className="prose prose-lg max-w-none text-gray-600">
              In today’s fast-paced digital landscape, downtime is not an option. Our Application Support Services provide proactive monitoring, swift incident resolution, and continuous optimization to keep your business-critical applications running flawlessly. We act as an extension of your team, ensuring your software ecosystem remains secure, stable, and scalable.
            </p>
          </div>
        </Section>

        {/* Support Capabilities */}
        <Section>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            Our Support Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability) => (
              <motion.div
                key={capability.title}
                className="p-8 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0" style={{ color: PRIMARY_COLOR }}>{capability.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{capability.title}</h3>
                </div>
                <ul className="space-y-2 pl-2">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="w-4 h-4 mt-1 mr-2 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Support Models */}
        <Section>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
            Support Models We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {supportModels.map((model) => (
              <motion.div key={model.level} variants={itemVariants} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4" style={{ backgroundColor: SECONDARY_BG, color: PRIMARY_COLOR }}>
                  {model.level} Support
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{model.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: PRIMARY_COLOR }}>
              Why Choose CODEIT for Support?
            </h2>
            <div className="grid grid-cols-2 gap-6 text-lg">
              {whyChooseUs.map((reason) => (
                <motion.div key={reason} variants={itemVariants} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: PRIMARY_COLOR }} />
                  <span className="font-medium text-gray-700">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </motion.div>

      {/* CTA SECTION */}
      <motion.section
        className="py-20"
        style={{ backgroundColor: SECONDARY_BG }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: PRIMARY_COLOR }}>
            Need Reliable Application Support?
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
            Let us handle the complexities of application management so you can focus on your core business.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg 
            hover:shadow-xl transition hover:scale-105"
            style={{ color: PRIMARY_COLOR }}
          >
            Contact Us
            <ChevronRight size={20} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}