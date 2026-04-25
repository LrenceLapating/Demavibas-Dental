/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter,
  Menu,
  X,
  Stethoscope,
  Sparkles,
  Zap,
  ShieldCheck,
  Heart,
  Users
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif tracking-tighter"
        >
          DEMAVIBAS
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm uppercase tracking-widest hover:text-sage transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#appointment"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-charcoal text-white text-xs uppercase tracking-widest rounded-full hover:bg-sage transition-all duration-300"
          >
            Book Now
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ivory border-b border-charcoal/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#appointment" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block mt-4 text-center px-6 py-3 bg-charcoal text-white rounded-lg"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-ivory">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-sage/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-charcoal/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 text-sm uppercase tracking-[0.4em] text-sage font-medium"
        >
          Demavibas Dental Clinic
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif italic leading-[0.9] tracking-tighter mb-12"
        >
          Your Smile,<br />
          <span className="text-charcoal/40 not-italic">Our Masterpiece</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <a 
            href="#appointment" 
            className="group relative px-10 py-5 bg-charcoal text-white rounded-full overflow-hidden transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-xs font-medium">
              Book an Appointment <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-sage scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </a>
          <a href="#about" className="text-sm uppercase tracking-widest border-b border-charcoal/20 pb-1 hover:border-charcoal transition-all">
            Discover the Studio
          </a>
        </motion.div>
      </div>

      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-10 left-10 hidden lg:block"
      >
        <div className="flex gap-4 items-center opacity-30">
          <div className="w-12 h-[1px] bg-charcoal" />
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to Explore</span>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="relative"
        >
          <div className="aspect-[4/5] bg-sage/10 rounded-[40px] relative z-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
              alt="Serene Dental Clinic" 
              className="w-full h-full object-cover grayscale-[30%] hover:scale-105 transition-transform duration-1000"
            />
          </div>
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 bg-ivory p-8 rounded-3xl shadow-xl hidden md:block z-10"
          >
            <h4 className="text-3xl font-serif mb-1 italic">Est. 2014</h4>
            <p className="text-[10px] uppercase tracking-widest text-charcoal/60">A decade of refinement</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
            Where Precision <br />
            <span className="italic text-sage font-light">Meets Serenity</span>
          </h2>
          <div className="space-y-6 text-lg text-charcoal/70 font-light leading-relaxed">
            <p>
              At Demavibas Dental Clinic, we believe dentistry is an intersection of medical excellence and artistic vision. Our studio was designed to dissolve the clinical anxiety typically associated with dental visits.
            </p>
            <p>
              Founded on the principles of holistic care and aesthetic refinement, we provide a sanctuary where every treatment is a step towards your most confident self. From the moment you enter, our deep ivory palette and calming sage accents welcome you to a new era of dental wellness.
            </p>
          </div>
          <div className="mt-12 flex gap-12">
            <div>
              <p className="text-4xl font-serif italic mb-2">12k+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">Procedures</p>
            </div>
            <div className="w-[1px] h-full bg-charcoal/10" />
            <div>
              <p className="text-4xl font-serif italic mb-2">99%</p>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'General Dentistry', desc: 'Pragmatic, preventive care for life-long health.', icon: <Stethoscope strokeWidth={1} /> },
    { title: 'Cosmetic Dentistry', desc: 'Veneers and smile makeovers with an artistic touch.', icon: <Sparkles strokeWidth={1} /> },
    { title: 'Orthodontics', desc: 'Modern alignment solutions for a seamless journey.', icon: <Zap strokeWidth={1} /> },
    { title: 'Teeth Whitening', desc: 'Brighten your natural brilliance in a single visit.', icon: <Heart strokeWidth={1} /> },
    { title: 'Dental Implants', desc: 'Permanent restorations with biocompatible precision.', icon: <ShieldCheck strokeWidth={1} /> },
    { title: 'Emergency Care', desc: 'Immediate, compassionate relief when you need it most.', icon: <Clock strokeWidth={1} /> },
  ];

  return (
    <section id="services" className="py-32 bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="block mb-4 text-xs uppercase tracking-[0.4em] text-sage">Excellence in Care</span>
            <h2 className="text-5xl md:text-7xl">Curated Services</h2>
          </div>
          <p className="max-w-xs text-ivory/50 text-sm leading-relaxed mb-4 font-light">
            Each treatment is tailored to the unique anatomy and aesthetic goals of our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ backgroundColor: 'rgba(138, 174, 146, 0.1)' }}
              className="group p-12 bg-charcoal transition-all duration-500 cursor-pointer"
            >
              <div className="w-12 h-12 mb-8 text-sage group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {service.title}
              </h3>
              <p className="text-ivory/40 text-sm leading-relaxed font-light group-hover:text-ivory/70 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const stats = [
    { label: 'Clinical Experience', value: '10+', sub: 'Years of Excellence', icon: <Users size={20} /> },
    { label: 'Happy Patients', value: '5k+', sub: 'Smiling faces globally', icon: <Star size={20} /> },
    { label: 'Technology', value: 'AI', sub: 'Guided Precision Diagnoses', icon: <Sparkles size={20} /> },
  ];

  return (
    <section id="why-us" className="py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl mb-20 italic">The Demavibas Standard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-12 border border-charcoal/5 rounded-[40px] hover:shadow-2xl hover:shadow-sage/10 transition-all duration-700 bg-white/50"
            >
              <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6 text-sage">
                {stat.icon}
              </div>
              <p className="text-6xl font-serif mb-2">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] font-medium mb-1">{stat.label}</p>
              <p className="text-[10px] text-charcoal/40 uppercase tracking-widest">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const reviews = [
    { name: 'Elena Rossi', role: 'Architect', quote: 'The environment alone calmed my lifelong dental fear. The results are nothing short of transformative.', rating: 5 },
    { name: 'Markus Thorne', role: 'Creative Director', quote: 'Meticulous attention to detail. It feels less like a clinic and more like a high-end design studio.', rating: 5 },
    { name: 'Sarah Jenkins', role: 'Musician', quote: 'My whitening treatment was painless and the results were stunningly natural. Highly recommend.', rating: 5 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-32 bg-charcoal overflow-hidden text-center relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] text-[20vw] font-serif italic text-sage select-none">"</div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-sage text-sage" />
              ))}
            </div>
            <p className="text-3xl md:text-4xl font-serif italic mb-12 leading-relaxed text-ivory">
              “{reviews[active].quote}”
            </p>
            <h4 className="text-sm uppercase tracking-[0.3em] font-medium mb-1">{reviews[active].name}</h4>
            <p className="text-[10px] uppercase tracking-widest text-ivory/40">{reviews[active].role}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-3 mt-20">
          {reviews.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${active === i ? 'w-8 bg-sage' : 'bg-ivory/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Appointment = () => {
  return (
    <section id="appointment" className="py-32 px-6 flex justify-center bg-ivory">
      <div className="bg-sage/5 p-12 md:p-20 rounded-[60px] max-w-5xl w-full border border-sage/10 relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-sage/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sage/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight">Begin Your <br /><span className="italic font-light">Transformation</span></h2>
            <p className="text-charcoal/60 leading-relaxed mb-12">
              Select your preferred service and time. Our concierge will contact you within 24 hours to confirm your tailored visit.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sage/10 rounded-xl text-sage"><MapPin size={20} /></div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold mb-1">Our Studio</p>
                  <p className="text-sm text-charcoal/60">12 Precision Ave, Wellness District, NY</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sage/10 rounded-xl text-sage"><Phone size={20} /></div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold mb-1">Direct Line</p>
                  <p className="text-sm text-charcoal/60">+1 (555) STUDIO-D</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full bg-white border border-charcoal/5 px-6 py-4 rounded-2xl focus:outline-none focus:border-sage transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Email Address</label>
                <input type="email" placeholder="hello@studio.com" className="w-full bg-white border border-charcoal/5 px-6 py-4 rounded-2xl focus:outline-none focus:border-sage transition-all" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Desired Service</label>
                <select className="w-full bg-white border border-charcoal/5 px-6 py-4 rounded-2xl focus:outline-none focus:border-sage transition-all appearance-none cursor-pointer">
                  <option>Cosmetic Consultation</option>
                  <option>General Checkup</option>
                  <option>Whitening</option>
                  <option>Invisalign Assessment</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Preferred Date</label>
                <input type="date" className="w-full bg-white border border-charcoal/5 px-6 py-4 rounded-2xl focus:outline-none focus:border-sage transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">Notes (Optional)</label>
              <textarea placeholder="Anything we should know?" rows={3} className="w-full bg-white border border-charcoal/5 px-6 py-4 rounded-2xl focus:outline-none focus:border-sage transition-all" />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-charcoal text-white uppercase tracking-[0.2em] text-xs font-bold rounded-2xl hover:bg-sage transition-all duration-500 shadow-xl shadow-charcoal/10"
            >
              Request Appointment
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory py-24 px-6 border-t border-ivory/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-4xl font-serif tracking-tighter mb-8 leading-none">DEMAVIBAS</h2>
          <p className="max-w-sm text-ivory/40 leading-relaxed font-light mb-12">
            Pioneering a new standard in aesthetic dental care through the fusion of clinical expertise and mindful hospitality.
          </p>
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 border border-ivory/10 rounded-full flex items-center justify-center hover:bg-sage transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 border border-ivory/10 rounded-full flex items-center justify-center hover:bg-sage transition-all"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 border border-ivory/10 rounded-full flex items-center justify-center hover:bg-sage transition-all"><Twitter size={18} /></a>
          </div>
        </div>

        <div>
          <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-sage">Studio Hours</h5>
          <ul className="space-y-4 text-sm text-ivory/60 font-light">
            <li className="flex justify-between border-b border-ivory/5 pb-2"><span>Mon - Thu</span> <span>08:00 - 18:00</span></li>
            <li className="flex justify-between border-b border-ivory/5 pb-2"><span>Friday</span> <span>09:00 - 16:00</span></li>
            <li className="flex justify-between border-b border-ivory/5 pb-2"><span>Saturday</span> <span>By Request</span></li>
            <li className="flex justify-between text-sage/60"><span>Sunday</span> <span>Closed</span></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-sage">Experience</h5>
          <ul className="space-y-4 text-sm text-ivory/60 font-light">
            <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Treatments</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors">Results</a></li>
            <li><a href="#appointment" className="hover:text-white transition-colors">Appointments</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-ivory/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-ivory/30">© 2026 Demavibas Dental Clinic. Art in every smile.</p>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-ivory/30">
          <a href="#" className="hover:text-sage transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-sage transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-sage selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}
