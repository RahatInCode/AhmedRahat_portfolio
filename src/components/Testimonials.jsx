"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  { name: "Jhankar Mahbub", feedback: "Rahat is an amazing developer. Highly recommend!", role: "CEO, Programming Hero" },
  { name: "Jane Smith", feedback: "Delivered the project on time with great quality.", role: "Founder, StartupX" }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-base-200 dark:bg-base-300">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-base-content dark:text-base-100">Testimonials</h2>
        <Swiper spaceBetween={30} slidesPerView={1} autoplay={{ delay: 4000 }}>
          {testimonials.map((test, idx) => (
            <SwiperSlide key={idx}>
              <div className="card bg-base-100 dark:bg-base-200 p-6 rounded-lg shadow-lg">
                <p className="italic mb-4 text-base-content dark:text-base-100">"{test.feedback}"</p>
                <h4 className="font-bold text-base-content dark:text-base-100">{test.name}</h4>
                <p className="text-sm text-base-content/60 dark:text-base-100/60">{test.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

