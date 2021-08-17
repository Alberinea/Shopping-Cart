import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = (): JSX.Element => {
  return (
    <header className="header flex white">
      <h2>PAYSTORE</h2>
      <nav className="flex">
        <Link className="nav white" to="/">
          <p>Home</p>
        </Link>
        <Link className="nav white" to="/store">
          <p>Store</p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
