import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='my-5 text-center notfound'>
            <h1 className='mb-5 text-danger'>Page Not Found : 404</h1>
            <img src="https://st.depositphotos.com/1064044/3045/i/600/depositphotos_30459723-stock-photo-broken-cup.jpg" alt="" />
        </div>
    );
};

export default NotFound;