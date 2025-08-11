"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null); // success or error message

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setFeedback({ type: "error", msg: "Please fill all fields." });
      return;
    }
    setLoading(true);
    setFeedback(null);

    emailjs
      .send(
        "service_e7u097i",
        "template_m9k6dwh",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "HuRVe1WWq8lKM11vP"
      )
      .then(() => {
        setFeedback({ type: "success", msg: "Message sent successfully!" });
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setFeedback({ type: "error", msg: "Failed to send message. Try again later." });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info + Form */}
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-10 shadow-lg">
          <h2 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white">Get In Touch</h2>

          <div className="mb-8 space-y-4 text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-gray-500" /> ahmedrahat9901@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-gray-500" /> +880 1933-471091
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-gray-500" /> Khulna, Bangladesh
            </p>
            <div className="flex gap-6 mt-4">
              <a href="https://github.com/RahatInCode" target="_blank" rel="noreferrer" className="hover:text-gray-500">
                <FaGithub size={28} />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="hover:text-gray-500">
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white py-4 rounded-lg font-semibold flex justify-center items-center gap-3 disabled:opacity-50"
            >
              {loading ? (
                <svg
                  className="animate-spin h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 010 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                  ></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {feedback && (
            <p
              className={`mt-4 text-center font-semibold ${
                feedback.type === "success" ? "text-gray-600" : "text-red-600"
              }`}
            >
              {feedback.msg}
            </p>
          )}
        </div>

        {/* Right: Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29420.84269387294!2d89.54495412064655!3d22.81708333405583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff90193c82d64b%3A0xd48ce5c464563d6d!2sKhulna%20City%2C%20Khulna!5e0!3m2!1sen!2sbd!4v1754919597835!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ minHeight: "350px", border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Khulna Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
