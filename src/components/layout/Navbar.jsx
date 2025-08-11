import { useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const links = [
    { to: "/#", label: "Home" },
    { to: "/#AboutMe", label: "About" },
    { to: "/#portfolio", label: "Works" },
    { to: "/#services", label: "Service" },
    { to: "/#contact", label: "Contact" },
    { to: "/#blog", label: "Blog" },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-6 lg:px-20 fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      {/* Branding */}
      <div className="font-bold text-lg text-gray-900 select-none cursor-default">
        Ahmed Rahat
      </div>

      <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-800">
        {links.map(({ to, label }) => (
          <li key={to} data-aos="fade-down">
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-gray-900 font-semibold transition"
                  : "hover:text-gray-600 transition"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
