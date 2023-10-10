import React from 'react';
import styled from 'styled-components';
import { basic, design, frameworks, backend, libraries, database, extra } from '../data/data';

const Section = styled.div`
    padding: 50px;
    text-align: center;
    /* scroll-snap-align: center; */
    align-items: center;
    height: 100vh;

    @media only screen and (max-width: 768px) {
        padding: 50px;
        overflow-y: scroll;
    }
`;

const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 30px;
    color: #eba154;

    @media only screen and (max-width: 768px) {
        font-size: 30px;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;

    @media only screen and (max-width: 786px){
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const TechStackContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #00000058;
    padding: 20px;
    border-radius: 10px;
`;

const TechItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: #ffffff4f;
    margin: 10px;
    padding: 10px;
    height: 25px;
    width: 300px;
    border-radius: 10px;
    transition: transform 0.3s; /* Added transition for smooth hover effect */
    
    &:hover {
        transform: scale(1.05); /* Scale the image on hover */
    }
`;

const TechStackName = styled.p`
    color: white;
    font-size: 20px;
    margin: 10px;
`

const TechStackIcon = styled.img`
    width: 30px;
    height: 30px;
    margin: 10px;
    /* padding: 20px; */
    /* background-color: #ffffff42; */
    /* border-radius: 20px; */
`;

const Skills = React.forwardRef((props, ref) => {

    return (
        <Section ref={ref}>
            <Title>Technologies I Know</Title>
            <Container>
                <div>
                    <h2>Basic</h2>
                    <TechStackContainer>
                        {basic.map((tech, index) => (
                            <TechItem key={index}>
                                <TechStackName >{tech.name}</TechStackName>
                                <TechStackIcon src={`./images/${tech.img}.svg`} alt={tech} />
                            </TechItem>
                        ))}
                    </TechStackContainer>
                </div>
                <div>
                    <h2>Frameworks</h2>
                    <TechStackContainer>
                        {frameworks.map((tech, index) => (
                            <TechItem key={index}>
                                <TechStackName>{tech.name}</TechStackName>
                                <TechStackIcon src={`./images/${tech.img}.svg`} alt={tech} />
                            </TechItem>
                        ))}
                    </TechStackContainer>
                </div>
                <div>
                    <h2>Backend</h2>
                    <TechStackContainer>
                        {backend.map((tech, index) => (
                            <TechItem key={index}>
                                <TechStackName >{tech.name}</TechStackName>
                                <TechStackIcon src={`./images/${tech.img}.svg`} alt={tech} />
                            </TechItem>
                        ))}
                    </TechStackContainer>
                </div>
                <div>
                    <h2>Styling</h2>
                    <TechStackContainer>
                        {libraries.map((tech, index) => (
                            <TechItem key={index}>
                                <TechStackName >{tech.name}</TechStackName>
                                <TechStackIcon src={`./images/${tech.img}.svg`} alt={tech} />
                            </TechItem>
                        ))}
                    </TechStackContainer>
                </div>
                <div>
                    <h2>Design</h2>
                    <TechStackContainer>
                        {design.map((tech, index) => (
                            <TechItem key={index}>
                                <TechStackName >{tech.name}</TechStackName>
                                <TechStackIcon src={`./images/${tech.img}.svg`} alt={tech} />
                            </TechItem>
                        ))}
                    </TechStackContainer>
                </div>
                <div>
                    <h2>Database</h2>
                    <TechStackContainer>
                        {database.map((tech, index) => (
                            <TechItem key={index}>
                                <TechStackName >{tech.name}</TechStackName>
                                <TechStackIcon src={`./images/${tech.img}.svg`} alt={tech} />
                            </TechItem>
                        ))}
                    </TechStackContainer>
                </div>
                <div>
                    <h2>Extra</h2>
                    <TechStackContainer>
                        {extra.map((tech, index) => (
                            <TechItem key={index}>
                                <TechStackName >{tech.name}</TechStackName>
                                <TechStackIcon src={`./images/${tech.img}.svg`} alt={tech} />
                            </TechItem>
                        ))}
                    </TechStackContainer>
                </div>
            </Container>
        </Section>
    );
});

export default Skills;
