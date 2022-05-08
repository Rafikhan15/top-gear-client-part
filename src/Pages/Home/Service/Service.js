import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, img, description, price, supplier } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <p className='text-bold'>{supplier}</p>
            <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-success'>Buy: {name}</button>
        </div>
    );
};

export default Service;