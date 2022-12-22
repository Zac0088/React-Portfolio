import React from 'react';
import profilepic from '../../Assets/profilepic.jpg'


export default function Home() {
  return (
    <div>
      <h1 className='topText'>About Me</h1>
      <div className='aboutTextStyle'>
        <h2>
          Hello, Welcome to my Portfolio!!
        </h2>
        <h2>
          My name is Zac Smart
          <img src={profilepic} alt="selfie" width="190" height="250" className='selfie'/>
        </h2>
        <p>I am a junior software engineer living in Melbourne Victoria studying Full Stack Web Development through Syndey University in sunny Austrtalia.
          I started this adventure as a fresh start for myself after having various jobs in the past and never really enjoying my work.
           After the very first class i was hooked on the endless possibilites that being a web developer offered me.
           In my Spare time i love  playing video games, photograpy and Basketball, i am also a 90s Hip Hop addict.
           Please look through the various applications I have worked on over my course work, but also watch this space as my journey continues outside of my current course and I Develop as a Full stack web Developer.
          Feel free to reach out to me im looking forward to hearing from you!!
          Regards 
          Zac Smart


        </p>
      </div>
    </div>
    
  );
}
