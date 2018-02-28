import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { store, history } from "./configureStore";
import PostsView from "./PostsView";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Form />
            <PostsView />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
