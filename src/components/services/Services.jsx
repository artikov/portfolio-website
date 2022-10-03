import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Creating Fully Responsive Websites</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Retouching Front-end</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Building Portfolio Websites</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Building Landing Pages</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Wordpress sites</p>
            </li>
          </ul>
        </article>

        {/* web-development */}

        <article className='service'>
          <div className="service__head">
            <h3>Web-Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Creating Fully Functional Web Apps</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Online eCommerce Stores</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Web Development with Python</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Developing Back-end of a Website</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Database Management Systems</p>
            </li>
            {/* <li>
              <BsCheckLg className='service__list-icon'/>
              <p></p>
            </li> */}
          </ul>
        </article>

        {/* content-creation */}

        <article className='service'>
          <div className="service__head">
            <h3>Other Services</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Software Development</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>iOS App Development</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>Database Integration</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon'/>
              <p>APIs and others</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services