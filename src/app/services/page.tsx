"use client";

import React from "react";
import Link from "next/link";

import {
  CheckCircle,
  ShieldCheck,
  Layers,
  Users,
  Code,
  Monitor,
  Smartphone,
  Wrench,
  Network,
  Building2,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const PRIMARY = "#0F4F3F";

export default function ServicesPage() {
  return (
    <div className="bg-white">
     
      

      {/* ================= OUR SERVICES (UNCHANGED) ================= */}
      <section className="bg-[#0E2A47] py-20 px-6 text-white gap pt-20 ">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center max-w-3xl mx-auto mb-14 text-gray-200 text-lg">
          Delivering secure, scalable, and business-focused technology solutions
          designed to support long-term growth and operational efficiency.
        </p>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: Code,
              title: "Software Development",
              slug: "/services/software-development",
              items: [
                "Business & technical consulting",
                "Custom software development",
                "Architecture & system design",
                "API & system integrations",
                "Testing, QA & deployment",
              ],
            },
            {
              icon: Monitor,
              title: "Web Development",
              slug: "/services/web-development",
              items: [
                "Custom web applications",
                "Enterprise platforms",
                "Front-end & back-end engineering",
                "Performance optimization",
                "Security best practices",
              ],
            },
            {
              icon: Smartphone,
              title: "iOS App Development",
              slug: "/services/ios-app-development",
              items: [
                "Native iOS applications",
                "UI/UX-focused design",
                "Secure app architecture",
                "Performance optimization",
                "Ongoing maintenance",
              ],
            },
            {
              icon: Wrench,
              title: "Application Support",
              slug: "/services/application-support",
              items: [
                "Application monitoring",
                "Bug fixes & issue resolution",
                "Performance tuning",
                "Feature enhancements",
                "Security patches",
              ],
            },
            {
              icon: Network,
              title: "IT Outsourcing",
              slug: "/services/it-outsourcing",
              items: [
                "Dedicated development teams",
                "Project-based delivery",
                "Long-term support models",
                "Scalable resource engagement",
                "Predictable delivery",
              ],
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-[#163C63] p-7 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col"
            >
              <service.icon className="w-10 h-10 mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2 text-gray-200 text-sm flex-grow">
                {service.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link
                href={service.slug}
                className="inline-block mt-6 text-sm font-semibold text-[#A8DADC] hover:text-white"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US – TIMELINE STYLE ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-20" style={{ color: PRIMARY }}>
          Why Choose Us
        </h2>

        <div className="max-w-6xl mx-auto relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200" />

          <div className="grid md:grid-cols-4 gap-12 relative">
            {[
              ["Business-Aligned Solutions", "Technology aligned with real business objectives."],
              ["Transparent Processes", "Clear communication and predictable delivery."],
              ["Security & Scalability", "Secure systems designed to scale with growth."],
              ["Reliable Support", "Ongoing support ensuring system stability."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <CheckCircle className="w-10 h-10 mx-auto mb-4" style={{ color: PRIMARY }} />
                <h4 className="font-semibold text-lg mb-2">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES – SPLIT FEATURE STYLE ================= */}
      <section className="py-24 px-6 bg-[#0F4F3F] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-14 items-center">

          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-200 text-lg">
              The principles that guide our culture, decisions, and long-term partnerships.
            </p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {[
              [ShieldCheck, "Integrity", "Ethical and professional conduct always."],
              [CheckCircle, "Quality", "High standards in engineering and delivery."],
              [Users, "Accountability", "Ownership of commitments and outcomes."],
              [Layers, "Continuous Improvement", "Constantly evolving skills and processes."],
            ].map(([Icon, title, desc]) => (
              <div
                key={title}
                className="bg-white text-gray-800 p-7 rounded-2xl shadow-md hover:-translate-y-1 transition"
              >
                <Icon className="w-9 h-9 mb-4" style={{ color: PRIMARY }} />
                <h4 className="font-semibold text-lg">{title}</h4>
                <p className="text-sm text-gray-600 mt-2">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= INDUSTRIES – BADGE GRID STYLE ================= */}
      <section className="py-24 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: PRIMARY }}>
          The Industries We Serve
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {[
            [GraduationCap, "Education & Training"],
            [HeartPulse, "Healthcare"],
            [Briefcase, "Finance & Accounting"],
            [ShoppingBag, "Retail & eCommerce"],
            [Building2, "Professional Services"],
          ].map(([Icon, title]) => (
            <div
              key={title}
              className="rounded-full border px-6 py-8 text-center hover:shadow-md transition"
            >
              <Icon className="w-9 h-9 mx-auto mb-3" style={{ color: PRIMARY }} />
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-gray-600 mt-1">
                Tailored digital solutions.
              </p>
            </div>
          ))}
        </div>
      </section>

            <p className="font-semibold text-gray-800">
              — Mrs. Preeti Kalra
            </p>
            <p className="text-gray-500">Founder & Director</p>
          </div>
        </section>
      </main>
    </div>
  );
}