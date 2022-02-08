import React, { useState } from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import tr from 'date-fns/locale/tr';
registerLocale('tr', tr);


const LecturerForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [info, setInfo] = useState({
    name: "",
    surname: "",
    email: "",
    gender: "",
    birthDate: startDate
  });

  const { name, surname, email, gender, birthDate } = info;

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <>
      <Container>
        <Row className="justify-content-md-center my-4">
          <Col xs="12" md="10">
            <h2>Akademisyen Bilgileri</h2>
            <Form>
              <Form.Group className="my-3">
                <Form.Label>Adınız</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Adınız"
                  required
                  name={name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label>Soyadınız</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Soyadınız"
                  required
                  name="surname"
                  value={surname}
                  onChange={handleChange}
                />
              </Form.Group>


              <Form.Group className="my-3">
                <Form.Label>Kurumsal E-posta Adresiniz</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label>Cinsiyetiniz</Form.Label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexRadioDefault1"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Erkek
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="flexRadioDefault2"
                    onChange={handleChange}
                    name="gender"
                    value="Female"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Kadın
                  </label>
                </div>
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label>Doğum Tarihiniz</Form.Label>
                <DatePicker
                  locale="tr"
                  selected={startDate} onChange={(date) => setStartDate(date)}
                />
              </Form.Group>

              <Button type="submit" className="mt-1">
                Gönder
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LecturerForm;
