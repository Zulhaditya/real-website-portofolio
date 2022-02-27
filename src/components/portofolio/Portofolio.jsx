import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portofolio1.png'
import IMG2 from '../../assets/portofolio2.jpg'
import IMG3 from '../../assets/portofolio3.jpg'
import IMG4 from '../../assets/portofolio4.jpg'
import IMG5 from '../../assets/portofolio5.jpg'
import IMG6 from '../../assets/portofolio6.jpg'

const data = [
  {
    id:1,
    image:IMG1,
    title: 'DJI Dribble',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:2,
    image:IMG2,
    title: 'SF Air Jordan Product Website',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:3,
    image:IMG3,
    title: 'Fluid Official Website',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:4,
    image:IMG4,
    title: 'DailyFood Website',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:5,
    image:IMG5,
    title: 'Blue Sea Waves Flow With It Website Design',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:6,
    image:IMG6,
    title: 'Smart TV Concept',
    github: 'https://github.com',
    demo: 'https://github.com'
  },

]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portofolio__item'>
                <div className="portofolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portofolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portofolio