import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header, { Inventory } from './components/Header';
import getGameData, { NewGame } from './API';
import './styles/Store.css';

interface Props {
  inventory: Inventory[];
  setInventory: React.Dispatch<React.SetStateAction<Inventory[]>>;
}

const Store: React.FC<Props> = ({ inventory, setInventory }): JSX.Element => {
  const [items, setItems] = useState<NewGame[]>([]);

  useEffect(() => {
    async function fetchStoreData() {
      const params =
        'fields cover.image_id,name,id,slug,genres.name; where rating >= 80 & rating_count >= 100; limit 30; sort rating_count desc;';
      const data = await getGameData(params);
      setItems(data);
    }
    fetchStoreData();
  }, []);

  return (
    <>
      <Header inventory={inventory} setInventory={setInventory} />
      <main>
        <div className="search" />
        <div className="itemsContainer">
          {items.map((arg, i) => (
            <Link
              to={`/store/${items[i]?.slug}`}
              key={arg.id}
              className="items"
            >
              <img
                src={`https://images.igdb.com/igdb/image/upload/t_720p/${arg.cover.image_id}.jpg`}
                alt="Game"
                className="items-image"
              />
              <div className="description">
                <h4 className="name">{arg.name}</h4>
                <p className="genres">
                  {arg.genres.map((genre, index) =>
                    index === 0 ? ` ${genre.name}` : ` | ${genre.name} `
                  )}
                </p>
                <h2 className="price">$ 49.99</h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Store;
