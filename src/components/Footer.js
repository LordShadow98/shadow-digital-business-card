import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className="footer--container">
            <div className="footer--item">
                <a href="https://www.facebook.com/RenteriaAsprilla" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="footer--icon" />
                </a>
                <a href="https://www.instagram.com/julianrenteria57.jr?igsh=MWhzZmtnNmRtcW16MA==" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="footer--icon" />
                </a>
                <a href="https://github.com/LordShadow98" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="footer--icon" />
                </a>
            </div>
        </div>
    );
}