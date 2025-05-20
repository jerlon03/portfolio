'use client';
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "#about" },
  { name: "PROJECT", path: "#projects" },
  { name: "CONTACTS", path: "#contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#171717] p-4">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-[#08a045] font-extrabold text-[26px] tracking-[4px] animate-fadeInUp">
            JERLON ABAYON
          </h1>
          <h2 className="text-[#08a045] font-extrabold text-[16px] tracking-[4px] animate-fadeInUp">
            SOFTWARE DEVELOPER
          </h2>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-semibold text-[16px] tracking-[4px] animate-fadeInUp">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-white hover:text-[#08a045] transition-colors duration-200 `}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="w-6 h-0.5 bg-[#08a045]"></span>
          <span className="w-6 h-0.5 bg-[#08a045]"></span>
          <span className="w-6 h-0.5 bg-[#08a045]"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 animate-fadeInUp">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className={`text-white hover:text-[#08a045] transition-colors duration-200 px-2 py-1 ${
                pathname === item.path ? "border-l-4 border-[#08a045] text-[#08a045]" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;