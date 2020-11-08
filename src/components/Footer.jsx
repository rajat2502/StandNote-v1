import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='flex justify-between px-4 py-6 bg-green-900 text-white'>
        <div>
          <img src={require('assets/logo.png')} className='h-16' alt='Logo' />
        </div>
        <div className='flex flex-col'>
          <Link to='/' className='text-lg hover:underline'>
            Home
          </Link>
          <Link to='/' className='text-lg hover:underline'>
            Dashboard
          </Link>
        </div>
      </div>
      <div className='text-center bg-gray-800 p-2' style={{ height: 40 }}>
        <p className='text-gray-200 text-center'>
          MIT License © Copyright 2020 StandNote.
        </p>
      </div>
    </>
  );
}
export default Footer;
