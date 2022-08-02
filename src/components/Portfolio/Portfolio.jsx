/** @format */

import React from 'react'
import './Portfolio.css'
import pizzaFoto from '../../assets/myProject/Pizza.png'
import posfolio from '../../assets/myProject/porfolio.png'
import mui from '../../assets/myProject/mUi.png'
import pizza1 from '../../assets/myProject/PizzaShon.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__items'>
          <div className='portfolio__item-img'>
            <img src={pizzaFoto} alt='photo4' />
          </div>
          <h3>Project </h3>
          <a
            href='https://github.com/pasha1248/E-commerce'
            target='_blank'
            rel='noreferrer'
            className='btn'
          >
            Github
          </a>
          <a
            href='https://spectacular-druid-0dfa88.netlify.app/'
            target='_blank'
            className='btn btn-primary'
            rel='noreferrer'
          >
            Live Demo
          </a>
        </article>
        <article className='portfolio__items'>
          <div className='portfolio__item-img'>
            <img src={posfolio} alt='photo3' />
          </div>
          <h3>Project </h3>
          <a
            href='https://github.com/pasha1248/Portfolio'
            target='_blank'
            rel='noreferrer'
            className='btn'
          >
            Github
          </a>
          <a
            href='https://peaceful-bubblegum-d0b206.netlify.app/'
            target='_blank'
            className='btn btn-primary'
            rel='noreferrer'
          >
            Live Demo
          </a>
        </article>
        <article className='portfolio__items'>
          <div className='portfolio__item-img'>
            <img src={mui} alt='photo2' />
          </div>
          <h3>Project </h3>
          <a
            href='https://github.com/pasha1248/Meterial-UI-Study'
            target='_blank'
            className='btn'
            rel='noreferrer'
          >
            Github
          </a>
          <a
            href='https://magenta-biscochitos-73e7dc.netlify.app/'
            target='_blank'
            className='btn btn-primary'
            rel='noreferrer'
          >
            Live Demo
          </a>
        </article>
        <article className='portfolio__items'>
          <div className='portfolio__item-img'>
            <img src={pizza1} alt='photo1' />
          </div>
          <h3>Project </h3>
          <a
            href='https://github.com/pasha1248/React-E-commers'
            target='_blank'
            rel='noreferrer'
            className='btn'
          >
            Github
          </a>
          <a
            href='https://symphonious-lolly-23e9e8.netlify.app/'
            target='_blank'
            className='btn btn-primary'
            rel='noreferrer'
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
