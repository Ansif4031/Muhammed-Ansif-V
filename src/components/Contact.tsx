import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, AlertCircle, Copy, Check } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  accent: string;
}

const contactDetails: ContactInfo[] = [
  {
    icon: <Phone className="text-indigo-400" size={20} />,
    label: 'Phone Call',
    value: '+91 9633374031',
    href: 'tel:+919633374031',
    accent: 'group-hover:border-indigo-500/35 group-hover:text-indigo-400',
  },
  {
    icon: <Mail className="text-purple-400" size={20} />,
    label: 'Direct Email',
    value: 'muhammadansif9633@gmail.com',
    href: 'mailto:muhammadansif9633@gmail.com',
    accent: 'group-hover:border-purple-500/35 group-hover:text-purple-400',
  },
  {
    icon: <MapPin className="text-blue-400" size={20} />,
    label: 'Location',
    value: 'Bangalore, India',
    href: '#',
    accent: 'group-hover:border-blue-500/35 group-hover:text-blue-400',
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
      }, 2000);
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
            mode: 'no-cors', // Essential: 'no-cors' mode avoids CORS preflight failures
            body: sheetData,
          }).catch((err) => {
            console.error('Google Sheet submission error (ignored in favor of concurrent flow):', err);
            return null; // Return null so Promise.all still completes successfully
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
    <section id="contact" className="relative py-24 md:py-32 w-full overflow-hidden">
      {/* Background Radial Glow Accents */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-purple-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full bg-indigo-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Links and Context */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center h-full"
          >
            <div className="mb-8">
              <span className="font-display font-bold text-xs tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20">
                Connect Directly
              </span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-white mt-4 leading-tight">
                Let's Build Something <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Exceptional</span>
              </h2>
              <p className="font-sans text-[16px] text-dark-muted mt-4 leading-relaxed">
                I am actively **Open to Work** for Full-Stack and Backend Developer roles. Whether you want to discuss a software engineering opportunity, explore collaborative projects, or just say hello, my inbox is open!
              </p>
            </div>

            {/* Interactive Info Cards */}
            <div className="flex flex-col gap-4">
              {contactDetails.map((detail, index) => {
                const isCopyable = detail.label === 'Phone Call' || detail.label === 'Direct Email';
                const isCopied = copiedValue === detail.value;

                return (
                  <motion.a
                    key={index}
                    href={detail.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative flex items-center justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] backdrop-blur-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center transition-all duration-300 ${detail.accent}`}>
                        {detail.icon}
                      </div>
                      <div>
                        <p className="font-display font-medium text-[12px] tracking-wider text-dark-muted uppercase">
                          {detail.label}
                        </p>
                        <p className="font-sans font-semibold text-[15px] text-white mt-0.5 group-hover:text-indigo-400 transition-colors duration-300">
                          {detail.value}
                        </p>
                      </div>
                    </div>

                    {/* Copy clipboard button */}
                    {isCopyable && (
                      <button
                        onClick={(e) => handleCopy(e, detail.value)}
                        className={`p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/10 text-dark-muted hover:text-white transition-all duration-200 relative ${
                          isCopied ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' : ''
                        }`}
                        title="Copy to clipboard"
                        aria-label={`Copy ${detail.label}`}
                      >
                        {isCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                        
                        <AnimatePresence>
                          {isCopied && (
                            <motion.span
                              initial={{ opacity: 0, y: 10, scale: 0.9 }}
                              animate={{ opacity: 1, y: -25, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.9 }}
                              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white font-sans font-bold text-[10px] px-2 py-0.5 rounded shadow-lg whitespace-nowrap pointer-events-none"
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
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://github.com/MuhammadAnsif"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.01] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 flex items-center justify-center text-dark-muted hover:text-white transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammed-ansif-v-860081254/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.01] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 flex items-center justify-center text-dark-muted hover:text-white transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 w-full"
          >
            <div className="relative rounded-2xl bg-white/[0.02] border border-white/5 p-6 md:p-8 backdrop-blur-xl shadow-glass-lg hover:shadow-[0_0_50px_rgba(99,102,241,0.04)] transition-all duration-500 overflow-hidden">
              
              {/* Pulse outline glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-purple-500/0 to-pink-500/5 opacity-50 pointer-events-none" />

              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 shadow-glow-emerald">
                      <CheckCircle size={32} className="text-emerald-400" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-white">
                      Message Transmitted!
                    </h3>
                    <p className="font-sans text-[15px] text-dark-muted mt-3 max-w-sm leading-relaxed">
                      Thank you, Muhammed Ansif V here! I have received your message in my logs and inbox. I will reach back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-8 px-6 py-2.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-white font-sans font-semibold text-[14px] transition-all duration-300"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">
                        Send Message
                      </h3>
                      <p className="font-sans text-[14px] text-dark-muted mt-1">
                        Use this form to send a message directly to my database and email inbox.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[14px] font-sans">
                        <AlertCircle size={18} className="shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-display font-semibold text-[12px] tracking-wider text-dark-muted uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="px-4 py-3 rounded-xl bg-[#05050A]/70 border border-white/10 hover:border-white/20 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-white font-sans text-[14px] transition-all duration-300 outline-none"
                        required
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-display font-semibold text-[12px] tracking-wider text-dark-muted uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@example.com"
                        className="px-4 py-3 rounded-xl bg-[#05050A]/70 border border-white/10 hover:border-white/20 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-white font-sans text-[14px] transition-all duration-300 outline-none"
                        required
                      />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="font-display font-semibold text-[12px] tracking-wider text-dark-muted uppercase">
                        Message Description
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Hi Muhammed, we are looking to hire a Full-Stack Backend Specialist for our cloud integration project..."
                        className="px-4 py-3 rounded-xl bg-[#05050A]/70 border border-white/10 hover:border-white/20 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-white font-sans text-[14px] transition-all duration-300 outline-none resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:from-indigo-600/50 disabled:to-purple-600/50 disabled:cursor-not-allowed text-white font-sans font-bold text-[14px] py-4 rounded-xl shadow-glow-blue hover:shadow-glow-purple transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
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