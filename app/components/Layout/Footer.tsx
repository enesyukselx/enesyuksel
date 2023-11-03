import { Link } from "@remix-run/react";
import { FaGithub, FaLinkedin } from "react-icons/fa6/index.js";

const Footer = () => {
    return (
        <div className="flex gap-4 pb-4">
            <Link
                to="https://github.com/enesyukselx"
                className="text-3xl transition-colors hover:text-sky-700"
            >
                <FaGithub />
            </Link>
            <Link
                to="https://www.linkedin.com/in/enesyukselx/"
                className="text-3xl transition-colors hover:text-sky-700"
            >
                <FaLinkedin />
            </Link>
        </div>
    );
};

export default Footer;
