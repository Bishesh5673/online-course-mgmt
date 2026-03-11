import { useEffect, useState } from "react";

const baseUrl = "http://127.0.0.1:9000/api/enroll";

function MyCourses() {
  const [enrollments, setEnrollments] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) return;

    fetch(`${baseUrl}/user/${userId}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setEnrollments(data.enrollments);
      })
      .catch(err => console.log(err));
  }, [userId]);

  return (
    <div className="p-10">

  {enrollments.length > 0 ? (
    <div className="space-y-6 ">
      {enrollments.map((enroll) => (
        <div
          key={enroll._id}
          className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          {/* Left Section */}
          <div className="flex items-center gap-6">

            {/* Image */}
            <img
              src={`http://localhost:9000/image/${enroll.courseId.image}`}
              alt={enroll.courseId.title}
              className="w-40 h-24 object-cover rounded-lg"
            />

            {/* Course Info */}
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">
                {enroll.courseId.title}
              </h2>

              {/* Level Badge */}
              <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full">
                {enroll.courseId.level}
              </span>

              {/* Progress Bar */}
              <div className="w-64 mt-3 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-[10%]"></div>
              </div>

              <p className="text-sm text-gray-500">Progress: 10%</p>
            </div>
          </div>

          {/* Right Section */}
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            Continue Learning
          </button>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-500 text-lg">
      You have not enrolled in any courses yet.
    </p>
  )}
</div>

  );
}

export default MyCourses;
