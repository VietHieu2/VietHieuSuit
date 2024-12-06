import React from 'react';
import { motion } from 'framer-motion';
import CloseIcon from './icons/CloseIcon';
import NavButton from './ui/NavButton';
import Logo from './ui/Logo';

interface MenuProps {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const Menu = ({ setOpenMenu, activeTab, onTabClick }: MenuProps) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="menu-tab fixed bottom-0 left-0 right-0 top-0 z-30"
    >
      <div className="flex items-center justify-between px-4 py-6">
        <div onClick={() => onTabClick('tab1')} className="cursor-pointer">
          <Logo />
        </div>
        <CloseIcon
          onClick={() => setOpenMenu(false)}
          className="cursor-pointer"
        />
      </div>
      <nav className="flex flex-col items-start gap-6">
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
    </motion.div>
  );
};

export default Menu;
