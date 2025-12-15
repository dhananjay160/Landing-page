import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 px-6 md:px-16 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <h3 className="text-2xl font-extrabold tracking-widest 
        bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400">
          GRAX
        </h3>

        {/* Center */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} GRAX. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6 text-sm text-gray-400">
          <a
            href="#about"
            className="hover:text-white transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-white transition"
          >
            Contact
          </a>
          <a
            href="https://github.com/dhananjay160"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
