import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // scroll down
        setShow(false);
      } else {
        // scroll up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-8 md:px-20 py-5 
      bg-black/80 backdrop-blur-md text-white shadow-lg">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          CodeAcademy
        </div>

        {/* Navigation Links */}
        <nav className="space-x-8 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 border-b-2 border-green-400 pb-1"
                : "hover:text-green-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 border-b-2 border-green-400 pb-1"
                : "hover:text-green-400 transition"
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/aboutUs"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 border-b-2 border-green-400 pb-1"
                : "hover:text-green-400 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 border-b-2 border-green-400 pb-1"
                : "hover:text-green-400 transition"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
