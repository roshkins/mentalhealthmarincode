import React, { Component } from "react";
import Providers from "./containers/providers";
import NewProvider from "./containers/new-provider";
import "./App.css";
import Landscape from "./landscape.jpg";
class App extends Component {
  constructor(params) {
    super(params);
    this.state = {
      providers: [],
      newProvider: {
        commonName: "",
        formalName: "",
        usageInstructions: ""
      }
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="Title">Here is a list of places you can seek help!</h1>
        <Providers />
        <NewProvider />
      </div>
    );
  }
}

export default App;
