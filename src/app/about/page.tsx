import Image from 'next/image';

const teamMembers = [
  {
    name: 'Preeti Kalra',
    role: 'Founder / CTO',
    imageUrl: '/images/member1.jpg',
  },
];

const stats = [
  { label: 'Growth in 4 Years', value: '50x' },
  { label: 'Happy Employees', value: '350+' },
  { label: 'Global & Domestic Clients', value: '20+' },
  { label: 'Virtual Offices', value: '2' },
];

const delightCards = [
  {
    title: 'Customer Delight',
    icon: (
      <svg className="h-8 w-8 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description:
      'We are committed to delivering high-quality outsourcing, support, and recruitment solutions that ensure operational excellence and complete client satisfaction.',
  },
  {
    title: 'Society Delight',
    icon: (
      <svg className="h-8 w-8 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 16.525l-.432.432a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828l.432-.432M16.263 16.525l.432.432a2 2 0 002.828 0l1.414-1.414a2 2 0 000-2.828l-.432-.432" />
      </svg>
    ),
    description:
      'Through training, upskilling, and career opportunities, we help build a stronger workforce and make a positive contribution to the community.',
  },
  {
    title: 'Employee Delight',
    icon: (
      <svg className="h-8 w-8 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description:
      'We believe in empowering our team with continuous learning, a collaborative culture, and rewarding career growth opportunities.',
  },
];

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      <main className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Title + Intro */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F4F3F]">
              About CodeIT Pvt. Ltd.
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600">
              We are a technology and talent solutions company delivering IT outsourcing,
              application support, recruitment services, and professional training
              to help businesses scale and careers grow.
            </p>
          </div>

          {/* Founder Section */}
          <div className="mx-auto mt-20 sm:mt-24 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-stretch">

            {/* Founder Card */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F7F8FA] p-8 sm:p-10 shadow-md hover:shadow-xl">
              {teamMembers.map((person) => (
                <div key={person.name} className="flex flex-col items-center text-center gap-y-4">
                  <Image
                    src={person.imageUrl}
                    alt={person.name}
                    width={180}
                    height={180}
                    className="rounded-full border-4 border-white object-cover shadow-lg"
                  />
                  <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600">{person.role}</p>
                </div>
              ))}
            </div>

            {/* Founder Story */}
            <div className="flex flex-col justify-center rounded-2xl bg-[#F7F8FA] p-8 sm:p-10 text-center lg:text-left shadow-md hover:shadow-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F4F3F]">
                From Vision to Venture
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600">
                CodeIT was founded on the principle of bridging the gap between business needs
                and technology solutions. Our journey began with a commitment to build partnerships
                that foster growth, innovation, and long-term success for everyone involved.
              </p>
            </div>
          </div>

          {/* Mission + Guarantees */}
          <div className="mx-auto mt-20 sm:mt-24 grid gap-8 lg:grid-cols-2 max-w-5xl">
            <div className="p-8 sm:p-10 border border-gray-200 rounded-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F4F3F]">Our Mission</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To be the most creative, effective and honest company in the business.
                We are committed to providing our clients with the highest quality work.
              </p>
            </div>

            <div className="p-8 sm:p-10 border border-gray-200 rounded-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F4F3F]">Our Guarantees</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We guarantee reliable service delivery, transparent communication, and measurable results.
                If anything falls short, we take quick action to ensure your complete satisfaction.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="mx-auto mt-20 sm:mt-24 max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F4F3F]">
              We Create Growth for Our Clients, Workforce & Community
            </h2>
          </div>

          {/* Delight Cards */}
          <div className="mx-auto mt-12 sm:mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {delightCards.map((card) => (
              <div key={card.title} className="p-8 sm:p-10 border border-gray-200 rounded-2xl">
                {card.icon}
                <h3 className="mt-6 text-lg sm:text-xl font-semibold text-[#0F4F3F]">{card.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mx-auto mt-20 sm:mt-24">
            <div className="grid items-center gap-y-12 lg:grid-cols-2 lg:gap-x-16">

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F4F3F]">
                  Our numbers reflect our journey of trust and transformation
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                  We continue to grow by delivering quality services,
                  empowering careers, and building long-term business partnerships.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:gap-10">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-start">
                    <span className="text-sm sm:text-base text-gray-600">{stat.label}</span>
                    <span className="text-4xl sm:text-5xl font-bold text-[#0F4F3F]">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
