import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {
    const [services, setService] = useState([]);

    useEffect(() =>{
        fetch("./services.json")
        .then(response => response.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <h1 className="text-primary mt-5">Our Services</h1>
            <div className ="service-container">
            {
            services.map(service => <Service
                key = {service.id}
                service = {service}
            ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;