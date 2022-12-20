import { useState, React, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/resume.png';
import cv from '../assets/resume/CV.pdf';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('about');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <div>
            {' '}
            <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
                <Container>
                    <Navbar.Brand href='#home'>
                        <div>
                            <p>
                                Kristina <br></br>
                                Smagurauskaitė
                            </p>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'>
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link
                                href='#home'
                                className={
                                    activeLink === 'home'
                                        ? 'active navbar-link'
                                        : 'navbar-link'
                                }
                                onClick={() => onUpdateActiveLink('home')}
                            >
                                About
                            </Nav.Link>
                            <Nav.Link
                                href='#skills'
                                className={
                                    activeLink === 'skills'
                                        ? 'active navbar-link'
                                        : 'navbar-link'
                                }
                                onClick={() => onUpdateActiveLink('skills')}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link
                                href='#projects'
                                className={
                                    activeLink === 'projects'
                                        ? 'active navbar-link'
                                        : 'navbar-link'
                                }
                                onClick={() => onUpdateActiveLink('projects')}
                            >
                                Projects
                            </Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <button
                                className='vvd'
                                onClick={() => {
                                    window.location.href =
                                        'https://github.com/ksmagu';
                                }}
                            >
                                {' '}
                                <span>Check Out My Git! </span>
                            </button>

                            <div className='social-icon'>
                                <a href='https://www.linkedin.com/in/kristina-smagurauskaite/'>
                                    <img src={navIcon1} alt='' />
                                </a>
                                <a href='https://www.facebook.com/kristina.smag/'>
                                    <img src={navIcon2} alt='' />
                                </a>
                                <a href={cv}>
                                    <img src={navIcon3} alt='' />
                                </a>
                            </div>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
