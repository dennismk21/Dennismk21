import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Map, 
  Satellite, 
  Code, 
  Mail, 
  ChevronRight, 
  Github, 
  Linkedin, 
  Twitter,
  Menu,
  X,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

// Types for our data
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const services: Service[] = [
  {
    title: "GIS & Spatial Analytics",
    description: "Advanced mapping, geoprocessing, and data management using industry-leading tools like ArcGIS Pro to uncover spatial trends.",
    icon: <Map className="w-8 h-8 text-sky-400" />,
    link: "#contact"
  },
  {
    title: "Remote Sensing Solutions",
    description: "Extracting critical insights from earth observation data. Expertise in interpreting Sentinel imagery and generating custom color composites.",
    icon: <Satellite className="w-8 h-8 text-sky-400" />,
    link: "#contact"
  },
  {
    title: "Full-Stack Web Development",
    description: "Designing and building fast, accessible, and responsive applications tailored to display complex data sets seamlessly.",
    icon: <Code className="w-8 h-8 text-sky-400" />,
    link: "#contact"
  }
];

const projects: Project[] = [
  {
    title: "Agricultural Monitoring Dashboard",
    description: "Processed satellite imagery to track vegetation health across agricultural zones, visualized in a custom web dashboard.",
    tags: ["Remote Sensing", "Sentinel-2"],
    image: "https://picsum.photos/seed/agriculture/800/600"
  },
  {
    title: "Urban Infrastructure Mapper",
    description: "Conducted extensive spatial analysis to optimize resource allocation for regional development projects in East Africa.",
    tags: ["ArcGIS Pro", "Urban Planning"],
    image: "https://picsum.photos/seed/urban/800/600"
  },
  {
    title: "Enterprise Data Portal",
    description: "Designed a clean, modern interface for a client to interact with massive datasets seamlessly and securely.",
    tags: ["Web Dev", "UI/UX"],
    image: "https://picsum.photos/seed/data/800/600"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-sky-500/30">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-slate-950/80 backdrop-blur-md py-4 border-slate-800' 
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-extrabold tracking-tighter text-sky-400">
            Dennismk21<span className="text-slate-50">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-md text-sm font-semibold transition-all shadow-lg shadow-sky-500/20"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-300 hover:text-sky-400"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-sky-500 text-white px-5 py-3 rounded-md text-center font-semibold"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Mapping the Future of <span className="text-sky-400">Digital Data.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Delivering high-impact digital solutions and advanced geospatial analytics to transform complex data into actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#portfolio" 
                  className="group bg-slate-900 border border-slate-800 hover:border-sky-500/50 text-slate-50 px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact" 
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-xl shadow-sky-500/25 flex items-center justify-center"
                >
                  Let's Work Together
                </a>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 bg-sky-400 rounded-full"
              />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-slate-800 rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img 
                    src="https://picsum.photos/seed/portrait/800/1000" 
                    alt="Professional Portrait" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-sky-500/10 group-hover:bg-transparent transition-colors" />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-sky-500/30 rounded-br-2xl -z-10" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-sm font-bold uppercase tracking-widest text-sky-400">About Me</h2>
                <h3 className="text-4xl font-bold text-slate-50">Problem Solver. Data Driven.</h3>
                <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                  <p>
                    I specialize in bridging the gap between deep technical analysis and user-friendly digital solutions. With a strong background in spatial data and modern development workflows, I build tools that help businesses and organizations understand their environments better.
                  </p>
                  <p>
                    Whether it's building a responsive web portal or processing complex remote sensing data, my mission is to deliver reliable, scalable, and elegant solutions.
                  </p>
                </div>
                <div className="pt-6 flex gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-slate-50">5+</p>
                    <p className="text-xs uppercase tracking-wider text-slate-500">Years Exp.</p>
                  </div>
                  <div className="w-px h-12 bg-slate-800" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-slate-50">50+</p>
                    <p className="text-xs uppercase tracking-wider text-slate-500">Projects</p>
                  </div>
                  <div className="w-px h-12 bg-slate-800" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-slate-50">20+</p>
                    <p className="text-xs uppercase tracking-wider text-slate-500">Clients</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-sky-400 mb-3">Expertise</h2>
              <h3 className="text-4xl font-bold">Core Competencies</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-slate-900 border border-slate-800 rounded-xl hover:border-sky-500/50 transition-all group"
                >
                  <div className="mb-6 p-3 bg-slate-950 inline-block rounded-lg border border-slate-800 group-hover:border-sky-500/30 transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-slate-50">{service.title}</h4>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a 
                    href={service.link} 
                    className="inline-flex items-center gap-2 text-sky-400 font-semibold hover:text-sky-300 transition-colors"
                  >
                    Discuss a Project <ChevronRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-sky-400 mb-3">Portfolio</h2>
                <h3 className="text-4xl font-bold">Featured Work</h3>
              </div>
              <a href="#" className="text-slate-400 hover:text-sky-400 font-medium flex items-center gap-2 transition-colors">
                View all projects <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 group"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-slate-900 text-sky-400 rounded border border-slate-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-slate-50 group-hover:text-sky-400 transition-colors">{project.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-sky-400 mb-3">Get In Touch</h2>
              <h3 className="text-4xl font-bold mb-6">Ready to Start?</h3>
              <p className="text-slate-400 text-lg mb-12">
                Drop me a message to discuss your next big project or consulting needs. I'm always open to new opportunities.
              </p>

              <form 
                className="space-y-4 text-left"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for reaching out! I will get back to you shortly.');
                  (e.target as HTMLFormElement).reset();
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      required
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors text-slate-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Your Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      required
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors text-slate-50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="Tell me about your project..." 
                    required
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-sky-500 transition-colors text-slate-50 resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2"
                >
                  Send Message <Mail className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-extrabold tracking-tighter text-sky-400">
              Dennismk21<span className="text-slate-50">.</span>
            </a>
            <p className="text-slate-500 text-sm mt-2">
              &copy; {new Date().getFullYear()} Dennismk21. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          <nav className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#home" className="hover:text-slate-50 transition-colors">Home</a>
            <a href="#about" className="hover:text-slate-50 transition-colors">About</a>
            <a href="#portfolio" className="hover:text-slate-50 transition-colors">Work</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
