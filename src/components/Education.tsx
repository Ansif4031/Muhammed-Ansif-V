import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, MapPin } from 'lucide-react';
// import { Award } from 'lucide-react';

interface AcademicItem {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  details: string;
  coursework: string[];
}

/*
interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}
*/

const academicRecords: AcademicItem[] = [
  /*
  {
    institution: 'University of Calicut',
    degree: 'Bachelor of Computer Applications (BCA)',
    duration: '2019 – 2022',
    location: 'Bangalore, India',
    details: 'Focused on core computer science fundamentals, relational databases, web technologies, and software engineering methodologies.',
    coursework: ['Data Structures & Algorithms', 'Database Management Systems', 'Web Development (JS/HTML/CSS)', 'Software Engineering'],
  }
  */
];

/*
const certificationRecords: CertificationItem[] = [
  {
    title: 'MERN Stack Development Trainee Graduate',
    issuer: 'Brototype',
    date: '2023',
    credentialId: 'BRO-MERN-2023-4031',
  },
  {
    title: 'Advanced Node.js & Microservices Architecture',
    issuer: 'Udemy / Professional Academy',
    date: '2024',
  },
  {
    title: 'Azure Cloud Fundamentals (AZ-900)',
    issuer: 'Microsoft (Self-Study / Prep)',
    date: '2024',
  }
];
*/

export default function Education() {
  return (
    <section id="education" className="relative py-24 overflow-hidden border-t border-white/5 bg-[#030303]">
      {/* Background Radial Glow */}
      <div className="glow-bg-indigo top-[20%] left-[-10%] opacity-40" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-3">
            Academic <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full shadow-glow-blue" />
          <p className="font-sans text-dark-muted max-w-xl text-sm md:text-base mt-4 leading-relaxed">
            My academic foundation and qualifications in computer science and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Academic Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-12 max-w-3xl mx-auto w-full flex flex-col gap-6 text-left"
          >
            <div className="flex items-center gap-3.5 mb-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="font-display text-xl font-bold text-white tracking-wide">
                Academic Journey
              </h3>
            </div>

            {academicRecords.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-2xl border border-white/5 bg-dark-card/60 backdrop-blur-md shadow-glass flex flex-col hover:border-indigo-500/20 transition-all duration-300 relative group h-full justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h4 className="font-display text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-dark-muted font-sans bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-md">
                      <Calendar size={12} className="text-indigo-400" />
                      {edu.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-[13px] text-dark-muted mb-4 font-sans font-medium">
                    <span className="text-white font-bold">{edu.institution}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-indigo-500" />
                      {edu.location}
                    </span>
                  </div>

                  <p className="font-sans text-[14px] text-dark-muted leading-relaxed mb-6">
                    {edu.details}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-5 mt-auto">
                  <span className="flex items-center gap-1.5 text-[12px] font-sans font-bold text-indigo-400 uppercase tracking-wider mb-3">
                    <BookOpen size={12} />
                    Core Coursework
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/5 text-[12px] text-gray-400 font-sans"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Professional Certifications - Commented out for later expansion */}
          {/*
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-6 text-left"
          >
            <div className="flex items-center gap-3.5 mb-2">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Award size={20} />
              </div>
              <h3 className="font-display text-xl font-bold text-white tracking-wide">
                Certifications
              </h3>
            </div>

            <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-dark-card/60 backdrop-blur-md shadow-glass flex flex-col gap-5 hover:border-purple-500/20 transition-all duration-300 h-full">
              {certificationRecords.map((cert, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-1.5 pb-5 ${
                    idx !== certificationRecords.length - 1 ? 'border-b border-white/5' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-display text-[15px] font-bold text-white leading-snug group-hover:text-purple-400">
                      {cert.title}
                    </h4>
                    <span className="text-[12px] font-sans font-bold text-purple-400 flex-shrink-0">
                      {cert.date}
                    </span>
                  </div>
                  <p className="font-sans text-[13px] text-dark-muted">
                    Issued by <span className="text-gray-300 font-semibold">{cert.issuer}</span>
                  </p>
                  {cert.credentialId && (
                    <code className="text-[11px] bg-white/[0.03] border border-white/5 px-2 py-0.5 rounded text-indigo-400 w-fit font-mono mt-1">
                      ID: {cert.credentialId}
                    </code>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
          */}

        </div>

      </div>
    </section>
  );
}
