import {
  Code,
  Layers,
  ShieldCheck,
  GitBranch,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

export default function SoftwareDevelopmentPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO (SAME STYLE AS OTHER PAGES) ================= */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center bg-white rounded-xl p-8 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Software Development
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            CODEIT Pvt. Ltd. provides end-to-end software development services focused
            on delivering secure, scalable, and business-aligned applications.
          </p>
        </div>
      </section>

      {/* ================= SERVICE CAPABILITIES (ICON GRID) ================= */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Service Capabilities" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard icon={Code} text="Custom software application development" />
            <InfoCard icon={Layers} text="Enterprise application development" />
            <InfoCard icon={GitBranch} text="Application modernization and enhancement" />
            <InfoCard icon={ShieldCheck} text="API and third-party system integration" />
            <InfoCard icon={CheckCircle} text="Ongoing application maintenance" />
          </div>
        </div>
      </section>

      {/* ================= DELIVERY APPROACH (STEP STYLE) ================= */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Our Delivery Approach" />

          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              "Business requirement analysis and planning",
              "Solution architecture and technical design",
              "Structured development using best practices",
              "Multi-level quality assurance",
              "Secure deployment and post-delivery support",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 text-white text-sm font-semibold">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS VALUE (DARK CARDS) ================= */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Business Value" dark />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueCard
              icon={TrendingUp}
              title="Operational Efficiency"
              desc="Improves productivity through optimized and automated systems."
            />
            <ValueCard
              icon={CheckCircle}
              title="Scalable Systems"
              desc="Applications designed for long-term growth and maintainability."
            />
            <ValueCard
              icon={ShieldCheck}
              title="Reduced Technology Risk"
              desc="Secure, tested, and reliable software delivery."
            />
          </div>
        </div>
      </section>

    </main>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function SectionTitle({
  title,
  dark = false,
}: {
  title: string;
  dark?: boolean;
}) {
  return (
    <h2
      className={`text-xl md:text-2xl font-semibold mb-6 text-center ${
        dark ? "text-white" : "text-gray-900"
      }`}
    >
      {title}
    </h2>
  );
}

function InfoCard({
  icon: Icon,
  text,
}: {
  icon: any;
  text: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex items-start gap-4">
      <Icon className="w-8 h-8 text-gray-800" />
      <p className="text-gray-700 text-sm md:text-base">
        {text}
      </p>
    </div>
  );
}

function ValueCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 text-white border border-gray-700">
      <Icon className="w-8 h-8 mb-4 text-gray-300" />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  );
}
