import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { store, history } from "./configureStore";
import Form from "./Form";
import "./App.css";
import Home from "./Home";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <div className="nav-bar">Posts</div>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Form} />
            <Route exact path="/post/:id" component={Form} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
