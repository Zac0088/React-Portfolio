import React from 'react';

export default function Contact() {
  const handleSubmit = (event) => {
  }
  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='Name'>Name:</label><br />
        <input type="text" id='name' /><br />
        <label htmlFor='email'>Email:</label><br />
        <input type="email" id="eamil" /><br />
        <label htmlFor='message'>Message:</label><br />
        <textarea id="message" />
        <button type='Submit'>Send</button>
      </form>
    </div>
  );
}
