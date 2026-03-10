import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBookOpen,
  FaCertificate,
  FaReceipt,
  FaHeadset,
  FaCommentDots,
  FaFileAlt,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

function DashboardLayout() {
  const navigate = useNavigate();
  const { state, logout } = useContext(AuthContext);
  const username = localStorage.getItem("username");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-73 bg-orange-500 text-white flex flex-col justify-between ">
        <div className="p-6">
          <div className="border-b-2 p-4 pt-0 mb-2">
            <p className="text-3xl font-bold">
              Student Panel
            </p>
          </div>

          <ul className="space-y-6 text-lg">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-400"
              >
                <FaTachometerAlt />
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/my-courses"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-400"
              >
                <FaBookOpen />
                My Courses
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-400"
              >
                <FaCertificate />
                Certificates
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-400"
              >
                <FaHeadset />
                Support
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-400"
              >
                <FaCommentDots />
                Suggestions
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-400"
              >
                <FaFileAlt />
                Terms & Conditions
              </Link>
            </li>

          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1    bg-gray-300 ">
        <div className="flex items-center justify-between mb-5 text-white h-20 px-5 bg-black border-b-2">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="hover:cursor-pointer "
          >
            <img
              src="https://codeit.com.np/storage/01KE9MC5P5YCRYWVW7HQ7JVDEK.png"
              width={150}
              alt=""
            />
          </div>
          <div>
            <Link
            to="/dashboard/profile"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-400"
          >
            <FaUser />
            Profile
          </Link>
          </div>
        </div>

        <div className="p-10">
          <Outlet />
        </div>
        
      </div>
    </div>
  );
}

export default DashboardLayout;
