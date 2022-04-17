import './About.css'
import React from 'react';
import myPic from './../../resources/RC-1280.jpg'

const About = () => {
    return (

        <section className='py-5 p-md-5'>
            <div className="container mb-5"><div className="my-5 aboutPic rounded-circle mx-auto overflow-hidden d-flex justify-content-center align-align-items-end shadow">
                <img src={myPic} alt="" className='img-fluid rounded-circle' />
            </div>
                <div className="sectionHeading text-center mb-3">
                    <h2>About My Goal</h2>
                    <hr className="w-25 mx-auto" style={{ color: "#F98080", height: "2px" }} />
                </div>

                <p className="text-muted text-justify w-75 mx-auto">
                    My ultimate Goal is to be a Full Stack Web Developer. But for now I just want to assure Black Belt certificates. I am continously studying over 8 hrs each day and every concept is clear to me. I just want to keep it up as it is. But I need to start reading documentation which I am not doing.
                </p>






            </div>
        </section>
    );
};

export default About;