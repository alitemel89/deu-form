import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';


const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">DEU Akademisyen Bilgi Platformu</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Button variant="info">Log in</Button>
                        <Button variant="primary" className="ms-2">Sign up</Button>
                    </Nav>
                </Container>

            </Navbar>
        </>
    )
}

export default Header;
