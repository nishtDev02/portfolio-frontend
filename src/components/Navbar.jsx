import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-black/80 backdrop-blur border-b border-white/10 fixed w-full z-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link to="/">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-linear-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent cursor-pointer"
            >
              <span className="text-white">&lt;</span>
              Nisht.Dev
              <span className="text-white"> /&gt;</span>
            </motion.h1>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex space-x-10">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm tracking-wide transition ${
                    isActive ? "text-purple-400" : "text-gray-300"
                  }`
                }
              >
                {({ isActive }) => (
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="relative"
                  >
                    {link.name}

                    {/* underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </motion.span>
                )}
              </NavLink>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="hidden md:block px-6 py-2 rounded-full text-white font-medium
            bg-linear-to-r from-purple-500 to-indigo-500
            shadow-lg shadow-purple-500/30"
          >
            Get In Touch
          </motion.a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-black border-t border-white/10 md:hidden"
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-4 text-sm transition ${
                    isActive
                      ? "text-purple-400 bg-white/5"
                      : "text-gray-300 hover:text-purple-400 hover:bg-white/5"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* MOBILE CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/contact"
              className="m-4 block text-center px-6 py-3 rounded-full text-white font-medium
              bg-linear-to-r from-purple-500 to-indigo-500"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

