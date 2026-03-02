import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const baseUrl = "http://localhost:9000/api/user";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("image", image);

    try {
      let res = await fetch(`${baseUrl}/register`, {
        method: "POST",
        body: formData,
      });

      res = await res.json();
      alert(res.message);

      if (res.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <form
        onSubmit={registerUser}
        className="w-full max-w-md bg-white/10 backdrop-blur-md text-white 
                   p-10 mt-25 mb-15 rounded-2xl shadow-2xl space-y-6 border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center">Create Account</h2>

        {/* Name */}
        <div className="space-y-2">
          <label className="text-sm tracking-wide">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 
                       border border-white/30 outline-none 
                       focus:ring-2 focus:ring-green-400 
                       focus:border-transparent transition duration-300"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm tracking-wide">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 
                       border border-white/30 outline-none 
                       focus:ring-2 focus:ring-green-400 
                       focus:border-transparent transition duration-300"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="text-sm tracking-wide">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 
                       border border-white/30 outline-none 
                       focus:ring-2 focus:ring-green-400 
                       focus:border-transparent transition duration-300"
            type="password"
            placeholder="Create a password"
          />
        </div>

        {/* Image Upload */}
        <div className="space-y-2">
          <label className="text-sm tracking-wide">Profile Image</label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full text-sm file:mr-4 file:py-2 file:px-4
                       file:rounded-lg file:border-0
                       file:text-sm file:font-semibold
                       file:bg-green-500 file:text-white
                       hover:file:bg-green-600
                       bg-white/20 border border-white/30 
                       rounded-lg cursor-pointer"
            type="file"
          />
        </div>

        {/* Register Button */}
        <button
          className="w-full bg-green-500 hover:bg-green-600 
                     transition duration-300 p-3 rounded-lg 
                     font-semibold tracking-wide shadow-lg 
                     hover:scale-105 active:scale-95"
        >
          Register
        </button>

        {/* Login Link */}
        <div className="text-center text-sm pt-2">
          <span className="text-gray-300">
            Already have an account?{" "}
          </span>
          <NavLink
            to="/login"
            className="text-green-400 hover:text-green-300 hover:underline font-medium transition"
          >
            Login
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Register;
