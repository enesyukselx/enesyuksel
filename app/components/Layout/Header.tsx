import { NavLink } from "@remix-run/react";
import { FaBars } from "react-icons/fa/index.js";
import { useState } from "react";

const Links = [
    {
        name: "Home",
        path: "",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Skills",
        path: "/skills",
    },
    {
        name: "Projects",
        path: "/projects",
    },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`block md:flex justify-between items-center px-8 md:px-20 py-4 shadow-sm border-b-2 border-gray-200`}
        >
            <div
                className={`flex md:block justify-between font-bold text-lg ${
                    isOpen &&
                    "border-b-2 md:border-b-0 pb-2 md:pb-0 mb-2 md:mb-0"
                }`}
            >
                <NavLink to="/" unstable_viewTransition>
                    Enes Yüksel
                </NavLink>
                <button
                    className="block md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FaBars className="text-2xl" />
                </button>
            </div>
            <div>
                <ul
                    className={`${
                        isOpen ? "flex" : "hidden"
                    } md:flex flex-col md:flex-row gap-2 text-center md:text-start md:gap-8`}
                >
                    {Links.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                unstable_viewTransition
                                className="font-bold text-lg pb-1"
                                style={({ isActive }) => {
                                    return {
                                        borderBottom: isActive
                                            ? "3px solid #73b0f6"
                                            : "none",
                                    };
                                }}
                                to={link.path + "/"}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
