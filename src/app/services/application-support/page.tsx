import {
  Activity,
  ShieldCheck,
  Wrench,
  Lock,
  Clock,
  TrendingUp,
} from "lucide-react";

export default function ApplicationSupportPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO (GREY + WHITE) ================= */}
      <section className="bg-gray-100 py-28 px-6">
        <div className="max-w-6xl mx-auto text-center bg-white rounded-2xl p-12 shadow-sm">
          <span className="inline-block mb-4 text-sm uppercase tracking-widest text-gray-500">
            Application Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Application Support & Maintenance
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our support services ensure applications remain stable, secure,
            and continuously optimized throughout their lifecycle.
          </p>
        </div>
      </section>

      {/* ================= SUPPORT SERVICES (CUSTOM BG) ================= */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
            Support Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <ServiceCard
              icon={Activity}
              title="Application Monitoring"
              desc="Application monitoring and issue resolution"
            />

            <ServiceCard
              icon={Wrench}
              title="Bug Fixes & Enhancements"
              desc="Bug fixes and functional enhancements"
            />

            <ServiceCard
              icon={TrendingUp}
              title="Performance Optimization"
              desc="Performance optimization"
            />

            <ServiceCard
              icon={Lock}
              title="Security Updates"
              desc="Security updates and version upgrades"
            />
          </div>
        </div>
      </section>

      {/* ================= SUPPORT MODEL ================= */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-14 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Support Model
            </h2>
            <p className="text-gray-600 text-lg">
              A structured, SLA-driven approach that ensures predictable,
              proactive, and reliable application support.
            </p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-10">
            <ModelCard
              icon={ShieldCheck}
              title="SLA-Driven Support"
              desc="Defined response and resolution timelines aligned with business priorities."
            />

            <ModelCard
              icon={Activity}
              title="Incident Management"
              desc="Rapid issue resolution with root-cause analysis."
            />

            <ModelCard
              icon={Clock}
              title="Preventive Maintenance"
              desc="Proactive monitoring to reduce risks and downtime."
            />
          </div>
        </div>
      </section>

      {/* ================= BUSINESS VALUE ================= */}
      <section className="bg-gray-900 py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Business Value
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <ValueCard
              title="Improved Application Uptime"
              desc="Ensures high availability of business-critical systems."
            />

            <ValueCard
              title="Reduced Operational Disruptions"
              desc="Minimizes downtime and business interruptions."
            />

            <ValueCard
              title="Long-Term System Reliability"
              desc="Keeps applications secure, stable, and future-ready."
            />
          </div>
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

function ServiceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition border border-gray-200 text-center">
      <Icon className="w-11 h-11 mx-auto mb-5 text-gray-800" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {desc}
      </p>
    </div>
  );
}

function ModelCard({
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
