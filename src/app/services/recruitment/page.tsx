"use client";

import { Briefcase, Users, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PlacementPage() {
  const PRIMARY_COLOR = "#0F4F3F";
  const SECONDARY_BG = "#F7F8FA";

  const partners = [
    "Accenture",
    "TCS",
    "Tech Mahindra",
    "Sutherland",
    "Infosys",
    "Zensar",
    "Capgemini",
  ];

  const students = [
    { name: "Amit Sharma", role: "Java Developer", company: "TCS", package: "4.5 LPA" },
    { name: "Priya Nair", role: "Python Developer", company: "Accenture", package: "5 LPA" },
    { name: "Rohit Verma", role: "Full Stack Developer", company: "Sutherland", package: "4 LPA" },
    { name: "Sneha Patel", role: "Tester", company: "Tech Mahindra", package: "3.6 LPA" },
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: SECONDARY_BG }}
      >
        <h1
          className="text-4xl sm:text-5xl font-extrabold"
          style={{ color: PRIMARY_COLOR }}
        >
          Placement Services & Success Stories
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          CODE IT provides strong placement support through industry connections, 
          skill-focused training, and dedicated career services. Our students are 
          placed in top-tier IT companies with competitive packages.
        </p>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ color: PRIMARY_COLOR }}
          >
            Why Companies Hire From CODE IT
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, text: "Industry-Ready Skills" },
              { icon: CheckCircle, text: "Practical Project Experience" },
              { icon: Users, text: "Soft Skills & Interview Training" },
              { icon: Briefcase, text: "Dedicated Placement Assistance" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl shadow hover:shadow-lg bg-white text-center border-b-4"
                style={{ borderColor: PRIMARY_COLOR }}
                whileHover={{ scale: 1.03 }}
              >
                <item.icon className="w-12 h-12 mx-auto mb-4" style={{ color: PRIMARY_COLOR }} />
                <p className="text-lg font-semibold text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div></div>
      </section>

      {/* PARTNERS */}
      <section
        className="py-20"
        style={{ backgroundColor: SECONDARY_BG }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ color: PRIMARY_COLOR }}
          >
            Our Hiring Partners
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white rounded-xl shadow hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-md font-semibold text-gray-700">{partner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLACED STUDENTS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ color: PRIMARY_COLOR }}
          >
            Our Successfully Placed Students
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {students.map((s, i) => (
              <motion.div
                key={i}
                className="p-6 text-center bg-white shadow rounded-xl hover:shadow-xl border-b-4"
                style={{ borderColor: PRIMARY_COLOR }}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-bold" style={{ color: PRIMARY_COLOR }}>
                  {s.name}
                </h3>
                <p className="text-gray-600 mt-2">{s.role}</p>
                <p className="text-gray-700 font-semibold mt-1">{s.company}</p>
                <p className="text-green-600 font-bold mt-2">{s.package}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center text-white"
        style={{ backgroundColor: PRIMARY_COLOR }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          Start Your Career Journey with CODE IT
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
          Join our training programs and get access to 100% placement assistance.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl 
          hover:shadow-2xl hover:scale-105 transition"
          style={{ color: PRIMARY_COLOR }}
        >
          Contact Placement Team
        </a>
      </section>

    </div>
  );
}
