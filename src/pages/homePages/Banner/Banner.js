import './Banner.css';
import React from 'react';
import myImg from './../../../resources/RC-1280.jpg'

const Banner = () => {
    return (
        <section id='banner' className='bg-success p-3 p-md-5'>
            <div className="container text-white text-center my-5">

                <div className="cards m-md-5 text-center text-white">
                    <div className="card-body">
                        <div className="imgWraper  position-relative shadow-lg d-inline-block p-4 rounded-circle mb-4">
                            <img src={myImg} alt="myImg" className='img-fluid rounded-circle myImg' />

                            <span className="position-absolute top-100 start-50 translate-middle p-2 bg-danger border border-light rounded-circle">
                                <span className="visually-hidden">New alerts</span>
                            </span>
                        </div>
                        <h5 className="card-title fw-bold">Dr. Asif A Owadud</h5>
                        <p className="card-text mb-0 mt-3">Dentist, Dental Surgeon</p>
                        <p className="card-text">Dhaka, Bangladesh</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;