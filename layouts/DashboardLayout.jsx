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
          <div
            onClick={() => {
              navigate("/");
            }}
            className="text-2xl font-bold tracking-wide mb-8  flex hover:cursor-pointer "
          >
            <img
              src="https://codeit.com.np/storage/01KE9MC5P5YCRYWVW7HQ7JVDEK.png"
              width={150}
              alt=""
            />
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
                to="/dashboard/certificates"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-400"
              >
                <FaCertificate />
                Certificates
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/support"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-400"
              >
                <FaHeadset />
                Support
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/suggestions"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-400"
              >
                <FaCommentDots />
                Suggestions
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/terms"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-400"
              >
                <FaFileAlt />
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/profile"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-400"
              >
                <FaUser />
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-300 ">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
