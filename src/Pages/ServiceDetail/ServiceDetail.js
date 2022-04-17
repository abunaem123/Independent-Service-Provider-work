import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams();
    return (
        <div className='container'>
            <h2>Service Detail Page: {serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;