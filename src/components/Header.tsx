"use client";

import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center text-2xl font-semibold">
          {/* Logo ao lado do nome */}
          <img src="/logo.png" alt="Logo" className="mr-2 h-10 w-10" />

          {/* Nome com link */}
          <a
            href="/"
            className="text-white transition-colors duration-200 hover:text-gray-300"
          >
            Francisco Pinto
          </a>
        </div>

        {/* Menu de navegação - Desktop */}
        <nav className="hidden space-x-8 md:flex">
          <a
            href="/"
            className="transition-colors duration-200 hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="/resume"
            className="transition-colors duration-200 hover:text-gray-300"
          >
            Resume
          </a>
          <a
            href="/projects"
            className="transition-colors duration-200 hover:text-gray-300"
          >
            Projects
          </a>
          <a
            href="/demos"
            className="transition-colors duration-200 hover:text-gray-300"
          >
            Demos
          </a>
        </nav>

        {/* Menu Hamburguer (para mobile) */}
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Responsivo - Mobile */}
      {isMenuOpen && (
        <div className="space-y-4 bg-gray-800 px-6 py-4 text-white md:hidden">
          <a
            href="/"
            className="block transition-colors duration-200 hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="/resume"
            className="block transition-colors duration-200 hover:text-gray-300"
          >
            Resume
          </a>
          <a
            href="/projects"
            className="block transition-colors duration-200 hover:text-gray-300"
          >
            Projects
          </a>
          <a
            href="/demos"
            className="block transition-colors duration-200 hover:text-gray-300"
          >
            Demos
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
