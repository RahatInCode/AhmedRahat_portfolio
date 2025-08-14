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

  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  const handleSayHello = () => { navigate("/#contact"); };
  const resumeUrl = "/files/AhmedRahat_Resume.pdf";

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-base-200 dark:bg-base-300 mt-6">
      {/* floating doodles */}
      <img src="/images/doodle-circle.svg" alt="" className="absolute top-10 left-8 w-12 opacity-60 animate-floatSlow rotate-[15deg]" />
      <img src="/images/doodle-crown.svg" alt="" className="absolute top-20 right-10 w-16 opacity-50 animate-floatFast rotate-[-10deg]" />
      <img src="/images/star.png" alt="" className="absolute bottom-24 left-16 w-10 opacity-40 animate-floatSlow rotate-[25deg]" />
      <img src="/images/abstract-christmas-tree.png" alt="" className="absolute bottom-10 right-20 w-14 opacity-50 animate-floatFast rotate-[-30deg]" />
      <img src="/images/beach.png" alt="" className="absolute top-1/2 left-1/2 w-20 opacity-30 animate-floatSlow -translate-x-1/2 -translate-y-1/2 rotate-[5deg]" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 gap-12">
        <div data-aos="fade-right" className="max-w-lg text-center lg:text-left text-base-content dark:text-base-100">
          <p className="tracking-widest uppercase text-sm text-base-content/60 dark:text-base-100/60">Hello, I'm</p>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-2">Ahmed <br /> Rahat</h1>
          <p className="text-lg mt-4 flex justify-center lg:justify-start items-center gap-2 flex-wrap">
            A Passionate{" "}
            <TypeAnimation
              sequence={[
                "MERN Stack Developer", 2000,
                "Frontend Engineer", 2000,
                "Backend Developer", 2000,
                "Full-Stack Developer", 2000,
                "React Enthusiast", 2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-semibold text-primary"
            />
          </p>

          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <button onClick={handleSayHello} className="btn btn-primary gap-2">
              <HiMail size={24} /> SAY HELLO
            </button>
            <a href={resumeUrl} download className="btn btn-outline gap-2">
              <HiDownload size={24} /> DOWNLOAD RESUME
            </a>
          </div>

          <div className="flex gap-4 mt-8 justify-center lg:justify-start text-xl">
            {[{icon:<FaFacebookF/>,link:"#"}, {icon:<FaTwitter/>,link:"#"}, {icon:<FaLinkedinIn/>,link:"#"}, {icon:<FaYoutube/>,link:"#"}]
              .map((item,i)=>(
                <a key={i} href={item.link} className="btn btn-circle btn-sm btn-ghost">{item.icon}</a>
              ))}
          </div>
        </div>

        <div data-aos="fade-left" className="relative">
          <div className="absolute inset-0 rounded-full blur-3xl opacity-30 bg-primary animate-pulse"></div>
          <img src="https://i.imghippo.com/files/Knky7423CjI.JPG" alt="Profile" className="relative w-[320px] lg:w-[420px] h-[320px] lg:h-[420px] object-cover rounded-full border-4 border-base-300 shadow-lg" />
        </div>
      </div>
    </div>
  );
}


