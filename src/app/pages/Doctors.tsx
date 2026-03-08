import { useState } from "react";
import { Award, MapPin, Star, Calendar, GraduationCap, Stethoscope, Building2, CheckCircle } from "lucide-react";

const doctors = [
  {
    id: "dr-sharma",
    name: "Dr. Rajesh Sharma",
    specialty: "Cardiologist",
    qualification: "MBBS, MD, DM (Cardiology)",
    experience: 25,
    rating: 4.9,
    reviews: 1250,
    hospital: "Apollo Hospitals Chennai",
    location: "Chennai, Tamil Nadu",
    hasClinic: true,
    clinicName: "Heart Care Clinic",
    languages: ["English", "Hindi", "Tamil"],
    expertise: ["Interventional Cardiology", "Heart Failure", "Coronary Angioplasty", "Pacemaker Implantation"],
    education: ["AIIMS New Delhi", "Harvard Medical School (Fellowship)"],
    awards: ["Best Cardiologist Award 2022", "Excellence in Patient Care 2021"],
    consultationFee: "₹1,200",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    about: "Dr. Sharma is a renowned interventional cardiologist with over 25 years of experience. He has performed more than 10,000 successful cardiac procedures."
  },
  {
    id: "dr-patel",
    name: "Dr. Priya Patel",
    specialty: "Oncologist",
    qualification: "MBBS, MD, DM (Medical Oncology)",
    experience: 18,
    rating: 4.8,
    reviews: 980,
    hospital: "Medanta - The Medicity",
    location: "Gurugram, Haryana",
    hasClinic: false,
    languages: ["English", "Hindi", "Gujarati"],
    expertise: ["Breast Cancer", "Lung Cancer", "Chemotherapy", "Immunotherapy"],
    education: ["AIIMS New Delhi", "Memorial Sloan Kettering (USA)"],
    awards: ["Outstanding Oncologist 2023", "Research Excellence Award 2020"],
    consultationFee: "₹1,500",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    about: "Dr. Patel specializes in medical oncology with a focus on personalized cancer treatment and cutting-edge immunotherapy protocols."
  },
  {
    id: "dr-kumar",
    name: "Dr. Anil Kumar",
    specialty: "Neurosurgeon",
    qualification: "MBBS, MS, MCh (Neurosurgery)",
    experience: 22,
    rating: 4.9,
    reviews: 1450,
    hospital: "Fortis Memorial Research Institute",
    location: "Gurugram, Haryana",
    hasClinic: true,
    clinicName: "NeuroHealth Center",
    languages: ["English", "Hindi"],
    expertise: ["Brain Tumor Surgery", "Spine Surgery", "Minimally Invasive Neurosurgery", "Pediatric Neurosurgery"],
    education: ["AIIMS New Delhi", "Johns Hopkins University (Fellowship)"],
    awards: ["Best Neurosurgeon 2022", "Innovation in Surgery Award 2021"],
    consultationFee: "₹1,500",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    about: "Dr. Kumar is a highly skilled neurosurgeon known for his expertise in complex brain and spine surgeries using advanced minimally invasive techniques."
  },
  {
    id: "dr-singh",
    name: "Dr. Meera Singh",
    specialty: "Orthopedic Surgeon",
    qualification: "MBBS, MS (Orthopedics)",
    experience: 20,
    rating: 4.7,
    reviews: 1120,
    hospital: "Max Super Speciality Hospital",
    location: "New Delhi",
    hasClinic: true,
    clinicName: "Joint Care Clinic",
    languages: ["English", "Hindi", "Punjabi"],
    expertise: ["Joint Replacement", "Sports Medicine", "Arthroscopy", "Trauma Surgery"],
    education: ["AIIMS New Delhi", "Mayo Clinic (Fellowship)"],
    awards: ["Excellence in Orthopedics 2023", "Patient Choice Award 2022"],
    consultationFee: "₹1,300",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    about: "Dr. Singh is an expert in joint replacement surgeries and sports medicine, having successfully performed over 5,000 orthopedic procedures."
  },
  {
    id: "dr-reddy",
    name: "Dr. Vikram Reddy",
    specialty: "Gastroenterologist",
    qualification: "MBBS, MD, DM (Gastroenterology)",
    experience: 16,
    rating: 4.8,
    reviews: 890,
    hospital: "Narayana Health City",
    location: "Bangalore, Karnataka",
    hasClinic: false,
    languages: ["English", "Hindi", "Telugu", "Kannada"],
    expertise: ["Liver Diseases", "Endoscopy", "IBD Treatment", "Pancreatic Disorders"],
    education: ["CMC Vellore", "Cleveland Clinic (Fellowship)"],
    awards: ["Best Gastroenterologist 2022", "Research Publication Award 2021"],
    consultationFee: "₹1,100",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
    about: "Dr. Reddy specializes in advanced endoscopic procedures and treatment of complex liver and pancreatic diseases."
  },
  {
    id: "dr-desai",
    name: "Dr. Anjali Desai",
    specialty: "Fertility Specialist",
    qualification: "MBBS, MD, DNB (Reproductive Medicine)",
    experience: 14,
    rating: 4.9,
    reviews: 1680,
    hospital: "Manipal Hospital Bangalore",
    location: "Bangalore, Karnataka",
    hasClinic: true,
    clinicName: "Fertility & IVF Center",
    languages: ["English", "Hindi", "Marathi"],
    expertise: ["IVF", "ICSI", "Egg Freezing", "Male Infertility"],
    education: ["Grant Medical College Mumbai", "Cornell University (Fellowship)"],
    awards: ["Best IVF Specialist 2023", "Patient Care Excellence 2022"],
    consultationFee: "₹1,400",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
    about: "Dr. Desai is a leading fertility specialist with an exceptional success rate in IVF treatments and reproductive medicine."
  },
  {
    id: "dr-khan",
    name: "Dr. Arif Khan",
    specialty: "Nephrologist",
    qualification: "MBBS, MD, DM (Nephrology)",
    experience: 19,
    rating: 4.7,
    reviews: 760,
    hospital: "Kokilaben Dhirubhai Ambani Hospital",
    location: "Mumbai, Maharashtra",
    hasClinic: false,
    languages: ["English", "Hindi", "Urdu"],
    expertise: ["Kidney Transplant", "Dialysis", "Chronic Kidney Disease", "Hypertension"],
    education: ["KEM Hospital Mumbai", "University of Toronto (Fellowship)"],
    awards: ["Excellence in Nephrology 2022", "Best Transplant Physician 2021"],
    consultationFee: "₹1,300",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
    about: "Dr. Khan is an expert nephrologist specializing in kidney transplantation and management of complex renal disorders."
  },
  {
    id: "dr-iyer",
    name: "Dr. Lakshmi Iyer",
    specialty: "Pediatrician",
    qualification: "MBBS, MD (Pediatrics), Fellowship (Neonatology)",
    experience: 17,
    rating: 4.9,
    reviews: 2100,
    hospital: "Asian Heart Institute",
    location: "Mumbai, Maharashtra",
    hasClinic: true,
    clinicName: "Children's Health Clinic",
    languages: ["English", "Hindi", "Tamil", "Malayalam"],
    expertise: ["Neonatology", "Pediatric Cardiology", "Child Development", "Vaccination"],
    education: ["AIIMS New Delhi", "Boston Children's Hospital (Fellowship)"],
    awards: ["Best Pediatrician 2023", "Child Care Excellence Award 2022"],
    consultationFee: "₹1,000",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop",
    about: "Dr. Iyer is a compassionate pediatrician with extensive experience in neonatal care and pediatric cardiology."
  }
];

