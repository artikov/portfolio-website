import React from 'react'
import './portfolio.css'
import {data, certificates} from '../../data'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github link</a>
                  {demo && <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a> }
                </div>
            </article>
            )
          })
        }

      </div>
        <br />
        <br />
      <h5>My Knowledge</h5>
      <h2>Certificates</h2>

      <div className="container certificates__container">
      {
          certificates.map(({id, image, title, subtitle}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio