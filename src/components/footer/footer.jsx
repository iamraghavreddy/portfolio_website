import React from 'react'
import "./footer.css"
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>RAGHAV</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/raghavendra-reddy-4501271b6/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/iamraghavreddy" target='_blank'><BsGithub/></a>
        <a href="https://instagram.com/iamraghavreddy?igshid=YmMyMTA2M2Y=" target='_blank'><BsInstagram/></a>
      </div>
    </footer>
  )
}

export default footer