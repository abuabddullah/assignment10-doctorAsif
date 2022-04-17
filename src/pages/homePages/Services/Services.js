import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../customHooks/useServices/useServices';
import SingleServices from './SingleServices';

const Services = () => {
    const { services, setServices } = useServices();
    // console.log(services);
    return (
        <section className='py-5 p-md-5'>
            <div className="container  my-5">
                <div className="sectionHeading text-center mb-5">
                    <h2>My Services</h2>
                    <hr className="w-25 mx-auto" style={{ color: "#F98080", height: "2px" }} />
                </div>

                <Row xs={1} md={2} className="g-4">
                    
                    {
                        services.map(service => <SingleServices key={service.id} service={service} />)
                    }
                    
                    
                </Row>

            </div>
        </section>
    );
};

export default Services;