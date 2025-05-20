import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiFigma,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import ProjectCard from "@/components/ProjectCard";
import MotionSection from "@/components/MotionSection";


export default function MainPage() {
  const languageIcons: { [key: string]: JSX.Element } = {
    JavaScript: <SiJavascript className="inline mr-1 " />,
    TypeScript: <SiTypescript className="inline mr-1 " />,
    HTML: <SiHtml5 className="inline mr-1 " />,
    CSS: <SiCss3 className="inline mr-1 " />,
    Python: <SiPython className="inline mr-1 " />,
  };
  const frameworkIcons: { [key: string]: JSX.Element } = {
    React: <SiReact className="inline mr-1 " />,
    "Next.js": <SiNextdotjs className="inline mr-1 " />,
    "Tailwind CSS": <SiTailwindcss className="inline mr-1 " />,
    "Node.js": <SiNodedotjs className="inline mr-1 " />,
    Express: <SiExpress className="inline mr-1 " />,
  };
  const toolIcons: { [key: string]: JSX.Element } = {
    Git: <SiGit className="inline mr-1 " />,
    Figma: <SiFigma className="inline mr-1 " />,
    MongoDB: <SiMongodb className="inline mr-1 " />,
    MySQL: <SiMysql className="inline mr-1 " />,
  };
  const projects = [
    {
      title: "VanGO Rental",
      description:
        "A full-featured van rental platform with real-time booking, built using Next.js and Tailwind CSS. Includes user authentication and admin dashboard.",
      image: "/rental.png",
      link: "https://van-go-rental.vercel.app/",
      tags: ["Next.js", "Tailwind CSS", "React"],
    },
    {
      title: "ML Live Auctions",
      description:
        "A live auction web app for MLhuillier, featuring real-time bidding, user management, and secure transactions. Built with Next.js, Node.js, Express, and MySQL.",
      image: "/auctions.png",
      link: "https://beatrix.mlhuillier.net/",
      tags: ["Next.js", "Node.js", "Express", "MySQL"],
    },
    // Add more projects as needed
  ];

  return (
    <div className="font-Poppins">
      {/* Banner */}
      <section className="w-full bg-gradient-to-r from-[#08a045] via-[#0b6e4f] to-[#171717] py-10 md:py-16 mb-8 shadow-lg">
        <div className="px-4 md:px-6 flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-6 md:gap-8">
          <div className="mb-4 md:mb-0 flex justify-center md:block">
            <Image
              src="/profile.jpg"
              width={150}
              height={150}
              className="rounded-md w-full object-contain border-2 border-[#38e463]"
              alt="Profile"
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide mb-3 md:mb-4 animate-fadeInUp">
              Welcome !
            </h1>
            <p className="text-base md:text-xl text-[#e6f4ea] mb-4 md:mb-6 animate-fadeInUp">
              Explore my work, skills, and experience as a modern web developer.
            </p>
            <a
              href="#projects"
              className="bg-white text-[#08a045] font-bold px-4 md:px-6 py-2 md:py-3 rounded shadow hover:bg-[#08a045] hover:text-white transition animate-fadeInUp"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
      {/* about */}
      <MotionSection
        id="about"
        className="mt-6 p-6 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#08a045] mb-6 text-center ">
              ABOUT
            </h2>
            <p className="text-[#0b6e4f] text-center mb-6">
              Learn more about my background, skills, and what drives my passion for web development.
            </p>
            <p className="text-[#171717] text-lg leading-relaxed mb-4">
              Hi! I'm
              <span className="font-bold text-[#08a045]">Jerlon Abayon</span>, a
              passionate software developer with a love for building modern web
              applications. I specialize in
              <span className="text-[#08a045] font-semibold">React</span>,
              <span className="text-[#08a045] font-semibold">Next.js</span>, and
              <span className="text-[#08a045] font-semibold">Tailwind CSS</span>
              .
              <br />
              <br />
              My goal is to create beautiful, responsive, and user-friendly
              digital experiences. When I'm not coding, I enjoy learning new
              technologies and collaborating on exciting projects.
            </p>
            <div className="mb-4">
              <h3 className="text-[#08a045] font-medium mb-1">
                Programming Languages:
              </h3>
              <ul className="flex flex-wrap gap-2 text-sm mb-2">
                {["JavaScript", "TypeScript", "HTML", "CSS"].map((lang) => (
                  <li
                    key={lang}
                    className="bg-[#e6f4ea] text-[#171717] px-3 py-1 rounded flex items-center"
                  >
                    {languageIcons[lang]}
                    {lang}
                  </li>
                ))}
              </ul>
              <h3 className="text-[#08a045] font-medium mt-3 mb-1">
                Frameworks & Libraries:
              </h3>
              <ul className="flex flex-wrap gap-2 text-sm mb-2">
                {["React", "Next.js", "Tailwind CSS", "Node.js", "Express"].map(
                  (fw) => (
                    <li
                      key={fw}
                      className="bg-[#e6f4ea] text-[#171717]  px-3 py-1 rounded flex items-center"
                    >
                      {frameworkIcons[fw]}
                      {fw}
                    </li>
                  )
                )}
              </ul>
              <h3 className="text-[#08a045] font-medium mt-3 mb-1">
                Other Tools & Databases:
              </h3>
              <ul className="flex flex-wrap gap-2 text-sm">
                {["Git", "Figma", "MongoDB", "MySQL"].map((tool) => (
                  <li
                    key={tool}
                    className="bg-[#e6f4ea] text-[#171717]  px-3 py-1 rounded flex items-center"
                  >
                    {toolIcons[tool]}
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 mt-6">
              <Link
                href="/ABAYON, JERLON.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#08a045] text-[#08a045] px-4 py-2 rounded hover:bg-[#08a045] hover:text-white transition"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </MotionSection>
      {/* projects */}
      <MotionSection
        id="projects"
        className="mt-10 mb-10 px-2 md:px-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#08a045] mb-6 text-center ">
          PROJECTS
        </h2>
        <p className="text-[#0b6e4f] text-center mb-6">
          Here are some of the projects I’ve worked on, showcasing my skills in full-stack and modern web development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </MotionSection>
      {/* contact */}
      <MotionSection
        id="contact"
        className="mt-10 mb-10 px-2 md:px-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#08a045] mb-6 text-center">
          CONTACT US
        </h2>
        <p className="text-[#0b6e4f] text-center mb-6">
          Interested in working together or have any questions? Feel free to reach out using the form below or email me directly.
        </p>
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <form
            action="mailto:your.email@example.com"
            method="POST"
            encType="text/plain"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#08a045]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#08a045]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#08a045]"
            />
            <button
              type="submit"
              className="bg-[#08a045] text-white font-bold px-4 py-2 rounded hover:bg-[#0b6e4f] transition"
            >
              Send Message
            </button>
          </form>
          <div className="mt-6 text-center text-[#08a045]">
            Or email me directly at
            <a
              href="mailto:jerlonabayon16@gmail.com"
              className="underline hover:text-[#0b6e4f]"
            >
              jerlonabayon16@gmail.com
            </a>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
