import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import AuthContext from "../context/auth/authContext";

const Register = (props) => {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
    });

    const [color, setColor] = useState("primary")

    const { name, surname, email, password } = user;

    const authContext = useContext(AuthContext);

    const { register, isAuthenticated, loadUser } = authContext;

    console.log(isAuthenticated)

    useEffect(() => {

        if (isAuthenticated) {
            navigate('/lecturerinfo')
        }

    }, [isAuthenticated, navigate])

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || surname === "" || email === "" || password === "") {
            setColor("primary")
        }
        else {
            register({
                name,
                surname,
                email,
                password
            })

            setColor("secondary");

            loadUser();
        }
    };

    return (
        <>
            <Container>
                <Row className="justify-content-md-center my-4">
                    <Col xs="12" md="10">
                        <h2>Kayıt Olun</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="my-3">
                                <Form.Label>Adınız</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Adınız"
                                    required
                                    onChange={handleChange}
                                    name="name"
                                    value={name}
                                />
                            </Form.Group>

                            <Form.Group className="my-3">
                                <Form.Label>Soyadınız</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Soyadınız"
                                    required
                                    onChange={handleChange}
                                    value={surname}
                                    name="surname"
                                />
                            </Form.Group>

                            <Form.Group className="my-3">
                                <Form.Label>Kurumsal E-posta Adresiniz</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    required
                                    onChange={handleChange}
                                    value={email}
                                    name="email"
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="my-3">
                                <Form.Label>Şifreniz</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Şifreniz"
                                    required
                                    onChange={handleChange}
                                    value={password}
                                    name="password"
                                />
                            </Form.Group>

                            <Button variant={color} type="submit" className="mt-1">
                                Kaydı Tamamla
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register;
