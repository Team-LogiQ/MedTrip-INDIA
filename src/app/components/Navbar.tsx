import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { LoginButton } from "./LoginButton";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [findDropdownOpen, setFindDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Travel Guide", path: "/travel-guide" },
    { label: "Help Desk", path: "/help-desk" },
  ];

  const findMenuItems = [
    { label: "Hospitals & Clinics", path: "/hospitals" },
    { label: "Doctors", path: "/doctors" },
  ];

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setFindDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setFindDropdownOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shadow-md">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-gray-900"
                style={{ fontWeight: 700, fontSize: "1.05rem" }}
              >
                MedTrip
              </span>
              <span
                className="text-teal-600"
                style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.08em" }}
              >
                INDIA
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                style={{ fontSize: "0.9rem", fontWeight: isActive(link.path) ? 600 : 500 }}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Find Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                style={{ fontSize: "0.9rem", fontWeight: 500 }}
              >
                Find
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {findDropdownOpen && (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                >
                  {findMenuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2.5 text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      style={{ fontSize: "0.9rem", fontWeight: 500 }}
                      onClick={() => setFindDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <LoginButton />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 rounded-lg transition-colors ${
                isActive(link.path)
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              style={{ fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
          {findMenuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
              style={{ fontWeight: 500 }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
