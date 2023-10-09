import React from 'react';
import styled from 'styled-components';
import { workex, education } from '../data/data';

const Section = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 50px;
    align-items: center;
    text-align: left;
    scroll-snap-align: center;
    height: 100vh;

    @media (max-width: 768px) {
        padding: 30px;
        overflow-y: scroll;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1400px;
    }
`;

const LeftContainer = styled.div`
    max-width: 600px;
    margin-bottom: 30px;

    @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 300px;
    }
`;

const Title = styled.h1`
    font-size: 48px;
    color: white;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const Subtitle = styled.h2`
    font-size: 24px;
    color: #eba154;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const Description = styled.p`
    font-size: 18px;
    color: white;
    margin-bottom: 30px;
`;

const Button = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    background: #7a2d41;
    border: none;
    color: white;
    border-radius: 5px;
    font-family: 'Gabarito';
    transition: background 0.3s;

    &:hover {
        background: #5e1c2a;
    }
`;

const RightContainer = styled.div`
    max-width: 600px;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
    }
`;

const IconContainer = styled.div`
    font-size: 48px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const ExperienceItem = styled.div`
    margin-bottom: 30px;
`;

const TitleHeader = styled.h2`
    margin-top: 50px;
    font-size: 30px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`

const ExperienceTitle = styled.h3`
    font-size: 22px;
    color: #eba154;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const ExperienceSubtitle = styled.h4`
    font-size: 18px;
    color: white;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
`;
const ExperienceDuration = styled.p`
    font-size: 15px;
    color: #b8b8b8;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
`;

const EducationItem = styled.div`
    margin-bottom: 30px;
`;

const EducationTitle = styled.h3`
    font-size: 22px;
    color: #eba154;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const EducationSubtitle = styled.h4`
    font-size: 18px;
    color: white;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
`;
const EducationCompletion = styled.p`
    font-size: 15px;
    color: #b8b8b8;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
`;

const AboutMe = () => {

    return (
        <Section>
            <Container>
                <LeftContainer>
                    <Title>Hello there, I'm Krishanu</Title>
                    <Subtitle>Full Stack Web Developer</Subtitle>
                    <Description>
                        Hi! My name is Krishanu, a tech enthusiast based in Ahmedabad. With a solid foundation in programming, I'm passionate about web development. I had recently finished my Postgrad degree and Masters degree and I'm currently looking for a job. So far, my journey is marked by hard work and I'm exploring new opportunities in the field of web development. I'm a complete rookie at the moment, but looking ahead, I'm excited about learning new things and aiming to make contributions to a larger cause in the field of technology. Let's connect!
                    </Description>
                    {/* <Button>Get in Touch</Button> */}
                </LeftContainer>
                <RightContainer>
                    <IconContainer>
                        <i className="fas fa-briefcase"></i>
                    </IconContainer>
                    <TitleHeader>Work Experience</TitleHeader>
                    {workex.map((work, index) => (
                        <ExperienceItem key={index}>
                            <ExperienceTitle>{work.company}</ExperienceTitle>
                            <ExperienceSubtitle>{work.position}</ExperienceSubtitle>
                            <ExperienceDuration>{work.duration}</ExperienceDuration>
                        </ExperienceItem>
                    ))}
                    <IconContainer>
                        <i className="fas fa-graduation-cap"></i>
                    </IconContainer>
                    <TitleHeader>Education</TitleHeader>
                    {education.map((edu, index) => (
                        <EducationItem key={index}>
                            <EducationTitle>{edu.degree}</EducationTitle>
                            <EducationSubtitle>{edu.university}</EducationSubtitle>
                            <EducationCompletion>{edu.completion}</EducationCompletion>
                        </EducationItem>
                    ))}
                </RightContainer>
            </Container>
        </Section>
    );
};

export default AboutMe;