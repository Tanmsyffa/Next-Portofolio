import React, { useState } from "react";
import { Dock, DockIcon } from "./magicui/dock";
const linkedinIcon = "/iconsContact/linkedin.png";
const instagramIcon = "/iconsContact/instagram.png";
const githubIcon = "/iconsContact/github.png";
const telegramIcon = "/iconsContact/telegram.png";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="kontak" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-2">Hubungi Saya</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-8"></div>
        <p
          className={`max-w-2xl mx-auto text-lg ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Saya selalu terbuka untuk diskusi dan kolaborasi. Jika Anda memiliki
          pertanyaan atau ingin bekerja sama, silakan isi formulir di bawah ini.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <form onSubmit={handleSubmit}>
            {/* Nama */}
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-medium">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                } border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                } border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                } border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                isSubmitting
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-500 hover:bg-indigo-600"
              } text-white`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <div className="mt-4 p-3 bg-green-500 text-white rounded-lg">
                Pesan berhasil dikirim! Saya akan segera membalas.
              </div>
            )}
          </form>
        </div>

        <div>
          <div
            className={`rounded-xl p-8 h-full ${
              darkMode ? "bg-gray-800" : "bg-indigo-50"
            }`}
          >
            <h3 className="text-xl font-bold mb-6">Informasi Kontak</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div
                  className={`p-3 rounded-lg mr-4 ${
                    darkMode ? "bg-gray-700" : "bg-white"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">No. Hp</h4>
                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    +(62)877-8504-2065
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div
                  className={`p-3 rounded-lg mr-4 ${
                    darkMode ? "bg-gray-700" : "bg-white"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    sultantammam3@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-bold mb-2">Follow Me</h4>
              <Dock className="mx-0 justify-start">
                <DockIcon>
                  <a
                    href="https://github.com/Tanmsyffa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <img 
                      src={githubIcon} 
                      alt="GitHub" 
                      className="w-8 h-8 hover:opacity-80 transition-opacity" 
                    />
                  </a>
                </DockIcon>
                <DockIcon>
                  <a
                    href="https://instagram.com/sltnmsyffa_"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <img 
                      src={instagramIcon} 
                      alt="Instagram" 
                      className="w-8 h-8 hover:opacity-80 transition-opacity" 
                    />
                  </a>
                </DockIcon>
                <DockIcon>
                  <a
                    href="https://t.me/sltnmsyffa26"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                  >
                    <img 
                      src={telegramIcon} 
                      alt="Telegram" 
                      className="w-8 h-8 hover:opacity-80 transition-opacity" 
                    />
                  </a>
                </DockIcon>
                <DockIcon>
                  <a
                    href="https://www.linkedin.com/in/sultan-tammam-musyaffa-8a0a79280?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhbZnLLXIREiiqRvmYpv7dw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <img 
                      src={linkedinIcon} 
                      alt="LinkedIn" 
                      className="w-8 h-8 hover:opacity-80 transition-opacity" 
                    />
                  </a>
                </DockIcon>
              </Dock>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;