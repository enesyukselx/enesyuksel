import type { MetaFunction } from "@remix-run/node";
import { NavLink, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        {
            title: "Skills",
        },
        {
            description: "Skills",
        },
    ];
};

const Links = [
    {
        name: "All",
        path: "",
    },
    {
        name: "Front-End",
        path: "frontend",
    },
    {
        name: "Back-end",
        path: "backend",
    },
];

const Skills = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Skills</h1>
            <div className="flex gap-4 mb-6">
                {Links.map((link) => (
                    <NavLink
                        unstable_viewTransition
                        key={link.name}
                        className={`bg-gray-200 p-2 px-5 rounded-md font-bold hover:bg-gray-300 transition-colors`}
                        style={({ isActive, isPending }) => {
                            return {
                                backgroundColor: isActive
                                    ? "rgba(98, 171, 255, 1)"
                                    : "rgb(229,231,235)",
                            };
                        }}
                        to={`/skills/${link.path}`}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Skills;
