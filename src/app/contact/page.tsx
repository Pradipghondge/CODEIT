"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let newErrors = { name: "", email: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(false);

    if (validateForm()) {
      console.log("Form Submitted:", formData);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-[#F7F8FA] min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg p-6 sm:p-8 md:p-10 space-y-8 bg-white rounded-2xl shadow-lg">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F4F3F]">
            How Can We Help?
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            We're here to help with any questions you may have. Reach out and
            let&apos;s build something great together.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
          
          <div>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-3 bg-[#F7F8FA] border-2 border-transparent rounded-lg text-[#0F4F3F] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0F4F3F] transition"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 bg-[#F7F8FA] border-2 border-transparent rounded-lg text-[#0F4F3F] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0F4F3F] transition"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-[#F7F8FA] border-2 border-transparent rounded-lg text-[#0F4F3F] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0F4F3F] transition"
            />
          </div>

          <div>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full px-4 py-3 bg-[#F7F8FA] border-2 border-transparent rounded-lg text-[#0F4F3F] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0F4F3F] transition"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white bg-[#0F4F3F] rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F4F3F] transition active:scale-[0.98]"
            >
              Submit
            </button>
          </div>
        </form>

        {/* SUCCESS MESSAGE */}
        {isSubmitted && (
          <div className="text-center p-3 bg-green-100 text-green-800 rounded-lg text-sm sm:text-base">
            Thank you! Your message has been sent successfully.
          </div>
        )}
      </div>
    </div>
  );
}
