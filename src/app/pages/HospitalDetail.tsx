import { useParams, useNavigate } from "react-router";
import { ArrowLeft, MapPin, Star, Shield, Phone, Globe } from "lucide-react";
import { hospitals } from "../data/treatmentData";

export function HospitalDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hospital = hospitals.find((h) => h.id === id);

  if (!hospital) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-gray-900 mb-2" style={{ fontWeight: 700 }}>Hospital Not Found</h2>
          <button onClick={() => navigate("/")} className="px-5 py-2.5 rounded-xl bg-blue-600 text-white mt-3" style={{ fontWeight: 600 }}>
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-blue-700 to-teal-600 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-blue-200 hover:text-white mb-5">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <h1 className="text-white mb-2" style={{ fontWeight: 800, fontSize: "1.75rem" }}>{hospital.name}</h1>
          <div className="flex items-center gap-3 text-blue-200">
            <MapPin className="w-4 h-4" />
            <span>{hospital.city}</span>
            <span className="w-1 h-1 rounded-full bg-blue-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white" style={{ fontWeight: 700 }}>{hospital.rating}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-gray-900 mb-4" style={{ fontWeight: 700 }}>Hospital Overview</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Beds</span>
                <span className="text-gray-900" style={{ fontWeight: 600 }}>{hospital.beds}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Experience</span>
                <span className="text-gray-900" style={{ fontWeight: 600 }}>{hospital.experience}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Accreditation</span>
                <span className="text-teal-700" style={{ fontWeight: 600, fontSize: "0.85rem" }}>{hospital.accreditation}</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-gray-900 mb-4" style={{ fontWeight: 700 }}>Specialties</h3>
            <div className="flex flex-wrap gap-2">
              {hospital.specialties.map((s) => (
                <span key={s} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full" style={{ fontSize: "0.8rem", fontWeight: 500 }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-6 text-white">
          <h3 className="text-white mb-3" style={{ fontWeight: 700 }}>Contact This Hospital</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 py-3 rounded-xl bg-white text-blue-700 flex items-center justify-center gap-2" style={{ fontWeight: 700 }}>
              <Phone className="w-4 h-4" />
              Request Consultation
            </button>
            <button className="flex-1 py-3 rounded-xl bg-white/20 border border-white/30 text-white flex items-center justify-center gap-2" style={{ fontWeight: 600 }}>
              <Globe className="w-4 h-4" />
              Visit Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
