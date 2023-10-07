import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 30px;
`;

const TechStackList = styled.ul`
    list-style: none;
    padding: 0;
`;

const TechStackItem = styled.li`
    font-size: 20px;
    margin-bottom: 10px;
`;

const AboutMe = () => {
    const frontendStack = ['React', 'HTML', 'CSS', 'Tailwind', 'Material-UI', 'Chakra UI'];
    const backendStack = ['Node.js', 'Express', 'MongoDB'];

    return (
        <Section>
            <Title>Tech Stacks I Know</Title>
            <div>
                <h2>Frontend:</h2>
                <TechStackList>
                    {frontendStack.map((tech, index) => (
                        <TechStackItem key={index}>{tech}</TechStackItem>
                    ))}
                </TechStackList>
            </div>
            <div>
                <h2>Backend:</h2>
                <TechStackList>
                    {backendStack.map((tech, index) => (
                        <TechStackItem key={index}>{tech}</TechStackItem>
                    ))}
                </TechStackList>
            </div>
        </Section>
    );
};

export default AboutMe;
