import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav_links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/settings">
          <li>Settings</li>
        </Link>
        <Link to="/activity">
          <li>Activity</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
