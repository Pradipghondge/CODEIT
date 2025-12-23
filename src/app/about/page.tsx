import Image from 'next/image';

const teamMembers = [
  {
    name: 'Preeti Kalra',
    role: 'Founder & Director',
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

    title: 'Client Success & Reliability',

    icon: (

      <svg className="h-8 w-8 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">

        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />

      </svg>

    ),

    description:

      'We are committed to delivering secure, scalable, and high-quality IT solutions. Our focus on accountability and partnership ensures operational excellence and complete client satisfaction.',

  },

  {

    title: 'Business Impact & Digital Transformation',

    icon: (

      <svg className="h-8 w-8 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">

        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 16.525l-.432.432a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828l.432-.432M16.263 16.525l.432.432a2 2 0 002.828 0l1.414-1.414a2 2 0 000-2.828l-.432-.432" />

      </svg>

    ),

    description:

      'We drive digital transformation by aligning technology with your business objectives. Our solutions are designed to create measurable impact and foster long-term growth.',

  },

  {

    title: 'Team Excellence & Delivery Culture',

    icon: (

      <svg className="h-8 w-8 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">

        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />

      </svg>

    ),

    description:

      'Our strength lies in our expert teams and a collaborative culture focused on execution. We are dedicated to consistent, high-quality delivery and continuous improvement.',

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
              About CODEIT Pvt. Ltd.
            </h1>
            <p className="mt-4 inline-block text-lg font-semibold tracking-wide text-[#0F4F3F] pb-2 border-b-2 border-[#0F4F3F]/40">
  Your Trusted Technology Partner
</p>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600">
              We provide enterprise-grade IT outsourcing and application support services designed to strengthen digital operations and support long-term business growth.
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
               CODEIT Pvt. Ltd. was founded with a clear vision to deliver reliable and business-aligned technology solutions.
What began as a focused idea has grown into a professional IT services organization serving diverse industries.
We specialize in building secure, scalable, and high-performance digital platforms.
Our approach is driven by structured processes, technical excellence, and accountability.
We help enterprises improve operational efficiency and adapt to evolving digital needs.
Through innovation and long-term partnerships, we create sustainable technology outcomes.
CODEIT continues to transform business challenges into measurable, future-ready solutions.
              </p>
            </div>
          </div>

          {/* Mission + Guarantees */}
          <div className="mx-auto mt-20 sm:mt-24 max-w-5xl">
            <div className="p-8 sm:p-10 border border-gray-200 rounded-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F4F3F]">Our Mission</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To deliver professional IT services and digital solutions that align technology with business objectives, while maintaining the highest standards of quality, security, and accountability.
We are committed to designing, building, and supporting scalable, reliable, and future-ready technology platforms that enhance operational efficiency, drive innovation, and enable sustainable business growth.
Through structured processes, experienced teams, and transparent engagement models, we ensure consistent value delivery and long-term partnerships with our clients.
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
