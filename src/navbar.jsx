import React from 'react';
import styles from './assets/navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Posts">Posts</a></li>      
                <li><a href="#About">About</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
