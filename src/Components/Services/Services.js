import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    return (
        <div>
            <h3 className='text-center text-primary mb-4'>Our Services {services.length}</h3>
            <div className='container'>
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;