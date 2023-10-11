import React from 'react';
import { workex, education } from '../data/data';

const AboutMe = React.forwardRef((props, ref) => {

    return (
        <div ref={ref} className="h-max flex justify-around items-center flex-col md:flex-row bg-opacity-70 bg-black md:h-screen">
            <div className="max-w-screen-md mx-auto text-center md:text-left mb-10 md:mb-0 px-6 md:pl-12">
                <h1 className="text-2xl mt-10 md:text-5xl font-bold leading-none mb-4 text-white">
                    Hello there, I'm Krishanu
                </h1>
                <h2 className="text-lg md:text-2xl text-orange-400 mb-5">
                    Full Stack Web Developer
                </h2>
                <p className="text-md text-justify md:text-xl text-white mb-8">
                    Greetings! I'm Krishanu, a tech enthusiast based in Ahmedabad. With a solid foundation in programming, I'm passionate about web development. I have recently finished my Postgrad degree and Masters degree and I'm currently looking for a job. Embracing my rookie status in this domain, I'm eagerly anticipating the learning journey ahead. I thrive on challenges and am poised to dive headfirst into the world of web development. Let's connect and embark on this journey together!
                </p>
                {/* <button className="cursor-pointer py-2 px-4 bg-red-600 rounded-lg text-white transition duration-300 hover:bg-red-800">Get in Touch</button> */}
            </div>
            <div className="text-center md:text-left mx-auto max-w-screen-md">
                <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl text-white mb-2">Work Experience</h2>
                    {workex.map((work, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-lg md:text-xl text-orange-400 mb-1">{work.company}</h3>
                            <h4 className="text-base md:text-lg text-white mb-1">{work.position}</h4>
                            <p className="text-sm md:text-base text-gray-400 mb-2">{work.duration}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl text-white mb-2">Education</h2>
                    {education.map((edu, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-lg md:text-xl text-orange-400 mb-1">{edu.degree}</h3>
                            <h4 className="text-base md:text-lg text-white mb-1">{edu.university}</h4>
                            <p className="text-sm md:text-base text-gray-400 mb-2">{edu.completion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default AboutMe;
