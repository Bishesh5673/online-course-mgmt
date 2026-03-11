import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

const baseUrl = "http://127.0.0.1:9000/api/enroll";

function EnrollCourse() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  // ✅ Check for missing data
  if (!state || !state.courseId) {
    alert("Course data missing");
    navigate("/");
    return null;
  }

  if (!userId) {
    // alert("Please login first");
    toast.error("Please login first", {
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
    navigate("/login");
    return null;
  }

  const { courseId, title, price, image } = state;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const enrollCourse = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch(`${baseUrl}/createEnroll`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          courseId,
          userId,
        }),
      });

      res = await res.json();

      if (res.success) {
        // alert(res.message);
        navigate("/payment", {
          state: {
            courseId,
            title,
            price,
            userId,
            name,
            email,
            phone,
            transactionId: Date.now(),
          },
        });
      } else {
        // alert(res.message || "Enrollment failed");
        toast.error("You are already enrolled in this course", {
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
    } catch (error) {
      console.log(error);
      alert("Enrollment failed. Check console for details.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">
        {/* Course Info Section */}
        <div className="bg-gray-50 p-8 flex flex-col justify-center items-center text-center">
          <img
            src={`http://127.0.0.1:9000/image/${image}`}
            alt={title}
            className="w-full h-60 object-cover rounded-2xl mb-6 shadow-md"
          />

          <h1 className="text-3xl font-bold mb-2">{title}</h1>

          <p className="text-gray-600 mb-4">
            Secure your seat in this course today.
          </p>

          <p className="text-xl font-semibold text-green-600">Rs. {price}</p>
        </div>

        {/* Enrollment Form */}
        <form onSubmit={enrollCourse} className="p-10 space-y-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            Enrollment Details
          </h2>

          <div>
            <label className="font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 focus:border-black focus:ring-1 focus:ring-black p-3 rounded-xl mt-1 transition"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Email</label>
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 focus:border-black focus:ring-1 focus:ring-black p-3 rounded-xl mt-1 transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Phone</label>
            <input
              type="text"
              required
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 focus:border-black focus:ring-1 focus:ring-black p-3 rounded-xl mt-1 transition"
              placeholder="Enter your phone number"
            />
          </div>

          <button className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition duration-200 shadow-md">
            Confirm Enrollment
          </button>
        </form>
      </div>
    </main>
  );
}

export default EnrollCourse;
