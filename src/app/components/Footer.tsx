import { Link } from "react-router";
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white" style={{ fontWeight: 700, fontSize: "1.05rem" }}>MedTrip India</span>
                <span className="text-teal-400" style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.08em" }}>MEDICAL TOURISM</span>
              </div>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: "1.6" }} className="text-gray-400">
              Your trusted partner for world-class medical treatment in India. Transparent costs, top hospitals, end-to-end support.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600 }}>Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Find Treatment", path: "/" },
                { label: "How It Works", path: "/how-it-works" },
                { label: "Travel Guide", path: "/travel-guide" },
                { label: "Top Hospitals", path: "/how-it-works" },
              ].map((link) => (
                <li key={link.path + link.label}>
                  <Link to={link.path} className="hover:text-teal-400 transition-colors" style={{ fontSize: "0.875rem" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Treatments */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600 }}>Popular Treatments</h4>
            <ul className="space-y-2">
              {[
                "Heart Bypass Surgery",
                "Knee Replacement",
                "Kidney Transplant",
                "IVF Treatment",
                "Cancer Care",
                "Liver Transplant",
                "Hair Transplant",
                "LASIK Eye Surgery",
              ].map((t) => (
                <li key={t}>
                  <span className="text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" style={{ fontSize: "0.875rem" }}>
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600 }}>Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-white" style={{ fontSize: "0.875rem" }}>+91 1800-123-456</div>
                  <div className="text-gray-500" style={{ fontSize: "0.75rem" }}>24/7 Patient Support</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-white" style={{ fontSize: "0.875rem" }}>care@medtripindia.com</div>
                  <div className="text-gray-500" style={{ fontSize: "0.75rem" }}>Email support</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-white" style={{ fontSize: "0.875rem" }}>New Delhi, India</div>
                  <div className="text-gray-500" style={{ fontSize: "0.75rem" }}>Head Office</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p style={{ fontSize: "0.8rem" }} className="text-gray-500 text-center sm:text-left">
            © 2026 MedTrip India. All rights reserved. | For information purposes only – not a substitute for professional medical advice.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-teal-400 transition-colors" style={{ fontSize: "0.8rem" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
