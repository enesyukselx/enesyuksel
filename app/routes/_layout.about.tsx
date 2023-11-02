import type { MetaFunction } from "@remix-run/node";
import HomeLayout from "~/components/Layout/HomeLayout";

export const meta: MetaFunction = () => {
    return [
        {
            title: "About",
        },
        {
            description: "About Me",
        },
    ];
};

const About = () => {
    return (
        <HomeLayout>
            <div className="leading-snug">
                <h1 className="text-3xl font-bold mb-6">About</h1>
                <p className="text-lg font-bold">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vero voluptatem qui accusamus laboriosam possimus, placeat
                    eaque aperiam molestiae maxime? Alias possimus eum, eveniet
                    dolore laboriosam necessitatibus quos mollitia aliquid ex.
                </p>
            </div>
        </HomeLayout>
    );
};

export default About;
