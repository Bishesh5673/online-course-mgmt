import React from "react";

import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="px-24 flex gap-x-15 bg-black pt-5">
        <div className="pb-[16px] w-[400px] h-[200px] space-y-3">
          <img
            src="https://codeit.com.np/storage/01KE9MC5P5YCRYWVW7HQ7JVDEK.png"
            width={150}
            alt=""
          />
          <p className="text-[18px] font-bold text-[#6B788E]">
            #1 IT Training in Nepal with Internship
          </p>
          <p className="text-[16px] text-[#6B788E]">
            We are more than just a training center. Code IT is a community of creators, developers, and innovators building the next generation of tech solutions in Nepal.
          </p>
        </div>
        <div className="w-[168px]">
          <h5 className="text-[#0C6967] text-[20px] font-bold">Quick Links</h5>
          <div className="links flex flex-col justify-start mt-3 text-[15px] text-[#6B788E]  gap-y-2 ">
            <NavLink to="/courses">All Courses</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/aboutUs">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </div>
        
        <div className="w-[168px]">
          <h5 className="text-[#0C6967] text-[20px] font-bold">Follow Us</h5>
          <div className="flex flex-wrap gap-3 mt-3 text-[#6B788E]">
            <FaFacebook size={35} />
            <FaLinkedin size={35} />
            <FaTwitter size={35} />
            <FaYoutube size={35} />
            <FaInstagram size={35} />
            <FaTiktok size={35} />
          </div>
        </div>

        <div className="w-[180px]">
          <h5 className="text-[#0C6967] text-[20px] font-bold  mb-2">Payment Methods</h5>
          <div className="flex space-x-2 items-center">
          <img src="https://sipalaya.com/wp-content/uploads/2024/03/newLogo.ed7f73c800e12259be50.png"  width={100} alt="" />
          <img src="https://lh5.googleusercontent.com/proxy/Gh0Po2ibusbdU8-URNUValPNZNXvLuPhnpATN9jI-uJJfx7RRGD7Esl3ehmO2LRWw6gj97idBvhREgZuBVXg3RhOdWvRy6ZxzXAhjA" width={130}  alt="" />
          </div>
        </div>
      </div>
      <div className=" ">
        <p className="text-center italic text-[16px] bg-black border-t text-white">
          Copyright ©️2023 CodeIt Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
