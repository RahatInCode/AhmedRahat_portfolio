"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  { name: "Jhankar Mahbub", feedback: "Rahat is an amazing developer. Highly recommend! ", role: "CEO, Programming Hero" },
  { name: "Jane Smith", feedback: "Delivered the project on time with great quality.", role: "Founder, StartupX" }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
        <Swiper spaceBetween={30} slidesPerView={1} autoplay>
          {testimonials.map((test, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="italic mb-4">"{test.feedback}"</p>
                <h4 className="font-bold">{test.name}</h4>
                <p className="text-sm text-gray-500">{test.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
