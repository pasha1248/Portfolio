import React from 'react'
import './Portfolio.scss'


const Portfolio = () => {
  return (
    <section id='portfolio'>

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__items'>
          <div className='portfolio__item-img'>
            <img src="https://www.setup.ru/s/i/main/persons/new/1.png" alt="" />
          </div>
          <h3>Project links</h3>
          <a href="/" target='_blank'className='btn'>Github</a>
          <a href="/" target='_blank' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='portfolio__items'>
          <div className='portfolio__item-img'>
            <img src="https://www.setup.ru/s/i/main/persons/new/1.png" alt="" />
          </div>
          <h3>Project links</h3>
          <a href="/" target='_blank'className='btn'>Github</a>
          <a href="/" target='_blank' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='portfolio__items'>
          <div className='portfolio__item-img'>
            <img src="https://www.setup.ru/s/i/main/persons/new/1.png" alt="" />
          </div>
          <h3>Project links</h3>
          <a href="/" target='_blank'className='btn'>Github</a>
          <a href="/" target='_blank' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='portfolio__items'>
          <div className='portfolio__item-img'>
            <img src="https://www.setup.ru/s/i/main/persons/new/1.png" alt="" />
          </div>
          <h3>Project links</h3>
          <a href="/" target='_blank'className='btn'>Github</a>
          <a href="/" target='_blank' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='portfolio__items'>
          <div className='portfolio__item-img'>
            <img src="https://www.setup.ru/s/i/main/persons/new/1.png" alt="" />
          </div>
          <h3>Project links</h3>
          <a href="/" target='_blank'className='btn'>Github</a>
          <a href="/" target='_blank' className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='portfolio__items'>
          <div className='portfolio__item-img'>
            <img src="https://www.setup.ru/s/i/main/persons/new/1.png" alt="" />
          </div>
          <h3>Project links</h3>
          <a href="/" target='_blank'className='btn'>Github</a>
          <a href="/" target='_blank' className='btn btn-primary'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio