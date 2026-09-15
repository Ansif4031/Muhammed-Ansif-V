import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, AlertCircle, Copy, Check } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

const contactDetails: ContactInfo[] = [
  {
    icon: <Phone className="text-blue-600" size={20} />,
    label: 'Phone Call',
    value: '+91 9633374031',
    href: 'tel:+919633374031',
  },
  {
    icon: <Mail className="text-blue-600" size={20} />,
    label: 'Direct Email',
    value: 'muhammadansif9633@gmail.com',
    href: 'mailto:muhammadansif9633@gmail.com',
  },
  {
    icon: <MapPin className="text-blue-600" size={20} />,
    label: 'Location',
    value: 'Bangalore, India',
    href: '#',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleCopy = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopiedValue(value);
    setTimeout(() => {
      setCopiedValue(null);
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    setSubmitSuccess(false);

    const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const googleScriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    // Fallback simulated submission for local testing if no tokens are configured
    if (!web3formsKey && !googleScriptUrl) {
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setForm({ name: '', email: '', message: '' });
      }, 1500);
      return;
    }

    try {
      const promises = [];

      // 1. Submit to Google Sheets via Google Apps Script (if configured)
      if (googleScriptUrl) {
        const sheetData = new FormData();
        sheetData.append('name', form.name);
        sheetData.append('email', form.email);
        sheetData.append('message', form.message);
        sheetData.append('timestamp', new Date().toISOString());

        promises.push(
          fetch(googleScriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: sheetData,
          }).catch((err) => {
            console.error('Google Sheet submission error:', err);
            return null;
          })
        );
      }

      // 2. Submit to Web3Forms Email API (if configured)
      if (web3formsKey) {
        const mailData = new FormData();
        mailData.append('access_key', web3formsKey);
        mailData.append('name', form.name);
        mailData.append('email', form.email);
        mailData.append('message', form.message);
        mailData.append('subject', `New Message from Portfolio: ${form.name}`);
        mailData.append('from_name', 'Muhammed Ansif V Portfolio');

        promises.push(
          fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: mailData,
          }).then(async (res) => {
            if (!res.ok) {
              throw new Error('Email gateway returned a non-success response');
            }
            return res.json();
          })
        );
      }

      await Promise.all(promises);

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err: any) {
      console.error('Transmission error:', err);
      setIsSubmitting(false);
      setErrorMsg(err.message || 'Failed to transmit message. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 w-full overflow-hidden border-t border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Links and Context */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-center text-left"
          >
            <div className="mb-8">
              <span className="font-display font-bold text-xs tracking-widest text-blue-700 uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
                Connect Directly
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight text-[#0F172A] mt-4 leading-tight">
                Let's Build Something <span className="text-blue-600">Exceptional</span>
              </h2>
              <p className="font-sans text-[15px] text-slate-600 mt-4 leading-relaxed">
                I am actively <strong className="text-[#0F172A]">Open to Work</strong> for Full-Stack and Backend Developer roles. Whether you want to discuss a software engineering opportunity, explore collaborative projects, or just say hello, my inbox is open!
              </p>
            </div>

            {/* Info Cards */}
            <div className="flex flex-col gap-3.5">
              {contactDetails.map((detail, index) => {
                const isCopyable = detail.label === 'Phone Call' || detail.label === 'Direct Email';
                const isCopied = copiedValue === detail.value;

                return (
                  <motion.a
                    key={index}
                    href={detail.href}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group relative flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all duration-200"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                        {detail.icon}
                      </div>
                      <div>
                        <p className="font-display font-semibold text-[11px] tracking-wider text-slate-500 uppercase">
                          {detail.label}
                        </p>
                        <p className="font-sans font-bold text-[14.5px] text-[#0F172A] mt-0.5 group-hover:text-blue-600 transition-colors duration-200">
                          {detail.value}
                        </p>
                      </div>
                    </div>

                    {/* Copy clipboard button */}
                    {isCopyable && (
                      <button
                        onClick={(e) => handleCopy(e, detail.value)}
                        className={`p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-blue-600 transition-all duration-200 relative cursor-pointer ${
                          isCopied ? 'border-emerald-300 text-emerald-600 bg-emerald-50' : ''
                        }`}
                        title="Copy to clipboard"
                        aria-label={`Copy ${detail.label}`}
                      >
                        {isCopied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                        
                        <AnimatePresence>
                          {isCopied && (
                            <motion.span
                              initial={{ opacity: 0, y: 5, scale: 0.9 }}
                              animate={{ opacity: 1, y: -22, scale: 1 }}
                              exit={{ opacity: 0, y: 5, scale: 0.9 }}
                              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-sans font-bold text-[10px] px-2 py-0.5 rounded shadow-xs whitespace-nowrap pointer-events-none"
                            >
                              Copied!
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links Footer */}
            <div className="flex items-center gap-3.5 mt-8">
              <a
                href="https://github.com/Ansif4031"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all duration-200 cursor-pointer"
                aria-label="GitHub Profile"
              >
                <Github size={19} />
              </a>
              <a
                href="https://www.linkedin.com/in/mhammedansif/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-all duration-200 cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={19} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 w-full text-left"
          >
            <div className="rounded-2xl bg-white border border-slate-200 p-6 md:p-8 shadow-xs">
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5">
                      <CheckCircle size={30} className="text-emerald-600" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-[#0F172A]">
                      Message Transmitted!
                    </h3>
                    <p className="font-sans text-[15px] text-slate-600 mt-2.5 max-w-sm leading-relaxed">
                      Thank you, Muhammed Ansif V here! I have received your message. I will reach back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 px-6 py-2.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 font-sans font-bold text-[14px] transition-all duration-200 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <h3 className="font-display font-bold text-xl text-[#0F172A]">
                        Send Message
                      </h3>
                      <p className="font-sans text-[14px] text-slate-500 mt-1">
                        Use this form to send a message directly to my email inbox.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="flex items-center gap-3 p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-[14px] font-sans">
                        <AlertCircle size={18} className="shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="font-display font-bold text-[12px] tracking-wider text-slate-600 uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="px-4 py-3 rounded-lg bg-white border border-slate-300 hover:border-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-[#0F172A] font-sans text-[14px] transition-all duration-200 outline-none"
                        required
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-display font-bold text-[12px] tracking-wider text-slate-600 uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@example.com"
                        className="px-4 py-3 rounded-lg bg-white border border-slate-300 hover:border-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-[#0F172A] font-sans text-[14px] transition-all duration-200 outline-none"
                        required
                      />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="font-display font-bold text-[12px] tracking-wider text-slate-600 uppercase">
                        Message Description
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Hi Muhammed, we are looking to hire a Full-Stack Backend Specialist for our cloud integration project..."
                        className="px-4 py-3 rounded-lg bg-white border border-slate-300 hover:border-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-[#0F172A] font-sans text-[14px] transition-all duration-200 outline-none resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-sans font-bold text-[14px] py-3.5 rounded-lg shadow-sm transition-all duration-200 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Transmitting Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}