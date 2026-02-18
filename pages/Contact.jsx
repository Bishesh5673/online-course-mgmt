import React, { useState } from "react";
import { FaClock, FaFacebook, FaInstagram, FaPhone, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [opt, setOpt] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(opt);
    console.log(phno);
    console.log(msg);

    setFname("");
    setLname("");
    setEmail("");
    setOpt("");
    setPhno("");
    setMsg("");
  };

  return (
    <div>
      <section className="px-[156px] ">
        <div className="text-center  space-x-5 space-y-[8px]">
          <p className="text-[39px] font-bold">
            GET <span className="text-[#D95103]">IN TOUCH</span>
          </p>
          <p className="text-[#0C6967] font-bold text-[25px]">
            Our Friendly Team would love to hear from you
          </p>
        </div>
        <div className="flex">
          <div className="bg-[#0C6967] mt-4 p-[32px] w-[461px] h-[751px] space-y-[40px] rounded-md text-white">
              <div className="space-y-[15px]">
                <h5 className="flex items-center gap-[8px] font-bold text-[16px]">
                  <FaLocationPin/> Our Address
                </h5>
                <p className="italic text-[16px]">New Baneshwor, Kathmandu, Bagmati, Nepal</p>
              </div>
              <div className="space-y-[15px]">
                <h5 className="flex items-center gap-[8px] font-bold text-[16px]">
                  <FaPhone/> Our Contacts
                </h5>
                <div className="flex gap-[56px] ">
                  <div>
                    <h6 className="font-bold text-[16px]">Mobile</h6>
                    <p className="italic">980 5689789</p>
                    <p className="italic">9841 275897</p>
                  </div>
                  <div>
                    <h6 className="font-bold text-[16px]">Landline</h6>
                    <p className="italic">01-4783972</p>  
                  </div>
                </div>
              </div>
              <div className="space-y-[15px]">
                <h5 className="flex items-center gap-[8px] font-bold text-[16px]">
                  <FaClock/> Our Service Time
                </h5>
                <div className="flex gap-[56px] ">
                  <div>
                    <h6 className="font-bold text-[16px]">Mon - Fri</h6>
                    <p className="italic">10 am - 8 pm</p>
                  </div>
                  <div>
                    <h6 className="font-bold text-[16px]">Sat - Sun</h6>
                    <p className="italic">Closed</p>  
                  </div>
                </div>
              </div>
              <div className="mt-28">
                <p className="italic">Get in touch in social networks</p>
                <div className="flex gap-[16px] py-4">
                  <FaFacebook  size={32}/>
                  <FaInstagram  size={32}/>
                  <FaTiktok size={32}/>
                </div>
              </div>
          </div>
          <div className="pt-[5px] pr-[156px] pb-[48px] pl-[64px] w-[528px] space-y-2">
          <div className="mt-4 space-y-6">
            <div className="flex gap-[16px]">
              <label htmlFor="firstname" className="flex flex-col">
                First Name
                <input
                  type="text"
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  className="border-[1px] p-[16px] w-[256px] h-[56px]"
                />
              </label>
              <label htmlFor="lastname" className="flex flex-col">
                Last Name
                <input
                  type="text"
                  value={lname}
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                  className="border-[1px] p-[16px] w-[256px] h-[56px]"
                />
              </label>
            </div>
            <label htmlFor="choose" className="flex flex-col">
              What can we do for you
              <select
                onChange={(e) => {
                  setOpt(e.target.value);
                }}
                name="choose"
                id="choose"
                className="h-[56px] w-[528px] p-[16px] border"
              >
                <option value="">Choose</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
              </select>
            </label>
            <label htmlFor="email" className="flex flex-col">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="border-[1px] p-[16px] w-[528px] h-[56px]"
              />
            </label>
            <label htmlFor="phno" className="flex flex-col">
              Phone number
              <input
              value={phno}
                type="tel"
                onChange={(e) => {
                  setPhno(e.target.value);
                }}
                className="border-[1px] p-[16px] w-[528px] h-[56px]"
              />
            </label>
            <label htmlFor="message" className="flex flex-col">
              Message
              <textarea
              value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
                name="txt"
                id="aa"
                className="border-[1px] p-[16px] w-[528px] h-[192px] resize-none"
              ></textarea>
            </label>
          </div>
          <div className="py-12 mt-2">
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="w-[256px] h-[59px] bg-[#0C6967] rounded-4xl p-[20px] px-[40px] text-white flex items-center justify-center"
            >
              Send Message
            </button>
          </div>
        </div>
        </div>
      </section>
      <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18808.420810112613!2d85.34150878800013!3d27.692959710404143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2z4KSo4KSv4KS-4KSBIOCkrOCkvuCkqOClh-CktuCljeCkteCksCwg4KSV4KS-4KSg4KSu4KS-4KSh4KWM4KSBIDQ0NjAw!5e0!3m2!1sne!2snp!4v1768312809694!5m2!1sne!2snp"
            className="w-full h-[640px] border-0 "
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>
  );
}

export default Contact;