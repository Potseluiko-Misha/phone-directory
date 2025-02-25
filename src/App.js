import React, { Component } from "react";
import Header from "./Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          <div className="grid-container">
            <span className="grid-item">Shilpa</span>
            <span className="grid-item">88888888</span>
          </div>
          <div className="grid-container">
            <span className="grid-item">Srishti</span>
            <span className="grid-item">99999999</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
