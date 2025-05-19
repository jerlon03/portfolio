import React from "react";
import About from "./about-us/page";

export default function MainPage() {
  return (
    <div>
      <section className="w-full bg-gradient-to-r from-[#08a045] via-[#0b6e4f] to-[#171717] py-16 mb-8 shadow-lg">
        <div className="px-6 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide mb-4 animate-fadeInUp">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl text-[#e6f4ea] mb-6 animate-fadeInUp">
            Explore my work, skills, and experience as a modern web developer.
          </p>
          <a
            href="#projects"
            className="bg-white text-[#08a045] font-bold px-6 py-3 rounded shadow hover:bg-[#08a045] hover:text-white transition animate-fadeInUp"
          >
            View Projects
          </a>
        </div>
      </section>
      <About />
    </div>
  );
}
