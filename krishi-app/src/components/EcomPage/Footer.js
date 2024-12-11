import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
        <h4 className='text-center'>All rights reserved &copy; Krushi Planner</h4>
        <p className='text-center mt-3'>
          <Link to="/about">About</Link>|
          <Link to="/Contact">Contact</Link>|
          <Link to="/Policy">Privacy Policy</Link>
        </p>
    </div>
  );
};

export default Footer;