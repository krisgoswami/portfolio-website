import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`;
const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    flex: 1;
`
const Title = styled.h1`
    font-size: 75px;
    padding: 0;
    margin: 0;
`
const WhatAmI = styled.div`
    
`
const Button = styled.button`
    cursor: pointer;
    width: 100px;
    padding: 10px;
    background: #7a2d41;
    border-style: none;
    color: white;
    border-radius: 30px;
`

const Desc = styled.p`
    font-size: 25px;
`

const Works = () => {
    return (
        <Section>
            <Container>
                <Left>
                </Left>
                <Right>
                    <Title>Hi, my name is Krish.</Title>
                    <WhatAmI>
                        <Desc>I'm a fullstack web developer.</Desc>
                    </WhatAmI>
                    <Button>Learn More</Button>
                </Right>
            </Container>
        </Section>
    )
}

export default Works;