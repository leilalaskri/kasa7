import React from "react";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Card from "../components/card.jsx";
import Banner from "../components/banner";
import image from "../assets/banner.png";
import '../styles/home.css';

export default function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    fetch("/data/logements.json")

      .then(response => response.json())
      .then(data => {
        setLogements(data)

      })

  }, [])
  

  return (
    <main className="main">
      <Banner image={image} text={'Chez vous, partous ou ailleur'} />
      <div className="listelogements">

        {logements.map((logement) => {
          return (
            <>
              <div className="appartement">
                <Link to={`/logement/${logement.id}`}  >
                <Card image={logement.cover} title={logement.title} />
                </Link>

              </div>
            </>
          )
        })}
      </div>
    </main>
  );
};







