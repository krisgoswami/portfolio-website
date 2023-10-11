import React from 'react';
import styled from 'styled-components';
import { works } from '../data/data';


const Section = styled.div`
    padding: 50px;
    text-align: center;
    background-color: #00000098;
    /* scroll-snap-align: center; */
    height: 100vh;

    @media (max-width: 768px) {
        padding: 20px;
        overflow-y: scroll;
    }
`;

const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 30px;
    color: #eba154;

    @media (max-width: 768px) {
        font-size: 36px;
    }
`;

const WorkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

const WorkCard = styled.div`
    max-width: 400px;
    height: 300px;
    width: 300px;
    background: #f9f9f933;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s; /* Added transition for smooth hover effect */
    
    &:hover {
        transform: scale(1.1); /* Scale the image on hover */
    }

    @media (max-width: 768px) {
        max-width: none;
    }
`;

const WorkTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const WorkDescription = styled.p`
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const WorkImage = styled.img`
    max-width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const Works = React.forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="h-max py-12 text-center bg-opacity-70 bg-black md:h-screen"
        >
            <h1 className="text-4xl mb-8 text-yellow-400">My Projects</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {works.map((work, index) => (
                    <a
                        style={{ textDecoration: 'none', color: 'white' }}
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