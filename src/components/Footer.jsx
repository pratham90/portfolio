// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#180E45] text-gray-400 py-6 mt-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left side - Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Pratham Rathore. All rights reserved.</p>

        {/* Right side - Social Links */}
        <div className="flex gap-5 mt-4 md:mt-0">
          <a
            href="https://github.com/pratham90"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pratham-rathore-32074a250/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:prathamrathore2004@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
