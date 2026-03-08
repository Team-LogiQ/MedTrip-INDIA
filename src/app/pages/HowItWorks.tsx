import { useNavigate } from "react-router";
import {
  Search,
  ClipboardList,
  Plane,
  Stethoscope,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Globe,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Search Your Treatment",
    desc: "Enter your disease, treatment, or medical condition in our smart search. Choose from 26+ procedures or type your own condition.",
    color: "bg-blue-50 text-blue-600 border-blue-200",
    iconBg: "bg-blue-600",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Get Cost Estimate & Hospital Recommendations",
    desc: "Our AI system instantly generates a detailed cost breakdown — surgery, stay, travel, medicines — plus recommends the top 3–5 hospitals for your treatment.",
    color: "bg-teal-50 text-teal-600 border-teal-200",
    iconBg: "bg-teal-600",
  },
  {
    step: "03",
    icon: Stethoscope,
    title: "Free Online Consultation",
    desc: "Book a free video consultation with a senior specialist from your recommended hospital. Share your reports for a personalized treatment plan.",
    color: "bg-purple-50 text-purple-600 border-purple-200",
    iconBg: "bg-purple-600",
  },
  {
    step: "04",
    icon: Globe,
    title: "Apply for Medical Visa",
    desc: "Our team guides you through India's e-Medical Visa (e-MedVisa) process. Most visas are approved in 3–5 business days.",
    color: "bg-orange-50 text-orange-600 border-orange-200",
    iconBg: "bg-orange-500",
  },
  {
    step: "05",
    icon: Plane,
    title: "Arrival & Accommodation",
    desc: "Your dedicated care coordinator arranges hotel near the hospital and all local logistics for a stress-free arrival.",
    color: "bg-green-50 text-green-600 border-green-200",
    iconBg: "bg-green-600",
  },
  {
    step: "06",
    icon: HeartHandshake,
    title: "Treatment & Safe Return",
    desc: "Receive world-class treatment at your chosen hospital. After recovery, we help you with discharge planning, follow-up care, and safe return travel.",
    color: "bg-pink-50 text-pink-600 border-pink-200",
    iconBg: "bg-pink-600",
  },
];

const faqs = [
  {
    q: "How do I know the cost estimates are accurate?",
    a: "Our cost estimates are based on real data from our partner hospitals and are updated regularly. They include all major expenses: surgery, consultation, 5-day hospital stay, medicines, travel, and local transport. For a precise quote, share your medical reports with us.",
  },
  {
    q: "Is India safe for international medical patients?",
    a: "Yes. India's top hospitals are JCI and NABH accredited — the same international quality certification as hospitals in the USA and Europe. India receives 800,000+ medical tourists annually with an excellent safety record.",
  },
  {
    q: "How quickly can I get treated in India?",
    a: "Unlike Western countries with long waiting lists, India offers appointments within 1–2 weeks for most procedures. Emergency cases can be accommodated faster. The entire process from consultation to treatment typically takes 3–4 weeks.",
  },
  {
    q: "Do I need to speak Hindi or local languages?",
    a: "No. All major hospitals have international patient departments staffed with English-speaking doctors, nurses, and coordinators. MedTrip India also provides professional translators for over 40 languages if needed.",
  },
  {
    q: "What types of medical visas are available for India?",
    a: "India offers an e-Medical Visa (e-MedVisa) specifically for medical treatment, valid for 60 days with triple-entry. It can be extended. The visa process is straightforward and our team guides you through every step.",
  },
  {
    q: "Can I bring an accompanying family member?",
    a: "Yes. India's e-Medical Attendant Visa (e-MedAttendant Visa) allows up to 2 family members to accompany the patient. We help with visa applications for accompanying persons as well.",
  },
];

export function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full mb-4" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
            HOW IT WORKS
          </span>
          <h1 className="text-white mb-4" style={{ fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
            Your Medical Journey to India, Simplified
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            From finding the right hospital to safe return home — MedTrip India handles everything so you can focus on what matters: your health.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className={`rounded-2xl border p-6 ${step.color} flex gap-5 items-start`}>
                <div className={`w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center shrink-0 shadow-lg`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="opacity-50" style={{ fontWeight: 800, fontSize: "2rem" }}>{step.step}</span>
                    <h3 className="text-gray-900" style={{ fontWeight: 700, fontSize: "1.05rem" }}>{step.title}</h3>
                  </div>
                  <p className="text-gray-600" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-10" style={{ fontWeight: 800, fontSize: "1.75rem" }}>
            Why Thousands Trust MedTrip India
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Shield, title: "Verified Hospitals", desc: "Only JCI/NABH accredited partner hospitals", color: "bg-blue-600" },
              { icon: Star, title: "4.9/5 Rating", desc: "Based on 12,400+ patient reviews", color: "bg-yellow-500" },
              { icon: Clock, title: "24/7 Support", desc: "Round-the-clock patient assistance", color: "bg-teal-600" },
              { icon: CheckCircle2, title: "No Hidden Costs", desc: "Full transparency in all cost estimates", color: "bg-green-600" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-3`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-gray-900 mb-1" style={{ fontWeight: 700 }}>{item.title}</div>
                <div className="text-gray-500" style={{ fontSize: "0.85rem" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-10" style={{ fontWeight: 800, fontSize: "1.75rem" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none gap-3">
                  <span className="text-gray-900" style={{ fontWeight: 600, fontSize: "0.95rem" }}>{faq.q}</span>
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-open:bg-blue-600 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-blue-600 group-open:text-white group-open:rotate-90 transition-all" />
                  </div>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-600" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-white mb-3" style={{ fontWeight: 800, fontSize: "1.75rem" }}>
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-6" style={{ fontSize: "1rem" }}>
            Search your treatment and get a free cost estimate in under 2 minutes.
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
