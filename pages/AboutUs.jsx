import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaBook, FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}

      <section className="bg-black text-white py-24 px-6 md:px-20 text-center">
        <h1 className="text-5xl font-bold mb-6">About Our Learning Platform</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          Our mission is to make high-quality tech education accessible to
          everyone. We provide practical courses designed to help students build
          real-world skills and advance their careers in technology.
        </p>
      </section>

      {/* STATS SECTION */}

      <section className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-4 text-center gap-10 max-w-6xl mx-auto">

          <div>
            <FaUsers className="text-4xl mx-auto text-orange-500 mb-4" />
            <h2 className="text-3xl font-bold">10,000+</h2>
            <p className="text-gray-600">Students</p>
          </div>

          <div>
            <FaBook className="text-4xl mx-auto text-orange-500 mb-4" />
            <h2 className="text-3xl font-bold">50+</h2>
            <p className="text-gray-600">Courses</p>
          </div>

          <div>
            <FaChalkboardTeacher className="text-4xl mx-auto text-orange-500 mb-4" />
            <h2 className="text-3xl font-bold">20+</h2>
            <p className="text-gray-600">Expert Instructors</p>
          </div>

          <div>
            <FaLaptopCode className="text-4xl mx-auto text-orange-500 mb-4" />
            <h2 className="text-3xl font-bold">120+</h2>
            <p className="text-gray-600">Hours of Content</p>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}

      <section className="py-20 bg-white px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower students with industry-relevant
              technology skills. We focus on practical learning through
              real-world projects so students can confidently enter the tech
              industry.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where anyone with an internet connection can
              gain valuable technical skills and build a successful career in
              technology.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section className="py-20 px-6 md:px-20 bg-gray-50">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-gray-600">
            We focus on delivering high quality tech education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Practical Learning</h3>
            <p className="text-gray-600">
              Our courses focus on hands-on projects to help students gain real
              world experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from experienced developers and industry professionals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4">Career Focused</h3>
            <p className="text-gray-600">
              Our courses are designed to prepare students for real tech jobs.
            </p>
          </div>

        </div>

      </section>

      {/* TEAM SECTION */}

      <section className="py-20 px-6 md:px-20 bg-white">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600">
            The passionate people behind this learning platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              className="w-40 h-40 mx-auto rounded-full mb-6"
            />
            <h3 className="font-semibold text-lg">Alex Carter</h3>
            <p className="text-gray-500">Founder & Instructor</p>
          </div>

          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/12.jpg"
              className="w-40 h-40 mx-auto rounded-full mb-6"
            />
            <h3 className="font-semibold text-lg">Sophia Brown</h3>
            <p className="text-gray-500">Frontend Instructor</p>
          </div>

          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/13.jpg"
              className="w-40 h-40 mx-auto rounded-full mb-6"
            />
            <h3 className="font-semibold text-lg">Michael Chen</h3>
            <p className="text-gray-500">Backend Instructor</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-green-600 text-white text-center py-20 px-6">

        <h2 className="text-4xl font-bold mb-6">
          Start Learning Today
        </h2>

        <p className="mb-8 text-lg">
          Explore our courses and start building your tech career.
        </p>

        <button
          onClick={() => navigate("/courses")}
          className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Browse Courses
        </button>

      </section>

    </main>
  );
}

export default AboutUs;
