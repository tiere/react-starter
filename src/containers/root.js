import {Route, Router, browserHistory} from "react-router";
import App from "../components/app";
import {Provider} from "react-redux";
import React from "react";
import {createStore} from "redux";
import reducers from "../reducers";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = (props) =>
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>;

export default Root;
