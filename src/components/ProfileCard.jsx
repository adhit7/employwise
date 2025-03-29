import React from 'react';

const ProfileCard = ({ name, avatarUrl, onClick }) => {
  return (
    <div
      className='max-w-sm bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer'
      onClick={onClick}
    >
      <div className='text-center p-6'>
        <img
          className='h-32 w-32 rounded-full mx-auto border-5 border-gray-900 dark:border-gray-700'
          src={avatarUrl}
          alt={`${name}'s avatar`}
          loading='lazy'
        />
        <h2 className='mt-4 text-xl font-semibold text-gray-800 text-black dark:text-white'>
          {name}
        </h2>
      </div>
    </div>
  );
};

export default ProfileCard;
