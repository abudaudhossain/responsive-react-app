import React from 'react';

const Expert = ({expert}) => {
    const {name,img, expertize} = expert
    return (
        <div className ="col-lg-3 col-md-6 col-sm-12">
           <img className="img-thumbnail" src={img} alt="" />
           <h2>{name}</h2>
           <h4 className ="text-danger">{expertize}</h4>
        </div>
    );
};

export default Expert;