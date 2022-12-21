// import React from 'react';
// import firstproject from '../../Assets/firstproject.png'
// import notetaker from '../../Assets/notetaker.png'
// import passwordgen from'../../Assets/passwordgen.png'
// import renters from '../../Assets/renters.png'
// import takemeaway from '../../Assets/takemeaway.png'
// import timedquiz from '../../Assets/timedquiz.png'

export default function Projects() {
  return (
    <section className='project-container'>
      <h2 id="projects">Projects</h2>
      <div className='grid-container'>
        <div className='grid-item firstproject'>
          <div className='project-name'>
            <h3>Horiseon Website Refractor</h3>
            <span>First Project to refractor the Horiseon webpage</span>
          </div>
          <div className='grid-buttons'>
            <a href='https://github.com/Zac0088/Horiseon-webpage-challenge'>Github</a>
            <img src='{firstproject}' alt="Horiseon webpage">Screen Shot</img>
          </div>
        </div>

        
        <div className='grid-item notetaker'>
          <div className='project-name'>
            <h3>Express JS Note Taker</h3>
            <span>Note taking Application</span>
          </div>
          <div className='grid-buttons'>
            <a href='https://github.com/Zac0088/Express-JS-Note-Taker'>Github</a>
            <img src='{notetaker}' alt="note taker screenshot">Screen Shot</img>
          </div>
        </div>



      </div>
    </section>

    
  );
}
