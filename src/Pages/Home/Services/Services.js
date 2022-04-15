import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h3>all services: {services.length}</h3>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                />)
            }
        </div>
    );
};

export default Services;