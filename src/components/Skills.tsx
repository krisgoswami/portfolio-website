import React from "react";
import {
    basic,
    design,
    frameworks,
    backend,
    libraries,
    database,
    extra,
} from "../data/data";

const Skills = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className="h-max py-12 text-center md:text-left">
            <h1 className="text-4xl text-center mb-8 text-orange-400">
                Technologies I Know
            </h1>
            <div className="flex flex-wrap justify-center gap-8 md:justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <h2 className="text-2xl text-center mb-4">Basic</h2>
                    <div className="bg-opacity-70 mx-10 bg-black p-4 rounded-lg md:mx-10">
                        {basic.map((tech, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center m-4 transform transition-transform duration-300 hover:scale-105"
                            >
                                <p className="text-white">{tech.name}</p>
                                <img
                                    src={`./images/${tech.img}.svg`}
                                    alt={tech.name}
                                    className="bg-white rounded p-0.5 w-7 h-7"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <h2 className="text-2xl text-center mb-4">Frameworks</h2>
                    <div className="bg-opacity-70 mx-10 bg-black p-4 rounded-lg md:mx-10">
                        {frameworks.map((tech, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center m-4 transform transition-transform duration-300 hover:scale-105"
                            >
                                <p className="text-white">{tech.name}</p>
                                <img
                                    src={`./images/${tech.img}.svg`}
                                    alt={tech.name}
                                    className="bg-white rounded p-0.5 w-7 h-7"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <h2 className="text-2xl text-center mb-4">Backend</h2>
                    <div className="bg-opacity-70 mx-10 bg-black p-4 rounded-lg md:mx-10">
                        {backend.map((tech, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center m-4 transform transition-transform duration-300 hover:scale-105"
                            >
                                <p className="text-white">{tech.name}</p>
                                <img
                                    src={`./images/${tech.img}.svg`}
                                    alt={tech.name}
                                    className="bg-white rounded p-0.5 w-7 h-7"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <h2 className="text-2xl text-center mb-4">Styling</h2>
                    <div className="bg-opacity-70 mx-10 bg-black p-4 rounded-lg md:mx-10">
                        {libraries.map((tech, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center m-4 transform transition-transform duration-300 hover:scale-105"
                            >
                                <p className="text-white">{tech.name}</p>
                                <img
                                    src={`./images/${tech.img}.svg`}
                                    alt={tech.name}
                                    className="bg-white rounded p-0.5 w-7 h-7"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <h2 className="text-2xl text-center mb-4">Design</h2>
                    <div className="bg-opacity-70 mx-10 bg-black p-4 rounded-lg md:mx-10">
                        {design.map((tech, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center m-4 transform transition-transform duration-300 hover:scale-105"
                            >
                                <p className="text-white">{tech.name}</p>
                                <img
                                    src={`./images/${tech.img}.svg`}
                                    alt={tech.name}
                                    className="bg-white rounded p-0.5 w-7 h-7"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <h2 className="text-2xl text-center mb-4">Extra</h2>
                    <div className="bg-opacity-70 mx-10 bg-black p-4 rounded-lg md:mx-10">
                        {extra.map((tech, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center m-4 transform transition-transform duration-300 hover:scale-105"
                            >
                                <p className="text-white">{tech.name}</p>
                                <img
                                    src={`./images/${tech.img}.svg`}
                                    alt={tech.name}
                                    className="bg-white rounded p-0.5 w-7 h-7"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <h2 className="text-2xl text-center mb-4">Database</h2>
                    <div className="bg-opacity-70 mx-10 bg-black p-4 rounded-lg md:mx-10">
                        {database.map((tech, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center m-4 transform transition-transform duration-300 hover:scale-105"
                            >
                                <p className="text-white">{tech.name}</p>
                                <img
                                    src={`./images/${tech.img}.svg`}
                                    alt={tech.name}
                                    className="bg-white rounded p-0.5 w-7 h-7"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Skills;
