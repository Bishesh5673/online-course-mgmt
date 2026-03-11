import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";

function Hero() {
  const navigate = useNavigate();
  return (
    <section>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-[500px] px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl space-y-6 text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Nepal's Most Affordable IT Training
              </h1>
              <p className="text-lg md:text-xl text-gray-100">
                Learn from industry experts through live sessions or recorded
                videos with lifetime access.
              </p>

              <button
                onClick={() => {
                  navigate("/courses");
                }}
                className="bg-black hover:bg-gray-900 transition px-8 py-3 rounded-xl text-lg font-semibold shadow-lg"
              >
                Explore Courses
              </button>
            </div>

            <img
              src="https://codeit.com.np/storage/01KD627JZZ3XY67DDAAYY0RPMQ.avif"
              className="rounded-3xl shadow-2xl w-full h-[450px] object-cover max-w-md"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-blue-500 h-[500px] to-indigo-600 py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl space-y-6 text-white">
              <h1 className="text-4xl md:text-6xl font-bold">
                New MERN Stack Course Launched
              </h1>

              <p className="text-lg md:text-xl">
                Build real-world projects and prepare for interviews with
                professional mentors.
              </p>

              <div className="flex gap-4">
                <button
                onClick={() => {
                  navigate("/courses");
                }}
                className="bg-black px-8 py-3 rounded-xl text-lg font-semibold"
              >
                Enroll Now
              </button>

              <button
                onClick={() => window.open("https://www.youtube.com/watch?v=KoC7UGxvLAk", "_blank")}
                className="flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl text-lg font-semibold "
              >
                <FaPlay />
                Watch Demo
              </button>
              </div>
            </div>

            <img
              src="https://codeit.com.np/storage/01HNS82QHYB05ZXA0S9XZSZCEX.webp"
              className="rounded-3xl shadow-2xl w-full h-[450px] object-cover max-w-md"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-[500px] px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Text Section */}
            <div className="max-w-xl space-y-6 text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Have Any Enquiry?
              </h1>

              <p className="text-lg md:text-xl text-gray-100">
                Our team is here to help you choose the right course and guide
                you through your learning journey.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    navigate("/contact");
                  }}
                  className="bg-black hover:bg-gray-900 transition px-8 py-3 rounded-xl text-lg font-semibold shadow-lg"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Image Section */}
            <img
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b"
              className="rounded-3xl shadow-2xl w-full h-[450px] max-w-md object-cover"
              alt="Support"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Hero;
