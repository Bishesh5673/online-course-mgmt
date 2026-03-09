import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaUserTag, FaSignOutAlt } from "react-icons/fa";

function Profile() {
  const { state, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const user = state.userInfo?.user;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">

      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full grid md:grid-cols-2 overflow-hidden">

        {/* Left Side - Image */}
        <div className="bg-gray-50 flex flex-col items-center justify-center p-8">

          <img
            className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-white"
            src={`http://localhost:9000/image/${user?.image}`}
            alt="Profile"
          />

          <h2 className="text-2xl font-bold mt-4">{user?.name}</h2>
          <p className="text-gray-500">{user?.role}</p>

        </div>

        {/* Right Side - Info */}
        <div className="p-10 space-y-6">

          <h1 className="text-3xl font-bold border-b pb-4">
            Account Information
          </h1>

          <div className="space-y-4 text-lg">

            <div className="flex items-center gap-3">
              <FaUser className="text-gray-500" />
              <span className="font-semibold">Name:</span>
              <span>{user?.name}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-gray-500" />
              <span className="font-semibold">Email:</span>
              <span>{user?.email}</span>
            </div>

            <div className="flex items-center gap-3">
              <FaUserTag className="text-gray-500" />
              <span className="font-semibold">Role:</span>
              <span>{user?.role}</span>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">

            {/* <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Edit Profile
            </button> */}

            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
            >
              <FaSignOutAlt />
              Logout
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;
