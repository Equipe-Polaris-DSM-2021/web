import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Map from "./pages/Map";
import Login from "./pages/Login";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/map" component={Map} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;