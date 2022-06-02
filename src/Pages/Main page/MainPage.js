import React from "react";
import MainCard from "../../Components/Main Card/MainCard";
import Search from "../../Components/Search/Search";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="mainPage__container">
      <Search />
      <MainCard />
    </div>
  );
}

export default MainPage;
