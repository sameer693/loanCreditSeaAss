import React from 'react';
import LoanTableColumn from './user_loan_table_col';
import TableFooter from './user_table_footer';

const LoanTable: React.FC = () => {
  return (
    <div className="loan-table">
      <div className="table-content">
        <LoanTableColumn
          header="Amount"
          items={[
            { main: "50,000.00", detail: "Not Debt Yet" },
            { main: "100,000.00", detail: "Not Debt Yet" },
            { main: "100,000.00", detail: "Not Debt Yet" },
            { main: "100,000.00", detail: "Loan Fully Repaid" },
          ]}
        />
        <LoanTableColumn
          header="Date Applied"
          items={[
            { main: "June 09, 2021", detail: "6:30 PM" },
            { main: "June 07, 2021", detail: "6:30 PM" },
            { main: "June 07, 2021", detail: "6:30 PM" },
            { main: "May 27, 2021", detail: "6:30 PM" },
          ]}
        />
        <LoanTableColumn
          header="Status"
          items={[
            { main: "PENDING", detail: "" },
            { main: "VERIFIED", detail: "" },
            { main: "REJECTED", detail: "" },
            { main: "APPROVED", detail: "" },
          ]}
        />
      </div>
      <TableFooter />
    </div>
  );
};

export default LoanTable;