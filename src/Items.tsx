import { useEffect, useState } from 'react';
import Header from './components/Header';
import getGameData, { NewGame } from './API';

interface Match {
  match: {
    params: {
      id: string;
    };
  };
}

const Items: React.FC<Match> = ({ match }): JSX.Element => {
  const [item, setItem] = useState<NewGame[]>([]);

  useEffect(() => {
    async function fetchItem() {
      const params = `fields cover.image_id,name,id,genres.*; where slug = "${match.params.id}"; limit 1;`;
      const data = await getGameData(params);
      setItem(data);
    }
    fetchItem();
  }, [match.params.id]);

  return (
    <>
      <Header />
      <main />
    </>
  );
};

export default Items;
