import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import GoToTop from "../Shared/GoToTop/GoToTop";
import ScrollToTop from "../Shared/ScroolToTop/ScrollToTop";

const Main = () => {
    return (
        <>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-br from-[#FFF7F3] to-[#FFE4D8]">
                {/* Conditionally render Navbar */}
                <Navbar />

                <main className="flex-grow container max-w-screen-sm sm:max-w-screen-md md:max-w-screen-xl mx-auto px-3 sm:px-4 md:px-4">
                    <Outlet />
                </main>

                {/* Conditionally render GoToTop and Footer */}
                <GoToTop />
                <Footer />
            </div>
        </>
    );
};

export default Main;