import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';


const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>DEU Akademisyen Bilgi Platformu</Navbar.Brand>

                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/login">
                            <Button variant="success">Giriş Yap</Button>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/register">
                            <Button variant="primary" className="ms-2">Kayıt Ol</Button>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
