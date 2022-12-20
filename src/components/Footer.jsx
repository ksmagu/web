import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className='align-items-center'>
                    <Col sm={6}>
                        <div className='my-name'>
                            <p>Kristina Smagurauskaitė</p>
                        </div>
                    </Col>
                    <Col sm={6} className='text-align-center text-sm-end'>
                        <p>k.smagurauskaite@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
