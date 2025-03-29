import React from 'react';
import { useUserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { logout } = useUserContext();
  const navigate = useNavigate();

  return (
    <div className='w-full flex justify-between items-center p-2 sm:px-3 sm:py-1 sm:px-6 sm:py-3 bg-gray-900 '>
      <div onClick={() => navigate('/')} className='cursor-pointer'>
        <h1 className='text-lg sm:text-2xl text-emwise-green'>
          Employ<span className='text-gray-400'>Wise</span>
        </h1>
      </div>

      <button
        className='text-[.8rem] sm:text-base p-1 sm:px-2 sm:py-2 bg-emwise-green rounded text-white hover:bg-white hover:text-emwise-green border border-emwise-green focus:outline-none focus:ring-2 focus:ring-emwise-green cursor-pointer'
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
