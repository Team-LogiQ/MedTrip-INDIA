import { useState } from "react";
import { useNavigate } from "react-router";
import { MapPin, Award, Star, Phone, Mail, Globe, ChevronRight, Search, Filter, Building2 } from "lucide-react";

const hospitals = [
  {
    id: "apollo-chennai",
    name: "Apollo Hospitals Chennai",
    type: "Hospital",
    logo: "/images/hospitals/apollo.png",
    location: "Chennai, Tamil Nadu",
    rating: 4.8,
    reviews: 2450,
    accreditation: ["JCI", "NABH"],
    specialties: ["Cardiology", "Oncology", "Neurology", "Orthopedics"],
    established: 1983,
    beds: 550,
    description: "Apollo Hospitals Chennai is India's first corporate hospital and a pioneer in bringing world-class healthcare to the country.",
    costSavings: "70%",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=400&fit=crop"
  },
  {
    id: "medanta-gurgaon",
    name: "Medanta - The Medicity",
    type: "Hospital",
    logo: "/images/hospitals/medanta.png",
    location: "Gurugram, Haryana",
    rating: 4.9,
    reviews: 3200,
    accreditation: ["JCI", "NABH"],
    specialties: ["Cardiac Surgery", "Neurosurgery", "Transplant", "Oncology"],
    established: 2009,
    beds: 1250,
    description: "Medanta is one of India's largest multi-specialty medical institutes with state-of-the-art facilities and internationally trained doctors.",
    costSavings: "75%",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&h=400&fit=crop"
  },
  {
    id: "fortis-gurgaon",
    name: "Fortis Memorial Research Institute",
    type: "Hospital",
    logo: "/images/hospitals/fortis.png",
    location: "Gurugram, Haryana",
    rating: 4.7,
    reviews: 1890,
    accreditation: ["JCI", "NABH"],
    specialties: ["Cardiology", "Neurology", "Oncology", "Orthopedics"],
    established: 2012,
    beds: 1000,
    description: "Fortis FMRI is a leading multi-specialty hospital known for its advanced medical technology and patient-centric care.",
    costSavings: "68%",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=400&fit=crop"
  },
  {
    id: "aiims-delhi",
    name: "AIIMS New Delhi",
    type: "Hospital",
    logo: "/images/hospitals/AIIMS.png",
    location: "New Delhi",
    rating: 4.9,
    reviews: 5600,
    accreditation: ["NABH"],
    specialties: ["All Specialties", "Research", "Teaching Hospital"],
    established: 1956,
    beds: 2478,
    description: "AIIMS is India's premier medical institution, known for excellence in patient care, research, and medical education.",
    costSavings: "80%",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=400&fit=crop"
  },
  {
    id: "max-saket",
    name: "Max Super Speciality Hospital",
    type: "Hospital",
    logo: "/images/hospitals/max.png",
    location: "Saket, New Delhi",
    rating: 4.6,
    reviews: 1560,
    accreditation: ["JCI", "NABH"],
    specialties: ["Cardiology", "Oncology", "Neurosciences", "Orthopedics"],
    established: 2006,
    beds: 500,
    description: "Max Hospital Saket is a leading healthcare provider offering comprehensive medical services with cutting-edge technology.",
    costSavings: "65%",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=800&h=400&fit=crop"
  },
  {
    id: "narayana-bangalore",
    name: "Narayana Health City",
    type: "Hospital",
    logo: "/images/hospitals/narayana.png",
    location: "Bangalore, Karnataka",
    rating: 4.8,
    reviews: 2890,
    accreditation: ["JCI", "NABH"],
    specialties: ["Cardiac Surgery", "Oncology", "Neurology", "Transplant"],
    established: 2001,
    beds: 1400,
    description: "Narayana Health is known for providing high-quality, affordable healthcare with a focus on cardiac care and complex surgeries.",
    costSavings: "72%",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=400&fit=crop"
  },
  {
    id: "kokilaben-mumbai",
    name: "Kokilaben Dhirubhai Ambani Hospital",
    type: "Hospital",
    logo: "/images/hospitals/kokilaben.png",
    location: "Mumbai, Maharashtra",
    rating: 4.7,
    reviews: 1670,
    accreditation: ["JCI", "NABH"],
    specialties: ["Oncology", "Neurosciences", "Cardiac Sciences", "Orthopedics"],
    established: 2009,
    beds: 750,
    description: "Kokilaben Hospital is a state-of-the-art facility offering world-class medical care with advanced technology and expert doctors.",
    costSavings: "70%",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&h=400&fit=crop"
  },
  {
    id: "manipal-bangalore",
    name: "Manipal Hospital Bangalore",
    type: "Hospital",
    logo: "/images/hospitals/manipal.png",
    location: "Bangalore, Karnataka",
    rating: 4.6,
    reviews: 1450,
    accreditation: ["NABH"],
    specialties: ["Cardiology", "Neurology", "Oncology", "Gastroenterology"],
    established: 1991,
    beds: 650,
    description: "Manipal Hospital is a leading healthcare provider in South India, known for its comprehensive medical services and patient care.",
    costSavings: "68%",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=400&fit=crop"
  },
  {
    id: "asian-heart-mumbai",
    name: "Asian Heart Institute",
    type: "Hospital",
    logo: "/images/hospitals/asian-heart.png",
    location: "Mumbai, Maharashtra",
    rating: 4.9,
    reviews: 2100,
    accreditation: ["JCI", "NABH"],
    specialties: ["Cardiac Surgery", "Interventional Cardiology", "Pediatric Cardiology"],
    established: 2002,
    beds: 250,
    description: "Asian Heart Institute is a dedicated cardiac care center with world-renowned cardiologists and state-of-the-art facilities.",
    costSavings: "75%",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&h=400&fit=crop"
  },
  {
    id: "artemis-gurgaon",
    name: "Artemis Hospital",
    type: "Hospital",
    logo: "/images/hospitals/artemis.png",
    location: "Gurugram, Haryana",
    rating: 4.7,
    reviews: 1780,
    accreditation: ["JCI", "NABH"],
    specialties: ["Oncology", "Neurosciences", "Cardiac Sciences", "Orthopedics"],
    established: 2007,
    beds: 400,
    description: "Artemis Hospital is a leading multi-specialty hospital offering comprehensive healthcare services with advanced medical technology.",
    costSavings: "70%",
    image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?w=800&h=400&fit=crop"
  },
  {
    id: "heart-care-clinic-delhi",
    name: "Heart Care Clinic",
    type: "Clinic",
    logo: "/images/hospitals/apollo.png",
    location: "New Delhi",
    rating: 4.7,
    reviews: 890,
    accreditation: ["NABH"],
    specialties: ["Cardiology", "Preventive Cardiology"],
    established: 2015,
    beds: 25,
    description: "Specialized cardiac clinic offering comprehensive heart care services with experienced cardiologists and modern diagnostic facilities.",
    costSavings: "60%",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=400&fit=crop"
  },
  {
    id: "neurohealth-center-bangalore",
    name: "NeuroHealth Center",
    type: "Clinic",
    logo: "/images/hospitals/fortis.png",
    location: "Bangalore, Karnataka",
    rating: 4.6,
    reviews: 650,
    accreditation: ["NABH"],
    specialties: ["Neurology", "Neurosurgery"],
    established: 2018,
    beds: 20,
    description: "Advanced neurology clinic specializing in brain and spine disorders with state-of-the-art diagnostic and treatment facilities.",
    costSavings: "55%",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=400&fit=crop"
  },
  {
    id: "joint-care-clinic-mumbai",
    name: "Joint Care Clinic",
    type: "Clinic",
    logo: "/images/hospitals/max.png",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    reviews: 1120,
    accreditation: ["NABH"],
    specialties: ["Orthopedics", "Sports Medicine"],
    established: 2016,
    beds: 30,
    description: "Premier orthopedic clinic offering joint replacement, sports injury treatment, and comprehensive bone and joint care.",
    costSavings: "58%",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop"
  },
  {
    id: "fertility-ivf-center-chennai",
    name: "Fertility & IVF Center",
    type: "Clinic",
    logo: "/images/hospitals/manipal.png",
    location: "Chennai, Tamil Nadu",
    rating: 4.9,
    reviews: 1580,
    accreditation: ["NABH"],
    specialties: ["IVF", "Reproductive Medicine"],
    established: 2014,
    beds: 15,
    description: "Leading fertility clinic with high success rates in IVF treatments and comprehensive reproductive healthcare services.",
    costSavings: "62%",
    image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&h=400&fit=crop"
  },
  {
    id: "eye-care-clinic-pune",
    name: "Advanced Eye Care Clinic",
    type: "Clinic",
    logo: "/images/hospitals/narayana.png",
    location: "Pune, Maharashtra",
    rating: 4.7,
    reviews: 980,
    accreditation: ["NABH"],
    specialties: ["Ophthalmology", "LASIK Surgery"],
    established: 2017,
    beds: 12,
    description: "Specialized eye care clinic offering LASIK, cataract surgery, and comprehensive eye treatments with latest technology.",
    costSavings: "65%",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=400&fit=crop"
  }
];

