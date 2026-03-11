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
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

function DashboardLayout() {
  const navigate = useNavigate();
  const { state, logout } = useContext(AuthContext);
  const username = localStorage.getItem("username");

  const location = useLocation();

  useEffect(() => {
    if (location.state?.paymentSuccess) {
      toast.success("Payment successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="w-73 bg-green-600 text-white h-full flex flex-col justify-between ">
        <div className="p-6">
          <div className="border-b-2 p-4 pt-0 mb-2">
            <p className="text-3xl font-bold">Student Panel</p>
          </div>

          <ul className="space-y-6 text-lg">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-500"
              >
                <FaTachometerAlt />
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/my-courses"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-500"
              >
                <FaBookOpen />
                My Courses
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-500"
              >
                <FaCertificate />
                Certificates
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-500"
              >
                <FaHeadset />
                Support
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-500"
              >
                <FaCommentDots />
                Suggestions
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-500"
              >
                <FaFileAlt />
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1  flex flex-col  bg-gray-300 ">
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
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-500"
            >
              <FaUser />
              Profile
            </Link>
          </div>
        </div>

        <div className="p-10 flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
