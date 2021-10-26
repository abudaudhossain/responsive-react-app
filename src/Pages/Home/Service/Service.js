import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({service}) => {
    const {_id,Name, description, price, imgUrl} =service;
    return (
        <div className ="service">
           <img src={imgUrl} alt="serves-img" />
           <h2>{Name}</h2>
           <h3>Price: ${price}</h3>
           <p>{description}</p>
           <Link to ={`/booking/${_id}`}>
               <button className="btn btn-warning mb-3">Book {Name}</button>
           </Link>
        </div>
    );
};

export default Service;