import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";



const Login = () => {
    const alertContext = useContext(AlertContext)
    const authContext = useContext(AuthContext);
    let navigate = useNavigate();

    const { login, error, clearErrors, isAuthenticated } = authContext;
    const { setAlert } = alertContext;

    useEffect(() => {

        if (isAuthenticated) {
            navigate('/lecturerinfo')
        }

        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors()
        }

    }, [error, isAuthenticated, navigate, setAlert, clearErrors])

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { email, password } = user;

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setAlert("Please fill in all fields", "danger");
        } else {
            login({
                email,
                password
            })
        }
    };

    return (
        <>
            <Container>
                <Row className="justify-content-md-center my-4">
                    <Col xs="12" md="10">
                        <h2>Akademisyen Girişi</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="my-3">
                                <Form.Label>Kurumsal E-posta Adresiniz</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    value={email}
                                    placeholder="Email"
                                    required
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="my-3">
                                <Form.Label>Şifreniz</Form.Label>
                                <Form.Control
                                    name="password"
                                    type="password"
                                    value={password}
                                    placeholder="Şifreniz"
                                    required
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mt-1">
                                Giriş Yap
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;
