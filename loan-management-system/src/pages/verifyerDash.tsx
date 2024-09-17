import { useState, useEffect } from 'react';
import axios from 'axios';

interface Loan {
  id: number;
  amount: number;
  duration: string;
  status: string;
  user: {
    email: string;
  };
}

const VerifierDashboard = () => {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [selectedLoan, setSelectedLoan] = useState<number | null>(null);
  const [status, setStatus] = useState('approved');  // or 'rejected'

  const fetchPendingLoans = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/verifier/pending-loans', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLoans(response.data);
    } catch (error) {
      alert('Failed to fetch pending loans');
    }
  };

  const handleVerifyLoan = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:3000/api/verifier/verify-loan', {
        loanId: selectedLoan,
        status
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Loan status updated');
      fetchPendingLoans();  // Refresh loan list after verification
    } catch (error) {
      alert('Failed to update loan status');
    }
  };

  useEffect(() => {
    fetchPendingLoans();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl">Verifier Dashboard</h2>
      <div className="mt-4">
        <h3 className="text-lg">Pending Loans</h3>
        <ul>
          {loans.map((loan) => (
            <li key={loan.id} className="mb-4 border p-2">
              <div>
                <strong>Amount:</strong> {loan.amount}
              </div>
              <div>
                <strong>Duration:</strong> {loan.duration}
              </div>
              <div>
                <strong>Status:</strong> {loan.status}
              </div>
              <div>
                <strong>User Email:</strong> {loan.user.email}
              </div>
              <button onClick={() => { setSelectedLoan(loan.id); setStatus('approved'); handleVerifyLoan(); }} className="p-2 bg-green-500 text-white">
                Approve
              </button>
              <button onClick={() => { setSelectedLoan(loan.id); setStatus('rejected'); handleVerifyLoan(); }} className="p-2 bg-red-500 text-white">
                Reject
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VerifierDashboard;
