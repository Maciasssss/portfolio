import React from "react";

const Footer = () => {
  return (
    <footer className="dark:bg-blue-900 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <p className="text-white">© 2024 Maciej Kos.</p>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
