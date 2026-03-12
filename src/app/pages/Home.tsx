import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  Search,
  ChevronDown,
  Star,
  Shield,
  Globe,
  DollarSign,
  Clock,
  Award,
  ArrowRight,
  CheckCircle2,
  Plane,
  Stethoscope,
  Heart,
  Users,
  TrendingDown,
  MapPin,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { treatments } from "../data/treatmentData";

const HERO_IMG = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const DOCTOR_IMG = "https://images.unsplash.com/photo-1758691461990-03b49d969495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9uJTIwbWVkaWNhbHxlbnwxfHx8fDE3NzI5MDEzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const featuredTreatments = [
  { id: "heart-bypass", image: "/images/treatments/heart-bypass.jpg", label: "Heart Bypass Surgery", savings: "Up to 70% savings" },
  { id: "knee-replacement", image: "/images/treatments/knee-replacement.jpg", label: "Knee Replacement", savings: "Up to 65% savings" },
  { id: "kidney-transplant", image: "/images/treatments/kidney-transplant.jpg", label: "Kidney Transplant", savings: "Up to 75% savings" },
  { id: "ivf", image: "/images/treatments/ivf.jpg", label: "IVF Treatment", savings: "Up to 60% savings" },
  { id: "hair-transplant", image: "/images/treatments/hair-transplant.jpg", label: "Hair Transplant", savings: "Up to 70% savings" },
  { id: "lasik", image: "/images/treatments/lasik.jpg", label: "LASIK Eye Surgery", savings: "Up to 65% savings" },
  { id: "liver-transplant", image: "/images/treatments/liver-transplant.jpg", label: "Liver Transplant", savings: "Up to 80% savings" },
  { id: "bariatric", image: "/images/treatments/bariatric.jpg", label: "Bariatric Surgery", savings: "Up to 70% savings" },
];

const stats = [
  { value: "50,000+", label: "Patients Treated", icon: Users },
  { value: "98%", label: "Success Rate", icon: Award },
  { value: "70%", label: "Average Savings", icon: TrendingDown },
  { value: "24/7", label: "Patient Support", icon: Clock },
];

const whyIndia = [
  {
    icon: DollarSign,
    title: "World-Class Care at Fraction of Cost",
    desc: "Save 60–80% compared to USA, UK, and Australia while receiving the same quality of treatment.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Award,
    title: "JCI-Accredited Hospitals",
    desc: "India has the highest number of JCI-accredited hospitals in Asia, meeting international quality standards.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Globe,
    title: "English-Speaking Doctors",
    desc: "India's medical professionals are internationally trained with excellent English communication skills.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Plane,
    title: "Easy Travel & Visa",
    desc: "Medical visa available in 3–5 days. Direct flights from 150+ countries to Indian metro cities.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Stethoscope,
    title: "Cutting-Edge Technology",
    desc: "Robotic surgery, proton therapy, and AI-assisted diagnostics available at leading Indian hospitals.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Shield,
    title: "Full Transparency",
    desc: "MedTrip India provides complete cost breakdowns before you travel. No hidden charges.",
    color: "bg-red-50 text-red-600",
  },
];

