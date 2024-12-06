'use client';

import React, { useEffect, useState } from 'react';
import Home from '@/components/Home';
import Header from '@/components/Header';
import TabContent from '@/components/ui/TabContent';
import Suit from '@/components/Suit';
import QuanSomi from '@/components/QuanSomi';
import Contract from '@/components/Contract';
import Contact from '@/components/Contact';
import Menu from '@/components/Menu';
import { Map } from '@/components/Map';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<string>('tab1');
  const [openMenu, setOpenMenu] = useState(false);

  const handleTabClick = (tab: string) => {
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    openMenu && setOpenMenu(false);
  };

  const handleTabVisible = (id: string) => {
    setActiveTab(id);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <main>
      <Header
        activeTab={activeTab}
        onTabClick={handleTabClick}
        setOpenMenu={setOpenMenu}
      />
      <div>
        <div id="tab1">
          <TabContent id="tab1" onVisible={handleTabVisible}>
            <Home handleToTab={handleTabClick} />
          </TabContent>
        </div>
        <div id="tab2">
          <TabContent id="tab2" onVisible={handleTabVisible}>
            <Suit />
          </TabContent>
        </div>
        <div id="tab3">
          <TabContent id="tab3" onVisible={handleTabVisible}>
            <QuanSomi />
          </TabContent>
        </div>
        <div id="tab4">
          <TabContent id="tab4" onVisible={handleTabVisible}>
            <Contract />
          </TabContent>
        </div>
        <div id="tab5">
          <TabContent id="tab5" onVisible={handleTabVisible}>
            <Map />
          </TabContent>
        </div>
        <div id="tab6">
          <TabContent id="tab6" onVisible={handleTabVisible}>
            <Contact />
          </TabContent>
        </div>
        {openMenu && (
          <Menu
            setOpenMenu={setOpenMenu}
            activeTab={activeTab}
            onTabClick={handleTabClick}
          />
        )}
      </div>
    </main>
  );
}
