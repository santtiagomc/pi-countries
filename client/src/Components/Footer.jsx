import React from "react";
import style from "./styles/Footer.module.css"
import linkedin from "./Img/linkedin.png"
import github from "./Img/github.png"
import email from "./Img/email.png"

export default function Footer() {
    return (
        <footer>
            <a href="https://github.com/santtiagomc" target="_blank" rel="noreferrer" className={style.icon}>
                <img src={github} alt="github" className={style.footerImg}/>
            </a>            
            <a href="https://linkedin.com/in/santtiagomc" target="_blank" rel="noreferrer" className={style.icon}>
                <img src={linkedin} alt="linkedin" className={style.footerImg}/>
            </a>
            <a href="mailto:santtiagomc@gmail.com" target="_blank" rel="noreferrer" className={style.icon}>
                <img src={email} alt="email" className={style.footerImg}/>
            </a>
        </footer>
    )
}