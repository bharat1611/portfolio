import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'
const footer = () => {
  return (
    <footer>
      <a href = "#" className = 'footer__logo'>Home</a>

      <ul className='permalinks'>
        <li><a href ="#about">About</a></li>
        <li><a href ="#experience">Experience</a></li>
        <li><a href ="#services">Services</a></li>
        <li><a href ="#portfolio">Portfolio</a></li>
        {/* <li><a href ="#testimonials"/>Testimonials</li> */}
        <li><a href ="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href = "https://www.linkedin.com/in/bharat-upadhyay-05b939223/"><BsLinkedin/></a>
        <a href = "https://github.com/bharat1611"><BsGithub/></a>
        <a href = "mailto:upadhyay.bharat.2017641@gmail.com"><BiLogoGmail/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer
