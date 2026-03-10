import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout.jsx";
import DashboardLayout from "../layouts/DashboardLayout.jsx";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import CourseDetail from "../pages/CourseDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import EnrollCourse from "../pages/EnrollCourse";
import Payment from "../pages/Payment";
import PaymentSuccess from "../pages/PaymentSuccess";

import DashboardHome from "../pages/DashboardHome";
import MyCourses from "../pages/MyCourses";
import Testimonials from "../pages/Testimonials.jsx";

function AppRouter() {
  return (
    <Routes>

      {/* MAIN WEBSITE */}
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courseDetail" element={<CourseDetail />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/enroll" element={<EnrollCourse />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

      </Route>


      {/* DASHBOARD */}
      <Route path="/dashboard" element={<DashboardLayout />}>

        <Route index element={<DashboardHome />} />
        <Route path="my-courses" element={<MyCourses />} />
        <Route path="profile" element={<Profile />} />

      </Route>

    </Routes>
  );
}

export default AppRouter;
