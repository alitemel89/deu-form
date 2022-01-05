import React from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap';


const Login = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center my-4">
                    <Col xs="12" md="10">
                        <h2>Akademisyen Girişi</h2>
                        <Form>
                            <Form.Group className="my-3">
                                <Form.Label>Kurumsal E-posta Adresiniz</Form.Label>
                                <Form.Control
                                    type="email"
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
