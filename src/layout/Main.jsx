import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import GoToTop from "../Shared/GoToTop/GoToTop";
import ScrollToTop from "../Shared/ScroolToTop/ScrollToTop";

const Main = () => {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-br from-[#1E1E2F] via-[#2C2C3F] to-[#3A3A50] text-white">
        {/* Navbar */}
        <div className="bg-gray-900/80 backdrop-blur-md shadow-md">
          <Navbar />
        </div>

        {/* Main Content */}
        <main className="flex-grow container max-w-screen-sm sm:max-w-screen-md md:max-w-screen-xl mx-auto px-3 sm:px-4 md:px-4">
          <Outlet />
        </main>

        {/* GoToTop & Footer */}
        <GoToTop />
        <div className="bg-gray-900/70 backdrop-blur-md mt-8">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
