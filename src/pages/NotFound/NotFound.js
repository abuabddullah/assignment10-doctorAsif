import React from 'react';
import notFound from './../../resources/notFound.jpg'

const NotFound = () => {
    return (
        <section className='p-5'>
            <div className="container  d-flex justify-content-center align-items-center">
            <img src={notFound} alt="notFound" className='img-fluid img-thumbnail shadow-lg m-5 p-md-5' />
            </div>
        </section>
    );
};

export default NotFound;