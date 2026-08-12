"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, Code, MessageSquare, Sparkles, Paperclip, CheckCircle2, AlertCircle } from "lucide-react";

interface CTAProps {
  defaultService?: string;
}

export default function CTA({ defaultService = "" }: CTAProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    softwareType: defaultService,
    details: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);



  useEffect(() => {
    const handleCheckHash = () => {
      if (typeof window !== "undefined" && window.location.hash === "#contact") {
        setIsHighlighted(true);
        const nameInput = document.getElementById("cta-name");
        if (nameInput) {
          setTimeout(() => nameInput.focus(), 350);
        }
        setTimeout(() => setIsHighlighted(false), 2500);
      }
    };

    handleCheckHash();
    window.addEventListener("hashchange", handleCheckHash);
    return () => window.removeEventListener("hashchange", handleCheckHash);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFileError(null);
    if (!selectedFile) {
      setFile(null);
      return;
    }
    // PDF Validation
    if (selectedFile.type !== "application/pdf" && !selectedFile.name.toLowerCase().endsWith(".pdf")) {
      setFileError("Only PDF files are supported.");
      setFile(null);
      return;
    }
    // Max 10MB Limit
    if (selectedFile.size > 10 * 1024 * 1024) {
      setFileError("File size must be under 10MB.");
      setFile(null);
      return;
    }
    setFile(selectedFile);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = "Full name is required";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[\d\+\-\s\(\)]{7,20}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.softwareType) {
      errors.softwareType = "Please select a software type";
    }
    if (!formData.details.trim()) {
      errors.details = "Project details are required";
    } else if (formData.details.trim().length < 10) {
      errors.details = "Please enter at least 10 characters";
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          softwareType: formData.softwareType,
          details: formData.details,
          sourcePage: typeof window !== "undefined" ? window.location.href : "Main Website",
        }),
      });

      if (!res.ok) {
        throw new Error("Form submission failed");
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error("Contact submission error:", err);
      setIsSubmitting(false);
      setSubmitError("Unable to send message right now. Please try again or email info@deltawavex.com directly.");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      softwareType: "",
      details: "",
    });
    setFile(null);
    setFileError(null);
    setFormErrors({});
    setIsSuccess(false);
    setSubmitError(null);
  };

  return (
    <section
      id="contact"
      className="py-10 lg:py-14 bg-transparent relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(37, 99, 235, 0.1) 0%, rgba(139, 92, 246, 0.06) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Headline & Credible Contact Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6 bg-emerald-500/10 border border-emerald-500/20"
            >
              <div className="relative flex h-2 w-2">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
                <div className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </div>
              <span className="text-emerald-400 text-xs sm:text-sm font-semibold">
                Currently Accepting Projects
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Extraordinary</span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed mb-8">
              Whether you&apos;re launching a startup, scaling a business, or
              building the next big product — DeltaWaveX is ready to help you
              make it a reality.
            </p>

            {/* 4 Credible Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Free Discovery Call",
                "No Commitment Required",
                "Prompt Response",
                "NDA Available",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: High-Readability Contact Form Card */}
          <motion.div
            id="contact-form-card"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            animate={
              isHighlighted
                ? {
                    scale: [1, 1.02, 1],
                    boxShadow: [
                      "0 0 0px rgba(6,182,212,0)",
                      "0 0 50px rgba(6,182,212,0.45)",
                      "0 0 20px rgba(6,182,212,0.2)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 0.8 }}
            className={`bg-slate-900/85 border ${
              isHighlighted ? "border-cyan-400 ring-2 ring-cyan-500/50" : "border-white/10"
            } rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl relative overflow-hidden transition-colors duration-500`}
          >
            {isSuccess ? (
              /* Success State */
              <div className="py-8 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent</h3>
                <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
                  Thanks for reaching out. We&apos;ll review your project details and get back to you shortly.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 border border-white/10 text-white text-sm font-semibold hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* Form Component */
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

                {submitError && (
                  <div className="mb-5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="cta-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="cta-name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full bg-slate-950/80 border ${
                            formErrors.name ? "border-rose-500" : "border-slate-800"
                          } rounded-xl py-3 pl-10 pr-4 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all`}
                        />
                      </div>
                      {formErrors.name && (
                        <p className="mt-1 text-xs text-rose-400">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="cta-phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone Number <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="cta-phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full bg-slate-950/80 border ${
                            formErrors.phone ? "border-rose-500" : "border-slate-800"
                          } rounded-xl py-3 pl-10 pr-4 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all`}
                        />
                      </div>
                      {formErrors.phone && (
                        <p className="mt-1 text-xs text-rose-400">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="cta-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="cta-email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-slate-950/80 border ${
                          formErrors.email ? "border-rose-500" : "border-slate-800"
                        } rounded-xl py-3 pl-10 pr-4 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all`}
                      />
                    </div>
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-rose-400">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Select Software Type */}
                  <div>
                    <label htmlFor="cta-software-type" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Software Type <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                        <Code className="w-4 h-4" />
                      </div>
                      <select
                        id="cta-software-type"
                        required
                        value={formData.softwareType}
                        onChange={(e) => setFormData({ ...formData, softwareType: e.target.value })}
                        className={`w-full bg-slate-950/80 border ${
                          formErrors.softwareType ? "border-rose-500" : "border-slate-800"
                        } rounded-xl py-3 pl-10 pr-10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all appearance-none cursor-pointer`}
                        style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.6rem auto' }}
                      >
                        <option value="" disabled className="bg-slate-900 text-slate-400">Select Software Type</option>
                        <option value="mobile" className="bg-slate-900 text-white">Mobile App</option>
                        <option value="web" className="bg-slate-900 text-white">Web Application</option>
                        <option value="saas" className="bg-slate-900 text-white">SaaS Product</option>
                        <option value="ai" className="bg-slate-900 text-white">AI / ML Solution</option>
                        <option value="business" className="bg-slate-900 text-white">Business Software</option>
                        <option value="marketplace" className="bg-slate-900 text-white">Marketplace</option>
                        <option value="other" className="bg-slate-900 text-white">Other</option>
                      </select>
                    </div>
                    {formErrors.softwareType && (
                      <p className="mt-1 text-xs text-rose-400">{formErrors.softwareType}</p>
                    )}
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="cta-details" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Details & Requirements <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute top-3.5 left-0 pl-3.5 pointer-events-none text-slate-500 group-focus-within:text-cyan-400 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        id="cta-details"
                        required
                        rows={4}
                        placeholder="Tell us about your project goals, scope, and timeline..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className={`w-full bg-slate-950/80 border ${
                          formErrors.details ? "border-rose-500" : "border-slate-800"
                        } rounded-xl py-3 pl-10 pr-4 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all resize-none`}
                      />
                    </div>
                    {formErrors.details && (
                      <p className="mt-1 text-xs text-rose-400">{formErrors.details}</p>
                    )}
                  </div>

                  {/* File Upload (PDF Only, Max 10MB) */}
                  <div>
                    <label htmlFor="cta-file-upload" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Attach Project Brief <span className="text-slate-500 font-normal">(PDF optional, max 10MB)</span>
                    </label>
                    <div className="relative group">
                      <input
                        type="file"
                        id="cta-file-upload"
                        accept=".pdf,application/pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="cta-file-upload"
                        className="w-full flex items-center justify-between bg-slate-950/80 border border-slate-800 border-dashed rounded-xl py-2.5 px-3.5 cursor-pointer hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all focus-within:ring-2 ring-cyan-500/50"
                      >
                        <div className="flex items-center gap-2.5 overflow-hidden">
                          <Paperclip className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                          <span className="text-slate-300 truncate text-xs">
                            {file ? (
                              <span className="text-white font-medium">{file.name}</span>
                            ) : (
                              "Attach Project Brief (PDF optional)"
                            )}
                          </span>
                        </div>
                        <span className="text-xs font-medium bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg flex-shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                          Browse
                        </span>
                      </label>
                    </div>
                    {fileError && (
                      <p className="mt-1 text-xs text-rose-400">{fileError}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    data-cursor="magnetic"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base relative overflow-hidden disabled:opacity-60 transition-all shadow-lg hover:shadow-[0_0_24px_rgba(6,182,212,0.4)] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    style={{
                      background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 50%, #8B5CF6 100%)",
                    }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
