import React from 'react';
import { Outlet } from 'react-router-dom';

const Checkout = () => {
    return (
        <div>
            Checkout
            <Outlet/>
        </div>
    );
};

export default Checkout;