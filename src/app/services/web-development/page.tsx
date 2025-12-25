import React from "react";

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gray-200 text-gray-900 py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Web Development
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We design and develop high-performance, responsive web applications
            that meet enterprise security and performance standards.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24 text-center">

        {/* ================= SERVICE CAPABILITIES ================= */}
        <Section title="Service Capabilities">
          <CardGrid
            items={[
              { title: "Custom Web Apps", desc: "Tailored solutions built from the ground up." },
              { title: "Full-Stack Development", desc: "Frontend and backend expertise with modern frameworks." },
              { title: "Responsive UI", desc: "Optimized for desktop, tablet, and mobile devices." },
              { title: "Database Management", desc: "Secure and scalable data architecture." },
              { title: "Performance & Security", desc: "Optimized speed with enterprise-grade security." },
            ]}
            color="border-t-green-600"
          />
        </Section>

        {/* ================= DESIGN & DEVELOPMENT FOCUS ================= */}
        <Section title="Design & Development Focus">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm px-10 py-12">
              <div className="grid sm:grid-cols-2 gap-8">

                {[
                  {
                    title: "User-Centric Design",
                    desc: "User-centric interface design focused on usability and clarity.",
                  },
                  {
                    title: "Secure Architecture",
                    desc: "Secure data handling following industry best practices.",
                  },
                  {
                    title: "Cross-Platform Compatibility",
                    desc: "Cross-browser and cross-device compatibility for consistent experiences.",
                  },
                  {
                    title: "Scalable Systems",
                    desc: "Scalable application architecture designed for long-term growth.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <span className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold">
                      ✓
                    </span>

                    <div className="text-left">
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </Section>

        {/* ================= BUSINESS VALUE ================= */}
        <Section title="Business Value">
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Strong Digital Presence",
              "Improved User Engagement",
              "Reliable & Scalable Platforms",
            ].map((value) => (
              <div
                key={value}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <p className="text-gray-900 font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </main>
  );
}

/* ================= SUB COMPONENTS ================= */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 flex items-center justify-center">
        <span className="w-8 h-1 bg-green-600 mr-4 rounded-full" />
        {title}
      </h2>
      {children}
    </div>
  );
}

function CardGrid({
  items,
  color,
}: {
  items: { title: string; desc: string }[];
  color: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
      {items.map((item) => (
        <div
          key={item.title}
          className={`bg-white p-6 rounded-xl shadow-sm border-t-4 ${color} hover:shadow-md transition`}
        >
          <h3 className="font-bold text-lg mb-2 text-gray-800">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
