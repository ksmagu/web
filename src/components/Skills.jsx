import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sql from '../assets/img/sql.png'
import react from '../assets/img/react.png'
import css from '../assets/img/css.png'
import html from '../assets/img/html.png'
import js from '../assets/img/js.png'
import node from '../assets/img/node.png'
import mongo from '../assets/img/mongo.png'


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>My soft skills are attention to detail, will-do attitude, problem-solving, creativity,<br/> communication skills, and positivity (will always see me smiling!)
                                <br/>I have experience working with these
                                        technologies:
                            </p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="item">
                                    <img src={react} alt='' />
                                    <h5>ReactJS</h5>
                                </div>
                                <div className="item">
                                    <img src={js} alt='' />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt='' />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt='' />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={node} alt='' />
                                    <h5>NodeJS</h5>
                                </div>
                                <div className="item">
                                    <img src={mongo} alt='' />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={sql} alt='' />
                                    <h5>MySQL</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

