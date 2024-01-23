import React, { useState } from 'react';
import { Button, Container, Form, Col, Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Book = ({ selectedShow, setBooking, booking }) => {
  let navigate = useNavigate();
  const [ticket, setTicket] = useState({
    no: '',
    date: '',
    showtime: '',
    showname: selectedShow.name,
    showimg: selectedShow.img,
  });

  const bookTicket = () => {
    if (booking === []) {
      setBooking([ticket]);
    } else {
      setBooking([...booking, ticket]);
    }
    localStorage.setItem('bookings', JSON.stringify([...booking, ticket]));
    navigate('/bookings');
  };

  const onChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      
      <Row className="mb-3">
        <Col>
          <h1 className="font-weight-bold">{selectedShow.name}</h1>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <p>{selectedShow.language}</p>
        </Col>
      </Row>
      <Row>
      <Form>
        <Form.Group className="mb-3" controlId="no">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control
            type="number"
            name="no"
            value={ticket.no}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Date of show</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={ticket.date}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="showtime">
          <Form.Label>Show Time</Form.Label>
          <Form.Control
            as="select"
            name="showtime"
            value={ticket.showtime}
            onChange={(e) => onChange(e)}
          >
            <option>12 pm</option>
            <option>2:15 pm</option>
            <option>4:50 pm</option>
            <option>6:45 pm</option>
          </Form.Control>
        </Form.Group>
        <Button variant="outline-dark" onClick={bookTicket}>
          Book
        </Button>
      </Form>
      </Row>
    </Container>
  );
};

export default Book;
