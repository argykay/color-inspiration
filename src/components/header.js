import React from "react";
import "../styling/App.css";
import SearchImages from "./searchImages";

const backgroundImg = {
  src: "https://source.unsplash.com/1600x900/?color",
  title: "Search photos for colour inspiration!",
};

function Header() {
  return (
    <div
      className="backImg"
      style={{ backgroundImage: `url("${backgroundImg.src}")` }}
    >
      <div className="titleBanner">
        <div>
          <p>
            Made with love by{" "}
            <a
              href="https://argykay.github.io/Personal-Website/"
              target="_blank"
            >
              Konstantina
            </a>
            . All photo credits to{" "}
            <a href="https://unsplash.com/developers" target="_blank">
              Unsplash
            </a>
            .
          </p>
        </div>
        <h1 className="title">{backgroundImg.title}</h1>
        <SearchImages />
      </div>
    </div>
  );
}

export default Header;
