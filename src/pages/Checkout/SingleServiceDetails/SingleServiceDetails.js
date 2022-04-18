// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import useServices from '../../customHooks/useServices/useServices';

// const SingleServiceDetails = () => {
//     const { id } = useParams();

//     const [service, setService] = useState({});
//     const {services, setServices} = useServices();

//     useEffect(() => {
//         const service = services.find(service => service.id === id);
//         setService(service);
//     }, [services, id]);
//     console.log(service);

//     return (
//         <section>
//             <h4 className="text-center">
//             Service id : <strong>{id}</strong>
//             </h4>
//         </section>
//     );
// };

// export default SingleServiceDetails;



// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Services4Context } from '../../../App';

// const SingleServiceDetails = () => {
//     const { id } = useParams();

//     const { services, setServices } = useContext(Services4Context)
//     const [service, setService] = useState({});

//     useEffect(() => {
//         const service = services.find(service => service.id === id);
//         setService(service);
//     }, [services, id]);
//     // console.log(service);


//     return (
//         <section>
//             <h4 className="text-center">
//                 Service id : <strong>{id}</strong>
//             </h4>
//         </section>
//     );
// };

// export default SingleServiceDetails;




import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleServiceDetails = () => {
    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Thak you for the booking!');
    }

    return (
        <section>
            <h4 className="text-center">
                Service id : <strong>{id}</strong>
            </h4>

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
                    <Form.Control type="email" placeholder="name@example.com" name='email' required />
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
            <ToastContainer />

        </section>
    );
};

export default SingleServiceDetails;