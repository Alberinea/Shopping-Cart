import { useState } from 'react';
import { BrowserRouter as Browser, Switch, Route } from 'react-router-dom';
import App from './App';
import Store from './Store';
import Items from './Items';
import { Inventory } from './components/Header';

const Routes = (): JSX.Element => {
  const [inventory, setInventory] = useState<Inventory[]>([]);

  return (
    <Browser>
      <Switch>
        <Route path="/" exact>
          <App inventory={inventory} setInventory={setInventory} />
        </Route>
        <Route path="/store" exact>
          <Store inventory={inventory} setInventory={setInventory} />
        </Route>
        <Route
          path="/store/:id"
          exact
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          render={({ match }: any) => (
            <Items
              match={match}
              inventory={inventory}
              setInventory={setInventory}
            />
          )}
        />
      </Switch>
    </Browser>
  );
};

export default Routes;
