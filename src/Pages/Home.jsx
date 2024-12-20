import React from "react";
import NewsSec from "../Components/NewsSec";
import Media from "../Components/Media";
import './Home.css'
import Testimony from "../Components/Testimony"
import HomeHero from "../Components/HomeHero";

export default function home() {
  return (
    <div className="HomeContainer">
      <div className="HomeContent">
        <HomeHero />
        <NewsSec/>
        <Testimony />
        <Media/>
      </div>
    </div>
  );
}
