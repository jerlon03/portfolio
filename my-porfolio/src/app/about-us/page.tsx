import React from "react";

const About = () => {
  return (
    <section className="mt-6 p-6 bg-white rounded-lg shadow-lg animate-fadeInUp max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full">
          <p className="text-[#171717] text-lg leading-relaxed mb-4">
            Hi! I'm
            <span className="font-bold text-[#08a045]">Jerlon Abayon</span>, a
            passionate software developer with a love for building modern web
            applications. I specialize in
            <span className="text-[#08a045] font-semibold">React</span>,
            <span className="text-[#08a045] font-semibold">Next.js</span>, and
            <span className="text-[#08a045] font-semibold">Tailwind CSS</span>.
            <br />
            <br />
            My goal is to create beautiful, responsive, and user-friendly
            digital experiences. When I'm not coding, I enjoy learning new
            technologies and collaborating on exciting projects.
          </p>
          <div className="mb-4">
            <h3 className="text-[#08a045] font-bold mb-1">
              Programming Languages:
            </h3>
            <ul className="flex flex-wrap gap-2 text-sm mb-2">
              {["JavaScript", "TypeScript", "HTML", "CSS", "Python"].map(
                (lang) => (
                  <li
                    key={lang}
                    className="bg-[#e6f4ea] text-[#08a045] px-3 py-1 rounded"
                  >
                    {lang}
                  </li>
                )
              )}
            </ul>
            <h3 className="text-[#08a045] font-bold mt-3 mb-1">
              Frameworks & Libraries:
            </h3>
            <ul className="flex flex-wrap gap-2 text-sm mb-2">
              {[
                "React",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "Express",
                "Redux",
              ].map((fw) => (
                <li
                  key={fw}
                  className="bg-[#e6f4ea] text-[#08a045] px-3 py-1 rounded"
                >
                  {fw}
                </li>
              ))}
            </ul>
            <h3 className="text-[#08a045] font-bold mt-3 mb-1">
              Other Tools & Databases:
            </h3>
            <ul className="flex flex-wrap gap-2 text-sm">
              {["Git", "Figma", "MongoDB", "MySQL", "Firebase"].map((tool) => (
                <li
                  key={tool}
                  className="bg-[#e6f4ea] text-[#08a045] px-3 py-1 rounded"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 mt-6">
            <p
              className="border border-[#08a045] text-[#08a045] px-4 py-2 rounded hover:bg-[#08a045] hover:text-white transition"
            >
              View Resume
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
