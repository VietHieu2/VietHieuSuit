import React, { useRef, useEffect } from 'react';
import Home from '../Home';

interface TabContentProps {
  id: string;
  onVisible: (id: string) => void;
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ id, onVisible, children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const position = sectionRef.current?.getBoundingClientRect().top || 0;
      if (position <= 50 && position >= -50) {
        onVisible(id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id, onVisible]);

  return <div ref={sectionRef}>{children}</div>;
};

export default TabContent;
