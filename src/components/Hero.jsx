import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';

const Section = styled.div`
    height: 100vh;
    /* scroll-snap-align: center; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 786px){
        height: 200vh;
        overflow-y: scroll;
    }
`;
const Container = styled.div`
    height: 100%;  
    width: 1400px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 786px){
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    flex: 2;

    @media only screen and (max-width: 786px){
        flex: 1;
        align-items: center;
    }
`

const Right = styled.div`
    flex: 3;
    position: relative;

    @media only screen and (max-width: 786px){
        flex: 1;
        width: 100%;
    }
`
const Title = styled.h1`
    font-size: 75px;
    padding: 0;
    margin: 0;

    @media only screen and (max-width: 786px){
        text-align: center;
    }
`
const WhatAmI = styled.div`
    
`
const Button = styled.button`
    cursor: pointer;
    width: 140px;
    padding: 10px;
    font-size: 18px;
    background: #7a2d41;
    border-style: none;
    color: white;
    border-radius: 5px;
    font-family: 'Gabarito';
    transition: background 0.3s;

    &:hover {
        background: #5e1c2a;
    }
`

const Desc = styled.p`
    font-size: 25px;

    @media only screen and (max-width: 786px){
        text-align: center;
        padding: 10px;
    }
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

    @media only screen and (max-width: 786px){
        width: 400px;
        height: 400px;
    }
`

const Hero = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Title>Hi, my name is Krish.</Title>
                    <WhatAmI>
                        <Desc>I'm a budding fullstack web developer.</Desc>
                    </WhatAmI>
                    {/* <Button>Learn More</Button> */}
                </Left>
                <Right>
                    {/* 3dmodel */}
                    <Img src="./images/dev.svg"></Img>

                </Right>
            </Container>
        </Section>
    )
}

export default Hero;