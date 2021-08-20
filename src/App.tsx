import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header, { Inventory } from './components/Header';
import getGameData, { NewGame } from './API';
import './styles/App.css';

interface Props {
  inventory: Inventory[];
  setInventory: React.Dispatch<React.SetStateAction<Inventory[]>>;
}

const App: React.FC<Props> = ({ inventory, setInventory }): JSX.Element => {
  const [newGames, setNewGames] = useState<NewGame[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    async function fetchNewGames() {
      const params =
        'fields cover.image_id,name,id,artworks.image_id,slug; where rating >= 80 & rating_count >= 5 & first_release_date > 1609426800; limit 6; sort first_release_date desc;';
      const data = await getGameData(params);
      setNewGames(data);
    }
    fetchNewGames();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
      if (counter >= newGames.length - 1) setCounter(0);
    }, 7500);
    return () => {
      clearInterval(interval);
    };
  }, [counter, newGames.length, newGames]);

  return (
    <>
      <Header inventory={inventory} setInventory={setInventory} />
      <main>
        <h3>Newest Popular Releases</h3>
        <div className="new-games-container">
          {newGames.length > 0 && (
            <div
              className="show"
              style={{
                backgroundImage: `url("https://images.igdb.com/igdb/image/upload/t_screenshot_huge/${newGames[counter]?.artworks[0].image_id}.jpg")`,
              }}
            >
              <Link className="link" to={`/store/${newGames[counter]?.slug}`}>
                Browse
              </Link>
            </div>
          )}
          <div className="side">
            {newGames.map((arg, i) => (
              <div
                key={arg.id}
                className={i === counter ? 'focus' : ''}
                onClick={() => setCounter(i)}
                onKeyPress={() => setCounter(i)}
                role="menuitem"
                tabIndex={i}
              >
                <img
                  src={`https://images.igdb.com/igdb/image/upload/t_cover_small/${arg.cover.image_id}.jpg`}
                  alt="Game Cover"
                />
                <p>{arg.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
