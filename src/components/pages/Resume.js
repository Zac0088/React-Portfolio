import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1 className="topText">Resume</h1>
      <div className='frontEnd'>
        <h2>Front end Proficiency</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JQuery</li>
          <li>Bulma CSS</li>
          <li>bootstrap</li>
          <li>Responsive Design</li>
          </ul>
    </div>
    <div className='backEnd'>
      <h2>Back End Proficiency</h2>
      <ul>
        <li>Heroku</li>
        <li>Node.JS</li>
        <li>Express.JS</li>
        <li>GraphQl</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Rest</li>
        <li>MYSQL</li>
        <li>Sequilize</li>
      </ul>
    </div>
    </div>
  );
}
