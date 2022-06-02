import React from "react";
import "./App.css";
import Navigation from "./Components/Navbar/Navigation";
import Background from "./images/bg.jpg";

function App() {
  return (
    <div className="App">
      <img className="App__bg" alt="background" src={Background}></img>
      <Navigation />
    </div>
  );
}

export default App;
