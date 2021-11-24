import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MapFilterProvider } from "./context/MapFilterContext";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import EditLogin from "./pages/EditLogin";

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
        <Route path="/editlogin" component={EditLogin} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
