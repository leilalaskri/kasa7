import React from "react";

import '../styles/banner.css';

export default function Banner ({ image, text })  {
  return (
    <div className="homeBanner">
      <img src={image} alt="" className="homeBanner__img" />
      <h2 className="homeBanner__title">{text}</h2>
    </div>
  );
};




