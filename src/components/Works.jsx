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

const WorkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`;

const WorkCard = styled.div`
    max-width: 400px;
    height: 400px;
    width: 300px;
    background: #f9f9f933;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const WorkTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
`;

const WorkDescription = styled.p`
    font-size: 16px;
`;

const Works = () => {
    const works = [
        {
            title: 'Website 1',
            description: 'Description of Website 1.',
        },
        {
            title: 'Website 2',
            description: 'Description of Website 2.',
        },
        {
            title: 'Website 3',
            description: 'Description of Website 3.',
        },
        {
            title: 'Website 3',
            description: 'Description of Website 3.',
        },
        // Add more works as needed
    ];

    return (
        <Section>
            <Title>My Works</Title>
            <WorkContainer>
                {works.map((work, index) => (
                    <WorkCard key={index}>
                        <WorkTitle>{work.title}</WorkTitle>
                        <WorkDescription>{work.description}</WorkDescription>
                    </WorkCard>
                ))}
            </WorkContainer>
        </Section>
    );
};

export default Works;