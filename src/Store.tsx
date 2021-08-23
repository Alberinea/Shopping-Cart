/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Header, { Inventory } from './components/Header';
import getGameData, { NewGame } from './API';
import './styles/Store.css';

interface Props {
  inventory: Inventory[];
  setInventory: React.Dispatch<React.SetStateAction<Inventory[]>>;
}

const Store: React.FC<Props> = ({ inventory, setInventory }): JSX.Element => {
  const [items, setItems] = useState<NewGame[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStoreData() {
      const params =
        searchValue === ''
          ? 'fields cover.image_id,name,id,slug,genres.name; where rating >= 80 & rating_count >= 100; limit 30; sort rating_count desc;'
          : `fields cover.image_id,name,id,slug,genres.name; limit 30; where rating >= 70 & rating_count >= 60; search "${searchValue}";`;
      const data = await getGameData(params);
      setItems(data);
      setLoading(false);
    }
    fetchStoreData();
  }, [searchValue]);

  return (
    <>
      <Header inventory={inventory} setInventory={setInventory} />
      <main>
        <div className="flex search-container">
          <SearchIcon className="search-icon" />
          <input
            placeholder="Enter a title..."
            type="search"
            className="search"
            onKeyUp={(e) => {
              if (e.key === 'Enter') setSearchValue(e.currentTarget.value);
            }}
          />
        </div>
        {items.length > 0 ? (
          <div className="itemsContainer">
            {items.map((arg, i) => (
              <Link
                to={`/store/${items[i]?.slug}`}
                key={arg.id}
                className="items"
              >
                <img
                  src={`https://images.igdb.com/igdb/image/upload/t_720p/${arg?.cover?.image_id}.jpg`}
                  alt="Game"
                  className="items-image"
                />
                <div className="description">
                  <h4 className="name">{arg.name}</h4>
                  <p className="genres">
                    {arg?.genres?.map((genre, index) =>
                      index === 0 ? ` ${genre.name}` : ` | ${genre.name} `
                    )}
                  </p>
                  <h2 className="price">$ 49.99</h2>
                </div>
              </Link>
            ))}
          </div>
        ) : items.length === 0 && !loading ? (
          <h1 className="not-found">No search results found</h1>
        ) : null}
      </main>
    </>
  );
};

export default Store;
