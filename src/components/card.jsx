import React from "react";

import '../styles/card.css';

const Card = ({ image, title }) => {
  return (
    <div className="bloc-card">
      <img src={image} className="img-appartement" />
      <div className="img__filter"></div>
      <h2 className="titre">{title}</h2>
    </div>
  );
};

export default Card;


