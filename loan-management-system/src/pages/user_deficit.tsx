import React from 'react';

interface DeficitDisplayProps {
  amount: number;
}

const DeficitDisplay: React.FC<DeficitDisplayProps> = ({ amount }) => {
  return (
    <div className="deficit-container">
      <div className="deficit-icon"></div>
      <div className="deficit-content">
        <span className="deficit-label">DEFICIT</span>
        <div className="deficit-amount">
          <img src="currency-icon.png" alt="Currency" className="deficit-currency" />
          <span className="deficit-value">{amount.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default DeficitDisplay;