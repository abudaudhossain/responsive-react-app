import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {
    const [services, setService] = useState([]);

    useEffect(() =>{
        fetch("https://boiling-depths-72288.herokuapp.com/services")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setService(data)
        })
    },[])
    return (
        <div id="services">
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