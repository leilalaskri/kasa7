import React from "react";
import { NavLink } from 'react-router-dom';

import '../styles/error.css';

export default function Error()  {
    

    return (
        
            <div className="divError">
                <h2>404</h2>
                <div className='paragraphe'>
                <p>Oups! La page que </p> 
                <p> vous demandez n'existe pas.</p>
                </div>
                <NavLink to="/" exact>
                    Retourner sur la page d’accueil
                </NavLink>
            </div>
        );
    }



