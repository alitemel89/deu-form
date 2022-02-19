import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import AuthContext from '../context/auth/authContext';


const Header = () => {

    const authContext = useContext(AuthContext);
    const { isAuthenticated, user, loadUser, logout } = authContext;


    useEffect(() => {
        loadUser();

        // eslint-disable-next-line
    }, []);

    const handleLogout = () => {
        logout();
    };


    console.log(user);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>DEU Akademisyen Bilgi Platformu</Navbar.Brand>
                    {
                        isAuthenticated ? (
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/lecturerinfo">
                                    <Button variant="success">Bilgileriniz</Button>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register">
                                    <Button variant="primary" className="ms-2" onClick={handleLogout}>Çıkış Yap</Button>
                                </Nav.Link>
                            </Nav>
                        ) : (
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} to="/login">
                                    <Button variant="success">Giriş Yap</Button>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register">
                                    <Button variant="primary" className="ms-2">Kayıt Ol</Button>
                                </Nav.Link>
                            </Nav>
                        )}
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
