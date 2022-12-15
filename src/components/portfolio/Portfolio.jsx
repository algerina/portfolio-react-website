import React from 'react'  /* eslint-disable */
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.png'


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
    title: "My Portfolio",
    technologies: ["Technologies: React, CSS                                                   "],
    github: "https://github.com/algerina/portfolio-react-website",
    demo: ""
  },
  {
    id:3,
    image: IMG3,
    title: "Kyram Recipes",
    technologies: ["Technologies: RoR, Devise, Postgresql, Gitflow, Capybara, Rspec, Bootstrap"],
    github: "https://github.com/algerina/recipe-app",
    demo: "https://kyramrecipes.herokuapp.com/users/sign_in"
  },
  {
    id:4,
    image: IMG4,
    title: "Space Travelers Hub",
    technologies: ["Technologies: React, Redux, Css, API"],
    github: "https://github.com/algerina/space-travelers-hub",
    demo: "https://gifted-mcclintock-212dd1.netlify.app/"
  },
  {
    id:5,
    image: IMG5,
    title: "TvMaze",
    technologies: ["Technologies: JavaScript, Html, Css, API, Webpack"],
    github: "https://github.com/algerina/Group-Capstone-",
    demo: "https://mutinhiri.github.io/Group-Capstone-/dist/"
  },
  {
    id:6,
    image: IMG6,
    title: "Mobile World Congress 2021",
    technologies: ["Technologies: JavaScript, Html, Css"],
    github: "https://github.com/algerina/Capstone1",
    demo: "https://rawcdn.githack.com/algerina/Capstone1/7cebc30ff90cfef9437b1af73ec6f73c73f79ff9/index.html"
  },
  {
    id:7,
    image: IMG7,
    title: "Leaderbord",
    technologies: ["Technologies: ES6, Webpack, HTML, CSS, API"],
    github: "https://github.com/algerina/Leaderboard",
    demo: "https://algerina.github.io/Leaderboard/dist/"
  },
  {
    id:8,
    image: IMG8,
    title: "Awesome Books",
    technologies: ["Technologies: JavaScript, HTML, CSS"],
    github: "https://github.com/algerina/Awesome-books",
    demo: "https://amelbooks.netlify.app/"
  },
  {
    id:9,
    image: IMG9,
    title: "My TO DO List",
    technologies: ["Technologies: JavaScript, HTML,CSS,Webpack"],
    github: "https://github.com/algerina/My-To-do-list",
    demo: "https://algerina.github.io/My-To-do-list/dist/"
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