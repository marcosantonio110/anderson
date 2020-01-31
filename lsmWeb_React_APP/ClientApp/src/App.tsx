import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import "~/Components/dependecies";
import "~/config/ReactotronConfig";
import Global from "~/styles/global";
import Routes from "~/routes";

import history from "~/services/history";
import store from "~/store";

const App: React.FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <>
        <Routes />
      </>
      <Global />
    </Router>
  </Provider>
);

export default App;
