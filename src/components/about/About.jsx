import React from 'react'
import './about.css'
import about_me_img from '../../assets/img/me-in-office-6.png'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={about_me_img} alt='About Oybek Artikov' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years of working exeprience</small>              
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ freelance jobs worldwide</small>              
            </article>
            <article className='about__card'>
              <FaFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ completed projects</small>              
            </article>
          </div>

          <h4>
          I’m Oybek, a Software Developer working remotely as a Freelancer in Tashkent, Uzbekistan.
          </h4>
          <p>I’ve spent the past 3+ years learning about software development and working across different areas of web development; 
          front-end development, email design, app UI/UX.
          </p>
          <p>These days my time is spent studying, creating, researching, and coding. I also occasionally do freelance offers.</p>
          <p>Out of the office you’ll find me hanging out with friends, playing on console, and educating myself different subjects.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About
