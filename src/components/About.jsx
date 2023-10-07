import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    padding: 50px;
    text-align: center;
    scroll-snap-align: center;
    height: 100vh;
`;

const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 30px;
`;

const TechStackContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const TechStackItem = styled.img`
    width: 150px;
    height: 150px;
    margin: 20px;
    padding: 20px;
    background-color: #ffffff42;
    border-radius: 20px;
    transition: transform 0.3s; /* Added transition for smooth hover effect */
    
    &:hover {
        transform: scale(1.1); /* Scale the image on hover */
    }
`;

const AboutMe = () => {
    const frontendStack = ['react', 'html', 'css', 'tailwind', 'mui', 'chakra'];
    const backendStack = ['nodejs', 'express', 'mongodb'];

    return (
        <Section>
            <Title>Tech Stacks I Know</Title>
            <div>
                <h2>Frontend</h2>
                <TechStackContainer>
                    {frontendStack.map((tech, index) => (
                        <TechStackItem key={index} src={`./images/${tech}.svg`} alt={tech} />
                    ))}
                </TechStackContainer>
            </div>
            <div>
                <h2>Backend</h2>
                <TechStackContainer>
                    {backendStack.map((tech, index) => (
                        <TechStackItem key={index} src={`./images/${tech}.svg`} alt={tech} />
                    ))}
                </TechStackContainer>
            </div>
        </Section>
    );
};

export default AboutMe;
