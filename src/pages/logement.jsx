import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import Tag from "../components/tags"
import Host from "../components/host";
import Rate from "../components/Rating";
import Collapsible from "../components/Collapse";
import Slider from '../components/Slider'
import droite from "../components/icons/droite.png";
import '../styles/logement.css';




export default function Logement() {
  const { id } = useParams()
  const [logement, setLogement] = useState(null)


  useEffect(() => {
    fetch("/data/logements.json")

      .then(response => response.json())
      .then(logements => {

        const foundLogement = logements.find((logement) => logement.id === id);
        setLogement(foundLogement)

      })
  }, [id])
  console.log(logement)


  return (

    <div>

      {logement && <>
        <main className="logement">
          <Slider dataSlider ={logement.pictures}/>

          <section>
            <div className="logement__content">
              <div className="logement__informations">
                <h1 className="logement__title">{logement.title}</h1>
                <p className="logement__location">{logement.location}</p>
                <div className="tags-Box">
                  {logement.tags.map((tag) =>
                    <Tag tag={tag}
                      key={tag}
                    />)}


                </div>
              </div>
              <div className="Host__Rating">
                
                <div className="rating__Box">
                    <Rate score={logement.rating} />
                </div>
                <div className="Host__Box">
                  <Host
                    hostName={logement.host?.name}
                    hostPicture={logement.host?.picture}
                  />
                </div>
              </div>


            </div>
            <div className="logement-collapse">
              <Collapsible label="Description">
                {logement.description}

              </Collapsible>

              <Collapsible label="Equipements"  img src={droite.png}  >
                {logement.equipments.map((equipement) =>
                (<p>{equipement} </p>

                ))}

              </Collapsible>
            </div>
          </section>
        </main>


      </>}
    </div>
  )
}
