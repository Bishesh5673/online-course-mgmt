import React from "react";
import { FaGraduationCap, FaHeadset, FaVideo } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";

function Home() {
  return (
    <main>
      <div className="bg-green-400 p-10 pl-20 flex justify-between">
        <div className="w-[500px] space-y-8">
          <h1 className="text-white text-6xl font-bold">
            Nepal's Most Affordable IT Training
          </h1>
          <p className="text-white text-xl">
            Learn from industry experts through live sessions or recorded videos
            with lifetime access, internship, and job interview preparation.
          </p>
          <button className="bg-black text-white h-15 w-40 text-2xl px-1 ">
            Enroll Now
          </button>
        </div>
        <div>
          <img src="https://codeit.com.np/storage/01KD627JZZ3XY67DDAAYY0RPMQ.avif" width={500} alt="" />
        </div>
      </div>
      <div className="p-20 flex justify-between">
        <div className="flex items-center space-x-5 shadow-2xl">
          <div>
            <FaGraduationCap color="green" size={70}/>
          </div>
          <div className="text-xl">
              <p className="font-bold">5K +</p>
              <p>Students Trained</p>
          </div>
        </div>
        <div className="flex items-center space-x-5 shadow-2xl">
          <div>
            <FaHeadset color="green" size={70} />
          </div>
          <div className="text-xl">
              <p className="font-bold">Lifetime</p>
              <p>Access & support</p>
          </div>
        </div>
        <div className="flex items-center space-x-5 shadow-2xl">
          <div>
            <FaVideo color="green" size={70} />
          </div>
          <div className="text-xl">
              <p className="font-bold">Live &</p>
              <p>Recorded Video</p>
          </div>
        </div>
        <div className="flex items-center space-x-5 shadow-2xl">
          <div>
            <GiRibbonMedal color="green" size={70} />
          </div>
          <div className="text-xl">
              <p className="font-bold">Certificate +</p>
              <p>Internship</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
