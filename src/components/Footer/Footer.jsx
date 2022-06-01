import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <h2>Thank you for visiting</h2>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

   
    </footer>
  )
}

export default Footer