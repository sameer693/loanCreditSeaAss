import React from 'react';
import styles from './components/LoanDashboard.module.css';
import Header from './components/Headers';
import Sidebar from './components/Sidebar';
import DashboardSummary from './components/DashboardSummary';
import AppliedLoans from './components/AppliedLoans';

const LoanDashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <Header />
      <main className={styles.mainContent}>
        <Sidebar />
        <section className={styles.contentArea}>
          <h1 className={styles.pageTitle}>Dashboard &gt; <span className={styles.loansTitle}>Loans</span></h1>
          <DashboardSummary />
          <AppliedLoans />
        </section>
      </main>
    </div>
  );
};

export default LoanDashboard;