import React from "react";

export default function SoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* ================= HERO SECTION (CARD STYLE LIKE SCREENSHOT) ================= */}
      <section className="bg-gray-100 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 px-10 py-14 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Software Development
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              CODEIT Pvt. Ltd. provides end-to-end software development services
              focused on delivering secure, scalable, and business-aligned
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24 text-center">

        {/* ================= SERVICE CAPABILITIES ================= */}
        <Section title="Service Capabilities">
          <CardGrid
            items={[
              { title: "Custom Software Application Development", desc: "Tailored solutions designed to meet specific business requirements." },
              { title: "Enterprise Application Development", desc: "Robust enterprise-grade systems for large-scale operations." },
              { title: "Application Modernization & Enhancement", desc: "Upgrading legacy systems with modern technologies." },
              { title: "API & Third-Party Integration", desc: "Seamless integration with external systems and services." },
              { title: "Ongoing Application Maintenance", desc: "Continuous support, monitoring, and performance optimization." },
            ]}
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
                    desc: "Interfaces designed for clarity, usability, and efficiency.",
                  },
                  {
                    title: "Secure Architecture",
                    desc: "Strong security practices to protect application data.",
                  },
                  {
                    title: "Cross-Platform Compatibility",
                    desc: "Consistent experience across browsers and devices.",
                  },
                  {
                    title: "Scalable Systems",
                    desc: "Architecture designed to scale with business growth.",
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

/* ================= REUSABLE COMPONENTS ================= */

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
}: {
  items: { title: string; desc: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
      {items.map((item) => (
        <div
          key={item.title}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg mb-2 text-gray-800">
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
