import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Testimonials() {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      message:
        "This platform helped me learn React from scratch. The courses are well structured and easy to follow.",
    },
    {
      name: "Priya Patel",
      role: "CS Student",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      message:
        "I built my first MERN stack project after completing the course. The projects were extremely helpful.",
    },
    {
      name: "David Lee",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      rating: 4,
      message:
        "Great learning experience with practical examples and real-world projects.",
    },
    {
      name: "Sara Khan",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      message:
        "Clean platform and easy to understand lessons. Highly recommended.",
    },
    {
      name: "Rahul Verma",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/men/21.jpg",
      rating: 5,
      message:
        "The MERN stack course was amazing and very detailed.",
    },
    {
      name: "Emily Johnson",
      role: "Web Developer",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      rating: 4,
      message:
        "Hands-on projects helped me gain confidence in development.",
    },

    /* NEW 6 REVIEWS */

    {
      name: "Michael Chen",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      rating: 5,
      message:
        "Node.js and MongoDB lessons were extremely practical and well explained.",
    },
    {
      name: "Anita Desai",
      role: "Computer Science Student",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      rating: 5,
      message:
        "The instructors explain complex concepts in a very simple way.",
    },
    {
      name: "Daniel Wilson",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/61.jpg",
      rating: 4,
      message:
        "Excellent content quality. The course structure is perfect for beginners.",
    },
    {
      name: "Sophia Brown",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/39.jpg",
      rating: 5,
      message:
        "I improved my React skills significantly after taking these courses.",
    },
    {
      name: "Rohit Singh",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      message:
        "The MERN projects included in the course are very useful for portfolios.",
    },
    {
      name: "Olivia Taylor",
      role: "Junior Developer",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 4,
      message:
        "Amazing platform for beginners who want to start their tech journey.",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HEADING */}

      <section className="py-20 px-6 md:px-20">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            What Our Students Say
          </h1>

          <p className="text-gray-600 text-lg">
            Thousands of learners trust our platform to upgrade their tech skills.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >

              {/* STARS */}

              <div className="flex text-yellow-400 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-600 italic mb-6">
                "{item.message}"
              </p>

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full"
                />

                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* STATS SECTION */}

      <section className="bg-black text-white py-16 px-10">
        <div className="grid md:grid-cols-4 text-center gap-10 max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl font-bold">10K+</h2>
            <p className="text-gray-300">Students Enrolled</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">50+</h2>
            <p className="text-gray-300">Courses Available</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">120+</h2>
            <p className="text-gray-300">Hours of Content</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">4.8 ⭐</h2>
            <p className="text-gray-300">Average Rating</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="bg-green-600 text-white text-center py-20 px-6">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Learning Journey?
        </h2>

        <p className="text-lg mb-8">
          Join thousands of students learning modern tech skills today.
        </p>

        <button
          onClick={() => navigate("/courses")}
          className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Browse Courses
        </button>

      </section>

    </main>
  );
}

export default Testimonials;
