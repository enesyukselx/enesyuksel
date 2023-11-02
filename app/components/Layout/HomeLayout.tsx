import type { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="font-bold grid grid-cols-1 md:grid-cols-5 items-center md:gap-10">
            <div className="col-span-1 md:col-span-3">{children}</div>
            <div className="col-span-1 md:col-span-2 pt-10 md:flex justify-center">
                <div className="relative">
                    <img
                        src="/photo.jpeg"
                        alt="Enes Yüksel"
                        className="rounded-lg md:rounded-full shadow-2xl w-[300px] md:w-[400px]"
                    />
                    <div className="absolute bg-sky-600 xl:w-[400px] xl:h-[400px] rounded-full top-3 left-3 -z-50"></div>
                    <div className="absolute bg-sky-200 xl:w-[400px] xl:h-[400px] rounded-full -top-3 -left-3 -z-50"></div>
                </div>
            </div>
        </div>
    );
};

export default HomeLayout;
