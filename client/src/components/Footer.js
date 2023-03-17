import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 h-screen  mt-[-400px] bg-secondary p-4">
      <div className="text-center">
        {location.pathname !== '/' && (
          <button
            className="text-gray-500 hover:scale-110 duration-300"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4 className='text-gray-500 '>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by the Hacker Fit team
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
