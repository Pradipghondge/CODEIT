import Link from "next/link";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ================= TOP CONTENT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-gray-300">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900">
              CODEIT Pvt. Ltd.
            </h3>
            <p className="mt-4 text-gray-700 text-sm leading-relaxed max-w-sm">
              Delivering reliable IT services and software solutions with a strong
              focus on quality, accountability, security, and long-term business
              partnerships.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="font-semibold text-gray-700 hover:text-[#0F4F3F] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-semibold text-gray-700 hover:text-[#0F4F3F] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-semibold text-gray-700 hover:text-[#0F4F3F] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="font-semibold text-gray-700 hover:text-[#0F4F3F] transition">
                  How We Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <span className="font-bold">Email:</span>{" "}
                careers@codeitinfotech.com
              </li>
              <li>
                <span className="font-bold">Phone:</span>{" "}
                +91-7231925496
              </li>
              <li>
                <span className="font-bold">Website:</span>{" "}
                www.codeitinfotech.com
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block mt-3 font-bold text-[#0F4F3F] hover:underline"
                >
                  Get in Touch →
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-8 gap-6">

          <p className="text-xs font-semibold text-gray-600 text-center md:text-left">
            © 2025 CODEIT Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="flex gap-5">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, index) => (
              <Link
                key={index}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-400 text-gray-700 hover:bg-[#0F4F3F] hover:text-white hover:border-[#0F4F3F] transition-all"
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
