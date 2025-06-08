import React from "react";
import "./App.css";

const Quote = ({ quote }) => {
  return (
    <div className="quote-card">
      <p className="quote-text">"{quote.quote}"</p>
      <p className="quote-author">— {quote.author || "Unknown"}</p>
      <p className="quote-tags">Tags: {quote.tags?.join(", ")}</p>
    </div>
  );
};

export default Quote;


