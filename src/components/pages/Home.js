import React from 'react';
import './Home.css'

export default function Home() {
  return (
    <section className="about-me-container">
    <h2 id="about-me">About Me</h2>
    <div className='image-container'>
      <img src={require(`../../Assets/hero.png`).default}/>
      </div>
    </section>
  );
}
