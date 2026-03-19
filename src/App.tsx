import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  User, 
  Briefcase, 
  GraduationCap,
  ChevronRight,
  Linkedin,
  Facebook,
  Twitter,
  Menu,
  X
} from "lucide-react";

const Section = ({ children, title, id }: { children: ReactNode; title: string; id: string }) => (
  <section id={id} className="py-20 px-6 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-display text-4xl md:text-5xl mb-12 text-zinc-900 border-b border-zinc-200 pb-4">
        {title}
      </h2>
      {children}
    </motion.div>
  </section>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const skills = [
    "Customer Relationship Management",
    "Financial Operations",
    "Account Management",
    "Cash Handling & Processing",
    "Loan Processing Support",
    "Conflict Resolution",
    "Digital Banking Support",
    "Compliance & Risk Management"
  ];

  const experiences = [
    {
      role: "Customer Service Officer",
      company: "Cooperative Bank of Oromia",
      period: "Present",
      description: "Providing exceptional banking services to a diverse clientele, managing account operations, and ensuring customer satisfaction through efficient problem-solving and financial guidance.",
      achievements: [
        "Managed daily high-volume transactions with 100% accuracy.",
        "Onboarded over 500+ new customers with tailored banking solutions.",
        "Consistently ranked in the top 10% for customer satisfaction scores.",
        "Streamlined account opening processes, reducing wait times by 20%."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-800 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cyan-600/80 backdrop-blur-md z-50 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
          <span className="font-display text-xl font-bold tracking-tight text-black">IW.</span>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-cyan-50">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-cyan-700 border-t border-cyan-500/30 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-cyan-50 font-medium hover:text-white transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan-600 font-medium tracking-widest uppercase text-xs mb-4 block">
              Customer Service Professional
            </span>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] tracking-tighter text-black">
              Itana <br />
              <span className="italic text-black">Wekgari</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-zinc-600 leading-relaxed mb-10">
              Dedicated Customer Service Officer at Cooperative Bank of Oromia, 
              committed to delivering excellence in banking and financial services 
              with a focus on integrity and customer growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-all flex items-center gap-2 group"
              >
                Get in touch
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#experience" 
                className="border border-zinc-200 px-8 py-4 rounded-full font-medium hover:bg-zinc-50 transition-all"
              >
                View Experience
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
             className="relative block mt-12 lg:mt-0"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-100">
              <img 
                src="/hero-image.jpg" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/professional-banking/800/1000";
                }}
                alt="Itana Wekgari - Professional Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <Section title="About Me" id="about">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
            <p>
              With a strong foundation in banking and financial services, I have dedicated my career to bridging the gap between complex financial systems and the everyday needs of our customers.
            </p>
            <p>
              At Cooperative Bank of Oromia, I've honed my skills in customer relationship management, operational excellence, and financial advisory. I believe that every interaction is an opportunity to build trust and foster long-term partnerships.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -5, scale: 1.02, borderColor: "rgba(8, 145, 178, 0.3)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-shadow"
            >
              <Building2 className="w-8 h-8 text-cyan-600 mb-4" />
              <h3 className="font-bold mb-1">Banking</h3>
              <p className="text-sm text-zinc-500">Professional experience in retail banking operations.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5, scale: 1.02, borderColor: "rgba(8, 145, 178, 0.3)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg hover:shadow-cyan-500/5 transition-shadow"
            >
              <User className="w-8 h-8 text-cyan-600 mb-4" />
              <h3 className="font-bold mb-1">Service</h3>
              <p className="text-sm text-zinc-500">Customer-centric approach to problem solving.</p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section title="Professional Journey" id="experience">
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative pl-8 border-l-2 border-zinc-100 pb-12 last:pb-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white shadow-sm" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900">{exp.role}</h3>
                  <p className="text-cyan-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm font-mono text-zinc-500 bg-white border border-zinc-200 px-3 py-1 rounded-full w-fit shadow-sm">
                  {exp.period}
                </span>
              </div>
              <p className="text-zinc-600 mb-6 max-w-3xl leading-relaxed">
                {exp.description}
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-600">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <div id="skills" className="bg-zinc-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl mb-16 text-center">Core Competencies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.05 
                }}
                className="p-6 border border-white/10 rounded-2xl transition-colors text-center cursor-default"
              >
                <p className="font-medium text-zinc-300">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Section title="Let's Connect" id="contact">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
              I am always open to discussing new opportunities, professional collaborations, or banking insights.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Email</p>
                  <p className="font-medium">wekgariitana44@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Phone</p>
                  <p className="font-medium">+251910233083</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Location</p>
                  <p className="font-medium">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all shadow-sm"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all shadow-sm"
              />
            </div>
            <textarea 
              placeholder="Message" 
              rows={6}
              className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all resize-none shadow-sm"
            ></textarea>
            <button className="w-full bg-zinc-900 text-white py-4 rounded-2xl font-bold hover:bg-zinc-800 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold mb-2">Itana Wekgari</h3>
            <p className="text-zinc-400 text-sm">© 2026 All rights reserved.Itana Wekgari.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
