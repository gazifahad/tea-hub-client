import React from 'react';
import './Footer.css'

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='text-center footer'>
            <small>&copy; {year} Tea hub</small>
        </div>
    );
};

export default Footer;