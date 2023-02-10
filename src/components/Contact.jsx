import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {
    const [values, setValues] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const [error, setError] = useState('');
    const handleChange = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value,
        }));
    };
    const [status, setStatus] = useState('idle');
    useEffect(() => {
        if (status === 'fulfilled' || status === 'rejected') {
            setTimeout(() => {
                setStatus('idle');
            }, 2000);
        }
    }, [status]);

    const sendEmail = async (e) => {
        e.preventDefault();
        if (!values.user_name || !values.user_email || !values.message) {
            if (!values.user_name) {
                setError((prev) => ({
                    ...prev,
                    name_error: 'Name is required!',
                }));
            }
            if (!values.user_email) {
                setError((prev) => ({
                    ...prev,
                    email_error: 'Email is required!',
                }));
            }
            if (!values.message) {
                setError((prev) => ({
                    ...prev,
                    message_error: 'Message is required!',
                }));
            }
        } else {
            setStatus('loading');
            try {
                await emailjs.sendForm(
                    'service_31yh5sp',
                    'template_nag92yo',
                    e.target,
                    'f4tmlWeoTXGEgCvAS'
                );
                setValues({ user_name: '', user_email: '', message: '' });

                setError('');
                alert('Message sent!');
                setStatus('fulfilled');
            } catch (err) {
                setStatus('rejected');
            }
        }
    };

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className=' d-flex justify-content-center'>
                        <img src={contactImg} alt='Contact me' />
                    </Col>
                    <Col md={6}>
                        <h2> Let's get in touch! </h2>
                        <form onSubmit={sendEmail}>
                            <Row className='align-items-center'>
                                <Col sm={6} className='px-1'>
                                    <input
                                        type='text'
                                        name='user_name'
                                        value={values.user_name}
                                        placeholder={
                                            error.name_error
                                                ? error.name_error
                                                : 'Name'
                                        }
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input
                                        type='email'
                                        name='user_email'
                                        value={values.user_email}
                                        placeholder={
                                            error.email_error
                                                ? error.email_error
                                                : 'Email'
                                        }
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col sm={12} className='px-1'>
                                    <textarea
                                        name='message'
                                        value={values.message}
                                        placeholder={
                                            error.message_error
                                                ? error.message_error
                                                : 'Your message'
                                        }
                                        onChange={handleChange}
                                    />
                                    <button type='submit' value='Send'>
                                        <span>Send</span>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
