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
    height: 6vh;
`;

const Icons = styled.div`

`;
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;
const ListItem = styled.li`
    
`;
const Button = styled.button`

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