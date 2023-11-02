import type { ISkill } from "./skills-data";
import { frontendSkills, backendSkills } from "./skills-data";

const Skills = ({ type }: { type: string }) => {
    let skills: ISkill[] = [];

    if (type == "all") skills = frontendSkills.concat(backendSkills);

    if (type == "frontend") skills = frontendSkills;
    if (type == "backend") skills = backendSkills;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-8">
            {skills.map((skill) => (
                <div
                    key={Math.random()}
                    className="flex flex-col items-center bg-gray-200 p-3 rounded-md"
                >
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 md:w-20 md:h-20"
                    />
                    <p className="md:text-lg font-bold mt-2">{skill.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Skills;
