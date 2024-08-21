import React from 'react';
import { FaCopyright } from 'react-icons/fa';
import './App.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return ( 
        <footer className='footer'>
            <p>
                <FaCopyright /> Copyright - {currentYear}  | Creado por Hilary Collado
            </p>
        </footer>
    );
};

export default Footer;