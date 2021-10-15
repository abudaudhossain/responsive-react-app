import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({service}) => {
    const {id,name, description, price, img} =service;
    return (
        <div className ="service">
           <img src={img} alt="serves-img" />
           <h2>{name}</h2>
           <h3>Price: ${price}</h3>
           <p>{description}</p>
           <Link to ={`/booking/${id}`}>
               <button className="btn btn-warning mb-3">Book {name}</button>
           </Link>
        </div>
    );
};

export default Service;