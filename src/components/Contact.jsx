import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Section = styled.div`
    height: 100vh;
    /* scroll-snap-align: center; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
        height: auto;
    }
`;
const Container = styled.div`
    height: 100vh;  
    width: 1400px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
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

    @media only screen and (max-width: 768px) {
        flex: 1;
        align-items: center;
        text-align: center;
    }   
`

const Right = styled.div`
    flex: 3;
    position: relative;

    @media only screen and (max-width: 768px) {
        flex: 1;
        width: 100%;
        max-width: 500px;
    }
`
const Img = styled.img`
    height: 500px;
    width: 700px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 200px;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @keyframes animate {
        to{
            transform: translateY(20px);
        }
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const Title = styled.h1`
    font-size: 48px;
    color: #eba154;
    margin-bottom: 30px;
`;

const Form = styled.form`
    max-width: 600px;
    /* margin: 0 auto; */
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
    width: 500px;
`;

const Label = styled.label`
    font-size: 18px;
    display: block;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 150px;   
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
`;

const Button = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    font-size: 18px;
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



const Contact = React.forwardRef((props, refs) => {

    const ref = useRef();
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vxnhrqk', 'template_3ozba4m', ref.current, 'PocBBgNUDjiVTPT3y')
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
            }, (error) => {
                console.log(error.text);
                setSuccess(false);
            });
    }

    return (
        <Section ref={refs}>
            <Container>
                <Left>
                    <Title>Contact Me</Title>
                    <Form ref={ref} onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                required
                            />
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                        {success && <p>Message sent. I'll get back to you shortly.</p>}
                    </Form>
                </Left>
                <Right>
                    <Img src='./images/mail.svg'></Img>
                </Right>
            </Container>
        </Section>
    );
});

export default Contact;
