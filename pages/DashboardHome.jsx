import { useEffect, useState } from "react";
import { FaPlus, FaBookOpen, FaCertificate, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://127.0.0.1:9000/api/enroll";

function DashboardHome() {

  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch(`${baseUrl}/user/${userId}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setCount(data.enrollments.length);
        }
      });
  }, []);

  return (

    <div className="space-y-10">

      {/* Welcome Section */}
      <div className="bg-white p-8 rounded-2xl shadow-md flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back, {username || "Student"} 👋
          </h1>
          <p className="text-gray-500 mt-2">
            Continue learning and grow your IT skills today.
          </p>
        </div>

        <button
          onClick={() => navigate("/courses")}
          className="flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >
          <FaPlus />
          Enroll Course
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <FaBookOpen className="text-green-600 text-3xl" />
            <div>
              <h2 className="text-lg text-gray-500">Active Courses</h2>
              <p className="text-3xl font-bold">{count}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <FaCertificate className="text-blue-500 text-3xl" />
            <div>
              <h2 className="text-lg text-gray-500">Certificates</h2>
              <p className="text-3xl font-bold">0</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <FaChartLine className="text-purple-500 text-3xl" />
            <div>
              <h2 className="text-lg text-gray-500">Progress</h2>
              <p className="text-3xl font-bold">60%</p>
            </div>
          </div>
        </div>

      </div>

      {/* Continue Learning Section */}
      <div className="bg-white p-8 rounded-2xl shadow-md">

        <h2 className="text-2xl font-bold mb-6">
          Continue Learning
        </h2>

        {count > 0 ? (
          <div className="flex items-center justify-between border rounded-xl p-5">

            <div>
              <h3 className="text-lg font-semibold">
                Your enrolled courses
              </h3>
              <p className="text-gray-500">
                Continue where you left off.
              </p>
            </div>

            <button
              onClick={() => navigate("/dashboard/my-courses")}
              className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              View Courses
            </button>

          </div>
        ) : (
          <p className="text-gray-500">
            You haven't enrolled in any courses yet.
          </p>
        )}

      </div>

    </div>
  );
}

export default DashboardHome;
