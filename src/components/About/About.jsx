/** @format */

import React from 'react'
import './About.css'
import { BsFillAwardFill } from 'react-icons/bs'
import { ImBooks } from 'react-icons/im'
import Photo from '../../assets/image.jpeg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Photo} alt='' />
          </div>
        </div>

        <div className=''>
          <div className='about__cards'>
            <article className='about__card'>
              <BsFillAwardFill className='about__icon' />
              <h5>Experience</h5>
              <small>10+ months</small>
            </article>
            <article className='about__card'>
              <ImBooks className='about__icon' />
              <h5>Projects</h5>
              <small>30+</small>
            </article>
          </div>
          <p>
            {`Hello, my name is Pavlo and I am a Full-Stach Developer. My main
            specialization is a Web Application development and my main
            programming languages are JavaScript and TypeScript.

              In my projects, I used such technologies as React, Angular, Node.js, Nest.js,
            Express.js, and many others. I also have experience working with
            databases such as Postgres SQL and MongoDB.
              A little about the work experience. In my portfolio, I have different types of projects. In
            general, these are e-commers, fintech, and delivery projects. I also have
            experience working in a team, where I developed both back-end and
            front-end. I like to create interesting projects and functional ones
            for the`}
          </p>

          <a href='#contact' className='btn btn-primary'>
            Contacts
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
