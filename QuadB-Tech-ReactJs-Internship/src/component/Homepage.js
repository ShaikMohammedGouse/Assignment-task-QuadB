import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Main = ({ selectedShow, setSelectedShow }) => {
    const navigate = useNavigate();
    const [shows, setShows] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API).then(({ data }) => {
            setShows(data);
        });
    }, []);

    const openSummary = (img, name, language, summary, runtime, rating) => {
        setSelectedShow({ img, name, language, summary, runtime, rating});
        navigate('/summary');
    };

    return (
        <>
        <Container>
      <Row>
      <h3 >Discover Exciting Shows at Showtime Hub</h3>
                <p>Explore and Book the Latest Entertainment with comedy, romantic, mass and action. </p>
      </Row>
                
           
        </Container>
            <Container >
                <Row className="justify-content-center">
                    {shows.map((item, index) => {
                        const imageUrl = item.show.image && item.show.image.medium;

                        return (
                            <Col key={index} lg={2} md={4} sm={6} xs={9} className="mb-4">
                                <Card  className="cursor-pointer">
                                    <Card.Img variant="top" src={imageUrl} alt="Show" className="img-fluid" />
                                    <Card.Body>
                                    <p className="text-gray-500">{item.show.language}</p>
                                        <Card.Title>{item.show.name}</Card.Title>
                                        <Card.Text>{/* Additional details go here */}</Card.Text>
                                        <Button variant="outline-dark" onClick={() => openSummary(imageUrl, item.show.name, item.show.language, item.show.summary, item.show.runtime, item.show.rating)}>
                                            View
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
};

export default Main;
