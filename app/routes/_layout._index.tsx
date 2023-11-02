import type { MetaFunction } from "@remix-run/node";
import HomeLayout from "~/components/Layout/HomeLayout";

export const meta: MetaFunction = () => {
    return [
        {
            title: "Enes Yüksel",
        },
        {
            description: "Software Developer",
        },
    ];
};

export default function Index() {
    return (
        <HomeLayout>
            <div className="text-6xl md:text-7xl leading-snug">
                Hi, <br /> I'am <span className="text-sky-600">Enes</span>
                <br />
                Software Developer
            </div>
        </HomeLayout>
    );
}
