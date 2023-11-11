import React from 'react';
import styles from './assets/navbar.module.css';
import {Link} from "react-router-dom"
function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li><Link   to="/home" >HOME</Link> </li>
                <li><Link   to="/post" >POST Details</Link> </li>    
                <li><Link   to="/about" >ABOUT</Link> </li>       
             
            </ul>
        </nav>
    )
}

export default Navbar;
