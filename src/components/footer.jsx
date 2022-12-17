import React from "react";

import logo from '../assets/logofooter.png'
import '../styles/footer.css';

export default function Footer() {
    
        return (
            <footer className="footer">
                <img src={logo} alt="Logo Kasa" />
                <p >
                © 2022 Kasa. All rights reserved
                </p>
            </footer>
        );
        }




