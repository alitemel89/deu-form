import React, { useState } from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import tr from 'date-fns/locale/tr';
registerLocale('tr', tr);


const LecturerForm = () => {

  const [checked, setChecked] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
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
                  name="name"
                />
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label>Soyadınız</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Soyadınız"
                  required
                  name="surname"
                />
              </Form.Group>


              <Form.Group className="my-3">
                <Form.Label>Kurumsal E-posta Adresiniz</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  required
                  name="email"
                />
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label>Cinsiyetiniz</Form.Label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => setChecked(true)} />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Erkek
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => setChecked(true)} />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Kadın
                  </label>
                </div>
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label>Doğum Tarihiniz</Form.Label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} locale="tr" />
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
