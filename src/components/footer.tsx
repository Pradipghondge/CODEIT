import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Section 1: Newsletter Signup */}
        <div className="mb-10 sm:mb-12">
          <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F4F3F]">
            Get tech and hiring updates from CodeIT!
          </h2>

          <form className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow rounded-full border border-gray-300 px-5 py-3 text-sm sm:text-base placeholder-gray-500 focus:border-[#0F4F3F] focus:outline-none focus:ring-1 focus:ring-[#0F4F3F]"
            />
            <button
              type="submit"
              className="rounded-full bg-[#0F4F3F] px-8 py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-opacity-90 active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Section 2: Three Columns */}
        <div className="grid grid-cols-1 gap-10 sm:gap-12 border-y border-gray-200 py-10 sm:py-12 md:grid-cols-3">

          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold text-[#0F4F3F]">CODEIT</h3>
            <p className="mt-4 max-w-sm text-gray-600 text-sm sm:text-base">
              Transforming businesses with reliable outsourcing, application support, and smart recruitment solutions.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#0F4F3F]">General</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><Link href="/" className="text-gray-600 hover:text-[#0F4F3F]">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-[#0F4F3F]">About us</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-[#0F4F3F]">Services</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-[#0F4F3F]">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#0F4F3F]">Information</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><Link href="/contact" className="text-gray-600 hover:text-[#0F4F3F]">Contact us</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-[#0F4F3F]">Blogs</Link></li>
            </ul>
          </div>

        </div>

        {/* Section 3: Social + Copyright */}
        <div className="flex flex-col-reverse items-center justify-between pt-10 sm:pt-12 sm:flex-row">

          <p className="mt-6 sm:mt-0 text-xs sm:text-sm text-gray-600 text-center sm:text-left">
            © 2025 CodeIt Private Limited. All Rights Reserved.
          </p>

          <div className="flex space-x-5">
            <Link href="#" className="text-gray-500 hover:text-[#0F4F3F]">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#0F4F3F]">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#0F4F3F]">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#0F4F3F]">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
