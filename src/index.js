/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import store from "./redux/store.js";

// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// import { zhCN } from "@material-ui/core/locale";
// import * as locales from "@material-ui/core/locale";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
// import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

// import { I18nextProvider } from "react-i18next";
// import i18n from "./utils/i18n.js";

var hist = createBrowserHistory();

// const theme = createTheme(
//   {
//     palette: {
//       primary: { main: "#1976d2" },
//     },
//   },
//   locales
// );

ReactDOM.render(
  // <Suspense fallback={<div>Loading...</div>}>
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        {/* <Route path="/" component={Components} /> */}
      </Switch>
    </Router>
  </Provider>,
  // </Suspense>
  // </I18nextProvider>,
  document.getElementById("root")
);
