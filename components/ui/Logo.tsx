import { playfairDisplay } from '@/app/fonts';
import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src="/logo.png" alt="logo" width={80} height={20} />
      <span
        className={`w-full text-2xl font-bold tracking-wider md:text-3xl ${playfairDisplay.className}`}
      >
        VIET HIEU
      </span>
    </div>
  );
};

export default Logo;
