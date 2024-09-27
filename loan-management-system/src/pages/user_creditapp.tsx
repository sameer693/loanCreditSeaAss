import React from 'react';
import Header from './user_header';
import MainContent from './user_main';

const CreditApp: React.FC = () => {
  return (
    <div className="credit-app">
      <Header title="CREDIT APP" />
      <MainContent />
    </div>
  );
};

export default CreditApp;