import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: "RentYacht",
    technologies: ["Technologies: Ruby on Rails,  Devise-jwt, Postgresql, Redux, Bootstrap"],
    github: "https://github.com/algerina/rent-yacht-frontend",
    demo: "https://wishyacht.netlify.app/login"
  },
  {
    id:2,
    image: IMG2,
    title: "Wallet",
    technologies: ["Technologies RoR, Capybara, Rspec, Bootstrap, Devise"],
    github: "https://github.com/algerina/yourWallet",
    demo: "https://shrouded-dusk-01690.herokuapp.com/"
  },
  {
    id:3,
    image: IMG3,
    title: "Project1",
    technologies: ["RoR", "React", "Devise jwt", "Postgresql"],
    github: "http://github.com",
    demo: "https://dribbble.com/Alien_pixels"
  },
  {
    id:4,
    image: IMG4,
    title: "Project1",
    technologies: ["RoR", "React", "Devise jwt", "Postgresql"],
    github: "http://github.com",
    demo: "https://dribbble.com/Alien_pixels"
  },
  {
    id:5,
    image: IMG5,
    title: "Project1",
    technologies: ["RoR", "React", "Devise jwt", "Postgresql"],
    github: "http://github.com",
    demo: "https://dribbble.com/Alien_pixels"
  },
  {
    id:6,
    image: IMG6,
    title: "Project1",
    technologies: ["RoR", "React", "Devise jwt", "Postgresql"],
    github: "http://github.com",
    demo: "https://dribbble.com/Alien_pixels"
  },
  {
    id:7,
    image: IMG1,
    title: "Project1",
    technologies: ["RoR", "React", "Devise jwt", "Rspec", "Postgresql"],
    github: "http://github.com",
    demo: "https://dribbble.com/Alien_pixels"
  },
  {
    id:8,
    image: IMG1,
    title: "Project1",
    technologies: ["RoR", "React", "Devise jwt", "Rspec", "Postgresql"],
    github: "http://github.com",
    demo: "https://dribbble.com/Alien_pixels"
  },
  {
    id:9,
    image: IMG1,
    title: "Project1",
    technologies: ["RoR", "React", "Devise jwt", "Rspec", "Postgresql"],
    github: "http://github.com",
    demo: "https://dribbble.com/Alien_pixels"
  }

]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, technologies, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
             <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <ul className="portfolio__item-list">
              {
                technologies.map(item =>  <li key={item}>{item}</li> )
              }
             </ul>
            <div className="portfolio__item-cta">
              
            <a href={github} className="btn" target='_blank'>Github</a>
            <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
            </div>
       </article>
          )
        })
      }

      </div>
    </section>
  )
}

export default Portfolio