/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import produce from 'immer';
import Header, { Inventory } from './components/Header';
import getGameData, { NewGame } from './API';
import './styles/Item.css';

interface Props {
  match: {
    params: {
      id: string;
    };
  };
  inventory: Inventory[];
  setInventory: React.Dispatch<React.SetStateAction<Inventory[]>>;
}

const Items: React.FC<Props> = ({
  match,
  inventory,
  setInventory,
}): JSX.Element => {
  const [item, setItem] = useState<NewGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    async function fetchItem() {
      const params = `fields cover.image_id,name,slug,genres.name,screenshots.*,release_dates.human,storyline,summary,platforms.abbreviation,aggregated_rating; where slug = "${match.params.id}"; limit 1;`;
      const data = await getGameData(params);
      setItem(data);
      setLoading(false);
    }
    fetchItem();
  }, [match.params.id]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
      if (counter >= item[0].screenshots.length - 1) setCounter(0);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [counter, item]);

  useEffect(() => {
    item[0]?.screenshots.forEach((image) => {
      new Image().src = `https://images.igdb.com/igdb/image/upload/t_720p/${image.image_id}.jpg`;
    });
  }, [item]);

  return (
    <>
      <Header inventory={inventory} setInventory={setInventory} />
      {item.length > 0 ? (
        <main>
          <div className="main-container top">
            <h1 className="title">{item[0].name}</h1>
            <div className="screenshots-container">
              <img
                src={`https://images.igdb.com/igdb/image/upload/t_720p/${item[0].screenshots[counter]?.image_id}.jpg`}
                alt="Screenshot"
                className="screenshot"
              />
              <div className="screenshots-rotation">
                {item[0].screenshots.map((arg, i) => (
                  <div
                    onClick={() => setCounter(i)}
                    onKeyPress={() => setCounter(i)}
                    role="menuitem"
                    tabIndex={i}
                    key={arg.id}
                  >
                    <img
                      src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${arg.image_id}.jpg`}
                      alt="Screenshot"
                      className={
                        i === counter
                          ? 'screenshot-small now'
                          : 'screenshot-small'
                      }
                      style={
                        i === item[0].screenshots.length - 1
                          ? { margin: '0' }
                          : {}
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="side-container">
              <img
                src={`https://images.igdb.com/igdb/image/upload/t_1080p/${item[0].cover.image_id}.jpg`}
                alt="Cover"
                className="side-image"
              />
              <p>
                <span style={{ paddingRight: '60px' }}>Genres:</span>
                {item[0].genres.map((genre, index) =>
                  index === 0 ? ` ${genre.name}` : ` | ${genre.name} `
                )}
              </p>
              <p>
                <span style={{ paddingRight: '38px' }}>Platforms:</span>
                {item[0].platforms.map((platform, index) =>
                  index === 0
                    ? ` ${platform.abbreviation}`
                    : ` | ${platform.abbreviation} `
                )}
              </p>
              <p>
                <span style={{ paddingRight: '15px' }}>Release Date:</span>
                {item[0].release_dates[0].human}
              </p>
              <p>
                <span style={{ paddingRight: '72px' }}>Rating:</span>
                {item[0].aggregated_rating.toString().length > 5
                  ? item[0].aggregated_rating.toFixed(2)
                  : item[0].aggregated_rating}
                %
              </p>
              <h2 className="link button">$49.99</h2>
              <button
                className="link button"
                type="button"
                onClick={() => {
                  if (inventory.some(({ name }) => name === item[0].name)) {
                    const copy = produce(inventory, (draft) => {
                      const index = inventory.findIndex(
                        ({ name }) => name === item[0].name
                      );
                      const deepCopy = draft;
                      deepCopy[index].quantity += 1;
                      const originalPrice = 49.99;
                      deepCopy[index].price =
                        originalPrice * deepCopy[index].quantity;
                    });
                    setInventory(copy);
                  } else
                    setInventory((prev) => [
                      ...prev,
                      {
                        name: item[0].name,
                        price: 49.99,
                        imageURL: item[0].cover.image_id,
                        quantity: 1,
                        URL: item[0].slug,
                      },
                    ]);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="main-container storyline">
            <h3>About this game:</h3>
            <p>{item[0].storyline || item[0].summary}</p>
          </div>
        </main>
      ) : item.length === 0 && !loading ? (
        <h1 className="not-found">404 Not Found</h1>
      ) : null}
    </>
  );
};

export default Items;
