import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-500 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/user/dashboard">User Dashboard</Link></li>
        <li><Link to="/verifier/dashboard">Verifier Dashboard</Link></li>
        <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
