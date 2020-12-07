import React from "react";
import "./App.css";
import Weather from "./weatherComponent";
//101190261
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Weather/>
      </div>
    );
  }
}

export default App;
