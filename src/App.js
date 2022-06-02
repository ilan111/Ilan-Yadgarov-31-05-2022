import React from "react";
import "./App.css";
import Navigation from "./Components/Navbar/Navigation";
import FavoritesPage from "./Pages/Favorites page/FavoritesPage";
import MainPage from "./Pages/Main page/MainPage";
import Background from "./images/bg.jpg";

function App() {
  return (
    <div className="App">
      <img className="App__bg" src={Background}></img>
      <Navigation />
      {/* <FavoritesPage /> */}
      {/* <MainPage /> */}
    </div>
  );
}

export default App;
