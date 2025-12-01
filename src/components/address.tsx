import { MapPin, Phone } from 'lucide-react';

const Address = () => {
  return (
    <section className="bg-[#fafafa] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f5132]">
            Where You Can Reach Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-600">
            Feel free to reach out or access our documentation whenever you need
            immediate assistance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2">
          
          {/* Left Card */}
          <div className="flex flex-col items-center rounded-xl bg-white p-6 sm:p-8 text-center shadow-md">
            <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#0f5132]">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-3 text-xl sm:text-2xl font-bold text-[#0f5132]">
              Address
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              3rd Floor, Mata Rajeshwari Complex, Solapur - Pune Hwy, opp. Manjri Stud Farm,
              <br />
              Shewalewadi, Pune, Maharashtra 412307
            </p>
          </div>

          {/* Right Card */}
          <div className="flex flex-col items-center rounded-xl bg-white p-6 sm:p-8 text-center shadow-md">
            <div className="mb-6 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#0f5132]">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-3 text-xl sm:text-2xl font-bold text-[#0f5132]">
              Contact Information
            </h3>
            <div className="text-gray-600 text-sm sm:text-base">
              <p>+91-7231925496</p>
              <p>careers@codeitsoftwaretraining.com</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Address;
