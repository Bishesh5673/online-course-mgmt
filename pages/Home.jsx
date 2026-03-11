import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:9000/api/course";
import { FaGraduationCap, FaHeadset, FaVideo } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import Hero from "../components/Hero";

function Home() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getCourse = async () => {
    try {
      setIsLoading(true);
      let res = await fetch(`${baseUrl}/getCourse`);
      res = await res.json();
      console.log(res.courses);
      setCourses(res.courses);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      // console.log(error);
    }
  };
  useEffect(() => {
    getCourse();
  }, []);
 return (
  <main className="font-sans">

    {/* HERO SECTION */}
    <Hero/>

    {/* FEATURES SECTION */}
    <section className="py-20 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
      
      <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
        <FaGraduationCap className="mx-auto text-green-500 mb-4" size={60} />
        <p className="font-bold text-2xl">5K+</p>
        <p className="text-gray-600">Students Trained</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
        <FaHeadset className="mx-auto text-green-500 mb-4" size={60} />
        <p className="font-bold text-2xl">Lifetime</p>
        <p className="text-gray-600">Access & Support</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
        <FaVideo className="mx-auto text-green-500 mb-4" size={60} />
        <p className="font-bold text-2xl">Live &</p>
        <p className="text-gray-600">Recorded Videos</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
        <GiRibbonMedal className="mx-auto text-green-500 mb-4" size={60} />
        <p className="font-bold text-2xl">Certificate +</p>
        <p className="text-gray-600">Internship</p>
      </div>
    </section>

    {/* COURSES SECTION */}
    <section className="pb-5 px-6 md:px-20 bg-gray-300">
      <h1 className="text-4xl font-bold text-center mb-2">
        Learn the Skills Employers Want
      </h1>
      <p className="text-xl text-gray-600 text-center italic mb-6">
        Master in-demand technical skills, work on real-world projects, and gain practical experience that companies are actively looking for in today’s job market.
      </p>

      {isLoading ? (
        <div className="text-center text-xl">Loading...</div>
      ) : courses?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {courses
              ?.sort(() => 0.5 - Math.random())
              .slice(0, 6)
              .map((item) => (
                <div
                  key={item._id}
                  onClick={() =>
                    navigate("/courseDetail", { state: item })
                  }
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
                >
                  <img
                    className="w-full h-60 object-cover"
                    src={`http://localhost:9000/image/${item?.image}`}
                    alt={item.title}
                  />

                  <div className="p-6 pb-0  space-y-3">
                <h2 className="text-2xl font-bold line-clamp-2">{item.title}</h2>
              </div>
              <div className="flex p-6 items-center justify-between ">
                <p className="text-green-600 font-semibold text-2xl">
                  Rs. {item.price}
                </p>
                <button className=" bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition">
                  View Details
                </button>
              </div>
                </div>
              ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/courses")}
              className="px-8 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition shadow-md"
            >
              View All Courses
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-xl text-gray-500">
          Course Not Found
        </div>
      )}
    </section>

     <section className="py-20 px-6 md:px-20 bg-gray-300">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 text-center italic mb-6">
            The passionate people behind this learning platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              className="w-40 h-40 mx-auto rounded-full mb-6"
            />
            <h3 className="font-semibold text-lg">Alex Carter</h3>
            <p className="text-gray-500">Founder & Instructor</p>
          </div>

          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/12.jpg"
              className="w-40 h-40 mx-auto rounded-full mb-6"
            />
            <h3 className="font-semibold text-lg">Sophia Brown</h3>
            <p className="text-gray-500">Frontend Instructor</p>
          </div>

          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/13.jpg"
              className="w-40 h-40 mx-auto rounded-full mb-6"
            />
            <h3 className="font-semibold text-lg">Michael Chen</h3>
            <p className="text-gray-500">Backend Instructor</p>
          </div>

        </div>

      </section>
  </main>
);

}

export default Home;
