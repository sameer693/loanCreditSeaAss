import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem('token', token);  // Store JWT in localStorage
      alert('Login successful');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl">Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="block mb-2 p-2 border"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="block mb-2 p-2 border"
      />
      <button onClick={handleLogin} className="p-2 bg-green-500 text-white">
        Login
      </button>
    </div>
  );
};

export default Login;
