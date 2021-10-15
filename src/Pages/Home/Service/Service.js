import React from 'react';
import "./Service.css"

const Service = ({service}) => {
    const {name, description, price, img} =service;
    return (
        <div className ="service">
           <img src={img} alt="serves-img" />
           <h2>{name}</h2>
           <h3>Price: ${price}</h3>
           <p>{description}</p>
        </div>
    );
};

export default Service;