/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Clock, 
  Calendar, 
  ChevronRight, 
  Menu, 
  X,
  Star,
  ExternalLink,
  MessageCircle,
  Scissors
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';

const SERVICES = [
  { name: 'Manicure', price: '$25+', desc: 'Trimming, shaping, cuticle care, and polish.' },
  { name: 'Pedicure', price: '$40+', desc: 'Relaxing soak, exfoliation, massage, and polish.' },
  { name: 'Gel Polish', price: '$35+', desc: 'Long-lasting, shiny gel color for your nails.' },
  { name: 'Acrylic Full Set', price: '$55+', desc: 'Durable extensions with a natural finish.' },
  { name: 'Dip Powder', price: '$50+', desc: 'Odor-free, strong protection for natural nails.' },
  { name: 'Nail Art', price: '$10+', desc: 'Custom designs, glitters, and hand-painted art.' },
];

const GALLERY = [
  { id: 1, url: 'https://lh3.googleusercontent.com/Q5GKV4IimqGXSCDO_7h2l_akSEojLHckmalJy4OJHIArsEAspElnBbPtEYSTI4fo942r9EbMx3oyRI75NQ=s360-w360-h360', category: 'Manicure' },
  { id: 2, url: 'https://lh3.googleusercontent.com/8dwaGmy0Pdr8eSiL9pbtqVXvP1USrcJXsrnkfLhOqvGHNqKLlf2AvcgBNsV_zkelJ1jS2qdJqTBGtzIeYw=s360-w360-h360', category: 'Pedicure' },
  { id: 3, url: 'https://lh3.googleusercontent.com/3OJBVps8F6SUyzl9bY3shDqeqMu8Tbdc-sEyNluebYdui8ktTzCw1w1Z3fZtQOX3fDqUZT_PXj5Bw7C1Bg=s360-w360-h360', category: 'Art' },
  { id: 4, url: 'https://lh3.googleusercontent.com/bir7RXz8UTmIwP3bOnFbAzakafPpk-wY4v83Ckroe8wdDlEvUeSKac8eHlO-BRiKXLYQ26l7N5HrTNCj0A=s360-w360-h360', category: 'Gel' },
  { id: 5, url: 'https://lh3.googleusercontent.com/NTapZGiYSv41mJfYH2or4K1lY7tmuIEo2tSScibsxSmF7d-d2UM49b-NvJB_vnULly4GdxyW_o4IWq2BNg=s360-w360-h360', category: 'Acrylic' },
  { id: 6, url: 'https://lh3.googleusercontent.com/UtT5Kc0BIXprJpCV7qIezH41Gn-ANO9YB5vEABxyU_vjyjZjPiuxWfvnmQB7u4dgbb97tCf-GLVJVrkIug=s360-w360-h360', category: 'Design' },
  { id: 5, url: 'https://lh3.googleusercontent.com/zmTgr5FyDTgl6ONPB-fzIcv5SoOMAvc4-1AtKe30Zzi6E3tyelfHQsOGoB4Asu6IKAfrejmvf4UlJuxkFA=s360-w360-h360', category: 'Acrylic' },
  { id: 6, url: 'https://lh3.googleusercontent.com/mKRXsJPXN51ZkeY76HeYM0zuz5sxA0Pm8Lbrf9waeblpWoD_9mAKQdnW58-HWvRhYYxqaYMM2AdDAmW9=s360-w360-h360', category: 'Design' },
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

  const salonInfo = {
    name: "All Perfect Nails",
    address: "4330 Clayton Road #D, Concord CA 94521",
    phone: "925-827-1618",
    email: "allperfectnails@gmail.com",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM | Sun: 10:00 AM - 5:00 PM",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=4330+Clayton+Road+%23D,+Concord+CA+94521"
  };

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Price', href: '#price' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Booking', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleBookingEmail = () => {
    const subject = encodeURIComponent("Booking Appointment - All Perfect Nails");
    const body = encodeURIComponent("Full Name: \nPhone Number: \nDesired Service: \nPreferred Date & Time:");
    window.location.href = `mailto:${salonInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-orange selection:text-white">
      
      {/* Top Banner - Contact Info */}
      <div className="bg-brand-orange text-white py-2 px-4 text-xs tracking-widest hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2 font-bold"><Phone size={14} /> {salonInfo.phone}</span>
            <span className="flex items-center gap-2 font-bold"><MapPin size={14} /> {salonInfo.address}</span>
          </div>
          <div className="flex gap-4 font-bold uppercase">
            <Clock size={14} /> {salonInfo.hours}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 h-20 transition-all duration-300 border-b ${scrolled ? 'bg-brand-bg/95 backdrop-blur-md border-brand-gray shadow-sleek' : 'bg-brand-bg border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-orange/20">
              <Scissors size={20} />
            </div>
            <span className="font-display text-xl font-bold tracking-widest uppercase text-brand-text">All Perfect Nails</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-[13px] font-bold text-brand-muted hover:text-brand-orange transition-colors uppercase tracking-[0.1em]"
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView()}
              className="bg-brand-orange text-white px-6 py-2.5 rounded-md text-[12px] font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-brand-orange/20"
            >
              Order Online
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-text focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              className="md:hidden bg-brand-bg border-b border-brand-gray origin-top overflow-hidden"
            >
              <div className="px-6 pt-4 pb-8 space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-bold text-brand-muted hover:text-brand-orange transition-colors uppercase tracking-widest"
                  >
                    {item.name}
                  </a>
                ))}
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('booking')?.scrollIntoView();
                  }}
                  className="w-full bg-brand-orange text-white px-6 py-4 rounded-md text-sm font-bold uppercase tracking-widest"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[650px] mx-6 my-6 rounded-2xl overflow-hidden flex items-center bg-brand-surface border border-brand-none">
        <div className="absolute inset-0">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijcPJsjRgMHk0EhvG7F8NVEy-6JfH2G0EJTasoIGxEDBXiYlrz3K73YJ_HhVJFBmb7j-h4loOhaMmr_a54JuyjZgUUTDUi-WAcX212jNb3p8OJZzb_tvg4-vuZeEHQhNtBKRYsBPOcHtKjh9z3fs3MudLiGfV1qGthHKzs5bdQeIillg3u_aVsvs9G/s1600/M2.png" 
            alt="Modern Nail Salon" 
            className="w-full h-full object-cover opacity-90 grayscale brightness-100"
            referrerPolicy="no-referrer"/>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-10 w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 bg-brand-orange/10 border border-brand-orange/20 rounded-full text-brand-orange text-[10px] uppercase font-bold tracking-[0.3em] mb-6">
              Establish Excellence
            </div>
            <h1 className="font-display text-5xl md:text-8xl font-bold mb-6 leading-none tracking-tight text-brand-text">
              All <span className="text-brand-orange">Perfect</span> Nails
            </h1>
            <p className="text-lg md:text-xl mb-10 text-brand-muted font-medium leading-relaxed max-w-xl mx-auto">
              Elevate your style with precision hand-care and artistic designs. We bring perfection to your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView()}
                className="bg-brand-orange text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest transition-all shadow-xl shadow-brand-orange/20 hover:scale-105"
              >
                Appointment
              </button>
              <a 
                href={`tel:${salonInfo.phone}`}
                className="border border-brand-gray bg-brand-surface/50 text-brand-text px-10 py-4 rounded-md font-bold uppercase tracking-widest transition-all hover:bg-brand-gray text-center"
              >
                Call: {salonInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-8 bg-brand-orange"></div>
                <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em]">Our Expertise</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-text">Professional Services</h2>
            </div>
            <p className="max-w-md text-brand-muted text-sm leading-relaxed">
              We provide top-tier services using high-quality products in a strictly sanitized environment for your safety and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-brand-surface border border-brand-gray hover:border-brand-orange transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Scissors size={64} className="text-brand-text" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-brand-orange transition-colors">{service.name}</h3>
                  <span className="text-lg font-bold text-brand-orange">{service.price}</span>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-muted group-hover:text-brand-orange transition-colors">
                  Details <ChevronRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Menu Section */}
      <section id="price" className="py-24 px-6 bg-brand-surface/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-surface border border-brand-gray p-10 md:p-16 rounded-3xl shadow-sleek">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-brand-text mb-4">Service Menu</h2>
              <div className="flex items-center justify-center gap-4 text-brand-orange">
                <div className="h-px w-12 bg-current"></div>
                <Star size={12} fill="currentColor" />
                <div className="h-px w-12 bg-current"></div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="grid grid-cols-1 gap-6">
                {SERVICES.map((item) => (
                  <div key={item.name} className="flex justify-between items-baseline group">
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-brand-text group-hover:text-brand-orange transition-colors">{item.name}</span>
                        <div className="flex-1 border-b border-brand-gray border-dashed"></div>
                        <span className="font-bold text-brand-orange">{item.price}</span>
                      </div>
                      <p className="text-xs text-brand-muted italic mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-10 border-t border-brand-gray">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange mb-8 text-center">Extras & Enhancements</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-brand-gray pb-2">
                    <span className="text-brand-muted">French Tip</span>
                    <span className="font-bold text-brand-text">$10+</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-brand-gray pb-2">
                    <span className="text-brand-muted">Nail Repair</span>
                    <span className="font-bold text-brand-text">$5+</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-brand-gray pb-2">
                    <span className="text-brand-muted">Paraffin Wax</span>
                    <span className="font-bold text-brand-text">$15+</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-brand-gray pb-2">
                    <span className="text-brand-muted">Massage (Add-on)</span>
                    <span className="font-bold text-brand-text">$10+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 flex flex-col items-center bg-brand-bg rounded-2xl p-8 border border-brand-gray">
              <div className="mb-4 p-3 bg-white rounded-lg">
                <QRCodeSVG value="https://allperfectnails.com/menu" size={100} fgColor="#0A0A0A" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-orange mb-1">Scan for Full Menu</p>
              <p className="text-[9px] text-brand-muted uppercase">Updates every season</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-8 bg-brand-orange"></div>
                <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em]">Latest Work</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-brand-text">Our Gallery</h2>
            </div>
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-muted hover:text-brand-orange transition-colors group">
              Follow us on Instagram <ExternalLink size={14} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY.map((img, index) => (
              <motion.div 
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative aspect-square overflow-hidden rounded-xl bg-brand-surface group"
              >
                <img 
                  src={img.url} 
                  alt={img.category} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">{img.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-surface border border-brand-gray rounded-3xl p-10 md:p-16 shadow-sleek">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em] block mb-4">Ready to Shine?</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-text mb-8">Book Online</h2>
                <p className="text-brand-muted leading-relaxed mb-12">
                  Connect with us via email or phone to secure your spot. We recommend booking at least 24 hours in advance.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-gray rounded-lg flex items-center justify-center text-brand-orange">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-brand-muted tracking-widest mb-0.5">Call Office</p>
                      <a href={`tel:${salonInfo.phone}`} className="text-lg font-bold hover:text-brand-orange transition-colors">{salonInfo.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-gray rounded-lg flex items-center justify-center text-brand-orange">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-brand-muted tracking-widest mb-0.5">Email Us</p>
                      <a href={`mailto:${salonInfo.email}`} className="text-lg font-bold hover:text-brand-orange transition-colors">{salonInfo.email}</a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                   <button 
                     onClick={handleBookingEmail}
                     className="flex-1 bg-brand-orange text-white py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:opacity-90 flex items-center justify-center gap-2"
                   >
                     Message Now <MessageCircle size={16} />
                   </button>
                   <a 
                     href={`tel:${salonInfo.phone}`}
                     className="flex-1 bg-brand-gray text-brand-text py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-[#2F2F2F] text-center"
                   >
                     Direct Call
                   </a>
                </div>
              </div>

              <div className="bg-brand-bg rounded-2xl p-8 md:p-10 border border-brand-gray">
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleBookingEmail(); }}>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted ml-0.5">Full Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full bg-brand-surface border border-brand-gray focus:border-brand-orange focus:ring-0 rounded-lg p-4 text-sm text-brand-text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted ml-0.5">Phone Number</label>
                    <input type="tel" required placeholder="(925) 000-0000" className="w-full bg-brand-surface border border-brand-gray focus:border-brand-orange focus:ring-0 rounded-lg p-4 text-sm text-brand-text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted ml-0.5">Select Service</label>
                    <select className="w-full bg-brand-surface border border-brand-gray focus:border-brand-orange focus:ring-0 rounded-lg p-4 text-sm text-brand-text appearance-none cursor-pointer">
                      <option>Select Dịch Vụ...</option>
                      {SERVICES.map(s => <option key={s.name}>{s.name}</option>)}
                    </select>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-brand-orange text-white py-5 rounded-lg font-bold uppercase tracking-widest hover:opacity-95 shadow-lg shadow-brand-orange/10 mt-4"
                  >
                    Confirm Order Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-24 px-6 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col justify-center">
              <span className="text-brand-orange text-xs font-bold uppercase tracking-[0.3em] block mb-4">Visit Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-text mb-12">Salon Location</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 text-brand-orange">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Address</h4>
                    <p className="text-brand-muted leading-relaxed">4330 Clayton Road #D, Concord CA 94521</p>
                    <a href={salonInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-widest mt-3 hover:underline">
                      Google Maps Direct <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 text-brand-orange">
                    <Clock />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-1 text-sm text-brand-muted">
                      <span>Mon - Sat:</span> <span className="font-bold text-brand-text">9:00 AM - 7:00 PM</span>
                      <span>Sunday:</span> <span className="font-bold text-brand-text">10:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[450px] lg:h-auto rounded-3xl overflow-hidden shadow-sleek border border-brand-gray grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.6946603463865!2d-122.01511512344778!3d37.937402971944884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808560f64c634cbb%3A0xe744e45c48641113!2s4330%20Clayton%20Rd%20%23D%2C%20Concord%2C%20CA%2094521!5e0!3m2!1sen!2sus!4v1713364521456" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-surface border-t border-brand-gray py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center text-white mb-8 shadow-lg shadow-brand-orange/20">
                <Scissors size={28} />
              </div>
              <h2 className="font-display text-3xl font-bold mb-4 tracking-tighter text-brand-text uppercase">All Perfect Nails</h2>
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-16 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-muted">
                {menuItems.map(item => <a key={item.name} href={item.href} className="hover:text-brand-orange transition-colors">{item.name}</a>)}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-center md:text-left border-t border-brand-gray pt-16">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-orange block mb-4">Location</span>
                  <p className="text-sm font-medium text-brand-muted">{salonInfo.address}</p>
                </div>
                <div className="md:text-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-orange block mb-4">Inquiries</span>
                  <p className="text-sm font-medium text-brand-muted">{salonInfo.email}</p>
                </div>
                <div className="md:text-right">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-orange block mb-4">Support</span>
                  <p className="text-sm font-medium text-brand-muted">{salonInfo.phone}</p>
                </div>
              </div>
              
              <div className="mt-20 flex gap-16 items-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-2 bg-brand-gray rounded-lg">
                      <QRCodeSVG value="https://allperfectnails.com/menu" size={60} fgColor="#FFFFFF" bgColor="#262626" />
                    </div>
                    <span className="text-[8px] uppercase font-bold tracking-[2px] text-brand-muted">Services Menu</span>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-2 bg-brand-orange rounded-lg">
                      <QRCodeSVG value="https://allperfectnails.com/book" size={60} fgColor="#FFFFFF" bgColor="#FF6B00" />
                    </div>
                    <span className="text-[8px] uppercase font-bold tracking-[2px] text-brand-muted">Order Offline</span>
                  </div>
              </div>

              <p className="mt-20 text-[10px] uppercase tracking-[0.5em] text-brand-muted/40">© 2026 All Perfect Nails. Developed for Perfection.</p>
          </div>
        </div>
      </footer>

      {/* Floating Hot Line Massage Button */}
      <a 
        href={`sms:${salonInfo.phone}`}
        className="fixed bottom-10 right-10 z-[60] bg-brand-orange text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 transition-all group active:scale-95"
      >
        <MessageCircle size={22} />
        <span className="font-display font-bold text-[13px] uppercase tracking-widest">Hot Line Massage</span>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-brand-bg animate-pulse"></div>
      </a>

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  );
}
