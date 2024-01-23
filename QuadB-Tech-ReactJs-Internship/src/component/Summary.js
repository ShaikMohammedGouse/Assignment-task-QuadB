
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const Summary = ({ selectedShow }) => {
    const navigate = useNavigate();

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <Container className="px-5 py-24 mx-auto">
                <Row className="lg:w-4/5 mx-auto flex flex-wrap">
                    <Col lg={4} sm={12} className="mb-6">
                        <Image
                            alt="img"
                            className="lg:w-full sm:h-[60vh] w-full lg:h-auto h-64 object-cover object-center rounded"
                            src={selectedShow.img}
                        />
                    </Col>
                    <Col lg={8} sm={12} className="lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{selectedShow.language}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{selectedShow.name}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <span className="text-gray-600 ">{selectedShow.runtime} min</span>
                            </span>
                        </div>
                        
                        {selectedShow.rating && (
                                <p className="mb-3">
                                  Rating : <span className='text-2xl font-medium '> {selectedShow.rating.average}/10</span>
                                </p>
                            )}
                        {selectedShow.summary.substr(3, selectedShow.summary.length - 7)}
                       
                        <div className="flex py-5">
                            <Button onClick={() => navigate('/book')} variant="outline-dark">
                                Book
                            </Button>
                           
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Summary;
