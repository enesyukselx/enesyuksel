import { Link } from "@remix-run/react";

interface IProjectProps {
    title: string;
    description: string;
    image: string;
    url: string;
}

const Project = ({ title, description, image, url }: IProjectProps) => {
    return (
        <div className="bg-gray-200 hover:bg-slate-300 p-4 rounded-md transition-colors">
            <Link to={url} target="_blank">
                <div className="rounded-md overflow-hidden h-[250px]">
                    <img src={image} alt={title} className="h-full w-full" />
                </div>
                <h2 className="text-2xl font-bold mt-2 mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </Link>
        </div>
    );
};

export default Project;
