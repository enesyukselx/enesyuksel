import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Skills from "~/components/Skills/Skills";

export const loader = ({ params }: LoaderFunctionArgs) => {
    return {
        page: params.skill,
    };
};

const Skill = () => {
    const param = useLoaderData<typeof loader>();

    if (param.page) {
        if (param.page === "frontend") {
            return <Skills type="frontend" />;
        }
        if (param.page === "backend") {
            return <Skills type="backend" />;
        }
    }

    return <Skills type="all" />;
};

export default Skill;
