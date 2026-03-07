import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigate = useNavigate();
  const { state, logout } = useContext(AuthContext);
  const { userInfo } = state;
  const userExist = userInfo?.user;

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
      <div
        className="flex justify-between items-center px-8 md:px-20 py-5  
      bg-black/80 backdrop-blur-md text-white shadow-lg"
      >
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">CodeAcademy</div>

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

        <div className="relative group">
  {/* Avatar */}
  {userExist ? (
    <img
      className="h-11 w-11 rounded-full object-cover cursor-pointer 
                 ring-2 ring-green-500 hover:scale-105 
                 transition duration-300"
      src={`http://localhost:9000/image/${userExist?.image}`}
      alt="user"
    />
  ) : (
    <img
      className="h-11 w-11 rounded-full cursor-pointer 
                 ring-2 ring-gray-400 hover:scale-105 
                 transition duration-300"
      src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
      alt="default user"
    />
  )}

  {/* Dropdown */}
  <div
    className="absolute left-0 mt-3 w-36 
               bg-white text-black 
               rounded-xl shadow-xl 
               opacity-0 invisible 
               group-hover:opacity-100 group-hover:visible 
               transition-all duration-300 
               flex flex-col p-4 space-y-3"
  >
    {userExist ? (
      <>
        <NavLink
          className="hover:text-green-600 transition"
          to="/profile"
        >
          Profile
        </NavLink>

        <NavLink
          className="hover:text-green-600 transition"
          to="/dashboard"
        >
          Dashboard
        </NavLink>

        <button
          className="text-left hover:text-red-500 transition"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </>
    ) : (
      <>
        <NavLink
          className="hover:text-green-600 transition"
          to="/login"
        >
          Login
        </NavLink>

        <NavLink
          className="hover:text-green-600 transition"
          to="/register"
        >
          Register
        </NavLink>
      </>
    )}
  </div>
</div>

      </div>
    </header>
  );
}

export default Header;
