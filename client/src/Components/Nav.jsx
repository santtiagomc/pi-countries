import React, {useState}from "react";
import styles from "./styles/Nav.module.css"
import globe from "./Img/earthicon.png"
import { Link } from "react-router-dom";

export default function Nav () {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div  className={styles.titleContain}>
                <Link to='/' className={styles.titleName}>SPA COUNTRIES</Link>
            </div>
            <div className={`${styles.container2} ${isOpen && styles.open}`}>
                <Link to='/countries' className={styles.link}>Home</Link>
                <Link to='/activity' className={styles.link}>Crear Actividad</Link>
                <Link to='/about' className={styles.link}>About</Link>
                <a href="http://localhost:3000"><img className={styles.globe} src={globe} alt="globe"  /></a>
                <p className={styles.title}>SPA COUNTRIES</p>
            </div>
            <div className={`${styles.navToggle} ${isOpen && styles.open}`} onClick={() => setIsOpen(!isOpen)}>
                <div className={styles.bar}></div>
            </div>
        </div>
    )
}