import React from "react";
import ReactDom from "react-dom";
import App from "./App/App";
import { HashRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from "./redux/rootReducer"

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDom.render(
  <Provider store={store}>
  <HashRouter>
    <App />
  </HashRouter>
  </Provider>,
  document.getElementById("root")
)
