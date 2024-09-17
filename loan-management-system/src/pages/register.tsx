import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      
      await axios.post('http://localhost:3000/api/auth/register', {
        email,
        password,
      }).then((res) => {
        console.log(res.data);
      }
      );
      alert('Registration successful');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl">Register</h2>
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
      <button onClick={handleRegister} className="p-2 bg-blue-500 text-white">
        Register
      </button>
    </div>
  );
};

export default Register;
