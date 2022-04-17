import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Signup = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target);
    }
    return (
        <section className='py-5 p-md-5'>
            <div className="container  my-5">
                <div className="sectionHeading text-center mb-5">
                    <h2>Register Now</h2>
                    <hr className="w-25 mx-auto" style={{ color: "#F98080", height: "2px" }} />
                </div>

                <Form onSubmit={handleSubmit} className='my-4 w-75 mx-auto'>
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
                        label="Password"
                        className="mb-3"
                    >
                        <Form.Control type="password" placeholder="Password" name='name' required />
                    </FloatingLabel>


                    <div className="d-grid gap-2">
                        <Button type='submit' variant="danger" size="lg">
                            Register
                        </Button>
                    </div>

                    <div className="my-3 text-center">
                        <p>Already Have Account? <Link className='text-decoration-none' to='/login'>Login now</Link></p>
                    </div>
                </Form>

                <div className='d-flex justify-content-center align-items-center my-4'>
                    <hr className="w-25" />
                    <span className='mx-2'>or</span>
                    <hr className="w-25" />
                </div>

                <div className="d-grid gap-2 w-75 mx-auto">
                    <Button variant="outline-primary" size="lg">
                       <FaFacebook/> Login with Facebook
                    </Button>
                    <Button variant="outline-secondary" size="lg">
                        <FaGoogle/> Login with Google
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default Signup;