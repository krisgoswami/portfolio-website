import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
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
`;
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;
const ListItem = styled.li`
    cursor: pointer;
`;
const Button = styled.button`
    cursor: pointer;
    width: 100px;
    padding: 10px;
    background: none;
    border-style: solid;
    border-color: white;
    color: white;
    border-radius: 30px;
`;

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./images/logo.png" />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar;