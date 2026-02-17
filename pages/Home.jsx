import React from "react";

function Home() {
  return (
    <main>
      <div className="bg-green-400 p-10">
        <div className="w-[500px] space-y-8">
          <h1 className="text-white text-6xl font-bold">Career-Ready IT Training in Nepal</h1>
          <p className="text-white text-2xl">
            Gain job-ready skills with our IT courses in Nepal. Elevate your
            career prospects today!
          </p>
          <button className="bg-black text-white h-15 w-40 text-2xl px-1 ">
            Enroll Now
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
