import React from "react";
import Home from "./Home.js";
import MyProfile from "./MyProfile.js";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={MyProfile} />
        </div>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
