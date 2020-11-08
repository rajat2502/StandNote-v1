import React from 'react';

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className='transition duration-200 ease-in-out hover:bg-white hover:text-green-600 text-white font-semibold py-2 px-4 border border-white rounded-full shadow'
    >
      {children}
    </button>
  );
}

export default Button;
