import React from 'react';
// import './Footer.css';
export default function Footer() {
  const footerStyles = {
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    height: 50,
    width: 2000,
    
  };
  const iconStyles ={
    fontSize: '50px',
    margin:'auto',
    display: 'flex',
    justifyContent: 'center',
  }
  return (
    <footer style={footerStyles}>
        <a href= 'https://github.com/Zac0088'><i style={iconStyles} className='fa-brands fa-square-github' ></i></a>
        <a href='https://github.com/Zac0088'><i style={iconStyles} className='fa-brands fa-linkedin' ></i></a>
        <a href='https://github.com/Zac0088'><i style={iconStyles} className='fa-brands fa-discord' ></i></a>

    </footer>
  );
}