import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:9000/api/course";
function Courses() {
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

  if (!isError && isLoading) {
    return (
      <div className="text-center mt-10  text-2xl ">Loading..............</div>
    );
  }
  return (
  <main className="min-h-screen bg-gray-50 px-6 md:px-20 py-16">

    {/* Page Title */}
    <div className="text-center mb-14">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Explore Our Courses
      </h1>
      <p className="text-gray-600 text-lg">
        Learn in-demand IT skills with lifetime access and expert guidance.
      </p>
    </div>

    {/* Loading State */}
    {isLoading && (
      <div className="text-center text-xl font-medium animate-pulse">
        Loading courses...
      </div>
    )}

    {/* Error State */}
    {isError && (
      <div className="text-center text-red-500 text-lg">
        Something went wrong. Please try again.
      </div>
    )}

    {/* Courses Grid */}
    {!isLoading && !isError && courses?.length > 0 && (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {courses.map((item) => (
          <div
            key={item._id}
            onClick={() =>
              navigate("/courseDetail", { state: item })
            }
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <img
              className="w-full h-56 object-cover"
              src={`http://localhost:9000/image/${item?.image}`}
              alt={item.title}
            />

            <div className="p-6 space-y-3">
              <h2 className="text-xl font-bold line-clamp-2">
                {item.title}
              </h2>

              <p className="text-green-600 font-semibold text-lg">
                Rs. {item.price}
              </p>

              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    )}

    {/* No Course */}
    {!isLoading && !isError && courses?.length === 0 && (
      <div className="text-center text-gray-500 text-xl">
        No courses available.
      </div>
    )}
  </main>
);

}

export default Courses;
