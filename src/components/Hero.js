// src/components/Hero.js
import React from 'react';
import profilePhoto from './assets/photo.jpg';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-3xl">
        <img
          src={profilePhoto}
          alt="Foto Profil"
          className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          <span className="text-yellow-300">Zul Yatman</span>
        </h1>
        <h1 className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-200">
          <span className="text-yellow-300">Software Enginer | Quality Assurang Engineer | Quality Automation</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-200">
          I am passionate about building software that is not only innovative but also of exceptional quality, driven by my deep expertise in ensuring product reliability.
        </p>
        <a
          href="#portfolio"
          className="inline-block bg-white text-indigo-600 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-400"
        >
          See My Profile
        </a>
      </div>
    </section>
  );
};

export default Hero;
