import React from "react";
import { Dock, DockIcon } from "./magicui/dock";
const linkedinIcon = "/iconsContact/linkedin.png";
const instagramIcon = "/iconsContact/instagram.png";
const githubIcon = "/iconsContact/github.png";

const Contact = ({ darkMode }) => {
  return (
    <section id="kontak" className="py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-3">Hubungi Saya</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-8"></div>
        <p
          className={`max-w-2xl mx-auto text-lg ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Saya selalu terbuka untuk diskusi dan kolaborasi. Jangan ragu untuk
          menghubungi saya melalui kontak di bawah ini.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-col items-center gap-6 max-w-lg mx-auto">

        {/* Phone */}
        <a
          href="tel:+6287721669168"
          className={`group flex items-center gap-5 w-full px-7 py-5 rounded-2xl transition-all duration-300 ${
            darkMode
              ? "bg-gray-800/60 border border-gray-700 hover:border-indigo-500/50 hover:bg-gray-800"
              : "bg-white border border-gray-100 shadow-sm hover:border-indigo-300 hover:shadow-md"
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            darkMode ? "bg-indigo-900/50 group-hover:bg-indigo-900" : "bg-indigo-50 group-hover:bg-indigo-100"
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p className={`text-xs font-semibold uppercase tracking-widest mb-0.5 ${darkMode ? "text-indigo-400" : "text-indigo-500"}`}>No. HP</p>
            <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>+(62) 877-2166-9168</p>
          </div>
          <svg className={`ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? "text-indigo-400" : "text-indigo-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:sultantammam3@gmail.com"
          className={`group flex items-center gap-5 w-full px-7 py-5 rounded-2xl transition-all duration-300 ${
            darkMode
              ? "bg-gray-800/60 border border-gray-700 hover:border-indigo-500/50 hover:bg-gray-800"
              : "bg-white border border-gray-100 shadow-sm hover:border-indigo-300 hover:shadow-md"
          }`}
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            darkMode ? "bg-indigo-900/50 group-hover:bg-indigo-900" : "bg-indigo-50 group-hover:bg-indigo-100"
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className={`text-xs font-semibold uppercase tracking-widest mb-0.5 ${darkMode ? "text-indigo-400" : "text-indigo-500"}`}>Email</p>
            <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>sultantammam3@gmail.com</p>
          </div>
          <svg className={`ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? "text-indigo-400" : "text-indigo-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        {/* Social Media */}
        <div className={`w-full px-7 py-6 rounded-2xl ${
          darkMode
            ? "bg-gray-800/60 border border-gray-700"
            : "bg-white border border-gray-100 shadow-sm"
        }`}>
          <p className={`text-xs font-semibold uppercase tracking-widest mb-5 ${darkMode ? "text-indigo-400" : "text-indigo-500"}`}>Temukan Saya Di</p>
          <Dock className="mx-0 justify-start">
            <DockIcon>
              <a href="https://github.com/Tanmsyffa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img src={githubIcon} alt="GitHub" className="w-8 h-8 hover:opacity-80 transition-opacity" />
              </a>
            </DockIcon>
            <DockIcon>
              <a href="https://instagram.com/tanmsyffa_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" className="w-8 h-8 hover:opacity-80 transition-opacity" />
              </a>
            </DockIcon>
            <DockIcon>
              <a href="https://www.linkedin.com/in/sultan-tammam-musyaffa-8a0a79280?" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:opacity-80 transition-opacity" />
              </a>
            </DockIcon>
          </Dock>
        </div>

      </div>
    </section>
  );
};

export default Contact;