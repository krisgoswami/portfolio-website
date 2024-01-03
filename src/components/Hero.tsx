import React from "react";
import { socials } from "../data/data";

const Hero = () => {
    return (
        <div className="h-screen flex justify-around items-center flex-col md:flex-row">
            <div className="h-full w-full flex-1 md:w-3/5 flex flex-col justify-center gap-10 md:gap-10 text-center md:text-left">
                {" "}
                {/* Added text-center class for centering */}
                <h1 className="text-4xl md:text-6xl font-bold leading-none md:ml-36">
                    Hi, my name is{" "}
                    <span className="text-orange-400">Krish</span>.
                </h1>
                <p className="text-xl sm:text-xl md:text-2xl mb-6 md:ml-36">
                    I'm a budding fullstack web developer.
                </p>
                <div className="flex gap-4 mx-auto md:ml-36">
                    {socials.map((site, index) => (
                        <a
                            href={site.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                        >
                            <img
                                src={`./images/${site.name}.svg`}
                                alt={site.name}
                                className="h-8"
                            />
                        </a>
                    ))}
                </div>
                {/* <button className="cursor-pointer w-32 py-2 text-xl bg-red-600 rounded-lg text-white transition duration-300 hover:bg-red-800">Learn More</button> */}
            </div>
            <div className="relative flex-1">
                <img
                    src="./images/dev.svg"
                    alt="Developer"
                    className="w-3/4 m-auto md:m-auto h-full align-middle"
                />
            </div>
        </div>
    );
};

export default Hero;
