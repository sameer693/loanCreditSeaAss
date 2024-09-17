import { useState } from 'react';
import axios from 'axios';

const LoanForm = () => {
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:3000/api/user/apply-loan', {
        amount,
        duration
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Loan application submitted');
      setAmount('');
      setDuration('');
    } catch (error) {
      alert('Failed to submit loan application');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md">
      <h2 className="text-xl mb-4">Apply for a Loan</h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="amount">
          Loan Amount
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="block w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium" htmlFor="duration">
          Loan Duration
        </label>
        <input
          type="text"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="block w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded"
      >
        Submit Application
      </button>
    </form>
  );
};

export default LoanForm;
