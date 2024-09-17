import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: number;
  email: string;
  role: string;
}

interface Loan {
  id: number;
  amount: number;
  duration: string;
  status: string;
  user: {
    email: string;
  };
}

const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loans, setLoans] = useState<Loan[]>([]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/admin/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(response.data);
    } catch (error) {
      alert('Failed to fetch users');
    }
  };

  const fetchLoans = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/admin/loans', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLoans(response.data);
    } catch (error) {
      alert('Failed to fetch loans');
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchLoans();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl">Admin Dashboard</h2>
      <div className="mt-4">
        <h3 className="text-lg">Users</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="mb-4 border p-2">
              <div>
                <strong>Email:</strong> {user.email}
              </div>
              <div>
                <strong>Role:</strong> {user.role}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg">All Loans</h3>
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
