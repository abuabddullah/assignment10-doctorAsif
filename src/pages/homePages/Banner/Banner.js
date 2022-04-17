import './Banner.css';
import React from 'react';
import myImg from './../../../resources/RC-1280.jpg'
import { FaCheck } from "react-icons/fa";

const Banner = () => {
    return (
        <section id='banner' className='bg-success p-3 p-md-5'>
            <div className="container text-white text-center my-5">

                <div className="cards m-md-5 text-center text-white">
                    <div className="card-body">
                        <div className="imgWraper  position-relative shadow-lg d-inline-block p-4 rounded-circle mb-4">
                            <img src={myImg} alt="myImg" className='img-fluid rounded-circle myImg' />

                            <span className="position-absolute top-100 start-50 translate-middle p-1 FaCheck border border-light rounded-circle">
                            <FaCheck/>
                            </span>
                        </div>
                        <h3 className="card-title fw-bold mt-4">Dr. Asif A Owadud</h3>
                        <p className="user-select-none card-text mb-0 mt-3">Psychiatrist , Mental Surgeon</p>
                        <p className="user-select-none card-text mb-0">Dhaka, Bangladesh</p>
                        <p className="user-select-none card-text mb-0">+880-1939032974</p>
                        <p className="user-select-none card-text">asifaowadud@gmail.com</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;