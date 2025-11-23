import Address from "@/components/address";
import Image from "next/image";

const blogPosts = [
  {
    image: "/images/blog/blog1.jpg",
    tag: "Article",
    date: "April 01, 2024",
    title: "Getting started with our new template",
  },
  {
    image: "/images/blog/blog2.jpg",
    tag: "Article",
    date: "March 26, 2024",
    title: "A new look for the Codeit platform",
  },
  {
    image: "/images/blog/blog3.jpg",
    tag
: "Article",
    date: "March 19, 2024",
    title: "Introducing the new Codeit API",
  },
  {
    image: "/images/blog/blog4.jpg",
    tag: "Article",
    date: "March 12, 2024",
    title: "The future of web development",
  },
  {
    image: "/images/blog/blog5.jpg",
    tag: "Article",
    date: "March 05, 2024",
    title: "How to build a successful startup",
  },
  {
    image: "/images/blog/blog6.jpg",
    tag: "Article",
    date: "February 27, 2024",
    title: "Why we love Next.js",
  },
  {
    image: "/images/blog/blog7.jpg",
    tag: "Article",
    date: "February 20, 2024",
    title: "Our favorite design tools",
  },
  {
    image: "/images/blog/blog8.jpg",
    tag: "Article",
    date: "February 13, 2024",
    title: "A guide to remote work",
  },
  {
    image: "/images/blog/blog9.jpg",
    tag: "Article",
    date: "February 06, 2024",
    title: "The importance of user feedback",
  },
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5 ml-2"
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
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F4F3F] leading-tight">
            Good design is a language,
            <br />
            not a style.
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            Like any language, it needs to be learned and practiced. But once
            mastered, it can be a powerful tool for communication.
          </p>
          <div className="mt-10">
            <button className="inline-flex items-center justify-center rounded-md bg-[#0F4F3F] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4F3F]">
              Let’s work together!
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-4">
                  <Image
                    src={post.image}
                    alt=""
                    width={600}
                    height={400}
                    className="w-full object-cover rounded-xl"
                  />
                </div>
                <div className="p-6 pt-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="inline-block rounded-full bg-[#0F4F3F] px-3 py-1 text-xs font-semibold text-white">
                      {post.tag}
                    </span>
                    <p className="text-gray-500">{post.date}</p>
                  </div>
                  <h3 className="mt-4 text-xl font-bold leading-7 text-[#0F4F3F]">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Address />
    </div>
    
  );
}