import React from 'react';

interface NavButtonProps {
  label: string;
  tab: string;
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  label,
  tab,
  activeTab,
  onTabClick,
}) => {
  const isActive = activeTab === tab;

  return (
    <div className="relative flex h-full items-center justify-center">
      <button
        className={`px-6 text-xl font-bold hover:text-black-base md:text-sm lg:text-base ${
          isActive ? 'font-bold text-black-base' : 'text-[#091E424F]'
        }`}
        onClick={() => onTabClick(tab)}
      >
        {label}
      </button>
      {isActive && (
        <div className="absolute left-0 h-[2px] w-5 bg-black-base lg:left-[50%] lg:top-0 lg:h-5 lg:w-[2px] lg:translate-x-[-50%]"></div>
      )}
      {}
    </div>
  );
};

export default NavButton;
