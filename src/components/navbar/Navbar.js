import React from "react";
import styles from "./Navbar.module.css";

function Navbar(){
    return(
        <div className={styles["navbar"]}>
            <div>
                <a href="#"className={styles["navbar-item"]}>About Us</a>
                <a href="#"className={styles["navbar-item"]}>For You</a>
                <a href="#"className={styles["navbar-item"]}>Services</a>
                <a href="#"className={styles["navbar-item"]}>Blog</a>
                <a href="#"className={styles["navbar-item"]}>Vlog</a>
                <a href="#"className={styles["navbar-item"]}>Contact</a>
            </div>
        </div>
    )
};

export default Navbar;