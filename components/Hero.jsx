import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = ({heading, message, mission, meetthefounder, about}) => {
  return (
    <div className="container mx-auto py-32 px-4">
      <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-60 h-60 rounded-full overflow-hidden border border-yellow-400 ">
          <Image src="/reddit.png" alt="Shantel Xin, The Founder" layout="fill" objectFit="cover" />
        </div>
      </div>
        <h1 className="text-4xl mt-18 font-bold mb-4">About Me</h1>
        <p className="text-xl text-center max-w-lg mb-8">
        {about}
        </p>
        <Link href="/projects">
        <button className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">
          View Portfolio
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
