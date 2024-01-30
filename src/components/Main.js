import React from "react";
import emaillogo from "../images/email-svgrepo-com.svg";
import linkedinlogo from "../images/linkedin-svgrepo-com.svg";


export default function Main() {
    return (
        <div className="main--container">
            <h3 className="main--heading main--content">
                Julian Renteria A.
            </h3>
            <h4 className="main--h4--one main--content">
                FullStack Student in Code C13
            </h4>
            <span className="main--span--two main--content">
                Website Link Channel
            </span>

            <div className="btn--class">

                <a href="mailto:Julianrenteria57.jr@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button className="main--btn btn--email" >
                        <img src={emaillogo} alt="Email Icon" className="email" /> Email 
                    </button>
                </a>

                <a href="https://www.linkedin.com/in/ti-julianrent-lordshadow" target="_blank" rel="noopener noreferrer">
                    <button className="main--btn btn--linkedin">
                        <img src={linkedinlogo} alt="LinkedIn Icon" className="linkedin" /> LinkedIn
                    </button>
                </a>
            </div>

            <div className="main--about--interest">
                <h3>About</h3>
                <p>Software development technician with experience in design,
                    installation and preventive maintenance of software and hardware.
                    Passionate about technology. Student of the School of Development
                    Code C13, where my goal to improve and expand my knowledge of IT..</p>
                <h3>Interest</h3>
                <p>Técnico en desarrollo de software con experiencia en diseño,
                    instalación y mantenimiento preventivo de software y hardware.
                    Apasionado por la tecnología. Estudiante de la Escuela de Desarrollo
                    Código C13, donde mi objetivo de mejorar y ampliar mis conocimientos de TI.</p>
            </div>
        </div>
    )

}