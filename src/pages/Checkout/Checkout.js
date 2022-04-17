import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Outlet, useLocation } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const { pathname } = location;

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target);
    }
    return (

        <section className='py-5 p-md-5'>
            <div className="container mb-5">
                <div className="sectionHeading text-center mb-5">
                    <h2>Checkout Service You Need</h2>
                    <hr className="w-25 mx-auto" style={{ color: "#F98080", height: "2px" }} />
                </div>

                <div className='row justify-content-center align-items-center'>

                    <Outlet />
                </div>

                <div className='row justify-content-center align-items-center'>

                    {
                        pathname === '/checkout' && <section>
                            <h4 className="text-center">
                                Service id : <code>No service selected</code>
                            </h4>

                            <Form onSubmit={handleSubmit} className='my-4 w-75 mx-auto'>

                                <Form.Select  className="mb-3" size="lg">
                                    <option>Personal Psychiatrist Service</option>
                                    <option>Family Doctor Service</option>
                                    <option>Chamber Service</option>
                                    <option>Diet Couch Service</option>
                                    <option>Fitness Couch Service</option>
                                    <option>Youtube Health Guidelines</option>
                                </Form.Select>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="User Name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="User Name" name='name' />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" name='name' required />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Address"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Address" name='address' required />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Phone Number"
                                    className="mb-3"
                                >
                                    <Form.Control type="number" placeholder="Phone Number" name='phone' required />
                                </FloatingLabel>
                                <div className="d-grid gap-2">
                                    <Button type='submit' variant="danger" size="lg">
                                        Submit
                                    </Button>
                                </div>
                            </Form>

                        </section>
                    }


                </div>

            </div>
        </section>
    );
};

export default Checkout;