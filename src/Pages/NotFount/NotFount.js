import React from 'react';
import { Link } from 'react-router-dom';
import notfount from '../../404.png'

const NotFount = () => {
    return (
        <div>
            <img style={{height: "95vh", width: "100%"}}src={notfount} alt="" />
            <Link to = '/home'>Go Back Home</Link>
        </div>
    );
};

export default NotFount;