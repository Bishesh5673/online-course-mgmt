import React from "react";

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
    </main>
  );
}

export default Home;
