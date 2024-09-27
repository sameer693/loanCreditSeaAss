import React from 'react';

const TableFooter: React.FC = () => {
  return (
    <footer className="table-footer">
      <div className="rows-per-page">
        <span className="rows-label">Rows per page:</span>
        <div className="rows-select">
          <span>7</span>
          <img src="dropdown-icon.png" alt="Select rows" className="rows-dropdown" />
        </div>
      </div>
      <div className="pagination">
        <span className="pagination-info">1-4 of 4</span>
        <div className="pagination-controls">
          <img src="prev-page-icon.png" alt="Previous page" className="pagination-arrow" />
          <img src="next-page-icon.png" alt="Next page" className="pagination-arrow" />
        </div>
      </div>
    </footer>
  );
};

export default TableFooter;