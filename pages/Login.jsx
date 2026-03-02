import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(AuthContext);

  const loginUsers = async (e) => {
    e.preventDefault();
    await loginUser(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <form
        onSubmit={loginUsers}
        className="w-full max-w-md bg-white/10 backdrop-blur-md text-white 
                   p-10 mt-25 mb-15 rounded-2xl shadow-2xl space-y-6 border border-white/20"
      >
        <h2 className="text-3xl font-bold text-center">Welcome !!</h2>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm tracking-wide">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 
                       border border-white/30 outline-none 
                       focus:ring-2 focus:ring-green-400 
                       focus:border-transparent transition duration-300"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm tracking-wide">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/20 
                       border border-white/30 outline-none 
                       focus:ring-2 focus:ring-green-400 
                       focus:border-transparent transition duration-300"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right text-sm">
          <NavLink
            to="/forgotPassword"
            className="text-green-400 hover:text-green-300 hover:underline transition"
          >
            Forgot Password?
          </NavLink>
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-green-500 hover:bg-green-600 
                     transition duration-300 p-3 rounded-lg 
                     font-semibold tracking-wide shadow-lg 
                     hover:scale-105 active:scale-95"
        >
          Login
        </button>

        {/* Register Link */}
        <div className="text-center text-sm pt-2">
          <span className="text-gray-300">
            Don't have an account?{" "}
          </span>
          <NavLink
            to="/register"
            className="text-green-400 hover:text-green-300 hover:underline font-medium transition"
          >
            Register
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Login;
