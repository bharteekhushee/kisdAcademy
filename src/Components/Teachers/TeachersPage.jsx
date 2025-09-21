import { faPinterest, faTwitter, faVimeoV } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faRss } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Banner from '../banner'

const teacher_Details = [
    {
        img: "./src/assets/img/teacher_01.jpg",
        name: "Broklyn Doel",
        role: "Sains Teacher",
        bgColor: "bg-yellow"
    },
    {
        img: "./src/assets/img/teacher_02.jpg",
        name: "Alex Jhonson",
        role: "Art Teacher",
        bgColor: "bg-red"
    },
    {
        img: "./src/assets/img/teacher_03.jpg",
        name: "Robot Jhonson",
        role: "Math Teacher",
        bgColor: "bg-orange"
    },
    {
        img: "./src/assets/img/teacher_04.jpg",
        name: "Janaton Doe",
        role: "English Teacher",
        bgColor: "bg-purple"
    },
    {
        img: "./src/assets/img/teacher_05.jpg",
        name: "Broklyn Doel",
        role: "Sains Teacher",
        bgColor: "bg-lightblue"
    },
    {
        img: "./src/assets/img/teacher_06.jpg",
        name: "Alex Jhonson",
        role: "Art Teacher",
        bgColor: "bg-lightgreen"
    },
    {
        img: "./src/assets/img/teacher_07.jpg",
        name: "Robot Jhonson",
        role: "Math Teacher",
        bgColor: "bg-pink"
    },
    {
        img: "./src/assets/img/teacher_05.jpg",
        name: "Janaton Doe",
        role: "English Teacher",
        bgColor: "bg-brown"
    }
]

function TeachersPage() {
    return (
        <>
            <Banner props={{heading:"Meet Our Teachers",page:"Teachers"}}/>
            <section id="TeachersPage">
                <Container>
                    <Row>
                        {
                            teacher_Details.map((item, index) => {
                                return (
                                    <Col lg={6} className='py-3 px-4'>
                                        <div>
                                            <Row>
                                                <Col sm={4} className='p-0'>
                                                    <img src={item.img} alt="#" className='img-fluid w-100 h-100' />
                                                </Col>
                                                <Col sm={8} className={`p-3 ${item.bgColor}`}>
                                                    <h4> {item.name}<h6 className='d-inline'>{item.role}</h6></h4>
                                                    <div className="teacher_social_icon">
                                                        <span><FontAwesomeIcon icon={faFacebook} /></span>
                                                        <span><FontAwesomeIcon icon={faVimeoV} /></span>
                                                        <span> <FontAwesomeIcon icon={faTwitter} /></span>
                                                        <span><FontAwesomeIcon icon={faPinterest} /></span>
                                                        <span><FontAwesomeIcon icon={faRss} /></span>
                                                    </div>
                                                    <p className='my-3'>Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.</p>
                                                    <Link to="teachers" className="fw-semibold text-white">View Portfolio</Link>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TeachersPage