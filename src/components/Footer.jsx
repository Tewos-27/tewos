import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Links Section */}
        <div className="flex gap-6 mb-4">
          <a
            href="https://github.com/tewos-21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tewodros-shimels-674776340/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-secondary hover:text-white transition"
          >
            Contact
          </a>
        </div>

        {/* Contact Section */}
        <div className="mb-4 text-center">
          <p className="text-sm">
            Phone: <a href="tel:+251922910292" className="text-secondary hover:text-white">+251 922 91 02 92</a>
          </p>
          <p className="text-sm">
            Email: <a href="mailto:your-email@example.com" className="text-secondary hover:text-white">tewodrosshimels268@gmail.com</a>
          </p>
        </div>

        {/* Copyright Section */}
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Tewodros Shimels. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
