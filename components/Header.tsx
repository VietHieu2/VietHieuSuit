import React, { useEffect, useState } from 'react';
import NavButton from './ui/NavButton';
import MenuIcon from './icons/MenuIcon';
import Logo from './ui/Logo';

interface HeaderProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabClick,
  setOpenMenu,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 72);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed left-0 top-0 z-20 flex h-[80px] w-full items-center justify-end px-4 md:px-[38px] lg:justify-center xl:px-[72px] ${
        isScrolled ? 'header-active' : 'bg-transparent'
      }`}
    >
      <nav className="hidden h-full w-full items-center justify-between lg:flex">
        <NavButton
          label="Trang chủ"
          tab="tab1"
          activeTab={activeTab}
          onTabClick={onTabClick}
        />
        <NavButton
          label="Veston & Suit"
          tab="tab2"
          activeTab={activeTab}
          onTabClick={onTabClick}
        />
        <NavButton
          label="Sản phẩm"
          tab="tab3"
          activeTab={activeTab}
          onTabClick={onTabClick}
        />
        <div onClick={() => onTabClick('tab1')} className="cursor-pointer">
          <Logo />
        </div>
        <NavButton
          label="Hợp đồng"
          tab="tab4"
          activeTab={activeTab}
          onTabClick={onTabClick}
        />
        <NavButton
          label="Địa chỉ"
          tab="tab5"
          activeTab={activeTab}
          onTabClick={onTabClick}
        />
        <NavButton
          label="Liên hệ"
          tab="tab6"
          activeTab={activeTab}
          onTabClick={onTabClick}
        />
      </nav>
      <div
        className="cursor-pointer lg:hidden"
        onClick={() => setOpenMenu(true)}
      >
        <MenuIcon />
      </div>
    </header>
  );
};

export default Header;
