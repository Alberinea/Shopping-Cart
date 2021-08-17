import { useState, useEffect } from 'react';
import Header from './components/Header';
import getGameData, { NewGame } from './API';
import './styles/Store.css';

const Store = (): JSX.Element => {
  const [items, setItems] = useState<NewGame[]>([]);

  useEffect(() => {
    async function fetchStoreData() {
      const params =
        'fields cover.image_id,name,id,slug; where rating >= 80 & rating_count >= 100; limit 30; sort rating_count desc;';
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
          {items.map(({ id }) => (
            <div key={id} className="items" />
          ))}
        </div>
      </main>
    </>
  );
};

export default Store;
