import React from "react";
import { FaAward, FaLaptop, FaPlay, FaVideo } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

function CourseDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { title, description, image, level, price, date, demoVideo, _id } =
    state;

  return (
    <main className="bg-gray-50 min-h-screen  px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>

          <p className="text-gray-600 text-lg text-justify leading-relaxed">
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
              <span className="font-semibold capitalize">{level}</span>
            </div>

            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-600">Price</span>
              <span className="font-bold text-green-600">Rs. {price}</span>
            </div>

            <button
              onClick={() =>
                navigate("/enroll", {
                  state: { courseId: _id, title, price, image },
                })
              }
              className="w-full bg-black text-white py-3 rounded-xl text-lg hover:bg-gray-800 transition mt-4"
            >
              Enroll Now
            </button>

            {demoVideo && (
              <a
                href={demoVideo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-400 text-white px-6 py-3 rounded-xl text-lg font-semibold"
              >
                <FaPlay />
                Watch Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <div className=" pt-10 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Everything You Receive
        </h1>
        <p className="text-gray-600 text-lg">
          All-inclusive support — from training to real-world experience{" "}
        </p>
        <div className="grid md:grid-cols-3 gap-10 pt-5 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gray-200 p-10  rounded-3xl shadow-md hover:shadow-xl transition">
            <FaLaptop className="text-orange-500 mb-6" size={45} />
            <h3 className="text-2xl font-bold mb-2">Live Classes</h3>
            <p className="text-gray-600 text-lg">
              Google Meet <br />
              7:00 PM - 8:00 PM
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-200 p-10 rounded-3xl shadow-md hover:shadow-xl transition">
            <FaVideo className="text-orange-500 mb-6" size={45} />
            <h3 className="text-2xl font-bold mb-2">Lifetime Videos</h3>
            <p className="text-gray-600 text-lg">Re-watch anytime</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-200 p-10 rounded-3xl shadow-md hover:shadow-xl transition">
            <FaAward className="text-orange-500 mb-6" size={45} />
            <h3 className="text-2xl font-bold mb-2">Certification</h3>
            <p className="text-gray-600 text-lg">Industry recognized</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CourseDetail;
