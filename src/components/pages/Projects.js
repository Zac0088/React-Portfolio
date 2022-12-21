import React from 'react';
import firstproject from '../../Assets/firstproject.png'
import notetaker from '../../Assets/notetaker.png'
import passwordgen from'../../Assets/passwordgen.png'
import renters from '../../Assets/renters.png'
import takemeaway from '../../Assets/takemeaway.png'
import timedquiz from '../../Assets/timedquiz.png'

export default function Projects() {
  return (
    <div>
      <h1 className='topText'>Projects</h1>
      <div className='boxText box'>
        <div class= "example">
          <a target="_blank" href='https://github.com/Zac0088/Horiseon-webpage-challenge'>
            <img src={firstproject} alt="Horiseon webpage" width="600" height="400"/>
          </a>
        </div>

        <div class= "example">
          <a target="_blank" href='https://github.com/Zac0088/Express-JS-Note-Taker'>
            <img src={notetaker} alt="Note taker" width="600" height="400"/>
          </a>
        </div>

        <div class= "example">
          <a target="_blank" href='https://github.com/Zac0088/Password-Generator'>
            <img src={passwordgen} alt="Password generator" width="600" height="400"/>
          </a>
        </div>

        <div class= "example">
          <a target="_blank" href='https://github.com/Zac0088/Timed-Quiz'>
            <img src={timedquiz} alt="Timed quiz" width="600" height="400"/>
          </a>
        </div>

        <div class= "example">
          <a target="_blank" href='https://github.com/Zac0088/Rental-Property-Project'>
            <img src={renters} alt="Renters" width="600" height="400"/>
          </a>
        </div>

        <div class= "example">
          <a target="_blank" href='https://github.com/AndrewDippel/Trip-Itinerary'>
            <img src={takemeaway} alt="Take me away" width="600" height="400"/>
          </a>
        </div>
      </div>
    </div>
  );
}
