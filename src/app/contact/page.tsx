"use client";

import { useState, FormEvent } from "react";

// Define interfaces for better type-checking
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

interface SubmissionStatus {
  submitting: boolean;
  success: boolean | null;
  message: string;
}

export default function ContactPage() {
  const initialFormData: FormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>({
    submitting: false,
    success: null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus({ submitting: true, success: null, message: "Sending..." });

    try {
      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ submitting: false, success: true, message: "Thank you! Your message has been sent successfully." });
        setFormData(initialFormData); // Reset form
      } else {
        setStatus({ submitting: false, success: false, message: result.message || "Failed to send message. Please try again." });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({ submitting: false, success: false, message: "An error occurred. Please try again later." });
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
              required
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
              required
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
              {status.submitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>

        {/* SUCCESS MESSAGE */}
        {status.message && !status.submitting && (
          <div
            className={`text-center p-3 rounded-lg text-sm sm:text-base ${
              status.success
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
}
