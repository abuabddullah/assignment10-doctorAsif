import React from 'react';
import location from './../../../resources/location.PNG'

const Location = () => {
    return (
        <section className='py-5 p-md-5'>
            <div className="container mb-5">
                <div className="sectionHeading text-center mb-5">
                    <h2>Get Me Here</h2>
                    <hr className="w-25 mx-auto" style={{ color: "#F98080", height: "2px" }} />
                </div>

                <div className='row justify-content-center align-items-center'>
                    <div className="col-12 col-md-6 mb-5 mb-md-0">
                        <img src={location} alt="location" className='img-fluid' />
                    </div>
                    <div className="col-12 col-md-6">
                        <h4 className="">Address 1</h4>
                        <p className='text-muted'>
                            School road, h#12, Fukutia, Dhamrai, Dhaka-1350
                        </p>
                        <h4 className="">Address 2</h4>
                        <p className='text-muted'>
                            Daffodil road, h#102, Khagan, Savar, Dhaka-1440
                        </p>
                        <h4 className="">Mon - Sat</h4>
                        <p className='text-muted'>
                            10:00AM - 02:00PM <br />
                            03:00PM - 07:40PM 
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Location;