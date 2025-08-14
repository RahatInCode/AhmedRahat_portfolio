import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll to hash
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
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
    <nav className="flex items-center justify-between px-8 py-4 lg:px-20 fixed top-0 left-0 right-0 z-50 bg-base-100/90 backdrop-blur-md border-b border-base-300 shadow-sm">
      {/* Branding */}
      <div className="font-bold text-xl select-none cursor-default">
        Ahmed Rahat
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {links.map(({ to, label }) => (
          <li key={to} data-aos="fade-down">
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-primary font-semibold transition"
                  : "hover:text-primary transition"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="ml-4 p-2 rounded-full bg-base-200 hover:bg-base-300 transition-transform duration-300 hover:scale-110"
      >
        {theme ==="light,caramellatte" ? (
          <Moon size={20} className="animate-pulse text-gray-800" />
        ) : (
          <Sun size={20} className="animate-pulse text-yellow-400" />
        )}
      </button>
    </nav>
  );
}


