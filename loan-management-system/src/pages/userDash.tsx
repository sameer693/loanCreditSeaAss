import { useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [loans, setLoans] = useState<{
      status: ReactNode;
      duration: ReactNode;
      amount: ReactNode; id: number 
}[]>([]);

  const handleApplyLoan = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:3000/api/user/apply-loan', {
        amount,
        duration,
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Loan application submitted');
      fetchLoans();  // Refresh loan list after applying
    } catch (error) {
      alert('Loan application failed');
    }
  };

  const fetchLoans = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/user/loans', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLoans(response.data);
    } catch (error) {
      alert('Failed to fetch loans');
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl">User Dashboard</h2>
      <div className="mt-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Loan Amount"
          className="block mb-2 p-2 border"
        />
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Loan Duration"
          className="block mb-2 p-2 border"
        />
        <button onClick={handleApplyLoan} className="p-2 bg-blue-500 text-white">
          Apply for Loan
        </button>
      </div>

      <h3 className="mt-4">My Loans</h3>
      <ul>
        {loans.map((loan) => (
          <li key={loan.id}>
            {loan.amount} - {loan.duration} - {loan.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
