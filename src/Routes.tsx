import { BrowserRouter as Browser, Switch, Route } from 'react-router-dom';
import App from './App';
import Store from './Store';
import Items from './components/Items';

const Routes = (): JSX.Element => {
  return (
    <Browser>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/store" exact component={Store} />
        <Route path="/store/:id" exact component={Items} />
      </Switch>
    </Browser>
  );
};

export default Routes;
