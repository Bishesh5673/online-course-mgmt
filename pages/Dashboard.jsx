import { useEffect, useState } from "react";

const baseUrl = "http://127.0.0.1:9000/api/enroll";

function Dashboard() {
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
      <h1 className="text-3xl font-bold mb-6">My Enrolled Courses</h1>
      {enrollments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrollments.map((enroll) => (
            <div key={enroll._id} className="p-5 bg-white shadow-xl rounded-2xl">
              <img
                src={`http://localhost:9000/image/${enroll.courseId.image}`}
                alt={enroll.courseId.title}
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
              <h2 className="text-xl font-bold">{enroll.courseId.title}</h2>
              <p className="text-gray-600">Price: Rs. {enroll.courseId.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>You have not enrolled in any courses yet.</p>
      )}
    </div>
  );
}

export default Dashboard;
