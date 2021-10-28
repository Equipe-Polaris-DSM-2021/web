import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MapFilterProvider } from "./context/MapFilterContext";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/explore"
          exact
          render={() => (
            <MapFilterProvider>
              <Explore />
            </MapFilterProvider>
          )}
        />

        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
