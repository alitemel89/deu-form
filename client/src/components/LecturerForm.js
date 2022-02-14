import React, { useState, useContext } from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import tr from 'date-fns/locale/tr';
import LecturerContext from '../context/lecturer/lecturerContext';
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

  const [color, setColor] = useState("primary");
  const [showSuccess, setShowSuccess] = useState(false);


  const { name, surname, email, gender, birthDate } = info;

  const lecturerContext = useContext(LecturerContext);
  const { addLecturerInfo } = lecturerContext;


  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || surname === "" || email === "" || gender === "" || birthDate === new Date()) {
      setColor("primary")
    } else {
      setShowSuccess(true)
    }
    addLecturerInfo({
      name,
      surname,
      email,
      gender,
      birthDate: startDate
    });

    setInfo({
      name: "",
      surname: "",
      email: "",
      gender: "",
      birthDate: new Date()
    })

    setColor("secondary")
  }


  return (
    <>
      <Container>
        <Row className="justify-content-md-center my-4">
          <Col xs="12" md="10">
            <h2>Akademisyen Bilgileri</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="my-3">
                <Form.Label>Adınız</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Adınız"
                  required
                  name="name"
                  value={name}
                  onChange={handleChange}
                  disabled={showSuccess}
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
                  disabled={showSuccess}
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
                  disabled={showSuccess}
                />
              </Form.Group>

              <Form.Group className="my-3" onChange={handleChange}>
                <Form.Label>Cinsiyetiniz</Form.Label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={handleChange}
                    disabled={showSuccess}
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Erkek
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={handleChange}
                    disabled={showSuccess}
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
                  name="birthDate"
                  value={birthDate}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  disabled={showSuccess}
                />
              </Form.Group>

              <Button type="submit" variant={color} className="mt-1">
                Gönder
              </Button>
              {showSuccess && <h3 className='text-success mt-4'>Form verisi başarıyla gönderildi.</h3>}
            </Form>
          </Col>
        </Row>
        
      </Container>
    </>
  )
}

export default LecturerForm;
