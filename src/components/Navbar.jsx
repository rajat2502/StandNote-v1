import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-green-700 flex justify-between items-center py-4 px-4'>
      <Link
        to='/'
        className='mx-2 flex items-center text-2xl text-white font-bold'
      >
        <img
          src={require('assets/logo.png')}
          className='h-12'
          alt='StandNote'
        />
      </Link>
      <div className='text-lg'>
        <Link
          className='font-bold mx-2 transition duration-200 ease-in-out hover:underline'
          to='/'
        >
          Home
        </Link>
        <a
          className='font-bold mx-2 transition duration-200 ease-in-out hover:underline'
          href='#problem'
        >
          The Problem
        </a>
        <a
          className='font-bold mx-2 transition duration-200 ease-in-out hover:underline'
          href='#idea'
        >
          Our Solution
        </a>
        <Link to='/'>Dashboard</Link>
        <a
          className='font-bold mx-2 transition duration-200 ease-in-out hover:underline'
          href='#idea'
        >
          Contact us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
