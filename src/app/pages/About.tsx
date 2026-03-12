import { motion } from "framer-motion";
import { Heart, Award, Users, Globe, Shield, Clock } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
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

export function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              About MedTrip India
            </h1>
            <p className="text-blue-100 max-w-3xl mx-auto" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              Your trusted partner in accessing world-class healthcare in India
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-4" style={{ fontSize: "2rem", fontWeight: 800 }}>
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                MedTrip India is dedicated to making world-class healthcare accessible and affordable for international patients. We bridge the gap between patients seeking quality medical treatment and India's finest hospitals and medical professionals.
              </p>
              <p className="text-gray-600 mb-4" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                With over a decade of experience in medical tourism, we've successfully helped thousands of patients from across the globe receive life-changing treatments in India. Our comprehensive support system ensures that your medical journey is smooth, safe, and stress-free.
              </p>
              <p className="text-gray-600" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                We believe that everyone deserves access to quality healthcare, regardless of geographical or financial barriers. That's why we work tirelessly to connect you with the best medical facilities at prices that are 60-80% lower than Western countries.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <div className="text-blue-600 mb-2" style={{ fontSize: "2.5rem", fontWeight: 800 }}>50K+</div>
                <div className="text-gray-700" style={{ fontSize: "0.9rem", fontWeight: 600 }}>Patients Served</div>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 text-center">
                <div className="text-teal-600 mb-2" style={{ fontSize: "2.5rem", fontWeight: 800 }}>98%</div>
                <div className="text-gray-700" style={{ fontSize: "0.9rem", fontWeight: 600 }}>Success Rate</div>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6 text-center">
                <div className="text-purple-600 mb-2" style={{ fontSize: "2.5rem", fontWeight: 800 }}>100+</div>
                <div className="text-gray-700" style={{ fontSize: "0.9rem", fontWeight: 600 }}>Partner Hospitals</div>
              </div>
              <div className="bg-orange-50 rounded-2xl p-6 text-center">
                <div className="text-orange-600 mb-2" style={{ fontSize: "2.5rem", fontWeight: 800 }}>24/7</div>
                <div className="text-gray-700" style={{ fontSize: "0.9rem", fontWeight: 600 }}>Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-3" style={{ fontSize: "2rem", fontWeight: 800 }}>
              Our Core Values
            </h2>
            <p className="text-gray-600" style={{ fontSize: "1.05rem" }}>
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Patient-First Approach",
                desc: "Your health and well-being are our top priorities. Every decision we make is centered around providing you with the best possible care and experience.",
                color: "bg-red-50 text-red-600"
              },
              {
                icon: Shield,
                title: "Trust & Transparency",
                desc: "We believe in complete transparency. From cost breakdowns to treatment options, we ensure you have all the information needed to make informed decisions.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: Award,
                title: "Excellence in Service",
                desc: "We partner only with JCI-accredited hospitals and internationally trained doctors to ensure you receive world-class medical care.",
                color: "bg-teal-50 text-teal-600"
              },
              {
                icon: Users,
                title: "Personalized Care",
                desc: "Every patient is unique. We provide customized treatment plans and dedicated support tailored to your specific medical needs and preferences.",
                color: "bg-purple-50 text-purple-600"
              },
              {
                icon: Globe,
                title: "Global Standards",
                desc: "We maintain international healthcare standards while offering the warmth and hospitality that India is known for.",
                color: "bg-orange-50 text-orange-600"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                desc: "Our team is available round the clock to assist you at every step of your medical journey, from initial consultation to post-treatment follow-up.",
                color: "bg-green-50 text-green-600"
              }
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mb-4`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-gray-900 mb-2" style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                  {value.title}
                </h3>
                <p className="text-gray-600" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-3" style={{ fontSize: "2rem", fontWeight: 800 }}>
              Why Choose MedTrip India?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-blue-600" style={{ fontWeight: 700 }}>1</span>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1" style={{ fontSize: "1.05rem", fontWeight: 700 }}>
                    End-to-End Support
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                    From medical consultation coordination to accommodation and post-treatment care, we handle everything so you can focus on your recovery.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-teal-600" style={{ fontWeight: 700 }}>2</span>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1" style={{ fontSize: "1.05rem", fontWeight: 700 }}>
                    Verified Hospitals & Doctors
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                    All our partner hospitals are JCI or NABH accredited, and doctors are internationally trained with proven track records.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-purple-600" style={{ fontWeight: 700 }}>3</span>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1" style={{ fontSize: "1.05rem", fontWeight: 700 }}>
                    Transparent Pricing
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                    Get detailed cost estimates upfront with no hidden charges. Know exactly what you're paying for before you travel.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-orange-600" style={{ fontWeight: 700 }}>4</span>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1" style={{ fontSize: "1.05rem", fontWeight: 700 }}>
                    Multilingual Support
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                    Our team speaks multiple languages to ensure clear communication throughout your medical journey.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-green-600" style={{ fontWeight: 700 }}>5</span>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1" style={{ fontSize: "1.05rem", fontWeight: 700 }}>
                    Post-Treatment Follow-up
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                    We stay connected with you even after you return home, coordinating with your doctors for follow-up consultations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-red-600" style={{ fontWeight: 700 }}>6</span>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1" style={{ fontSize: "1.05rem", fontWeight: 700 }}>
                    Travel & Accommodation
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                    We arrange comfortable accommodation near hospitals and provide local transportation for all medical appointments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
