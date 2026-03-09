import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Header />

      <Outlet  classname=" mt-15 bg-gray-300"/>

      <Footer />
    </>
  );
}

export default MainLayout;
