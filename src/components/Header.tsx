import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 px-4 py-4 md:flex-row md:space-y-0">
        {/* Left side: Logo and text "KUDZU" */}
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#00b894] to-black"></div>
          <span className="ml-3 text-xl font-bold tracking-tight text-gray-600">CODE IT</span>
        </div>

        {/* Center: Navigation menu */}
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="font-semibold text-[#00b894]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-semibold text-gray-600 hover:text-[#00b894]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="font-semibold text-gray-600 hover:text-[#00b894]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/careers" className="font-semibold text-gray-600 hover:text-[#00b894]">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="font-semibold text-gray-600 hover:text-[#00b894]">
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right side: A rounded button saying "Contact Us" */}
        <Link href="/contact" className="rounded-full border-[1.5px] border-[#00b894] px-5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-[#00b894] hover:text-white">
          Contact Us
        </Link>
      </div>
    </header>
  );
};