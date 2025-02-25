import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { LayoutContent, LayoutWrapper } from '../../components/layout/styles';
import SideMenu from '../../components/sidemenu';
import TopMenu from '../../components/topmenu';

const Dashboard: React.FC = ({ children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = 'Health Stack - Dashboard';
  }, []);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <LayoutWrapper>
      <SideMenu isOpen={isOpen} />
      <LayoutContent>
        <TopMenu isOpen={isOpen} handleClick={() => setIsOpen(!isOpen)} />
        <div className="layout__content-main">
          {children}
          <Outlet />
        </div>
      </LayoutContent>
    </LayoutWrapper>
  );
};

export default Dashboard;
