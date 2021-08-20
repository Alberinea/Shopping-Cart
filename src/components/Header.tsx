import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export interface Inventory {
  name: string;
  price: number;
  imageURL: string;
  quantity: number;
  URL: string;
}

interface Props {
  inventory: Inventory[];
  setInventory: React.Dispatch<React.SetStateAction<Inventory[]>>;
}

const Header: React.FC<Props> = ({ inventory, setInventory }): JSX.Element => {
  const [flag, setFlag] = useState(true);

  return (
    <header className="header flex white">
      <div className="flex">
        <Link className="white big" to="/">
          PAYSTORE
        </Link>
        <nav className="flex">
          <Link className="nav white" to="/store">
            Store
          </Link>
        </nav>
      </div>
      <div className="icon">
        <div
          className="flex cart"
          onClick={() => setFlag(!flag)}
          onKeyPress={() => setFlag(!flag)}
          role="menuitem"
          tabIndex={0}
        >
          <ShoppingCartIcon />
          <h4>{inventory.length}</h4>
        </div>
        <div
          className={!flag ? 'history' : 'history hide'}
          onMouseLeave={() =>
            setTimeout(() => {
              setFlag(true);
            }, 1000)
          }
        >
          <div className="checkout-summary flex">
            <div className="summary-left">
              <h3>{inventory.length} items added</h3>
            </div>
            <div>
              <h3 className="summary-right">
                ${inventory.reduce((a, e) => a + e.price, 0).toFixed(2)}
              </h3>
            </div>
          </div>
          {inventory.map((arg, i) => {
            return (
              <Link
                to={`/store/${arg.URL}`}
                key={arg.name}
                className="flex list white"
              >
                <img
                  src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${arg.imageURL}.jpg`}
                  alt="Cover"
                  className="checkout-image"
                />
                <div>
                  <h3 className="checkout-name">{arg.name}</h3>
                </div>
                <h4>${arg.price.toFixed(2)}</h4>
                <h4 className="checkout-price">×{arg.quantity}</h4>
                <div
                  className="remove"
                  onKeyPress={() => console.log('a')}
                  role="menuitem"
                  tabIndex={-1}
                  onClick={(e) => {
                    e.preventDefault();
                    const copy = [...inventory];
                    copy.splice(i, 1);
                    setInventory(copy);
                  }}
                >
                  <p>Remove from cart</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
