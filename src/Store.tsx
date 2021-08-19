import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import getGameData, { NewGame } from './API';
import './styles/Store.css';

const Store = (): JSX.Element => {
  const [items, setItems] = useState<NewGame[]>([]);

  useEffect(() => {
    async function fetchStoreData() {
      const params =
        'fields cover.image_id,name,id,slug,genres.*; where rating >= 80 & rating_count >= 100; limit 30; sort rating_count desc;';
      const data = await getGameData(params);
      setItems(data);
    }
    fetchStoreData();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="search" />
        <div className="itemsContainer">
          {items.map((arg) => (
            <Link
              to={`/store/${items[items.indexOf(arg)]?.slug}`}
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
                  {arg.genres.map((genre) =>
                    arg.genres.indexOf(genre) === 0
                      ? ` ${genre.name}`
                      : ` | ${genre.name} `
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
