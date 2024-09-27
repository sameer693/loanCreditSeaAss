import React from 'react';

interface ColumnItem {
  main: string;
  detail: string;
}

interface LoanTableColumnProps {
  header: string;
  items: ColumnItem[];
}

const LoanTableColumn: React.FC<LoanTableColumnProps> = ({ header, items }) => {
  return (
    <div className="table-column">
      <div className="column-content">
        <h4 className="column-header">{header}</h4>
        {items.map((item, index) => (
          <div key={index} className="column-item">
            <span>{item.main}</span>
            {item.detail && <span className="column-detail">{item.detail}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanTableColumn;