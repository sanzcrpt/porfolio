import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = ({ heading, message, mission, meetthefounder, about }) => {
  return (
    <>
      {/* Meet the Founder section */}
      <div className="relative bg-cover bg-no-repeat bg-center h-screen custom-img">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-x-0 mx-auto w-3/4 bottom-0 py-20">
          <div className="bg-white-100 p-10 rounded-md">
            <div className="flex items-center justify-center">
              <div className="relative w-60 h-60 rounded-full overflow-hidden border border-yellow-300 mb-10">
                <Image src="/IMG_2094.jpg" alt="San Robinson" layout="fill" objectFit="cover" />
              </div>
            </div>
            <h2 className="text-2xl font-bold items-center text-center mb-10 text-white"> San Robinson </h2>
            <div className="flex items-center text-black justify-center">
              <div className="w-full">
                <div className='bg-white shadow-lg rounded-lg p-6'>
                  <p className="text-2xl mb-4 leading-loose text-bold items-center text-center">{meetthefounder}</p>
                  <p className="text-1xl mb-3 leading-loose text-bold items-center text-center">{about}</p>
                  <p className="py-4 text-1xl leading-loose text-bold items-center text-center">{mission}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
