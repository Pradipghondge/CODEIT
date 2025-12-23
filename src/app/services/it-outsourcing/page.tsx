import {
  Users,
  DollarSign,
  Layers,
  Rocket,
  TrendingUp,
  Network,
} from "lucide-react";

export default function ITOutsourcingPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO (SAME AS OTHER PAGES) ================= */}
      <section className="bg-gray-100 py-28 px-6">
        <div className="max-w-6xl mx-auto text-center bg-white rounded-2xl p-12 shadow-sm">
          <span className="inline-block mb-4 text-sm uppercase tracking-widest text-gray-500">
            IT Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            IT Outsourcing Services
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible outsourcing services that help organizations scale
            technology capabilities, reduce operational costs, and accelerate
            delivery.
          </p>
        </div>
      </section>

      {/* ================= ENGAGEMENT MODELS (HORIZONTAL CARDS) ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-14 text-center">
            Engagement Models
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <ModelCard
              icon={Users}
              title="Dedicated Development Teams"
              desc="Skilled professionals working exclusively on your projects with full transparency and control."
            />
            <ModelCard
              icon={Layers}
              title="Project-Based Outsourcing"
              desc="Defined scope, timelines, and deliverables for predictable execution and results."
            />
            <ModelCard
              icon={Network}
              title="Long-Term Partnerships"
              desc="Strategic collaboration to support continuous growth and evolving business needs."
            />
          </div>
        </div>
      </section>

      {/* ================= OUTSOURCING ADVANTAGES (FEATURE STRIP) ================= */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
            Outsourcing Advantages
          </h2>

          <div className="space-y-10">
            <AdvantageRow
              icon={Users}
              title="Skilled Professionals"
              desc="Access a pool of experienced developers, engineers, and technical specialists without the overhead of hiring and training."
            />
            <AdvantageRow
              icon={DollarSign}
              title="Predictable Cost Control"
              desc="Clear pricing models and transparent engagement structures ensure budget predictability and cost efficiency."
            />
            <AdvantageRow
              icon={Layers}
              title="Reduced Internal Burden"
              desc="Offload technical responsibilities and allow internal teams to focus on core business priorities."
            />
          </div>
        </div>
      </section>

      {/* ================= BUSINESS VALUE (CLEAN VALUE CARDS) ================= */}
      <section className="bg-gray-900 py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">
            Business Value
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <ValueCard
              icon={Rocket}
              title="Faster Time-to-Market"
              desc="Accelerate development cycles and launch products faster with dedicated outsourcing teams."
            />
            <ValueCard
              icon={TrendingUp}
              title="Improved Operational Efficiency"
              desc="Streamlined processes and expert execution improve productivity and operational outcomes."
            />
            <ValueCard
              icon={Network}
              title="Scalable Technology Support"
              desc="Easily scale resources up or down based on changing business demands."
            />
          </div>
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

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
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition">
      <Icon className="w-10 h-10 mb-4 text-gray-800" />
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

function AdvantageRow({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
      <Icon className="w-10 h-10 text-gray-800 shrink-0" />
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
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
    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
      <Icon className="w-10 h-10 mb-4 text-gray-300" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  );
}
