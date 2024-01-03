import React from "react";
import { works } from "../data/data";

const Works = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div
            ref={ref}
            className="h-max py-12 text-center bg-opacity-70 bg-black md:h-screen"
        >
            <h1 className="text-4xl mb-8 text-orange-400">My Projects</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {works.map((work, index) => (
                    <a
                        style={{ textDecoration: "none", color: "white" }}
                        href={work.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                    >
                        <div className="max-w-xs p-8 rounded-lg transform transition-transform duration-300 hover:scale-105">
                            <img
                                src={work.img}
                                alt={`Screenshot of ${work.title}`}
                                className="max-w-full mb-4 rounded"
                            />
                            <h2 className="text-2xl mb-2">{work.title}</h2>
                            <p className="text-sm">{work.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
});

export default Works;
