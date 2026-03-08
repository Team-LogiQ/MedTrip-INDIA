import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle2,
  Hospital,
  Download,
  Phone,
  MessageCircle,
  ChevronDown,
  Calendar,
  Plane,
  Activity,
  Video,
  FlaskConical,
  BedDouble,
  Clipboard,
  Home,
  Heart,
  TrendingDown,
  Info,
  Award,
  Users,
  ChevronRight,
} from "lucide-react";
import {
  treatments,
  hospitals,
  getTreatmentById,
  getHospitalByName,
  formatRange,
  calculateTotal,
  type Treatment,
} from "../data/treatmentData";

const iconMap: Record<string, React.ReactNode> = {
  video: <Video className="w-5 h-5" />,
  plane: <Plane className="w-5 h-5" />,
  flask: <FlaskConical className="w-5 h-5" />,
  heart: <Heart className="w-5 h-5" />,
  activity: <Activity className="w-5 h-5" />,
  bed: <BedDouble className="w-5 h-5" />,
  clipboard: <Clipboard className="w-5 h-5" />,
  home: <Home className="w-5 h-5" />,
};

const phaseColors = [
  "from-blue-500 to-blue-600",
  "from-teal-500 to-teal-600",
  "from-purple-500 to-purple-600",
  "from-orange-500 to-orange-600",
  "from-red-500 to-red-600",
  "from-green-500 to-green-600",
  "from-indigo-500 to-indigo-600",
  "from-pink-500 to-pink-600",
];

function CostCard({ label, min, max, color }: { label: string; min: number; max: number; color: string }) {
  return (
    <div className={`rounded-xl p-4 ${color}`}>
      <div className="text-xs font-semibold mb-1 opacity-80">{label}</div>
      <div className="font-bold" style={{ fontSize: "1.05rem" }}>
        {formatRange(min, max)}
      </div>
    </div>
  );
}

