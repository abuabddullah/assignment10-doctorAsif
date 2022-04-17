import './SingleServices.css'
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SingleServices = ({ service }) => {
    const navigate = useNavigate()
    const { about, id, name, picture, price } = service || {};
    return (
        <Col>
            <Card className='border border-md-0 onHover'>
                <div className='overflow-hidden'>                    
                <Card.Img variant="top" src={picture} />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about.slice(0, 150) + ' .....'}
                    </Card.Text>
                    <h4>Costs : ${price}</h4>
                    <Button className='d-block w-100 my-4 cursor-pointer btn-minH' onClick={() => navigate(`/checkout/${id}`)} variant="success">Checkout My {name} Service</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleServices;