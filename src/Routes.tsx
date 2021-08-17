import { BrowserRouter as Browser, Switch, Route } from 'react-router-dom';
import App from './App';
import Store from './Store';

const Routes = (): JSX.Element => {
  return (
    <Browser>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/store" exact component={Store} />
      </Switch>
    </Browser>
  );
};

export default Routes;
