import React from "react";

/*
  This reproduces the top section of your HTML.
  The marquee tag is deprecated in HTML5, but kept here
  since your original used it. You may replace it with
  an animated CSS/JS banner later.
*/
export default function Header() {
  return (
    <header id="part1" role="banner">
      <div className="header1">
        <marquee behavior="scroll" direction="left">...plug to all wears and fabrics</marquee>
      </div>

      <div className="header2 nav-links" role="navigation" aria-label="Main">
        <a href="#outfit">Outfit</a>
        <a href="#style">Style</a>
        <a href="#seasonal">Seasonal</a>
        <a href="#event">Events</a>
      </div>

      <div className="text1">
        <p><span className="highlight">Let...</span></p>
      </div>

      <div className="h">
        <h1>
          <span className="fashion">Fashion</span><br />
          <span className="speaks">Speaks.</span>
        </h1>
      </div>

      <div className="text2">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo temporibus
          <br /> autem amet labore qui optio, repellendus nulla repellat odit
          <br /> placeat dolore! Quis, nesciunt. Dolor reprehenderit
          <br /> exercitationem eum officia quae iste.
        </p>
      </div>
    </header>
  );
}
