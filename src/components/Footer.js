import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
    <Footer>
        <p id='git'><a href='https://github.com/Zac0088'><FontAwesomeIcon icon ={faGithub} /></a></p>
        <p id='linkdin'><a href='https://github.com/Zac0088'><FontAwesomeIcon icon ={faLinkedin} /></a></p>
        <p id='git'><a href='https://github.com/Zac0088'><FontAwesomeIcon icon ={faDiscord} /></a></p>

    </Footer>
  );
}