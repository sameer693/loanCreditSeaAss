import React from 'react';

const ActionContainer: React.FC = () => {
  return (
    <div className="action-container">
      <div className="borrow-cash">
        <span className="borrow-text">Borrow Cash</span>
        <div className="action-divider"></div>
      </div>
      <span className="transact-text">Transact</span>
      <div className="action-divider"></div>
      <span className="deposit-cash">Deposit Cash</span>
    </div>
  );
};

export default ActionContainer;