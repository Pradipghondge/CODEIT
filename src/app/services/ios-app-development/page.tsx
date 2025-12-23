import {
  Smartphone,
  Layout,
  Server,
  ShieldCheck,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export default function IOSAppDevelopmentPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO (GREY + WHITE) ================= */}
      <section className="bg-gray-100 py-28 px-6">
        <div className="max-w-6xl mx-auto text-center bg-white rounded-2xl p-12 shadow-sm">
          <span className="inline-block mb-4 text-sm uppercase tracking-widest text-gray-500">
            Mobile Application Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            IOS Application Development
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            CODEIT offers native iOS application development services focused on
            performance, usability, and secure mobile experiences.
          </p>
        </div>
      </section>

      {/* ================= SERVICE CAPABILITIES (ICON GRID) ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
            Service Capabilities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <IconCard
              icon={Smartphone}
              title="Native iOS Apps"
              desc="Native iOS application development"
            />
            <IconCard
              icon={Layout}
              title="UI/UX Design"
              desc="UI/UX design and optimization"
            />
            <IconCard
              icon={Server}
              title="Backend Integration"
              desc="Backend integration and APIs"
            />
            <IconCard
              icon={TrendingUp}
              title="Performance Testing"
              desc="Performance tuning and testing"
            />
          </div>
        </div>
      </section>

      {/* ================= DEVELOPMENT STANDARDS (SPLIT LAYOUT) ================= */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-14 items-start">
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Development Standards
            </h2>
            <p className="text-gray-600 text-lg">
              Our development process follows strict platform guidelines and
              security standards to ensure performance and reliability.
            </p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-10">
            <StandardCard
              icon={CheckCircle}
              title="Best Practices"
              desc="Platform-specific best practices"
            />
            <StandardCard
              icon={ShieldCheck}
              title="Secure Architecture"
              desc="Secure data and authentication mechanisms"
            />
            <StandardCard
              icon={TrendingUp}
              title="Optimized Performance"
              desc="Performance and stability optimization"
            />
          </div>
        </div>
      </section>

      {/* ================= BUSINESS VALUE (DARK NEUTRAL) ================= */}
      <section className="bg-gray-900 py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Business Value
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <ValueCard
              title="Enhanced Customer Engagement"
              desc="Delivers intuitive and engaging mobile experiences."
            />
            <ValueCard
              title="Reliable Mobile Access"
              desc="Provides secure access to business services anytime."
            />
            <ValueCard
              title="High-Quality User Experience"
              desc="Ensures smooth, stable, and responsive applications."
            />
          </div>
        </div>
      </section>

    </main>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function IconCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition">
      <Icon className="w-11 h-11 mx-auto mb-5 text-gray-800" />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function StandardCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 transition">
      <Icon className="w-9 h-9 mb-4 text-gray-800" />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function ValueCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  );
}
