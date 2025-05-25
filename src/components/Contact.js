// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16 px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Me</h2>
        <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
          {/* <p className="text-lg text-gray-700 text-center mb-8">
            Tertarik untuk berkolaborasi atau hanya ingin menyapa? Jangan ragu untuk menghubungi saya!
          </p> */}
          {/* <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Nama Lengkap Anda"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="email@contoh.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subjek</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Subjek Pesan Anda"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300 shadow-md transform hover:scale-105"
            >
              Kirim Pesan
            </button>
          </form> */}
          <div className="mt-8 text-center">
            <p className="text-gray-700 text-lg">Atau hubungi saya langsung:</p>
            <p className="text-indigo-600 font-semibold text-xl mt-2">zoeltea@gmail.com</p>
            <div className="flex justify-center space-x-6 mt-6">
              <a href="https://www.linkedin.com/in/zul-yatman" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                {/* LinkedIn Icon */}
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/zoeltea" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                {/* GitHub Icon */}
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.866 8.163 6.84 9.49C9.096 21.61 9.22 21.43 9.22 21.28v-1.89c-2.787.605-3.37-1.34-3.37-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.618.069-.606.069-.606 1.007.07 1.532 1.03 1.532 1.03.893 1.53 2.34 1.087 2.91.83.09-.645.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.68-.103-.253-.447-1.27.098-2.65 0 0 .84-.268 2.75 1.025A9.28 9.28 0 0112 6.84c.95.008 1.905.13 2.795.38 1.91-1.293 2.75-1.025 2.75-1.025.546 1.38.202 2.397.098 2.65.64.696 1.03 1.59 1.03 2.68 0 3.84-2.338 4.685-4.566 4.935.358.308.678.915.678 1.846v2.72c0 .153.12.33.357.25C19.134 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path>
                </svg>
              </a>
              {/* Tambahkan ikon media sosial lainnya sesuai kebutuhan */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
