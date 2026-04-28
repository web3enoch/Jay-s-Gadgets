import { motion } from "motion/react";
import { Phone, MapPin, Clock, Star, CheckCircle, Shield, Zap, Award, ChevronRight, MessageCircle, Apple, Laptop, Smartphone, Watch, Package, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "2348135176108";
const PHONE_NUMBER = "+2348135176108";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Jay's%20Gadgets!%20I'm%20interested%20in%20your%20products.`;

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Problem → Solution */}
      <ProblemSolutionSection />

      {/* Services */}
      <ServicesSection />

      {/* Social Proof */}
      <SocialProofSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Location & Contact */}
      <ContactSection />

      {/* Final CTA */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

/* ─────────────────────────── FLOATING WHATSAPP ─────────────────────────── */
function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl cursor-pointer font-semibold text-sm"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </motion.a>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.113 1.522 5.847L.057 23.882a.5.5 0 0 0 .617.617l6.094-1.493A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.913 0-3.706-.517-5.245-1.416l-.376-.222-3.893.955.975-3.834-.243-.388A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

/* ─────────────────────────── DARK MODE TOGGLE ─────────────────────────── */
function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return [dark, setDark] as const;
}

function DarkModeToggle() {
  const [dark, setDark] = useDarkMode();
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle dark mode"
      className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-background hover:bg-muted transition-colors cursor-pointer"
    >
      {dark ? <Sun className="w-4 h-4 text-accent" /> : <Moon className="w-4 h-4 text-muted-foreground" />}
    </button>
  );
}

/* ─────────────────────────── NAVBAR ─────────────────────────── */
function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-foreground tracking-tight">Jay's Gadgets</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-primary transition-colors cursor-pointer">Services</a>
          <a href="#reviews" className="hover:text-primary transition-colors cursor-pointer">Reviews</a>
          <a href="#contact" className="hover:text-primary transition-colors cursor-pointer">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer"
          >
            <WhatsAppIcon />
            <span className="hidden sm:inline">WhatsApp Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.12_0.02_240)] text-white py-16 md:py-24 px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
              <MapPin className="w-3.5 h-3.5" />
              Computer Village, Ikeja Lagos
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-4">
              Get the Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                iPhones & Gadgets
              </span>{" "}
              at the Best Price in Lagos
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-lg">
              Students and professionals trust Jay's Gadgets for genuine Apple devices, laptops, and accessories — delivered with honesty and after-sales care.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3.5 rounded-full font-bold text-base transition-all hover:scale-105 cursor-pointer shadow-lg"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-full font-bold text-base transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <span>4.9/5 rating</span>
              </div>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
              <span>500+ happy customers</span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
              <span>Since 2018</span>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1574678720375-897c87118486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="Latest iPhones at Jay's Gadgets"
                className="w-full object-cover h-72 md:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white text-foreground px-4 py-2.5 rounded-2xl shadow-xl text-sm font-semibold flex items-center gap-2"
            >
              <CheckCircle className="w-5 h-5 text-[#25D366]" />
              100% Genuine Products
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PROBLEM → SOLUTION ─────────────────────────── */
function ProblemSolutionSection() {
  const problems = [
    "Bought a 'brand new' iPhone that stopped working in a week?",
    "Paid premium prices but got poor after-sales service?",
    "Searched everywhere for a good deal and still got scammed?",
    "Tired of sellers who disappear after collecting your money?",
  ];

  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Tired of Getting Ripped Off?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Buying gadgets in Lagos shouldn't feel like gambling. But for too many people, it does.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Problems */}
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 rounded-2xl p-6">
            <p className="font-bold text-red-700 mb-4 text-base uppercase tracking-wide">Sound familiar?</p>
            <ul className="space-y-3">
              {problems.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2 text-red-800 text-sm"
                >
                  <span className="mt-0.5 text-red-400 text-lg leading-none">✗</span>
                  {p}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
            <p className="font-bold text-primary mb-4 text-base uppercase tracking-wide">The Jay's Gadgets difference</p>
            <ul className="space-y-3">
              {[
                "Every device is verified genuine before sale",
                "Transparent pricing — no hidden charges",
                "We're in Computer Village — come see us in person",
                "After-sales support until you're fully satisfied",
              ].map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2 text-primary text-sm"
                >
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  {s}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 cursor-pointer"
          >
            <WhatsAppIcon />
            Talk to Jay Now — It's Free
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SERVICES ─────────────────────────── */
const SERVICES = [
  {
    icon: Apple,
    title: "iPhones (All Models)",
    desc: "iPhone 12 to iPhone 16 Pro Max. Brand new, UK used & refurbished options available. All verified genuine.",
    badge: "Most Popular",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Laptop,
    title: "MacBooks & Laptops",
    desc: "MacBook Air, MacBook Pro, Windows laptops for students and professionals. Great performance, great prices.",
    badge: null,
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Smartphone,
    title: "Android Devices",
    desc: "Samsung, Tecno, Infinix, Xiaomi and more. Budget to flagship — we have what you need.",
    badge: null,
    color: "bg-green-100 text-green-700",
  },
  {
    icon: Apple,
    title: "iPads & Apple Accessories",
    desc: "iPad Air, iPad Pro, AirPods, Apple Watch bands, chargers and cases. Genuine Apple accessories.",
    badge: null,
    color: "bg-purple-100 text-purple-700",
  },
  {
    icon: Watch,
    title: "Apple Watches",
    desc: "Apple Watch Series 8, SE and Ultra. Stay connected and track your fitness in style.",
    badge: null,
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Package,
    title: "Accessories & Gadgets",
    desc: "Phone cases, screen protectors, earphones, power banks, cables, and every tech accessory you need.",
    badge: "Affordable",
    color: "bg-orange-100 text-orange-700",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Sell</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
            Premium Gadgets at Honest Prices
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you're a student on a budget or a professional upgrading your setup — we have something for you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow group"
            >
              <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                <service.icon className="w-6 h-6" />
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-lg text-foreground">{service.title}</h3>
                {service.badge && (
                  <span className="bg-accent/20 text-accent text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ml-2">{service.badge}</span>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.desc}</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I'm%20interested%20in%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all cursor-pointer"
              >
                Enquire Now <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 cursor-pointer shadow-lg"
          >
            <WhatsAppIcon />
            Ask About Pricing on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SOCIAL PROOF ─────────────────────────── */
const TESTIMONIALS = [
  {
    name: "Chioma A.",
    role: "Student, UNILAG",
    text: "I got my iPhone 15 Pro from Jay's Gadgets and the experience was smooth. They verified it was genuine and even helped me set it up. Best deal in Computer Village!",
    rating: 5,
    img: "https://images.unsplash.com/photo-1677935711525-1059c0cb9b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100",
  },
  {
    name: "Emeka O.",
    role: "Software Engineer",
    text: "Bought a MacBook Pro for work. Competitive price and it came with original charger. Jay was very honest about the spec. Will definitely be back.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1638802126124-1b7598461d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100",
  },
  {
    name: "Adaeze M.",
    role: "Nurse, Lagos Island",
    text: "Got an Apple Watch and AirPods. Prices were fair and Jay even helped me compare models. Really patient seller. Highly recommend!",
    rating: 5,
    img: "https://images.unsplash.com/photo-1677935708583-d044791164cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100",
  },
];

function SocialProofSection() {
  return (
    <section id="reviews" className="py-16 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Customer Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
            500+ Satisfied Customers Can't Be Wrong
          </h2>
          <div className="flex justify-center items-center gap-2 text-muted-foreground">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
            </div>
            <span className="font-semibold text-foreground">4.9/5</span>
            <span>average rating</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background border border-border rounded-2xl p-6"
            >
              <div className="flex mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product photos row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1574763793553-b710f022aca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
            "https://images.unsplash.com/photo-1574678301308-b6a9d8c33635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
            "https://images.unsplash.com/photo-1574755297613-7b2c5fee60ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
            "https://images.unsplash.com/photo-1574678720375-897c87118486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
          ].map((url, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden h-32 md:h-40"
            >
              <img src={url} alt="Our products" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── WHY CHOOSE US ─────────────────────────── */
const WHY_US = [
  { icon: Shield, title: "100% Genuine Products", desc: "Every device is verified and authenticated before sale. No refurbished items sold as new." },
  { icon: Zap, title: "Fast & Responsive", desc: "Message us on WhatsApp and get a reply in minutes. We don't keep you waiting." },
  { icon: Award, title: "Best Prices in the Market", desc: "We compare prices daily to ensure you're getting the most value for your money in Lagos." },
  { icon: CheckCircle, title: "After-Sales Support", desc: "Bought from us and have an issue? We're still here. Your satisfaction is our priority." },
  { icon: MapPin, title: "Physical Location You Can Trust", desc: "Visit us at Shop 511, Computer Village, Ikeja. See us in person before buying." },
];

function WhyChooseUsSection() {
  return (
    <section className="py-16 px-4 bg-[oklch(0.12_0.02_240)] text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Why Jay's Gadgets</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3 text-white">
            5 Reasons to Buy from Us Today
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="w-11 h-11 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-bold text-base mb-2 text-white">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CONTACT ─────────────────────────── */
function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Find Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
            Visit Our Shop or Reach Us Online
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We're located in the heart of Computer Village, Ikeja — the largest tech hub in West Africa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Details */}
          <div className="space-y-5">
            <ContactCard icon={MapPin} label="Our Address" value="Shop 511, Computer Village, Ikeja, Lagos" />
            <ContactCard icon={Phone} label="Call / WhatsApp" value="+234 813 517 6108" href={`tel:${PHONE_NUMBER}`} />
            <ContactCard icon={MessageCircle} label="WhatsApp" value="Chat with us instantly" href={WHATSAPP_URL} isWhatsApp />
            <ContactCard icon={Clock} label="Business Hours" value={"Mon – Sat: 9:00 AM – 7:00 PM\nSunday: 12:00 PM – 5:00 PM"} />
          </div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border border-border"
          >
            <iframe
              title="Jay's Gadgets Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d3.3460!3d6.6018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93c0a5b9d7b%3A0x0!2sComputer%20Village%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
            <div className="p-4 bg-background">
              <p className="font-semibold text-sm text-foreground">Shop 511, Computer Village, Ikeja</p>
              <p className="text-xs text-muted-foreground mt-1">Look for the Jay's Gadgets signboard on the 5th floor</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, value, href, isWhatsApp }: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  isWhatsApp?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4 p-4 bg-background border border-border rounded-xl hover:border-primary/40 transition-colors group">
      <div className={`w-10 h-10 ${isWhatsApp ? "bg-[#25D366]/10" : "bg-primary/10"} rounded-xl flex items-center justify-center shrink-0`}>
        <Icon className={`w-5 h-5 ${isWhatsApp ? "text-[#25D366]" : "text-primary"}`} />
      </div>
      <div>
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{label}</p>
        <p className="text-foreground font-semibold text-sm mt-0.5 whitespace-pre-line">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={isWhatsApp ? "_blank" : undefined} rel={isWhatsApp ? "noopener noreferrer" : undefined} className="block cursor-pointer">
        {content}
      </a>
    );
  }
  return content;
}

/* ─────────────────────────── FINAL CTA ─────────────────────────── */
function FinalCTASection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary to-[oklch(0.35_0.22_264)]">
      <div className="max-w-3xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Limited stock available today
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Ready to Get Your Dream Device?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Don't overthink it. Message Jay now, describe what you need, and get the best deal in Lagos — backed by our satisfaction guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 cursor-pointer shadow-xl"
            >
              <WhatsAppIcon />
              Chat on WhatsApp Now
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              Call +234 813 517 6108
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */
const SOCIAL_LINKS = [
  {
    label: "X (Twitter)",
    handle: "@web3enoch",
    href: "https://x.com/web3enoch",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    handle: "@web3enoch",
    href: "https://instagram.com/web3enoch",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "Web3Enoch",
    href: "https://linkedin.com/in/web3enoch",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "web3enoch@gmail.com",
    href: "mailto:web3enoch@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="bg-[oklch(0.09_0.02_240)] text-white/60 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg">Jay's Gadgets</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted gadget store in Computer Village, Lagos. Genuine products. Fair prices. Real satisfaction.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors cursor-pointer">Our Products</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors cursor-pointer">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors cursor-pointer">Location & Hours</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>Shop 511, Computer Village, Ikeja</li>
              <li><a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors cursor-pointer">{PHONE_NUMBER}</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-[#1ebe5d] transition-colors cursor-pointer">WhatsApp Us</a></li>
              <li><a href="mailto:web3enoch@gmail.com" className="hover:text-white transition-colors cursor-pointer">web3enoch@gmail.com</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-3 text-sm uppercase tracking-wide">Follow Us</p>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm hover:text-white transition-colors cursor-pointer group"
                  >
                    <span className="w-7 h-7 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
                      {s.icon}
                    </span>
                    <span>{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Jay's Gadgets. All rights reserved.</p>
          <p>Shop 511, Computer Village, Ikeja, Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
