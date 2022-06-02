import React from "react";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from "./Components/Navbar/Navigation";
import FavoritesPage from "./Pages/Favorites page/FavoritesPage";
import MainPage from "./Pages/Main page/MainPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainPage />
      <FavoritesPage />
    </div>
  );
}

export default App;
