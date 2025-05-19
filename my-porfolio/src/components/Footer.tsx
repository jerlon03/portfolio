import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#171717] border-t border-[#08a045] py-6 mt-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <span className="text-[#08a045] font-bold tracking-[2px] text-lg">
          © {new Date().getFullYear()} Jerlon Abayon
        </span>
      </div>
    </footer>
  );
};

export default Footer;