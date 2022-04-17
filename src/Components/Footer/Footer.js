import React from 'react';
import './Footer.css'

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='text-center footer'>
            <small>&copy; {year} Raju Tea Stall</small>
        </div>
    );
};

export default Footer;