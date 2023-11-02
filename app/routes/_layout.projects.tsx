import type { MetaFunction } from "@remix-run/node";
import Project from "~/components/Project";

export const meta: MetaFunction = () => {
    return [
        {
            title: "Projects",
        },
        {
            description: "Projects",
        },
    ];
};

const Projects = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                <Project
                    title="Seçim 2023"
                    description="Turkey Elections Web App"
                    image="/projects/secim23.png"
                    url="https://github.com/enesyukselx/2023secim"
                />
                <Project
                    title="Modern Debis"
                    description="Dokuz Eylül University Student Information System"
                    image="/projects/modern-debis.png"
                    url="https://github.com/enesyukselx/modern-debis"
                />
                <Project
                    title="Test Case"
                    description="Next.js Test Case"
                    image="/projects/testcase.png"
                    url="https://github.com/enesyukselx/nextjs-testcase"
                />
                <Project
                    title="Wordle Clone"
                    description="Wordle Clone with React"
                    image="/projects/wordle.png"
                    url="https://github.com/enesyukselx/wordle"
                />
            </div>
        </div>
    );
};

export default Projects;
