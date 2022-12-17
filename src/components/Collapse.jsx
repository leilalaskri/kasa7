import React from 'react';
import { useState } from "react";

import '../styles/Collapse.css';
import bas from "../assets/bas.png";
import haut from "../assets/haut.png";

const Collapsible = (props) => {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  return (
    <section className='collapse'>
    <div>
      <div >
        <button className='boutton' onClick={toggle}>{props.label}  
        
        <div> 
          {open ? <img src={haut} alt="haut" /> : <img src={bas} alt="bas"/>}
          </div>
        </button>
      </div>
      <div className={open ? "content-show" : "content-parent"}>
        <div className='content'> {props.children} </div>
      </div>
    </div>
    </section>
  );
};
export default Collapsible;