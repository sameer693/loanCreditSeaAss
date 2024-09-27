import React from 'react';

interface OfficerData {
  name: string;
  lastUpdate: string;
}

const officerData: OfficerData[] = [
  { name: "John Okoh", lastUpdate: "Updated 1 day ago" },
  { name: "John Okoh", lastUpdate: "Updated 1 day ago" },
  { name: "John Okoh", lastUpdate: "Updated 1 day ago" },
  { name: "John Okoh", lastUpdate: "Updated 1 day ago" },
];

const LoanOfficer: React.FC = () => {
  return (
    <div className="loan-officer">
      <h3 className="officer-title">Loan Officer</h3>
      {officerData.map((officer, index) => (
        <div key={index} className="officer-item">
          <img src="officer-avatar.png" alt={officer.name} className="officer-avatar" />
          <div className="officer-info">
            <span className="officer-name">{officer.name}</span>
            <span className="officer-update">{officer.lastUpdate}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoanOfficer;