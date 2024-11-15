import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div className="header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dialogs">Dialogs</Link>
            </li>
            <li>
              <Link to="/asistent">Asistent</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default Header;