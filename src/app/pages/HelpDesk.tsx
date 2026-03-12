import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Clock, MapPin, HelpCircle } from "lucide-react";
import { AnimatedSection, AnimatedGrid, AnimatedCard } from "../components/AnimatedSection";

const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || "http://localhost:5000";

export function HelpDesk() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [treatmentInterest, setTreatmentInterest] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);

    if (!name.trim() || !email.trim()) {
      setSubmitError("Name and email are required.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          treatmentId: treatmentInterest || null,
          source: "help-desk",
        }),
      });

      if (!response.ok) {
        let errorMessage = "Failed to submit enquiry. Please try again.";
        try {
          const data = await response.json();
          if (data?.error && typeof data.error === "string") {
            errorMessage = data.error;
          }
        } catch {
          // ignore JSON parse errors
        }
        throw new Error(errorMessage);
      }

      setSubmitSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setTreatmentInterest("");
      setMessage("");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setSubmitError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
              Help Desk
            </h1>
            <p className="text-blue-100 max-w-3xl mx-auto" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              We're here to help you 24/7. Get in touch with our support team for any assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2" style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                Call Us
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontSize: "0.9rem" }}>
                Speak directly with our support team
              </p>
              <a href="tel:+911800123456" className="text-blue-600 hover:text-blue-700" style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                +91 1800-123-456
              </a>
              <p className="text-gray-500 mt-2" style={{ fontSize: "0.85rem" }}>
                Available 24/7
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2" style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                Email Us
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontSize: "0.9rem" }}>
                Send us your queries anytime
              </p>
              <a href="mailto:support@medtripindia.com" className="text-teal-600 hover:text-teal-700" style={{ fontSize: "1.05rem", fontWeight: 600 }}>
                support@medtripindia.com
              </a>
              <p className="text-gray-500 mt-2" style={{ fontSize: "0.85rem" }}>
                Response within 2 hours
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2" style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                Live Chat
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontSize: "0.9rem" }}>
                Chat with our support agents
              </p>
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors" style={{ fontWeight: 600 }}>
                Start Chat
              </button>
              <p className="text-gray-500 mt-2" style={{ fontSize: "0.85rem" }}>
                Instant response
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h2
                className="text-gray-900 mb-2"
                style={{ fontSize: "1.5rem", fontWeight: 700 }}
              >
                Send Us Your Medical Query
              </h2>
              <p
                className="text-gray-600 mb-6"
                style={{ fontSize: "0.95rem" }}
              >
                Share a few details and our medical coordinators will contact you within 2 hours.
              </p>

              {submitError && (
                <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                  {submitError}
                </div>
              )}

              {submitSuccess && (
                <div className="mb-4 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                  Thank you! Your enquiry has been received. Our team will contact you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1 text-sm font-semibold">
                      Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 text-sm font-semibold">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1 text-sm font-semibold">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+91 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1 text-sm font-semibold">
                      Treatment or Condition
                    </label>
                    <input
                      type="text"
                      value={treatmentInterest}
                      onChange={(e) => setTreatmentInterest(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. Heart bypass, IVF, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 text-sm font-semibold">
                    How can we help you?
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Briefly describe your medical history and what you’re looking for."
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                  <p className="text-gray-500 text-xs">
                    By submitting, you agree to be contacted by MedTrip India coordinators regarding your
                    enquiry.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Submit Enquiry"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-gray-900 mb-8 text-center" style={{ fontSize: "2rem", fontWeight: 800 }}>
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  q: "How do I get started with MedTrip India?",
                  a: "Simply fill out our search form with your treatment needs, and our team will connect you with the best hospitals and doctors. We'll provide you with detailed cost estimates and treatment plans within 24 hours."
                },
                {
                  q: "What services are included in your support?",
                  a: "We provide end-to-end support including medical consultation coordination, accommodation arrangements, local transportation, and post-treatment follow-up care."
                },
                {
                  q: "How much can I save on medical treatments in India?",
                  a: "On average, patients save 60-80% compared to costs in the USA, UK, and Australia. The exact savings depend on the type of treatment and hospital chosen."
                },
                {
                  q: "Are Indian hospitals and doctors qualified?",
                  a: "Yes, all our partner hospitals are JCI or NABH accredited, meeting international quality standards. Our doctors are internationally trained, many from institutions like Harvard, Johns Hopkins, and Mayo Clinic."
                },
                {
                  q: "How long does it take to get a medical visa for India?",
                  a: "Medical visas are typically processed within 3-5 business days. We assist you with all the required documentation to ensure a smooth visa application process."
                },
                {
                  q: "What if I need emergency assistance during my stay?",
                  a: "Our 24/7 support team is always available for any emergencies. We have dedicated coordinators who can assist you immediately and coordinate with hospitals for urgent care."
                },
                {
                  q: "Can my family accompany me?",
                  a: "Yes, we can arrange medical attendant visas for up to two family members. We also help with their accommodation and local arrangements."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept international wire transfers, credit cards, and online payment platforms. Payment terms are flexible and can be discussed based on your treatment plan."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <HelpCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-2" style={{ fontSize: "1.05rem", fontWeight: 700 }}>
                        {faq.q}
                      </h3>
                      <p className="text-gray-600" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Office Information */}
          <div className="bg-gradient-to-br from-blue-900 to-teal-700 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="mb-6" style={{ fontSize: "1.8rem", fontWeight: 800 }}>
                  Visit Our Office
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h3 className="mb-1" style={{ fontSize: "1.05rem", fontWeight: 600 }}>
                        Head Office
                      </h3>
                      <p className="text-blue-100" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                        MedTrip India Pvt. Ltd.<br />
                        Tower A, 5th Floor<br />
                        DLF Cyber City, Gurgaon<br />
                        Haryana 122002, India
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h3 className="mb-1" style={{ fontSize: "1.05rem", fontWeight: 600 }}>
                        Office Hours
                      </h3>
                      <p className="text-blue-100" style={{ fontSize: "0.95rem" }}>
                        Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                        Saturday: 10:00 AM - 4:00 PM IST<br />
                        Sunday: Closed (Emergency support available 24/7)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-6" style={{ fontSize: "1.8rem", fontWeight: 800 }}>
                  Emergency Contact
                </h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <p className="text-blue-100 mb-4" style={{ fontSize: "0.95rem" }}>
                    For urgent medical assistance or emergencies during your stay in India:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-blue-200 mb-1" style={{ fontSize: "0.85rem" }}>
                        24/7 Emergency Hotline
                      </p>
                      <a href="tel:+919876543210" className="text-white hover:text-teal-300 transition-colors" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
                        +91 98765-43210
                      </a>
                    </div>
                    <div>
                      <p className="text-blue-200 mb-1" style={{ fontSize: "0.85rem" }}>
                        WhatsApp Support
                      </p>
                      <a href="https://wa.me/919876543210" className="text-white hover:text-teal-300 transition-colors" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
                        +91 98765-43210
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
