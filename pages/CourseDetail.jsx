import React from "react";
import { useLocation } from "react-router-dom";

function CourseDetail() {
  const { state } = useLocation();
  const { title, description, image, level, price, date } = state;

  return (
    <main className="bg-gray-50 min-h-screen pt-24 px-6 md:px-20 py-16">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            {description}
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={`http://localhost:9000/image/${image}`}
              alt={title}
              className="w-full h-[350px] object-cover"
            />
          </div>

          {/* Course Info Card */}
          <div className="bg-white p-8 rounded-3xl shadow-lg space-y-5">

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Start Date</span>
              <span className="font-semibold">
                {new Date(date).toDateString()}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Level</span>
              <span className="font-semibold capitalize">
                {level}
              </span>
            </div>

            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-600">Price</span>
              <span className="font-bold text-green-600">
                Rs. {price}
              </span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-xl text-lg hover:bg-gray-800 transition mt-4">
              Enroll Now
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}

export default CourseDetail;
