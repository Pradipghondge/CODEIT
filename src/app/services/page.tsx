"use client";

import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
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
} from "lucide-react";

// COLORS
const PRIMARY = "#0F4F3F";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <Hero />
      <main className="pt-12 sm:pt-16 lg:pt-20">
        {/* ================= ABOUT US ================= */}
        <section className="py-12 sm:py-16 lg:py-20 text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY }}>
            About Us
          </h2>
          <p className="max-w-4xl mx-auto text-gray-700 text-lg">
            CODEIT Pvt. Ltd. is your trusted technology partner, delivering
            dependable IT services and software solutions designed to drive
            growth and efficiency.
          </p>
        </section>

        {/* ================= VISION & MISSION ================= */}
        <section className="bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow">
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: PRIMARY }}
              >
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be a trusted IT services partner recognized for delivering
                reliable and business-aligned technology solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: PRIMARY }}
              >
                Our Mission
              </h3>
              <p className="text-gray-700">
                Supporting business success through secure and high-quality
                technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* ================= OUR SERVICES ================= */}
        <section className="bg-[#0E2A47] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Services
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-10 text-gray-200">
            Delivering secure, scalable, and business-focused technology
            solutions designed to support long-term growth and operational
            efficiency.
          </p>

          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#163C63] p-6 rounded-xl">
              <Code className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Software Development
              </h3>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li>• Business & technical consulting</li>
                <li>• Custom software development</li>
                <li>• Architecture & system design</li>
                <li>• API & system integrations</li>
                <li>• Testing, QA & deployment</li>
              </ul>
            </div>

            <div className="bg-[#163C63] p-6 rounded-xl">
              <Monitor className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li>• Custom web applications</li>
                <li>• Enterprise platforms</li>
                <li>• Front-end & back-end engineering</li>
                <li>• Performance optimization</li>
                <li>• Security best practices</li>
              </ul>
            </div>

            <div className="bg-[#163C63] p-6 rounded-xl">
              <Smartphone className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">iOS App Development</h3>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li>• Native iOS applications</li>
                <li>• UI/UX-focused design</li>
                <li>• Secure app architecture</li>
                <li>• Performance optimization</li>
                <li>• Ongoing maintenance</li>
              </ul>
            </div>

            <div className="bg-[#163C63] p-6 rounded-xl">
              <Wrench className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Application Support</h3>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li>• Application monitoring</li>
                <li>• Bug fixes & issue resolution</li>
                <li>• Performance tuning</li>
                <li>• Feature enhancements</li>
                <li>• Security patches</li>
              </ul>
            </div>

            <div className="bg-[#163C63] p-6 rounded-xl">
              <Network className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">IT Outsourcing</h3>
              <ul className="space-y-2 text-gray-200 text-sm">
                <li>• Dedicated development teams</li>
                <li>• Project-based delivery</li>
                <li>• Long-term support models</li>
                <li>• Scalable resource engagement</li>
                <li>• Predictable delivery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-center mb-10"
            style={{ color: PRIMARY }}
          >
            Why Choose Us
          </h2>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                title: "Business-Aligned Solutions",
                desc: "Technology aligned with real business objectives.",
              },
              {
                title: "Transparent Processes",
                desc: "Clear communication and predictable delivery.",
              },
              {
                title: "Security & Scalability",
                desc: "Secure systems designed to scale with growth.",
              },
              {
                title: "Reliable Support",
                desc: "Ongoing support ensuring system stability.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 p-6 rounded-xl shadow-sm"
              >
                <CheckCircle
                  className="w-8 h-8 mx-auto mb-3"
                  style={{ color: PRIMARY }}
                />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CORE VALUES ================= */}
        <section className="bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-center mb-10"
            style={{ color: PRIMARY }}
          >
            Our Core Values
          </h2>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              {
                icon: ShieldCheck,
                title: "Integrity",
                desc: "Ethical and professional conduct always.",
              },
              {
                icon: CheckCircle,
                title: "Quality",
                desc: "High standards in engineering and delivery.",
              },
              {
                icon: Users,
                title: "Accountability",
                desc: "Ownership of commitments and outcomes.",
              },
              {
                icon: Layers,
                title: "Continuous Improvement",
                desc: "Constantly evolving skills and processes.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white p-6 rounded-xl shadow">
                <v.icon
                  className="w-10 h-10 mx-auto mb-3"
                  style={{ color: PRIMARY }}
                />
                <p className="font-semibold">{v.title}</p>
                <p className="text-sm text-gray-600 mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= INDUSTRIES ================= */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-center mb-10"
            style={{ color: PRIMARY }}
          >
            The Industries We Serve
          </h2>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            {[
              "Education & Training",
              "Healthcare",
              "Finance & Accounting",
              "Retail & eCommerce",
              "Professional Services",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-gray-50 p-5 rounded-xl shadow"
              >
                <p className="font-semibold">{industry}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Technology solutions tailored to industry needs.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="bg-[#0E2A47] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let’s Work Together
              </h2>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Partner with CODEIT Pvt. Ltd. to build reliable, scalable, and
                business-aligned IT solutions that support long-term growth and
                operational excellence.
              </p>

              <div className="space-y-3 text-gray-200">
                <p>
                  <strong>Email:</strong> careers@codeitinfotech.com
                </p>
                <p>
                  <strong>Website:</strong> www.codeitinfotech.com
                </p>
              </div>
            </div>

            <div className="bg-white text-gray-800 p-10 rounded-2xl shadow-xl text-center">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: PRIMARY }}
              >
                Contact Us
              </h3>
              <p className="text-gray-600 mb-6">
                Tell us about your project or requirements and our team will
                get back to you shortly.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-[#0F4F3F] text-white px-10 py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* ================= FOUNDER MESSAGE (LAST) ================= */}
        <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center bg-white p-10 rounded-2xl shadow-xl">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: PRIMARY }}
            >
              Message from the Founder
            </h2>

            <p className="italic text-gray-700 text-lg leading-relaxed mb-6">
              “At CODEIT Pvt. Ltd., we deliver reliable, scalable, and
              business-focused technology solutions that empower organizations
              to achieve operational efficiency, innovation, and sustainable
              growth.”
            </p>

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