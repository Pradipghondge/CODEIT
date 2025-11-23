import Image from 'next/image';

const teamMembers = [
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CEO',
    imageUrl: '/images/team/member1.jpg',
  },
  {
    name: 'Dries Vincent',
    role: 'Co-Founder / CTO',
    imageUrl: '/images/team/member2.jpg',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl: '/images/team/member3.jpg',
  },
];

const stats = [
  { label: 'Growth in 6 Years', value: '50x' },
  { label: 'Happy Employees', value: '350+' },
  { label: 'Global & Domestic Clients', value: '20+' },
  { label: 'Virtual Offices', value: '6' },
];

const delightCards = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Customer Delight',
    description:
      'We are a customer-centric organization. We believe in going above and beyond to ensure our customers are happy.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 16.525l-.432.432a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828l.432-.432M16.263 16.525l.432.432a2 2 0 002.828 0l1.414-1.414a2 2 0 000-2.828l-.432-.432"
        />
      </svg>
    ),
    title: 'Society Delight',
    description:
      'We believe in giving back to society. We are committed to making a positive impact on the world.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Employee Delight',
    description:
      'We believe that happy employees make happy customers. We strive to create a work environment that is fun, challenging, and rewarding.',
  },
];

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      <main className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Team Section */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#0F4F3F] sm:text-5xl">
              Meet the Kudzu Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and
              dedicated to delivering the best results for our clients.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="flex flex-col items-center gap-y-8">
              {teamMembers.map((person) => (
                <div
                  key={person.name}
                  className="flex w-full items-center gap-x-6 rounded-2xl bg-[#F7F8FA] p-6"
                >
                  <Image
                    className="h-20 w-20 rounded-full object-cover"
                    src={person.imageUrl}
                    alt={`Photo of ${person.name}`}
                    width={80}
                    height={80}
                  />
                  <div>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-base font-semibold leading-6 text-gray-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Guarantees Section */}
          <div className="mx-auto mt-24 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-[#0F4F3F]">Our Mission</h2>
              <p className="mt-4 text-gray-600">
                To be the most creative, effective and honest company in the business. We are
                committed to providing our clients with the highest quality work.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-[#0F4F3F]">Our Guarantees</h2>
              <p className="mt-4 text-gray-600">
                We guarantee that you will be 100% satisfied with our work. If you are not, we will
                do everything in our power to make it right.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="mx-auto mt-24 max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our vision is to cater to the Big Three — Our Team, Customers and Society.
            </h2>
          </div>

          {/* Delight Cards Section */}
          <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 lg:grid-cols-3">
            {delightCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-2xl border border-gray-200 p-8"
              >
                <div className="flex-shrink-0">{card.icon}</div>
                <h3 className="mt-6 text-xl font-semibold leading-7 tracking-tight text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mx-auto mt-24 max-w-none">
            <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our numbers speak for themselves
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  We’ve achieved significant milestones, reflecting our commitment to growth,
                  client satisfaction, and team expansion.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-start">
                    <dt className="mt-2 text-base leading-7 text-gray-600">{stat.label}</dt>
                    <dd className="text-5xl font-bold tracking-tight text-[#0F4F3F]">
                      {stat.value}
                    </dd>
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