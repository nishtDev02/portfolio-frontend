import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    // { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="bg-black border-b border-gray-800 fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* logo */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            <span className="text-white">&lt;</span>Nisht.Dev <span>/</span>
            <span className="text-white">&gt;</span>
          </h1>

          {/* desktop menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isActive
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-purple-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* contact button */}
          <a
            href="/contact"
            className="md:block hidden px-6 py-2 rounded-full text-white font-medium
            bg-gradient-to-r from-purple-500 to-indigo-500
            hover:scale-105 transition"
          >
            Get In Touch
          </a>

          {/* mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div>
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 hover:bg-gray-800 ${
                  isActive
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* contact button */}
          <a
            href="/contact"
            className="md:hidden block w-[33%] m-2.5 px-4 py-3 rounded-full text-white font-medium
            bg-gradient-to-r from-purple-500 to-indigo-500
            hover:scale-105 transition"
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
