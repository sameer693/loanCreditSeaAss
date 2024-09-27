import React from 'react';
import LoanOfficer from './user_loan_officer';
import LoanTable from './user_loan_table';

const LoanSheet: React.FC = () => {
  return (
    <section className="loan-sheet">
      <div className="loan-content">
        <div className="loan-header">
          <h2 className="loan-title">Applied Loans</h2>
          <LoanOfficer />
        </div>
        <LoanTable />
      </div>
    </section>
  );
};

export default LoanSheet;