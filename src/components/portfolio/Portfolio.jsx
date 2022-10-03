import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img/password-app.png'
import IMG2 from '../../assets/img/flash-card-app.png'
import IMG3 from '../../assets/img/kanye-quotes-app.png'
import IMG4 from '../../assets/img/work1.jpg'
import IMG5 from '../../assets/img/keeper-app-react.png'
import IMG6 from '../../assets/img/todo-app-nodejs.png'
import CERT1 from '../../assets/img/NodeJS.jpg'
import CERT2 from '../../assets/img/WebDev.jpg'


const data = [
  {
    id: 1,
    image: IMG6,
    title: 'Todo List App (Node)',
    github: 'https://sheltered-spire-77615.herokuapp.com/',
    demo: 'https://sheltered-spire-77615.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG5,
    title: 'Keeper App (React)',
    github: 'https://shielded-mountain-75557.herokuapp.com/',
    demo: 'https://shielded-mountain-75557.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Workout Tracker (Python)',
    github: 'https://github.com/artikov/workout-tracker',
    demo: 'https://repl.it'
  },
  {
    id: 4,
    image: IMG2,
    title: 'Flash Card App (Python)',
    github: 'https://github.com/artikov/arabic-flash-card-app',
    demo: 'https://repl.it'
  },
  {
    id: 5,
    image: IMG4,
    title: 'E-Commerce Web App (Python & Django)',
    github: 'https://github.com/artikov',
    demo: 'https://repl.it'
  },
  {
    id: 6,
    image: IMG1,
    title: 'Password App (Python)',
    github: 'https://github.com/artikov',
    demo: 'https://repl.it'
  },
  
]

const certificates = [
  {
    id: 1,
    image: CERT1,
    title: 'NodeJS & Express',
    subtitle: 'Udemy'
  },
  {
    id: 2,
    image: CERT2,
    title: 'Web Development',
    subtitle: 'Udemy'
  },
  {
    id: 2,
    image: CERT2,
    title: 'Computer Science 50',
    subtitle: 'Harvard'
  },
]


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
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
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