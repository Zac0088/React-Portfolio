import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkdin, faDiscord } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
    <Footer>
        <p id='git'><a target='_blank' href='https://github.com/Zac0088'><FontAwesomeIcon icon ={faGithub} /></a></p>

    </Footer>
  );
}