export function Doctors() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const specialties = ["All", "Cardiologist", "Oncologist", "Neurosurgeon", "Orthopedic Surgeon", "Gastroenterologist", "Fertility Specialist", "Nephrologist", "Pediatrician"];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || selectedSpecialty === "All" ||
                            doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              Find Expert Doctors in India
            </h1>
            <p className="text-blue-100 max-w-3xl mx-auto" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              Connect with internationally trained specialists across all medical fields
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors by name, specialty, or hospital..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                style={{ fontSize: "1rem" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-gray-50 border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Award className="w-5 h-5 text-gray-600 shrink-0" />
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty === "All" ? "" : specialty)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  (specialty === "All" && !selectedSpecialty) || selectedSpecialty === specialty
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
                style={{ fontSize: "0.9rem", fontWeight: 600 }}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600" style={{ fontSize: "1rem" }}>
              Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-4 mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 mb-2" style={{ fontSize: "1rem", fontWeight: 600 }}>
                      {doctor.specialty}
                    </p>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-gray-900" style={{ fontWeight: 600, fontSize: "0.9rem" }}>{doctor.rating}</span>
                      <span className="text-gray-500" style={{ fontSize: "0.85rem" }}>({doctor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {doctor.about}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span style={{ fontSize: "0.85rem" }}>{doctor.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    <span style={{ fontSize: "0.85rem" }}>{doctor.experience} years of experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Building2 className="w-4 h-4 text-purple-600" />
                    <span style={{ fontSize: "0.85rem" }}>{doctor.hospital}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    <span style={{ fontSize: "0.85rem" }}>{doctor.location}</span>
                  </div>
                  {doctor.hasClinic && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span style={{ fontSize: "0.85rem" }}>Has Private Clinic: {doctor.clinicName}</span>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 mb-2" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                    Areas of Expertise:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.expertise.slice(0, 3).map((exp) => (
                      <span key={exp} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Consultation Fee</p>
                    <p className="text-gray-900" style={{ fontSize: "1.2rem", fontWeight: 700 }}>{doctor.consultationFee}</p>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl hover:opacity-90 transition-all" style={{ fontWeight: 600 }}>
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
