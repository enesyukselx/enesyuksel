import { Outlet } from "@remix-run/react";
import Footer from "~/components/Layout/Footer";
import Header from "~/components/Layout/Header";

const Layout = () => {
    return (
        <div className="relative">
            <Header />
            <div className="px-8 md:px-20 py-8">
                <Outlet />
            </div>
            <div className="px-8 md:px-20 pt-3">
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
