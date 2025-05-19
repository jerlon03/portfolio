'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "PROJECT", path: "/project" },
  { name: "CONTACTS", path: "/contacts" },
];

const Header = () => {
  const pathname = usePathname();

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
        <div className="hidden md:flex gap-8 font-semibold text-[16px] tracking-[4px] animate-fadeInUp">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-white hover:text-[#08a045] transition-colors duration-200 ${
                pathname === item.path ? "border-b-2 border-[#08a045] text-[#08a045]" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;