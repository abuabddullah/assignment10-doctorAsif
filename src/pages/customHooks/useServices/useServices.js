import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.log(error));
    }, []);

    return {services, setServices}
};

export default useServices;