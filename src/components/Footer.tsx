import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #00000098;
    color: #fff;
    padding: 5px;
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; 2023 Apollo The Dev. No Rights Reserved.</p>
        </FooterContainer>
    );
};

export default Footer;
