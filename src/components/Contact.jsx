import React, { useState } from "react";
import { Dock, DockIcon } from "./magicui/dock";

const Icons = {
  gitHub: (props) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  linkedIn: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
    </svg>
  ),
  instagram: (props) => (
    <svg viewBox="0 0 448 512" fill="currentColor" {...props}>
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.1S388.6 1.7 353.3 0C317.9-1.7 282.1-1.7 246.7 0c-35.3 1.7-66.7 9.9-92.1 36.2S1.7 123.4 0 158.7C-1.7 194.1-1.7 229.9 0 265.3c1.7 35.3 9.9 66.7 36.2 92.1s56.8 34.5 92.1 36.2c35.4 1.7 71.2 1.7 106.6 0 35.3-1.7 66.7-9.9 92.1-36.2s34.5-56.8 36.2-92.1c1.7-35.4 1.7-71.2 0-106.6zm-48.5 218.2c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.5 9s-103.1 2.6-132.5-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.5s-2.6-103.1 9-132.5c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.5-9s103.1-2.6 132.5 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.5s2.6 103.1-9 132.5z" />
    </svg>
  ),
};

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
              <h4 className="font-bold mb-1">Follow Me</h4>
                <Dock direction="middle" className="gap-x-6">
                  <DockIcon>
                    <a
                      href="https://github.com/sltnmsyffa"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Icons.gitHub className="w-8 h-8 text-indigo-500 hover:text-indigo-400 transition-colors" />
                    </a>
                  </DockIcon>
                  <DockIcon>
                    <a
                      href="https://linkedin.com/in/sltnmsyffa"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Icons.linkedIn className="w-8 h-8 text-indigo-500 hover:text-indigo-400 transition-colors" />
                    </a>
                  </DockIcon>
                  <DockIcon>
                    <a
                      href="https://instagram.com/sltnmsyffa"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <Icons.instagram className="w-8 h-8 text-indigo-500 hover:text-indigo-400 transition-colors" />
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
