import React from 'react';

const InfoCard = ({ title, description, techstack, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center max-w-xs mx-auto my-4">
      <div className="flex items-center justify-center h-24 w-24 bg-white rounded-full shadow-md text-yellow-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 1.25a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5zM7.497 12.167l-.798-2.745H5.5l2.5-8h1.5l2.5 8h-1.198l-.798 2.745h-1.703zm.653-2.292h2.295l-1.147-4.028-1.148 4.028zm7.601 2.292l-1.703-5.47-1.702 5.47h3.405zM14.5 4.75h-3l-1.5 5h6l-1.5-5z" clipRule="evenodd" />
        </svg>
      </div>
      <h3 className="text-lg font-medium mt-4 text-center">{title}</h3>
      <p className="text-sm text-center">{description}</p>
      <p className="text-xs text-center mt-2 text-gray-500">Tech stack: {techstack}</p>
    </a>
  );
};

export default InfoCard;
