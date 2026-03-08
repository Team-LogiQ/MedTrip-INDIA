import { useNavigate } from "react-router";
import {
  Plane,
  Hotel,
  Globe,
  Phone,
  Shield,
  MapPin,
  Clock,
  CreditCard,
  Languages,
  Utensils,
  Sun,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const visaSteps = [
  {
    step: 1,
    title: "Apply Online for e-MedVisa",
    desc: "Visit indianvisaonline.gov.in and apply for e-Medical Visa. Select 'e-Medical Visa' from the visa type dropdown.",
    time: "30 min",
  },
  {
    step: 2,
    title: "Upload Required Documents",
    desc: "Upload passport copy, photo, medical appointment letter from Indian hospital, and financial proof.",
    time: "1 hour",
  },
  {
    step: 3,
    title: "Pay Visa Fee",
    desc: "Visa fee varies by nationality (₹25–₹100). Pay securely via credit card or debit card online.",
    time: "10 min",
  },
  {
    step: 4,
    title: "Receive Approval",
    desc: "e-MedVisa is approved electronically via email. Print the ETA (Electronic Travel Authorization) to carry with you.",
    time: "3–5 days",
  },
  {
    step: 5,
    title: "Arrive at Indian Airport",
    desc: "Present your e-MedVisa ETA at the immigration counter at any Indian international airport.",
    time: "On arrival",
  },
];

const topCities = [
  {
    city: "New Delhi",
    flag: "🏛️",
    desc: "India's capital with world-class medical infrastructure. Home to AIIMS, Medanta, Fortis, Max, and BLK-Max hospitals.",
    airports: "Indira Gandhi International Airport (DEL)",
    highlight: "Neurology, Cardiac, Orthopedics",
  },
  {
    city: "Mumbai",
    flag: "🌊",
    desc: "Financial capital with premium hospitals. Asian Heart Institute, Kokilaben, Jaslok, Lilavati — all within the city.",
    airports: "Chhatrapati Shivaji Maharaj International Airport (BOM)",
    highlight: "Cardiac, Cancer, Cosmetic, Liver Transplant",
  },
  {
    city: "Chennai",
    flag: "🌴",
    desc: "The 'Medical Capital of India'. Apollo Hospitals HQ, Narayana, and specialized cancer and transplant centers.",
    airports: "Chennai International Airport (MAA)",
    highlight: "Transplants, Cardiac, Cancer, Orthopedics",
  },
  {
    city: "Bangalore",
    flag: "🌿",
    desc: "Silicon Valley of India with excellent hospitals. Pleasant year-round climate makes recovery comfortable.",
    airports: "Kempegowda International Airport (BLR)",
    highlight: "Fertility, Oncology, Orthopedics, Neurology",
  },
  {
    city: "Hyderabad",
    flag: "💎",
    desc: "Rapidly growing medical hub with internationally accredited hospitals at competitive costs.",
    airports: "Rajiv Gandhi International Airport (HYD)",
    highlight: "Cancer, Cardiac, Bariatric, Eye Care",
  },
];

const travelTips = [
  {
    icon: Plane,
    title: "Getting There",
    tips: [
      "Book direct flights to the city where your hospital is located",
      "Business class recommended post-surgery for comfort",
      "Most major international airlines serve Delhi, Mumbai, Bangalore, Chennai",
      "Book flexible return tickets in case of recovery extensions",
    ],
    color: "bg-blue-50 border-blue-200",
    iconColor: "bg-blue-600",
  },
  {
    icon: Hotel,
    title: "Accommodation",
    tips: [
      "Stay in hospitals' affiliated guest houses for convenience",
      "Most partner hospitals offer short-stay recovery suites",
      "Budget: ₹3,000–8,000/night for quality hotel near hospital",
      "Long-stay service apartments available from ₹40,000/month",
    ],
    color: "bg-teal-50 border-teal-200",
    iconColor: "bg-teal-600",
  },
  {
    icon: Languages,
    title: "Language & Communication",
    tips: [
      "English is widely spoken in hospitals and metros",
      "MedTrip provides translators for Arabic, Russian, Swahili, French",
      "Local SIM cards available at airports (Airtel, Jio — affordable data)",
      "WhatsApp is the primary communication mode in India",
    ],
    color: "bg-purple-50 border-purple-200",
    iconColor: "bg-purple-600",
  },
  {
    icon: CreditCard,
    title: "Money & Payments",
    tips: [
      "Most hospitals accept international credit/debit cards",
      "Currency: Indian Rupee (INR). ATMs widely available.",
      "Major currencies (USD, EUR, GBP) can be exchanged at airport or banks",
      "Inform your bank of international travel before departing",
    ],
    color: "bg-orange-50 border-orange-200",
    iconColor: "bg-orange-500",
  },
  {
    icon: Utensils,
    title: "Food & Nutrition",
    tips: [
      "Hospitals offer international menus for recovering patients",
      "Avoid street food initially — stick to hospital or hotel food",
      "Bottled water recommended for first-time visitors",
      "Indian cuisine is vegetarian-friendly; non-veg widely available",
    ],
    color: "bg-green-50 border-green-200",
    iconColor: "bg-green-600",
  },
  {
    icon: Sun,
    title: "Weather & Best Time to Visit",
    tips: [
      "October–March is the best time for medical travel (cool & dry)",
      "Delhi & Mumbai: Oct–Feb (avoid May–July heat)",
      "Bangalore & Chennai: Pleasant year-round",
      "Hyderabad: Oct–Feb recommended",
    ],
    color: "bg-yellow-50 border-yellow-200",
    iconColor: "bg-yellow-500",
  },
];

const emergencyContacts = [
  { label: "MedTrip 24/7 Helpline", number: "+91 1800-123-456", note: "Free call" },
  { label: "National Emergency", number: "112", note: "Police/Fire/Ambulance" },
  { label: "Medical Emergency", number: "108", note: "Ambulance service" },
  { label: "Tourist Helpline", number: "+91 1800-111-363", note: "Ministry of Tourism" },
];

export function TravelGuide() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full mb-4" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
            TRAVEL GUIDE
          </span>
          <h1 className="text-white mb-4" style={{ fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
            Complete Guide to Medical Travel in India
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            Everything international patients need to know — visa, accommodation, travel tips, and more.
          </p>
        </div>
      </section>

      {/* Medical Visa Process */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-3" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
              MEDICAL VISA
            </span>
            <h2 className="text-gray-900" style={{ fontWeight: 800, fontSize: "1.75rem" }}>
              How to Get an Indian Medical Visa
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto" style={{ fontSize: "0.95rem" }}>
              India's e-Medical Visa (e-MedVisa) is available for citizens of 170+ countries. Here's how to apply:
            </p>
          </div>

          <div className="space-y-4">
            {visaSteps.map((vs) => (
              <div key={vs.step} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0" style={{ fontWeight: 800, fontSize: "1.1rem" }}>
                  {vs.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-gray-900 mb-1" style={{ fontWeight: 700 }}>{vs.title}</h3>
                    <span className="bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full shrink-0" style={{ fontSize: "0.72rem", fontWeight: 600 }}>
                      <Clock className="w-3 h-3 inline mr-1" />{vs.time}
                    </span>
                  </div>
                  <p className="text-gray-600" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>{vs.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visa Alert */}
          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-amber-800 mb-1" style={{ fontWeight: 600, fontSize: "0.875rem" }}>
                Important: e-MedVisa Details
              </div>
              <div className="text-amber-700" style={{ fontSize: "0.825rem", lineHeight: 1.6 }}>
                e-Medical Visa is valid for 60 days from arrival with triple-entry permission. It can be extended at FRRO offices in India. Carry a letter from your Indian hospital confirming treatment. MedTrip India provides all necessary documentation support.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Medical Cities */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full mb-3" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
              TOP CITIES
            </span>
            <h2 className="text-gray-900" style={{ fontWeight: 800, fontSize: "1.75rem" }}>
              Top Medical Cities in India
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topCities.map((city) => (
              <div key={city.city} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{city.flag}</span>
                  <h3 className="text-gray-900" style={{ fontWeight: 700, fontSize: "1.1rem" }}>{city.city}</h3>
                </div>
                <p className="text-gray-600 mb-3" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{city.desc}</p>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Plane className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-gray-500" style={{ fontSize: "0.78rem" }}>{city.airports}</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 mt-0.5 shrink-0" />
                    <span className="text-teal-700" style={{ fontSize: "0.78rem", fontWeight: 600 }}>{city.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-gray-900" style={{ fontWeight: 800, fontSize: "1.75rem" }}>
              Essential Travel Tips for Medical Patients
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {travelTips.map((tip) => (
              <div key={tip.title} className={`rounded-2xl border p-5 ${tip.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-xl ${tip.iconColor} flex items-center justify-center`}>
                    <tip.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-gray-900" style={{ fontWeight: 700 }}>{tip.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {tip.tips.map((t) => (
                    <li key={t} className="flex gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                      <span className="text-gray-700" style={{ fontSize: "0.8rem", lineHeight: 1.5 }}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-10 bg-red-50 border-y border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-6" style={{ fontWeight: 800, fontSize: "1.5rem" }}>
            Emergency Contacts in India
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {emergencyContacts.map((ec) => (
              <div key={ec.label} className="bg-white rounded-xl p-4 text-center shadow-sm border border-red-100">
                <Phone className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <div className="text-gray-500 mb-1" style={{ fontSize: "0.72rem", fontWeight: 600 }}>{ec.label}</div>
                <div className="text-gray-900" style={{ fontWeight: 800, fontSize: "1.05rem" }}>{ec.number}</div>
                <div className="text-red-500" style={{ fontSize: "0.72rem" }}>{ec.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-white mb-3" style={{ fontWeight: 800, fontSize: "1.75rem" }}>
            Start Planning Your Medical Trip Today
          </h2>
          <p className="text-blue-100 mb-6" style={{ fontSize: "1rem" }}>
            Our medical travel coordinators will handle everything — from hospital booking to visa guidance.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-4 rounded-xl bg-white text-blue-700 shadow-xl hover:bg-blue-50 transition-all"
            style={{ fontWeight: 700, fontSize: "1rem" }}
          >
            Find My Treatment →
          </button>
        </div>
      </section>
    </div>
  );
}
