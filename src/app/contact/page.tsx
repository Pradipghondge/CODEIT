"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";

// --- TYPES ---
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
  // --- STATE & LOGIC ---
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

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
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

    if (Object.keys(validationErrors).length > 0) return;

    setStatus({ submitting: true, success: null, message: "Initiating Connection..." });

    try {
      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ submitting: false, success: true, message: "Message encrypted and sent. Our architects will be in touch." });
        setFormData(initialFormData);
      } else {
        setStatus({ submitting: false, success: false, message: result.message || "Transmission failed." });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({ submitting: false, success: false, message: "A technical error occurred. Please try again." });
    }
  };

  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden pt-32 pb-20 px-6 relative selection:bg-[#0F4F3F] selection:text-white">
      
      {/* ================= DYNAMIC MOUSE FOLLOWER GRADIENT ================= */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700 ease-out"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(15, 79, 63, 0.12), transparent 80%)`
        }}
      />

      {/* Subtle Grid Overlay for "Architectural" feel */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* ================= LEFT COLUMN: BRANDING & UPDATED INFO ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block py-2 px-6 rounded-full border border-[#0F4F3F]/20 text-[#0F4F3F] text-[10px] font-black tracking-[0.2em] uppercase mb-10 bg-[#0F4F3F]/5"
            >
              Strategic Partnerships
            </motion.span>
            
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10 text-gray-900">
              CONNECT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4F3F] via-[#2D8E73] to-[#0F4F3F]">
                ELITE.
              </span>
            </h1>
            
            <p className="text-xl text-gray-500 max-w-md leading-relaxed mb-20 italic">
              "We don't just respond to inquiries; we start conversations about the future of your infrastructure."
            </p>

            {/* Updated Contact Details */}
            <div className="space-y-12">
              {[
                { 
                  icon: Mail, 
                  label: "Inquiries & Careers", 
                  val: "careers@codeitinfotech.com",
                  href: "mailto:careers@codeitinfotech.com"
                },
                { 
                  icon: Phone, 
                  label: "Direct Line", 
                  val: "+91-7231925496",
                  href: "tel:+917231925496"
                },
              ].map((item, i) => (
                <motion.a 
                  key={i}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-8 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-3xl bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:bg-[#0F4F3F] group-hover:border-[#0F4F3F] transition-all duration-500 group-hover:shadow-[0_15px_30px_rgba(15,79,63,0.2)]">
                    <item.icon className="w-6 h-6 text-[#0F4F3F] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">{item.label}</p>
                    <p className="text-xl font-bold text-gray-900 group-hover:text-[#0F4F3F] transition-colors">{item.val}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: THE PREMIUM FORM ================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Form Container */}
            <div className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_50px_100px_rgba(0,0,0,0.04)] rounded-[4rem] p-10 md:p-16 relative overflow-hidden">
              
              {/* Subtle Internal Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0F4F3F]/5 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {status.success ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-[#0F4F3F]/5 rounded-full flex items-center justify-center mx-auto mb-10 border border-[#0F4F3F]/10">
                      <CheckCircle2 className="w-10 h-10 text-[#0F4F3F]" />
                    </div>
                    <h2 className="text-4xl font-black mb-6 tracking-tight">Transmission Successful.</h2>
                    <p className="text-gray-500 text-lg mb-12 max-w-xs mx-auto">{status.message}</p>
                    <button 
                      onClick={() => setStatus({ ...status, success: null, message: "" })}
                      className="text-[#0F4F3F] font-black text-sm tracking-widest uppercase border-b-2 border-[#0F4F3F] pb-1 hover:opacity-60 transition-opacity"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12" noValidate>
                    
                    {/* Name Input */}
                    <div className="relative group">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="peer w-full bg-transparent border-b border-gray-200 py-5 outline-none focus:border-[#0F4F3F] transition-all text-xl font-bold placeholder:text-transparent"
                      />
                      <label className="absolute left-0 top-5 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#0F4F3F] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                        Full Name
                      </label>
                      {errors.name && <p className="text-[10px] text-red-500 font-black mt-2 uppercase tracking-widest">{errors.name}</p>}
                    </div>

                    {/* Email Input */}
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Corporate Email"
                        className="peer w-full bg-transparent border-b border-gray-200 py-5 outline-none focus:border-[#0F4F3F] transition-all text-xl font-bold placeholder:text-transparent"
                      />
                      <label className="absolute left-0 top-5 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#0F4F3F] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                        Corporate Email
                      </label>
                      {errors.email && <p className="text-[10px] text-red-500 font-black mt-2 uppercase tracking-widest">{errors.email}</p>}
                    </div>

                    {/* Phone Input */}
                    <div className="relative group">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone (Optional)"
                        className="peer w-full bg-transparent border-b border-gray-200 py-5 outline-none focus:border-[#0F4F3F] transition-all text-xl font-bold placeholder:text-transparent"
                      />
                      <label className="absolute left-0 top-5 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#0F4F3F] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                        Phone (Optional)
                      </label>
                    </div>

                    {/* Message Input */}
                    <div className="relative group">
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can our engineering teams assist?"
                        className="peer w-full bg-transparent border-b border-gray-200 py-5 outline-none focus:border-[#0F4F3F] transition-all text-xl font-bold placeholder:text-transparent resize-none"
                      ></textarea>
                      <label className="absolute left-0 top-5 text-gray-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#0F4F3F] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                        Project Overview
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="group w-full relative h-20 overflow-hidden bg-[#0F4F3F] text-white rounded-3xl font-black text-lg tracking-widest hover:shadow-[0_25px_50px_rgba(15,79,63,0.35)] transition-all active:scale-[0.98] disabled:opacity-70"
                    >
                      <div className="relative z-10 flex items-center justify-center gap-4">
                        {status.submitting ? "ENCRYPTING..." : "INITIATE PARTNERSHIP"}
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1b8a6e] to-[#0F4F3F] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                    
                    {/* Status Message for non-success cases */}
                    {status.message && !status.success && (
                      <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-[#0F4F3F] animate-pulse">
                        {status.message}
                      </p>
                    )}
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Branding Footer */}
      <div className="max-w-7xl mx-auto mt-40 pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
        <div className="flex gap-12 font-black text-[10px] tracking-[0.3em] uppercase">
          <span>Security</span>
          <span>Scalability</span>
          <span>Efficiency</span>
        </div>
        <div className="flex items-center gap-3 text-[#0F4F3F]">
           <Sparkles size={16} />
           <span className="font-bold tracking-widest text-[10px] uppercase">Designed for Excellence</span>
        </div>
      </div>
    </main>
  );
}