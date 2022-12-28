import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/rocket1.png';
import cv from '../assets/resume/CV.pdf';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Kristina Smagurauskaitė', 'Front-End Developer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    });

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my portfolio</span>
                        <h1>
                            {`Hi I'm `}
                            <span className='wrap'>{text}</span>
                        </h1>
                        <p>
                            Extremely passionate about learning, analyzing and
                            creating, therefore crazy about programming! Open
                            for new opportunities as a Front-End developer, my
                            main goal is to get experience and learn many more
                            things in this field that I discovered myself in!
                        </p>
                        <a href={cv}>
                            <button>
                                Let's Connect <ArrowRightCircle size={25} />
                            </button>
                        </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Header Img' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
