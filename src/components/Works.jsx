import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;
const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    flex: 2;
`

const Right = styled.div`
    flex: 3;
    position: relative;
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
    background: none;
    border-style: solid;
    border-color: white;
    color: white;
    border-radius: 30px;
`

const Desc = styled.p`
    font-size: 25px;
`
const Img = styled.img`
    height: 500px;
    width: 700px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate {
        to{
            transform: translateY(20px);
        }
    }
`

const Works = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Title>Hi, my name is Krish.</Title>
                    <WhatAmI>
                        <Desc>I'm a fullstack web developer.</Desc>
                    </WhatAmI>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    {/* 3dmodel */}
                    <Img src="./images/dev.svg"></Img>

                </Right>
            </Container>
        </Section>
    )
}

export default Works;