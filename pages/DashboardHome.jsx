import { useEffect, useState } from "react";

const baseUrl = "http://127.0.0.1:9000/api/enroll";

function DashboardHome() {

  const [count, setCount] = useState(0);
  const username = localStorage.getItem("username");
  const userId = localStorage.getItem("userId");

  useEffect(() => {

    fetch(`${baseUrl}/user/${userId}`)
      .then(res => res.json())
      .then(data => {
        if(data.success){
          setCount(data.enrollments.length);
        }
      });

  }, []);

  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">
        Welcome {username || "Student"}
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Active Courses</h2>
          <p className="text-3xl mt-3">{count}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Certificates</h2>
          <p className="text-3xl mt-3">0</p>
        </div>

      </div>

    </div>

  );

}

export default DashboardHome;
