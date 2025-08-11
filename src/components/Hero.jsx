"use client";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import { HiMail, HiDownload } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSayHello = () => {
    navigate("/#contact");
  };

  const resumeUrl = "/files/AhmedRahat_Resume.pdf";

  return (
    <div className="relative min-h-screen flex flex-col justify-center font-[Poppins] overflow-hidden bg-gray-50 mt-6">
      {/* Gradient Background replaced with subtle base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* images floating around */}
      {/* Feel free to adjust left, top, width, rotation, animation delay to suit your style */}
      <img
        src="/images/doodle-circle.svg"
        alt="Doodle Circle"
        className="absolute top-10 left-8 w-12 opacity-60 animate-floatSlow rotate-[15deg]"
        style={{ animationDelay: "0s" }}
      />
      <img
        src="/images/doodle-crown.svg"
        alt="Doodle Crown"
        className="absolute top-20 right-10 w-16 opacity-50 animate-floatFast rotate-[-10deg]"
        style={{ animationDelay: "1.5s" }}
      />
      <img
        src="/images/star.png"
        alt="Star Doodle"
        className="absolute bottom-24 left-16 w-10 opacity-40 animate-floatSlow rotate-[25deg]"
        style={{ animationDelay: "3s" }}
      />
      <img
        src="/images/abstract-christmas-tree.png"
        alt="Scribble Doodle"
        className="absolute bottom-10 right-20 w-14 opacity-50 animate-floatFast rotate-[-30deg]"
        style={{ animationDelay: "2s" }}
      />
      <img
        src="/images/beach.png"
        alt="Wave Doodle"
        className="absolute top-1/2 left-1/2 w-20 opacity-30 animate-floatSlow rotate-[5deg] translate-x-[-50%] translate-y-[-50%]"
        style={{ animationDelay: "4s" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 gap-12">
        {/* Left Text */}
        <div data-aos="fade-right" className="max-w-lg text-center lg:text-left text-gray-900">
          <p className="tracking-widest uppercase text-sm text-gray-600">Hello, I'm</p>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-2 text-gray-900">
            Ahmed <br /> Rahat
          </h1>
          <p className="text-lg text-gray-700 mt-4 flex justify-center lg:justify-start items-center gap-2 flex-wrap">
            A Passionate{" "}
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Frontend Engineer",
                2000,
                "Backend Developer",
                2000,
                "Full-Stack Developer",
                2000,
                "React Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gray-800 font-semibold"
            />
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <button
              onClick={handleSayHello}
              className="px-8 py-3 rounded-lg bg-gray-800 hover:bg-gray-900 transition flex items-center gap-3 text-white shadow-md"
            >
              <HiMail size={24} /> SAY HELLO
            </button>

            <a
              href={resumeUrl}
              download
              className="px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-100 transition flex items-center gap-3 text-gray-800"
            >
              <HiDownload size={24} /> DOWNLOAD RESUME
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8 justify-center lg:justify-start text-xl text-gray-700">
            {[
              { icon: <FaFacebookF />, link: "https://www.facebook.com/ahmed.rahat.10297/" },
              { icon: <FaTwitter />, link: "https://x.com/AhmedRahat691" },
              { icon: <FaLinkedinIn />, link: "#" },
              { icon: <FaYoutube />, link: "#" },
            ].map(({ icon, link }, i) => (
              <a
                key={i}
                href={link}
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition transform hover:scale-110 text-gray-700"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div data-aos="fade-left" className="relative">
          <div className="absolute inset-0 rounded-full blur-3xl opacity-30 bg-gray-300 animate-pulse"></div>
          <img
            src="https://i.imghippo.com/files/WCLR6928ICY.jpg"
            alt="Profile"
            className="relative w-[320px] lg:w-[420px] h-[320px] lg:h-[420px] object-cover rounded-full border-4 border-gray-300 shadow-lg"
          />
        </div>
      </div>

      {/* Animations for floating images */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(var(--rotate, 0deg)); }
          50% { transform: translateY(-10px) rotate(var(--rotate, 0deg)); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0) rotate(var(--rotate, 0deg)); }
          50% { transform: translateY(-15px) rotate(var(--rotate, 0deg)); }
        }
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
          --rotate: 10deg;
        }
        .animate-floatFast {
          animation: floatFast 4s ease-in-out infinite;
          --rotate: -10deg;
        }
      `}</style>
    </div>
  );
}


