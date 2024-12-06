import React from 'react';
import Logo from './ui/Logo';

const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t pt-8">
      <p className="text-sm text-[#7A869A]">
        © 2024 VietHieu | All Rights Reserved
      </p>
      <Logo />
    </footer>
  );
};

export default Footer;
