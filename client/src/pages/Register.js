import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";

const Register = (props) => {

    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
    });

    const { name, surname, email, password } = user;

    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }
        if (error === 'User already exists') {
            clearErrors()
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || password === "") {
            setAlert(" Please enter all fields", "danger");
        }
        else {
            register({
                name,
                surname,
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
                        <h2>Kayıt Olun</h2>
                        <Form>
                            <Form.Group className="my-3">
                                <Form.Label>Adınız</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Adınız"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="my-3">
                                <Form.Label>Soyadınız</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Soyadınız"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="my-3">
                                <Form.Label>Kurumsal E-posta Adresiniz</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="my-3">
                                <Form.Label>Şifreniz</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Şifreniz"
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mt-1">
                                Kaydı Tamamla
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register
