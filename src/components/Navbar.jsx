import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 786px){
        width: 100%;
    }
`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    @media only screen and (max-width: 786px){
        width: 100%;
        padding: 10px;
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    height: 50px;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width: 786px){
        display: none;
    }
`;
const ListItem = styled.a`
    cursor: pointer;
`;
const Button = styled.button`
    cursor: pointer;
    width: 100px;
    padding: 10px;
    background: #7a2d41;
    border-style: none;
    color: white;
    border-radius: 5px;
    font-family: 'Gabarito';
    transition: background 0.3s;

    &:hover {
        background: #5e1c2a;
    }
`;

const Navbar = ({ handleAboutMeClick, handleMySkillsClick, handleContactClick, handleMyProjectsClick }) => {

    const handleAboutClick = () => {
        handleAboutMeClick();
    }
    const handleSkillClick = () => {
        handleMySkillsClick();
    }
    const handleProjectsClick = () => {
        handleMyProjectsClick();
    }
    const contactClick = () => {
        handleContactClick();
    }

    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./images/logo.png" />
                    <List>
                        <ListItem onClick={handleAboutClick}>About</ListItem>
                        <ListItem onClick={handleSkillClick}>Tech</ListItem>
                        <ListItem onClick={handleProjectsClick}>My Projects</ListItem>
                        {/* <ListItem>Contact</ListItem> */}
                    </List>
                </Links>
                <Icons>
                    <Button onClick={contactClick}>Contact Now</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar;