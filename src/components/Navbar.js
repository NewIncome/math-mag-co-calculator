import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="logo">Math Magicians</div>
    <div>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/calculator">Calculator</Link>
      <span> | </span>
      <Link to="/dayquote">Quote</Link>
    </div>
  </nav>
);

export default Navbar;