function HospitalCard({ name, preferred }: { name: string; preferred?: boolean }) {
  const hospital = getHospitalByName(name);
  if (!hospital) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <div className="font-semibold text-gray-900">{name}</div>
      </div>
    );
  }
  return (
    <div className={`bg-white rounded-2xl border shadow-sm p-5 hover:shadow-md transition-all ${preferred ? "border-blue-400 ring-2 ring-blue-100" : "border-gray-100"}`}>
      {preferred && (
        <span className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full mb-2" style={{ fontSize: "0.72rem", fontWeight: 700 }}>
          ✓ YOUR PREFERRED HOSPITAL
        </span>
      )}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <div className="text-gray-900 mb-0.5" style={{ fontWeight: 700, fontSize: "0.95rem" }}>{hospital.name}</div>
          <div className="flex items-center gap-1 text-gray-500" style={{ fontSize: "0.78rem" }}>
            <MapPin className="w-3 h-3" />
            {hospital.city}
          </div>
        </div>
        <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-lg shrink-0">
          <Star className="w-3 h-3 fill-current" />
          <span style={{ fontWeight: 700, fontSize: "0.85rem" }}>{hospital.rating}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {hospital.specialties.slice(0, 3).map((s) => (
          <span key={s} className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full" style={{ fontSize: "0.7rem" }}>
            {s}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="text-center bg-blue-50 rounded-lg py-1.5">
          <div className="text-blue-700" style={{ fontWeight: 700, fontSize: "0.85rem" }}>{hospital.beds}</div>
          <div className="text-blue-500" style={{ fontSize: "0.65rem" }}>Beds</div>
        </div>
        <div className="text-center bg-teal-50 rounded-lg py-1.5">
          <div className="text-teal-700" style={{ fontWeight: 700, fontSize: "0.78rem" }}>{hospital.experience}</div>
          <div className="text-teal-500" style={{ fontSize: "0.65rem" }}>Experience</div>
        </div>
        <div className="text-center bg-orange-50 rounded-lg py-1.5">
          <div className="text-orange-700" style={{ fontWeight: 600, fontSize: "0.68rem" }}>JCI/NABH</div>
          <div className="text-orange-500" style={{ fontSize: "0.65rem" }}>Accredited</div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-1" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
          <Phone className="w-3 h-3" />
          Contact
        </button>
        <button className="flex-1 py-2 rounded-xl border border-teal-500 text-teal-600 hover:bg-teal-50 transition-colors flex items-center justify-center gap-1" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
          <MessageCircle className="w-3 h-3" />
          WhatsApp
        </button>
      </div>
    </div>
  );
}

export function Results() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"overview" | "costs" | "hospitals" | "journey">("overview");

  const treatmentId = searchParams.get("treatment") || "";
  const preferredHospital = searchParams.get("hospital") || "";
  const customCondition = searchParams.get("custom") || "";

  const treatment = getTreatmentById(treatmentId);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-gray-900 mb-2" style={{ fontWeight: 700 }}>Treatment Not Found</h2>
          <p className="text-gray-500 mb-5">Please go back and select a valid treatment.</p>
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white"
            style={{ fontWeight: 600 }}
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const total = calculateTotal(treatment);
  const displayHospitals = preferredHospital
    ? [preferredHospital, ...treatment.recommendedHospitals.filter((h) => h !== preferredHospital)]
    : treatment.recommendedHospitals;

  const tabs = [
    { id: "overview", label: "Overview", icon: Info },
    { id: "costs", label: "Cost Breakdown", icon: DollarSign },
    { id: "hospitals", label: "Hospitals", icon: Hospital },
    { id: "journey", label: "Journey Planner", icon: Calendar },
  ] as const;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-blue-200 hover:text-white mb-5 transition-colors"
            style={{ fontSize: "0.875rem" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Search
          </button>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-white/20 text-white px-2.5 py-0.5 rounded-full" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
                  {treatment.category}
                </span>
                {customCondition && (
                  <span className="bg-orange-400/30 text-orange-100 px-2.5 py-0.5 rounded-full" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
                    Custom: {customCondition}
                  </span>
                )}
              </div>
              <h1 className="text-white mb-1" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                {treatment.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-blue-100">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span style={{ fontSize: "0.875rem" }}>Recovery: {treatment.recoveryTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span style={{ fontSize: "0.875rem" }}>
                    Top Cities: {treatment.topCities.slice(0, 3).join(", ")}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shrink-0">
              <div className="text-blue-100 mb-1" style={{ fontSize: "0.78rem", fontWeight: 600 }}>
                TOTAL ESTIMATED TRIP COST
              </div>
              <div className="text-white" style={{ fontWeight: 800, fontSize: "1.75rem" }}>
                {formatRange(total.min, total.max)}
              </div>
              <div className="flex items-center gap-1 text-teal-300 mt-1" style={{ fontSize: "0.78rem" }}>
                <TrendingDown className="w-3.5 h-3.5" />
                Save 60–80% vs Western countries
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-4 border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-700"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                style={{ fontSize: "0.875rem", fontWeight: activeTab === tab.id ? 700 : 500 }}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-5">
              {/* Treatment Overview */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-gray-900 mb-3" style={{ fontWeight: 700 }}>About This Treatment</h3>
                <p className="text-gray-600" style={{ lineHeight: 1.8, fontSize: "0.95rem" }}>{treatment.overview}</p>
              </div>

              {/* Key Facts */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-gray-900 mb-4" style={{ fontWeight: 700 }}>Key Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Recovery Time", value: treatment.recoveryTime, icon: Clock, color: "text-blue-600 bg-blue-50" },
                    { label: "Category", value: treatment.category, icon: Award, color: "text-teal-600 bg-teal-50" },
                    { label: "Recommended Cities", value: treatment.topCities.join(", "), icon: MapPin, color: "text-orange-600 bg-orange-50" },
                    { label: "Top Hospitals", value: `${treatment.recommendedHospitals.length} recommended`, icon: Hospital, color: "text-purple-600 bg-purple-50" },
                  ].map((fact) => (
                    <div key={fact.label} className={`rounded-xl p-4 ${fact.color.split(" ")[1]}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <fact.icon className={`w-4 h-4 ${fact.color.split(" ")[0]}`} />
                        <span className="text-gray-500" style={{ fontSize: "0.75rem", fontWeight: 600 }}>{fact.label}</span>
                      </div>
                      <div className={`${fact.color.split(" ")[0]}`} style={{ fontWeight: 700, fontSize: "0.9rem" }}>{fact.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why India for this treatment */}
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-gray-900 mb-3" style={{ fontWeight: 700 }}>Why Choose India for {treatment.name}?</h3>
                <div className="space-y-2.5">
                  {[
                    `India's best hospitals for ${treatment.name} are internationally accredited with JCI & NABH certification.`,
                    "Surgeons trained at world's top medical institutions with thousands of successful procedures.",
                    `Cost is 60–75% lower than USA, UK, and Australia with comparable or superior outcomes.`,
                    "Zero waiting period — most procedures scheduled within 7–14 days.",
                    "Dedicated international patient coordinator assigned from day 1.",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions Sidebar */}
            <div className="space-y-4">
              {/* Cost Summary Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h4 className="text-gray-900 mb-4" style={{ fontWeight: 700 }}>Estimated Cost Summary</h4>
                <div className="space-y-3">
                  {[
                    { label: "Treatment/Surgery", ...treatment.costs.treatment },
                    { label: "Consultation & Tests", ...treatment.costs.consultation },
                    { label: "Hospital Stay (5 Days)", ...treatment.costs.hospitalStay },
                    { label: "Medicines & Recovery", ...treatment.costs.medicines },
                    { label: "Local Transport", ...treatment.costs.localTransport },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                      <span className="text-gray-600" style={{ fontSize: "0.825rem" }}>{item.label}</span>
                      <span className="text-gray-900" style={{ fontWeight: 600, fontSize: "0.825rem" }}>
                        {formatRange(item.min, item.max)}
                      </span>
                    </div>
                  ))}
                  <div className="pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900" style={{ fontWeight: 700 }}>Total Estimate</span>
                      <span className="text-blue-700" style={{ fontWeight: 800, fontSize: "1.1rem" }}>
                        {formatRange(total.min, total.max)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-5 text-white">
                <h4 className="text-white mb-2" style={{ fontWeight: 700 }}>Ready to Plan Your Trip?</h4>
                <p className="text-blue-100 mb-4" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
                  Our medical coordinators are available 24/7 to help you book your treatment.
                </p>
                <div className="space-y-2">
                  <button className="w-full py-2.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 transition-all flex items-center justify-center gap-2" style={{ fontWeight: 700, fontSize: "0.875rem" }}>
                    <Phone className="w-4 h-4" />
                    Request Consultation
                  </button>
                  <button className="w-full py-2.5 rounded-xl bg-white/20 border border-white/30 text-white hover:bg-white/30 transition-all flex items-center justify-center gap-2" style={{ fontWeight: 600, fontSize: "0.875rem" }}>
                    <Download className="w-4 h-4" />
                    Download Cost Estimate
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COST BREAKDOWN TAB */}
        {activeTab === "costs" && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-5">
              {/* Visual Cost Cards */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-gray-900 mb-5" style={{ fontWeight: 700 }}>Detailed Cost Breakdown</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  <CostCard label="Treatment / Surgery" {...treatment.costs.treatment} color="bg-blue-50 text-blue-800" />
                  <CostCard label="Doctor Consultation & Tests" {...treatment.costs.consultation} color="bg-teal-50 text-teal-800" />
                  <CostCard label="Hospital Stay (5 Days)" {...treatment.costs.hospitalStay} color="bg-purple-50 text-purple-800" />
                  <CostCard label="Medicines & Recovery" {...treatment.costs.medicines} color="bg-orange-50 text-orange-800" />
                  <CostCard label="Local Transport" {...treatment.costs.localTransport} color="bg-pink-50 text-pink-800" />
                </div>
                {/* Total */}
                <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-5 text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-blue-100 mb-1" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
                        TOTAL ESTIMATED MEDICAL TRIP COST
                      </div>
                      <div className="text-white" style={{ fontWeight: 900, fontSize: "1.75rem" }}>
                        {formatRange(total.min, total.max)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-white/20 rounded-xl px-3 py-2">
                        <div className="text-blue-100" style={{ fontSize: "0.72rem" }}>vs USA/UK</div>
                        <div className="text-teal-300" style={{ fontWeight: 800, fontSize: "1.1rem" }}>Save 70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-gray-900 mb-4" style={{ fontWeight: 700 }}>What's Included in Cost Estimates</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Treatment / Surgery Fee", desc: "Surgeon fees, OT charges, implants/consumables as applicable", icon: "🔪" },
                    { title: "Consultation & Diagnostics", desc: "Initial specialist consultation, pre-op tests, imaging (X-ray, MRI, blood tests)", icon: "🩺" },
                    { title: "5-Day Hospital Stay", desc: "Private room (standard), nursing care, hospital meals, 24-hr monitoring", icon: "🏥" },
                    { title: "Medicines & Recovery", desc: "All medications during hospital stay, discharge medications (30-day supply)", icon: "💊" },
                    { title: "Travel Estimate", desc: "Round-trip international airfare estimate from major hubs", icon: "✈️" },
                    { title: "Local Transportation", desc: "Airport transfers, hospital visits, hotel-hospital shuttle", icon: "🚗" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3 p-3 bg-gray-50 rounded-xl">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <div className="text-gray-900 mb-0.5" style={{ fontWeight: 600, fontSize: "0.875rem" }}>{item.title}</div>
                        <div className="text-gray-500" style={{ fontSize: "0.78rem", lineHeight: 1.5 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cost Comparison */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-gray-900 mb-4" style={{ fontWeight: 700 }}>Global Cost Comparison</h3>
                <div className="space-y-3">
                  {[
                    { country: "🇺🇸 USA", multiplier: 4.5, color: "bg-red-200" },
                    { country: "🇬🇧 UK", multiplier: 3.8, color: "bg-orange-200" },
                    { country: "🇦🇺 Australia", multiplier: 3.5, color: "bg-yellow-200" },
                    { country: "🇸🇬 Singapore", multiplier: 2.5, color: "bg-blue-200" },
                    { country: "🇹🇭 Thailand", multiplier: 1.4, color: "bg-teal-200" },
                    { country: "🇮🇳 India", multiplier: 1, color: "bg-green-300" },
                  ].map((c) => {
                    const pct = Math.min(100, (c.multiplier / 4.5) * 100);
                    const cost = Math.round(((total.min + total.max) / 2) * c.multiplier);
                    const formatted = cost >= 100000
                      ? `₹${(cost / 100000).toFixed(1)}L`
                      : `₹${(cost / 1000).toFixed(0)}K`;
                    return (
                      <div key={c.country}>
                        <div className="flex justify-between mb-1">
                          <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>{c.country}</span>
                          <span style={{ fontSize: "0.875rem", fontWeight: 700 }}>{formatted}</span>
                        </div>
                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${c.color} rounded-full`}
                            style={{ width: `${pct}%`, transition: "width 0.5s ease" }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h4 className="text-gray-900 mb-3" style={{ fontWeight: 700 }}>Important Notes</h4>
                {[
                  "Costs are approximate estimates and may vary based on hospital, severity, and individual needs.",
                  "5-day hospital stay cost is included in all estimates as per standard protocol.",
                  "Contact our team for a personalized quote specific to your condition.",
                ].map((note, i) => (
                  <div key={i} className="flex gap-2 py-2 border-b border-gray-50 last:border-0">
                    <Info className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600" style={{ fontSize: "0.78rem", lineHeight: 1.5 }}>{note}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-5 text-white">
                <h4 className="text-white mb-2" style={{ fontWeight: 700 }}>Get Exact Quote</h4>
                <p className="text-blue-100 mb-4" style={{ fontSize: "0.85rem" }}>
                  Share your medical reports for a precise cost estimate from our partnered hospitals.
                </p>
                <button className="w-full py-2.5 rounded-xl bg-white text-blue-700" style={{ fontWeight: 700, fontSize: "0.875rem" }}>
                  Upload Reports & Get Quote
                </button>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h4 className="text-gray-900 mb-3" style={{ fontWeight: 700 }}>Payment & Insurance</h4>
                {[
                  "Most hospitals accept international insurance",
                  "No-interest EMI options available",
                  "Secure online payment portal",
                  "Full invoice for insurance claims",
                ].map((item) => (
                  <div key={item} className="flex gap-2 py-1.5 border-b border-gray-50 last:border-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600" style={{ fontSize: "0.8rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* HOSPITALS TAB */}
        {activeTab === "hospitals" && (
          <div className="space-y-5">
            <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100 flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
              <div>
                <div className="text-blue-800 mb-0.5" style={{ fontWeight: 600, fontSize: "0.875rem" }}>
                  Recommended Hospitals for {treatment.name}
                </div>
                <div className="text-blue-600" style={{ fontSize: "0.8rem" }}>
                  These hospitals are specifically known for excellence in {treatment.category} care with high success rates for this procedure.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayHospitals.slice(0, 6).map((h) => (
                <HospitalCard key={h} name={h} preferred={h === preferredHospital} />
              ))}
            </div>
            {/* All hospitals link */}
            <div className="text-center pt-4">
              <p className="text-gray-500 mb-3" style={{ fontSize: "0.875rem" }}>
                Looking for a different hospital? Browse all 20 partner hospitals.
              </p>
              <button
                className="px-5 py-2.5 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                style={{ fontWeight: 600 }}
              >
                View All Partner Hospitals
              </button>
            </div>
          </div>
        )}

        {/* JOURNEY PLANNER TAB */}
        {activeTab === "journey" && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {/* AI Journey Planner Header */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-6 mb-5 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white" style={{ fontWeight: 800, fontSize: "1.1rem" }}>AI Medical Journey Planner</div>
                    <div className="text-blue-200" style={{ fontSize: "0.8rem" }}>Your complete {treatment.name} journey timeline</div>
                  </div>
                </div>
                <p className="text-blue-100" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                  This AI-generated timeline shows your complete medical journey from initial consultation to safe return home. Use this to plan your trip and understand exactly what to expect.
                </p>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-gray-900 mb-6" style={{ fontWeight: 700 }}>Your Medical Journey Timeline</h3>
                <div className="space-y-0">
                  {treatment.journeyTimeline.map((phase, i) => (
                    <div key={i} className="flex gap-4">
                      {/* Left — icon + line */}
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${phaseColors[i % phaseColors.length]} flex items-center justify-center text-white shrink-0 shadow-md`}>
                          {iconMap[phase.icon] || <Activity className="w-5 h-5" />}
                        </div>
                        {i < treatment.journeyTimeline.length - 1 && (
                          <div className="w-0.5 flex-1 bg-gray-200 my-2" />
                        )}
                      </div>
                      {/* Right — content */}
                      <div className={`pb-6 ${i === treatment.journeyTimeline.length - 1 ? "pb-0" : ""}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-gray-500" style={{ fontSize: "0.75rem", fontWeight: 600 }}>{phase.days}</span>
                          <ChevronRight className="w-3 h-3 text-gray-300" />
                          <span className="text-gray-900" style={{ fontWeight: 700, fontSize: "0.95rem" }}>{phase.phase}</span>
                        </div>
                        <p className="text-gray-600" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Journey Summary */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h4 className="text-gray-900 mb-3" style={{ fontWeight: 700 }}>Journey Summary</h4>
                <div className="space-y-3">
                  {[
                    { label: "Total Duration", value: `~${treatment.journeyTimeline.length * 2}–${treatment.journeyTimeline.length * 2 + 4} days`, icon: Clock },
                    { label: "Hospital Stay", value: "5 days (included)", icon: BedDouble },
                    { label: "Recovery Period", value: treatment.recoveryTime, icon: Activity },
                    { label: "Pre-arrival Consult", value: "Online (Day 1–2)", icon: Video },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                      <item.icon className="w-4 h-4 text-blue-500 shrink-0" />
                      <div className="flex-1 flex justify-between">
                        <span className="text-gray-500" style={{ fontSize: "0.8rem" }}>{item.label}</span>
                        <span className="text-gray-900" style={{ fontWeight: 600, fontSize: "0.8rem" }}>{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Checklist */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <h4 className="text-gray-900 mb-3" style={{ fontWeight: 700 }}>Pre-Travel Checklist</h4>
                {[
                  "Apply for Indian Medical Visa (e-MedVisa)",
                  "Share medical reports with hospital",
                  "Book round-trip flights",
                  "Arrange accommodation near hospital",
                  "Arrange travel insurance",
                  "Download MedTrip India app",
                  "Save emergency contact numbers",
                ].map((item) => (
                  <div key={item} className="flex gap-2 py-1.5 border-b border-gray-50 last:border-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 mt-0.5 shrink-0" />
                    <span className="text-gray-600" style={{ fontSize: "0.8rem" }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Plan Trip CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-5 text-white">
                <h4 className="text-white mb-2" style={{ fontWeight: 700 }}>Plan My Medical Trip</h4>
                <p className="text-blue-100 mb-4" style={{ fontSize: "0.85rem" }}>
                  Get a personalized itinerary from our medical travel coordinators.
                </p>
                <button className="w-full py-2.5 rounded-xl bg-white text-blue-700 mb-2" style={{ fontWeight: 700, fontSize: "0.875rem" }}>
                  Start Planning →
                </button>
                <button className="w-full py-2.5 rounded-xl bg-white/20 border border-white/30 text-white" style={{ fontWeight: 600, fontSize: "0.875rem" }}>
                  <Download className="w-4 h-4 inline mr-1.5" />
                  Download Journey PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-40 md:hidden">
        <div className="flex gap-3 p-3">
          <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 text-white" style={{ fontWeight: 700, fontSize: "0.875rem" }}>
            Request Consultation
          </button>
          <button className="px-4 py-3 rounded-xl border-2 border-blue-600 text-blue-600" style={{ fontWeight: 600, fontSize: "0.875rem" }}>
            <Phone className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
