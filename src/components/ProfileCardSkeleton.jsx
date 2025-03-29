import React from 'react';

const ProfileCardSkeleton = () => {
  return (
    <div className='max-w-sm bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-pulse'>
      <div className='flex flex-col items-center'>
        <div className='h-32 w-32 bg-gray-300 dark:bg-gray-700 rounded-full mb-4'></div>
        <div className='h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded'></div>
      </div>
    </div>
  );
};

export default ProfileCardSkeleton;