const testimonials = [
  {
    name: "Jayraj Singh",
    country: "IND",
    treatment: "Heart Bypass Surgery",
    hospital: "Asian Heart Institute, Mumbai",
    text: "I saved over ₹45,000 compared to getting this done in London. The care was exceptional — the surgeons were world-class and I was treated like royalty. MedTrip India handled everything flawlessly.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    name: "Sana Khan",
    country: "UAE",
    treatment: "IVF Treatment",
    hospital: "Manipal Hospital, Bangalore",
    text: "After 3 failed IVF cycles in Dubai, I came to India on MedTrip's recommendation. Their support team held my hand through every step. I'm now 6 months pregnant! Forever grateful.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    name: "Mahesh kumar",
    country: "IND",
    treatment: "Knee Replacement Surgery",
    hospital: "Medanta, Gurgaon",
    text: "My insurance didn't cover the knee replacement. India was a revelation — ₹4,500 all-in versus ₹45,000 at home. The joint is perfect and I was walking within 3 days. Incredible experience.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export function Home() {
  const navigate = useNavigate();
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [customCondition, setCustomCondition] = useState("");

  const tierOneCities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad"
  ];

  const handleSearch = () => {
    if (!selectedTreatment) return;
    const params = new URLSearchParams({
      treatment: selectedTreatment,
      ...(selectedHospital && { hospital: selectedHospital }),
      ...(selectedLocation && { location: selectedLocation }),
      ...(customCondition && { custom: customCondition }),
    });
    navigate(`/results?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black min-h-[520px] mb-0 border-0">
        {/* Background video overlay */}
        <div className="absolute inset-0 overflow-hidden border-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50 block"
          >
            <source src="/videos/surgery-background.mp4.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img
              src={HERO_IMG}
              alt="Medical background"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <motion.div 
            className="max-w-3xl mt-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-5"
              variants={fadeInUp}
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-200" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
                India's #1 Medical Tourism Platform
              </span>
            </motion.div>

            <motion.h1
              className="text-white mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, lineHeight: 1.15 }}
              variants={fadeInUp}
            >
              Your Health, Our Priority.{" "}
              <span className="text-teal-300">MedTrip India</span>
            </motion.h1>
            <motion.p 
              className="text-blue-100 mb-3 text-xl" 
              style={{ fontWeight: 600, lineHeight: 1.4 }}
              variants={fadeInUp}
            >
              India's Foremost Medical Tourism Platform
            </motion.p>
            <motion.p 
              className="text-blue-100 mb-8 max-w-2xl" 
              style={{ fontSize: "1rem", lineHeight: 1.7 }}
              variants={fadeInUp}
            >
              We connect international patients with India's top-tier hospitals and world-class medical professionals. Experience affordable, high-quality healthcare with personalized care and comprehensive support. From consultation to recovery, we're with you every step of the way.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map(({ value, label, icon: Icon }) => (
              <motion.div 
                key={label} 
                className="flex items-center gap-3"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white" style={{ fontWeight: 800, fontSize: "1.25rem" }}>{value}</div>
                  <div className="text-blue-100" style={{ fontSize: "0.78rem" }}>{label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search-section" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-gray-900 mb-3" style={{ fontWeight: 800, fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              Start Your Medical Journey
            </h2>
            <p className="text-gray-600" style={{ fontSize: "1.05rem" }}>
              Tell us about your treatment needs and we'll connect you with the best hospitals
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Treatment Select */}
              <div>
                <label className="flex items-center gap-2 text-gray-800 mb-2" style={{ fontSize: "0.875rem", fontWeight: 700 }}>
                  <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Stethoscope className="w-4 h-4 text-blue-600" />
                  </div>
                  What treatment are you looking for?
                </label>
                <div className="relative group">
                  <select
                    value={selectedTreatment}
                    onChange={(e) => setSelectedTreatment(e.target.value)}
                    className="w-full appearance-none bg-white border-2 border-gray-200 rounded-xl px-4 py-3 pr-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 hover:border-gray-300 transition-all cursor-pointer shadow-sm"
                    style={{ fontSize: "0.95rem", fontWeight: 500 }}
                  >
                    <option value="">Select your treatment or medical condition...</option>
                    {treatments.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Location Select */}
              <div>
                <label className="flex items-center gap-2 text-gray-800 mb-2" style={{ fontSize: "0.875rem", fontWeight: 700 }}>
                  <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-purple-600" />
                  </div>
                  Preferred Location?
                  <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                </label>
                <div className="relative group">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full appearance-none bg-white border-2 border-gray-200 rounded-xl px-4 py-3 pr-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 hover:border-gray-300 transition-all cursor-pointer shadow-sm"
                    style={{ fontSize: "0.95rem", fontWeight: 500 }}
                  >
                    <option value="">Any location</option>
                    {tierOneCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Hospital Select */}
              <div>
                <label className="flex items-center gap-2 text-gray-800 mb-2" style={{ fontSize: "0.875rem", fontWeight: 700 }}>
                  <div className="w-7 h-7 rounded-lg bg-teal-100 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-teal-600" />
                  </div>
                  Do you have a preferred hospital?
                  <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                </label>
                <div className="relative group">
                  <select
                    value={selectedHospital}
                    onChange={(e) => setSelectedHospital(e.target.value)}
                    className="w-full appearance-none bg-white border-2 border-gray-200 rounded-xl px-4 py-3 pr-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-400 hover:border-gray-300 transition-all cursor-pointer shadow-sm"
                    style={{ fontSize: "0.95rem", fontWeight: 500 }}
                  >
                    <option value="">No preference - Show me all options</option>
                    <option value="Apollo Hospitals Chennai">Apollo Hospitals Chennai</option>
                    <option value="Medanta – The Medicity">Medanta – The Medicity</option>
                    <option value="Fortis Memorial Research Institute">Fortis Memorial Research Institute</option>
                    <option value="AIIMS New Delhi">AIIMS New Delhi</option>
                    <option value="Max Super Speciality Hospital Saket">Max Super Speciality Hospital Saket</option>
                    <option value="Narayana Health City Bangalore">Narayana Health City Bangalore</option>
                    <option value="Kokilaben Dhirubhai Ambani Hospital">Kokilaben Dhirubhai Ambani Hospital</option>
                    <option value="Manipal Hospital Bangalore">Manipal Hospital Bangalore</option>
                    <option value="BLK-Max Super Speciality Hospital">BLK-Max Super Speciality Hospital</option>
                    <option value="Sir Ganga Ram Hospital">Sir Ganga Ram Hospital</option>
                    <option value="Indraprastha Apollo Hospital Delhi">Indraprastha Apollo Hospital Delhi</option>
                    <option value="Artemis Hospital Gurgaon">Artemis Hospital Gurgaon</option>
                    <option value="Jaslok Hospital Mumbai">Jaslok Hospital Mumbai</option>
                    <option value="Lilavati Hospital Mumbai">Lilavati Hospital Mumbai</option>
                    <option value="Asian Heart Institute Mumbai">Asian Heart Institute Mumbai</option>
                    <option value="Aster CMI Hospital Bangalore">Aster CMI Hospital Bangalore</option>
                    <option value="Apollo Gleneagles Hospital Kolkata">Apollo Gleneagles Hospital Kolkata</option>
                    <option value="Ruby Hall Clinic Pune">Ruby Hall Clinic Pune</option>
                    <option value="Dr. L. H. Hiranandani Hospital Mumbai">Dr. L. H. Hiranandani Hospital Mumbai</option>
                    <option value="Columbia Asia Hospital Bangalore">Columbia Asia Hospital Bangalore</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* Custom condition input */}
            {selectedTreatment === "other" && (
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Describe your medical condition or treatment needed..."
                  value={customCondition}
                  onChange={(e) => setCustomCondition(e.target.value)}
                  className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 hover:border-gray-300 transition-all shadow-sm"
                  style={{ fontSize: "0.95rem", fontWeight: 500 }}
                />
              </div>
            )}

            <button
              onClick={handleSearch}
              disabled={!selectedTreatment}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 text-white shadow-xl hover:shadow-2xl hover:from-blue-700 hover:via-blue-600 hover:to-teal-600 transform hover:scale-[1.01] transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.01em" }}
            >
              <Search className="w-5 h-5" />
              Find Best Hospitals & Get Cost Estimate
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-3" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
              POPULAR TREATMENTS
            </span>
            <h2 className="text-gray-900" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Find Your Treatment in India
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto" style={{ fontSize: "1rem" }}>
              Browse our most-requested procedures with significant cost savings compared to Western countries.
            </p>
          </div>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {featuredTreatments.map((t, index) => (
              <motion.button
                key={t.id}
                onClick={() => {
                  navigate(`/results?treatment=${t.id}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-200 text-left"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={t.image}
                    alt={t.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-4">
                  <div className="text-gray-900 mb-1 line-clamp-2" style={{ fontWeight: 600, fontSize: "0.9rem", minHeight: "2.5rem" }}>
                    {t.label}
                  </div>
                  <div className="text-teal-600 flex items-center gap-1" style={{ fontSize: "0.78rem", fontWeight: 600 }}>
                    <TrendingDown className="w-3 h-3 shrink-0" />
                    {t.savings}
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-blue-600 group-hover:gap-2 transition-all">
                    <span style={{ fontSize: "0.78rem", fontWeight: 600 }}>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
          <div className="text-center mt-7">
            <button
              onClick={() => {
                const el = document.getElementById("search-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all"
              style={{ fontWeight: 600 }}
            >
              View Treatments
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Why India Section */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full mb-3" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
                WHY CHOOSE INDIA?
              </span>
              <h2 className="text-gray-900 mb-4" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                India: The World's Leading Medical Tourism Destination
              </h2>
              <p className="text-gray-500 mb-5" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                With over 50 JCI-accredited hospitals, internationally-trained doctors, and costs that are 60–80% lower than Western countries, India is the first choice for 800,000+ medical tourists annually.
              </p>
              <div className="space-y-2">
                {[
                  "NABH & JCI internationally accredited hospitals",
                  "Doctors trained at Harvard, Johns Hopkins & Mayo Clinic",
                  "Medical visa processed in 3–5 business days",
                  "Zero waiting period for most procedures",
                  "No language barrier — English spoken everywhere",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                    <span className="text-gray-700" style={{ fontSize: "0.9rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl w-full h-72 bg-white shadow-xl border border-gray-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop"
                  alt="India as a Largest Destination for Medical Tourism"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <Star className="w-5 h-5 text-teal-600 fill-teal-600" />
                </div>
                <div>
                  <div className="text-gray-900" style={{ fontWeight: 700, fontSize: "0.9rem" }}>4.9/5 Average Rating</div>
                  <div className="text-gray-500" style={{ fontSize: "0.78rem" }}>Based on 12,400+ reviews</div>
                </div>
              </div>
            </div>
          </div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {whyIndia.map((item) => (
              <motion.div 
                key={item.title} 
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center mb-3`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-gray-900 mb-2" style={{ fontWeight: 700, fontSize: "1rem" }}>
                  {item.title}
                </h3>
                <p className="text-gray-500" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works CTA strip */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="text-white mb-1" style={{ fontWeight: 800, fontSize: "1.5rem" }}>
                Ready to Plan Your Medical Journey?
              </h3>
              <p className="text-blue-100" style={{ fontSize: "1rem" }}>
                Get free consultation and cost estimate in under 2 minutes.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => navigate("/how-it-works")}
                className="px-5 py-3 rounded-xl bg-white/20 border border-white/30 text-white hover:bg-white/30 transition-all"
                style={{ fontWeight: 600 }}
              >
                How It Works
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-5 py-3 rounded-xl bg-white text-blue-700 hover:bg-blue-50 transition-all shadow-lg"
                style={{ fontWeight: 700 }}
              >
                Get Free Estimate →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full mb-3" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
              SUCCESS STORIES
            </span>
            <h2 className="text-gray-900" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              What Our Patients Say
            </h2>
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((t) => (
              <motion.div 
                key={t.name} 
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
                variants={scaleIn}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic flex-grow" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 shrink-0">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-gray-900" style={{ fontWeight: 600, fontSize: "0.9rem" }}>{t.name}</div>
                    <div className="text-gray-500" style={{ fontSize: "0.78rem" }}>{t.country}</div>
                    <div className="text-teal-600" style={{ fontSize: "0.78rem", fontWeight: 500 }}>{t.treatment}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Hospitals Preview */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-3" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
              TOP HOSPITALS
            </span>
            <h2 className="text-gray-900" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              India's Best Hospitals for International Patients
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Apollo Hospitals", cities: "Chennai, Delhi, Kolkata", logo: "/images/hospitals/apollo.png" },
              { name: "Medanta", cities: "Gurugram", logo: "/images/hospitals/medanta.png" },
              { name: "AIIMS Delhi", cities: "New Delhi", logo: "/images/hospitals/AIIMS.png" },
              { name: "Asian Heart", cities: "Mumbai", logo: "/images/hospitals/asian-heart.png" },
              { name: "Fortis FMRI", cities: "Gurugram", logo: "/images/hospitals/fortis.png" },
              { name: "Narayana Health", cities: "Bangalore", logo: "/images/hospitals/narayana.png" },
              { name: "Kokilaben", cities: "Mumbai", logo: "/images/hospitals/kokilaben.png" },
              { name: "Manipal", cities: "Bangalore", logo: "/images/hospitals/manipal.png" },
              { name: "Max Hospitals", cities: "Delhi", logo: "/images/hospitals/max.png" },
              { name: "Artemis", cities: "Gurugram", logo: "/images/hospitals/artemis.png" },
            ].map((h) => (
              <div
                key={h.name}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-center cursor-pointer flex flex-col items-center justify-between min-h-[160px]"
              >
                <div className="w-full h-20 flex items-center justify-center mb-3 p-2">
                  <img
                    src={h.logo}
                    alt={h.name}
                    className="max-w-full max-h-full object-contain"
                    style={{ maxHeight: "64px", width: "auto" }}
                  />
                </div>
                <div className="w-full">
                  <div className="text-gray-900 mb-1 line-clamp-2" style={{ fontWeight: 600, fontSize: "0.85rem", minHeight: "2.4rem" }}>{h.name}</div>
                  <div className="text-gray-400" style={{ fontSize: "0.72rem" }}>{h.cities}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Image Section */}
      <section className="py-14 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={DOCTOR_IMG}
            alt="Doctor consultation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-blue-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            Get a Free Second Opinion from India's Top Specialists
          </h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Upload your medical reports and get a free review from a senior consultant at any of our partner hospitals within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-xl hover:opacity-90 transition-all"
              style={{ fontWeight: 700, fontSize: "1rem" }}
            >
              Start Your Journey Today →
            </button>
            <button
              onClick={() => navigate("/travel-guide")}
              className="px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-all"
              style={{ fontWeight: 600 }}
            >
              View Travel Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
