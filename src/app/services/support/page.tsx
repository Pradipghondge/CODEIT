"use client";

import { CheckCircle, Users, Building } from "lucide-react";

export default function PlacementBriefPage() {
  const PRIMARY_COLOR = "#0F4F3F";
  const SECONDARY_BG = "#F7F8FA";

  return (
    <div className="bg-white min-h-screen">

      {/* HERO SECTION */}
      <section
        className="pt-10 sm:pt-14 lg:pt-18 pb-12 text-center px-4"
        style={{ backgroundColor: SECONDARY_BG }}
      >
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
          style={{ color: PRIMARY_COLOR }}
        >
          Placement Overview & Industry Collaborations
        </h1>

        <p className="mt-4 text-base sm:text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed px-2">
          CODE IT ensures career success through structured training, strong industry 
          partnerships, internships, and placement assistance with top IT organizations.
        </p>
      </section>

      {/* PLACEMENT PROCESS – CARD DESIGN */}
      <section className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10"
          style={{ color: PRIMARY_COLOR }}
        >
          Placement Process
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Skill Assessment & Foundation Building",
            "Hands-on Project Development",
            "Soft Skills & Interview Preparation",
            "Resume Building & Mock Interviews",
            "Company Shortlisting & Referrals",
            "Final Interviews & Offer Letters",
          ].map((step) => (
            <div
              key={step}
              className="p-5 bg-white rounded-xl shadow-lg border-b-4 hover:shadow-xl transition-all"
              style={{ borderColor: PRIMARY_COLOR }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1" style={{ color: PRIMARY_COLOR }} />
                <p className="text-gray-700 text-base leading-relaxed">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLACEMENT HIGHLIGHTS – CARD DESIGN */}
      <section
        className="py-10 sm:py-12 px-4"
        style={{ backgroundColor: SECONDARY_BG }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10"
            style={{ color: PRIMARY_COLOR }}
          >
            Placement Highlights
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Students Trained", value: "500+", note: "Across domains" },
              { label: "Top Recruiters", value: "60+", note: "Active hiring partners" },
              { label: "Avg Package", value: "3.5–5 LPA", note: "Recent batches" },
              { label: "Highest Package", value: "7 LPA", note: "Full-stack / AI roles" }
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 bg-white rounded-xl shadow-md border-b-4 hover:shadow-xl transition"
                style={{ borderColor: PRIMARY_COLOR }}
              >
                <h3 className="text-xl sm:text-2xl font-bold" style={{ color: PRIMARY_COLOR }}>
                  {item.value}
                </h3>
                <p className="text-gray-800 font-semibold mt-1">{item.label}</p>
                <p className="text-gray-600 text-sm mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLEGE TIE-UPS – CARD STYLE */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8"
          style={{ color: PRIMARY_COLOR }}
        >
          College Tie-ups & Academic Collaborations
        </h2>

        <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center max-w-4xl mx-auto mb-10">
          Our collaborations enable industry-focused training, project-based learning, 
          and internship opportunities across engineering, diploma, and IT degree colleges.
        </p>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div
            className="p-6 bg-white rounded-xl shadow-lg border-b-4 hover:shadow-xl transition"
            style={{ borderColor: PRIMARY_COLOR }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: PRIMARY_COLOR }}>
              JSPM Group of Institutes (Pune)
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Robotics & Automation Internship Program with hands-on training on PLC/SCADA,
              industrial systems, and automation tools used in real factories.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="p-6 bg-white rounded-xl shadow-lg border-b-4 hover:shadow-xl transition"
            style={{ borderColor: PRIMARY_COLOR }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: PRIMARY_COLOR }}>
              Government Engineering Colleges (Rajasthan)
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Technical workshops, placement-oriented training, and industrial case study 
              sessions aimed at improving employability.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="p-6 bg-white rounded-xl shadow-lg border-b-4 hover:shadow-xl transition"
            style={{ borderColor: PRIMARY_COLOR }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: PRIMARY_COLOR }}>
              Private Engineering Colleges – CS, IT & AIML
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Full-stack development, AI/ML project training, coding workshops, and 
              live industry interactions to prepare students for IT careers.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="p-6 bg-white rounded-xl shadow-lg border-b-4 hover:shadow-xl transition"
            style={{ borderColor: PRIMARY_COLOR }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: PRIMARY_COLOR }}>
              Polytechnic & Diploma Colleges (IT/Electronics)
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Hands-on labs, certification tracks, embedded systems training, 
              and project-led skill development for diploma students.
            </p>
          </div>

          {/* Card 5 */}
          <div
            className="p-6 bg-white rounded-xl shadow-lg border-b-4 hover:shadow-xl transition"
            style={{ borderColor: PRIMARY_COLOR }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: PRIMARY_COLOR }}>
              BCA, BSc IT & MCA Degree Colleges
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Full-stack development, cloud computing, cybersecurity, internship programs, 
              and portfolio-building support for IT graduates.
            </p>
          </div>

        </div>
      </section>

      {/* INSTITUTIONAL & CORPORATE COLLABORATION */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8"
          style={{ color: PRIMARY_COLOR }}
        >
          Institutional & Corporate Collaboration
        </h2>

        <div className="max-w-4xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed space-y-5">
          <p>
            We collaborate with academic institutions to integrate real-world project
            learning, industry standards, and practical technical sessions into the 
            curriculum—preparing students for modern engineering challenges.
          </p>

          <p>
            These partnerships provide internships, placement pathways, and exposure 
            to corporate environments, ensuring students build job-ready skills and 
            professional confidence.
          </p>
        </div>
      </section>

      {/* COMPANY TIE-UPS */}
      <section
        className="py-12 px-4"
        style={{ backgroundColor: SECONDARY_BG }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8"
            style={{ color: PRIMARY_COLOR }}
          >
            Company Tie-ups & Hiring Partners
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-8">
            Our students secure internships and placements in top IT companies, 
            multinational corporations, and fast-growing startups.
          </p>

          <ul className="space-y-3 max-w-3xl mx-auto">
            {[
              "Accenture",
              "TCS – Tata Consultancy Services",
              "Tech Mahindra",
              "Infosys",
              "Wipro",
              "Capgemini",
              "Zensar Technologies",
              "Sutherland Global Services",
              "HCL Technologies"
            ].map((company) => (
              <li key={company} className="flex items-start">
                <Building
                  className="w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-3"
                  style={{ color: PRIMARY_COLOR }}
                />
                <span className="text-base sm:text-lg text-gray-700">{company}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="py-14 sm:py-16 text-center text-white px-4"
        style={{ backgroundColor: PRIMARY_COLOR }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
          Start Your Professional Journey With CODE IT
        </h2>

        <p className="mt-3 text-base sm:text-lg max-w-2xl mx-auto opacity-90">
          Gain access to internships, real-world training, mentorship, 
          and strong placement support.
        </p>

        <a
          href="/contact"
          className="mt-6 inline-block bg-white px-8 sm:px-10 py-3 sm:py-4 rounded-full 
          font-semibold text-base sm:text-lg shadow-lg hover:scale-105 transition"
          style={{ color: PRIMARY_COLOR }}
        >
          Contact Placement Team
        </a>
      </section>
    </div>
  );
}
