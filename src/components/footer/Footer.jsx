import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#index" className="footer__logo">Oybek Artikov</a>

      <ul className='permalinks'>
        <li><a href="#index">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com/artikov08" target='_blank' rel="noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com/artikxv" target='_blank' rel="noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com/artikov08" target='_blank' rel="noreferrer"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/artikov" target='_blank' rel="noreferrer"><FaLinkedinIn /></a>
        <a href="https://github.com/artikov" target='_blank' rel="noreferrer"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Oybek Artikov. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer