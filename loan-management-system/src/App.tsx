import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import UserDashboard from './pages/userDash';
// import LoanDashboard from './components/LoanDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/dashboard" element={<UserDashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;


    //  <div className={styles.dashboard}>
    //   <Header />
    //   <main className={styles.mainContent}>
    //     <Sidebar />
    //     <section className={styles.contentArea}>
    //       <h1 className={styles.pageTitle}>Dashboard &gt; <span className={styles.loansTitle}>Loans</span></h1>
    //       <DashboardSummary />
    //       <AppliedLoans />
    //     </section>
    //   </main>
    // </div>