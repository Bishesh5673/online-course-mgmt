import React from "react";

import { NavLink } from "react-router-dom";
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa6";


function Footer() {
  return (
    <footer>
      <div className="px-24 flex gap-x-28">
        <div className="pr-[16px] pb-[16px] w-[408px] h-[192px] space-y-3">
          <NavLink to="/" className="flex items-center gap-x-2">
            <img src='' width={30} alt="" />
            <p className="text-2xl text-[#0C6967] font-bold">momos</p>
          </NavLink>
          <p className="text-[16px] text-[#6B788E]">
            Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
            molestie. Volutpat quis egestas porttitor turpis sit in. Lorem nunc
            nullam morbi urna amet suspendisse nullam ac vivamus.
          </p>
        </div>
        <div className="w-[168px]">
          <h5 className="text-[#0C6967] text-[20px] font-bold">momos</h5>
          <div className="links flex flex-col justify-start mt-3 text-[15px]   gap-y-2 ">
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/menu">Our Menu</NavLink>
            <NavLink to="/services">Our Services</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </div>
        <div className="w-[168px]">
          <h5 className="text-[#0C6967] text-[20px] font-bold">Legals</h5>
          <div className="links flex flex-col justify-start mt-3 text-[15px] gap-y-1 ">
            <NavLink to="/">Terms & Conditions</NavLink>
            <NavLink to="/">Privacy Policy</NavLink>
            <NavLink to="/">Support</NavLink>
          </div>
        </div>
        <div className="w-[168px]">
          <h5 className="text-[#0C6967] text-[20px] font-bold">Follow Us</h5>
          <div className="flex flex-wrap gap-3 mt-3">
            <FaFacebook size={35}/>
            <FaLinkedin  size={35}/>
            <FaTwitter size={35}/>
            <FaYoutube size={35}/>
            <FaInstagram size={35}/>
            <FaTiktok size={35}/>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center italic text-[16px] bg-black text-white">
          Copyright ©️2023 Everest Momo Pvt Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

