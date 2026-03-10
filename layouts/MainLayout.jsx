import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Header />

      <div className="min-h-screen mt-15 ">
        <Outlet/>
      </div>
      

      <Footer />
    </>
  );
}

export default MainLayout;
