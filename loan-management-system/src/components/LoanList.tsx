import { useState, useEffect } from 'react';
import axios from 'axios';

interface Loan {
  id: number;
  amount: number;
  duration: string;
  status: string;
}

const LoanList = () => {
  const [loans, setLoans] = useState<Loan[]>([]);

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
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl mb-4">My Loans</h2>
      <ul>
        {loans.length === 0 ? (
          <li>No loans found.</li>
        ) : (
          loans.map((loan) => (
            <li key={loan.id} className="mb-4 p-2 border-b">
              <div>
                <strong>Amount:</strong> ${loan.amount}
              </div>
              <div>
                <strong>Duration:</strong> {loan.duration}
              </div>
              <div>
                <strong>Status:</strong> {loan.status}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default LoanList;
