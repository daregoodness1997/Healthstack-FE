import React, { useEffect, useState } from 'react';

import { AuthContainer, PageWrapper } from '../ui/styled/styles';
import Side from './banner/side';
import Preloader from './utilities/Preloader';

interface AuthProps {
  paragraph?: string;
}

const AuthWrapper: React.FC<AuthProps> = ({ paragraph, children }) => {
  const [loaderTimer, setLoaderTimer] = useState(true);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = 'Health Stack - EMR';
    setTimeout(() => setLoaderTimer(false), 1500);
  }, []);
  return (
    <>
      {loaderTimer ? (
        <Preloader />
      ) : (
        <PageWrapper>
          <Side />
          <AuthContainer>
            <div className="aside-container">
              <img src="/public/Healthstack.png" alt="" />
              <h2>Welcome to Healthstack</h2>
              <p>{paragraph}</p>
              <div className="aside-child">{children}</div>
            </div>
          </AuthContainer>
        </PageWrapper>
      )}
    </>
  );
};

export default AuthWrapper;
