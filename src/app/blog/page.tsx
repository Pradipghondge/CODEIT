import Address from "@/components/address"
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    image: "/images/blog/blog1.jpg",
    tag: "Career",
    date: "April 01, 2025",
    title: "Top IT Skills in 2025: What Employers Are Looking For",
  },
  {
    image: "/images/blog/blog2.jpg",
    tag: "Professional Growth",
    date: "March 26, 2025",
    title: "How Professional Skill Development Boosts Your Career",
  },
  {
    image: "/images/blog/blog3.jpg",
    tag: "Technology",
    date: "March 19, 2025",
    title: "The Role of Application Support in Digital Success",
  },
  {
    image: "/images/blog/blog4.jpg",
    tag: "Industry Trends",
    date: "March 12, 2025",
    title: "Emerging Technologies Transforming IT Outsourcing",
  },
  {
    image: "/images/blog/blog5.jpg",
    tag: "Startup",
    date: "March 05, 2025",
    title: "Building a Future-Ready IT Business Strategy",
  },
  {
    image: "/images/blog/blog6.jpg",
    tag: "Software",
    date: "February 27, 2025",
    title: "What Makes Modern Web Apps Faster, Smarter & Secure?",
  },
  {
    image: "/images/blog/blog7.jpg",
    tag: "Hiring Strategy",
    date: "February 20, 2025",
    title: "Hiring Smarter: How We Deliver Job-Ready Talent",
  },
  {
    image: "/images/blog/blog8.jpg",
    tag: "Workplace",
    date: "February 13, 2025",
    title: "Why Remote Work Culture Is Here to Stay",
  },
  {
    image: "/images/blog/blog9.jpg",
    tag: "UX Design",
    date: "February 06, 2025",
    title: "Designing User Experiences That Drive Success",
  },
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

export default function BlogPage() {
  return (
    <div className="bg-white">
      <main className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F4F3F] leading-tight">
            Insight. Innovation. Driving Enterprise Technology.
          </h1>

          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600">
            Explore expert analysis on enterprise IT strategy, digital transformation,
            and application services to drive business growth and operational excellence.
          </p>

          <div className="mt-8 sm:mt-10">
            <Link href="/services" >
            <button className=" inline-flex items-center justify-center rounded-md bg-[#0F4F3F] px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-opacity-90 transition">
              Explore Our Insights <ArrowIcon />
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-y-14 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>

                <div className="p-6 pt-2">
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="inline-block rounded-full bg-[#0F4F3F] px-3 py-1 text-[11px] sm:text-xs font-semibold text-white whitespace-nowrap">
                      {post.tag}
                    </span>
                    <p className="text-gray-500">{post.date}</p>
                  </div>

                  <h3 className="mt-4 text-lg sm:text-xl font-bold leading-6 sm:leading-7 text-[#0F4F3F]">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      </main>

      <Address />
    </div>
  );
}