export function Hospitals() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const specialties = ["All", "Cardiology", "Oncology", "Neurology", "Orthopedics", "Transplant", "IVF", "Ophthalmology"];
  const types = ["All", "Hospital", "Clinic"];
  const locations = ["All", "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad"];

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hospital.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || selectedSpecialty === "All" ||
                            hospital.specialties.includes(selectedSpecialty);
    const matchesType = !selectedType || selectedType === "All" ||
                       hospital.type === selectedType;
    const matchesLocation = !selectedLocation || selectedLocation === "All" ||
                           hospital.location.includes(selectedLocation);
    return matchesSearch && matchesSpecialty && matchesType && matchesLocation;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              Top Hospitals & Clinics in India
            </h1>
            <p className="text-blue-100 max-w-3xl mx-auto" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              Explore India's leading JCI and NABH accredited hospitals offering world-class medical care
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search hospitals & clinics by name or location..."
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
          <div className="space-y-3">
            {/* Type Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-200">
              <Building2 className="w-5 h-5 text-gray-600 shrink-0" />
              <span className="text-gray-600 text-sm font-semibold shrink-0">Type:</span>
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type === "All" ? "" : type)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    (type === "All" && !selectedType) || selectedType === type
                      ? "bg-teal-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                  style={{ fontSize: "0.9rem", fontWeight: 600 }}
                >
                  {type}
                </button>
              ))}
            </div>
            
            {/* Location Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-200">
              <MapPin className="w-5 h-5 text-gray-600 shrink-0" />
              <span className="text-gray-600 text-sm font-semibold shrink-0">Location:</span>
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => setSelectedLocation(location === "All" ? "" : location)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    (location === "All" && !selectedLocation) || selectedLocation === location
                      ? "bg-purple-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                  style={{ fontSize: "0.9rem", fontWeight: 600 }}
                >
                  {location}
                </button>
              ))}
            </div>
            
            {/* Specialty Filter */}
            <div className="flex items-center gap-2 overflow-x-auto">
              <Filter className="w-5 h-5 text-gray-600 shrink-0" />
              <span className="text-gray-600 text-sm font-semibold shrink-0">Specialty:</span>
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
        </div>
      </section>

      {/* Hospitals List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600" style={{ fontSize: "1rem" }}>
              Showing {filteredHospitals.length} hospital{filteredHospitals.length !== 1 ? 's & clinics' : ' & clinic'}
            </p>
          </div>

          <div className="grid gap-6">
            {filteredHospitals.map((hospital) => (
              <div
                key={hospital.id}
                className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Hospital Image */}
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={hospital.image}
                      alt={hospital.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full border border-gray-200" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
                      {hospital.type}
                    </div>
                    <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                      Save up to {hospital.costSavings}
                    </div>
                  </div>

                  {/* Hospital Info */}
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={hospital.logo}
                          alt={hospital.name}
                          className="w-16 h-16 object-contain"
                        />
                        <div>
                          <h2 className="text-gray-900 mb-1" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                            {hospital.name}
                          </h2>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span style={{ fontSize: "0.9rem" }}>{hospital.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-gray-900" style={{ fontWeight: 600 }}>{hospital.rating}</span>
                        <span className="text-gray-500" style={{ fontSize: "0.85rem" }}>({hospital.reviews} reviews)</span>
                      </div>
                      <div className="flex gap-2">
                        {hospital.accreditation.map((acc) => (
                          <span key={acc} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                            {acc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                      {hospital.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Established</p>
                        <p className="text-gray-900 font-semibold">{hospital.established}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Total Beds</p>
                        <p className="text-gray-900 font-semibold">{hospital.beds}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-gray-700 mb-2" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                        Specialties:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {hospital.specialties.map((specialty) => (
                          <span key={specialty} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => navigate(`/hospital/${hospital.id}`)}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl hover:opacity-90 transition-all"
                        style={{ fontWeight: 600 }}
                      >
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all" style={{ fontWeight: 600 }}>
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
