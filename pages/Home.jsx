import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:9000/api/course";
import { FaGraduationCap, FaHeadset, FaVideo } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";

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
    <section className="bg-gradient-to-r from-green-500 to-emerald-600  py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      
      <div className="max-w-xl space-y-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Nepal's Most Affordable IT Training
        </h1>
        <p className="text-lg md:text-xl text-gray-100">
          Learn from industry experts through live sessions or recorded videos
          with lifetime access, internship, and job interview preparation.
        </p>
        <button className="bg-black hover:bg-gray-900 transition px-8 py-3 rounded-xl text-lg font-semibold shadow-lg">
          Enroll Now
        </button>
      </div>

      <div>
        <img
          src="https://codeit.com.np/storage/01KD627JZZ3XY67DDAAYY0RPMQ.avif"
          className="rounded-3xl shadow-2xl w-full mt-10 max-w-md"
          alt="Training"
        />
      </div>
    </section>

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
    <section className="py-20 px-6 md:px-20 bg-gray-300">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Courses
      </h1>

      {isLoading ? (
        <div className="text-center text-xl">Loading...</div>
      ) : courses?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {courses
              ?.sort(() => 0.5 - Math.random())
              .slice(0, 3)
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

                  <div className="p-6 space-y-2">
                    <h2 className="text-xl font-bold">
                      {item.title}
                    </h2>
                    <p className="text-green-600 font-semibold text-lg">
                      Rs. {item.price}
                    </p>
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
  </main>
);

}

export default Home;
