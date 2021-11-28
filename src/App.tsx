import React from "react";

import "./styles/global.css";
import "./styles/vars.css";
import "leaflet/dist/leaflet.css";

import Routes from "./routes";

import createHistory from "history/createBrowserHistory";
import { Router } from "react-router";
const history = createHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};

export default App;
