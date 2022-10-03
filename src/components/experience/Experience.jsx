import React from 'react'
import './experience.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Advanced</small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Advanced</small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
          <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Back-end Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Advanced</small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Advanced</small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
          <div>
            <h4>MySql</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <HiBadgeCheck className='experience__details-icon' />
            <div>
              <h4>Pandas</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience