import React from 'react';

const InfoCard = ({ icon, title, description, Url }) => {
  return (
    <div className='flex flex-col items-center justify-center p-6 rounded-md shadow-lg bg-white'>
      <a href={Url} target="_blank" rel="noopener noreferrer">
        <img src="/github.png" alt="GitHub" className="w-16 h-16 mb-4" />
      </a>
      <h3 className='text-lg font-medium mb-2'>{title}</h3>
      <p className='text-sm text-center'>{description}</p>
    </div>
  );
};

export default InfoCard;
