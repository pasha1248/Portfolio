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
              <small>7+ months</small>
            </article>
            <article className='about__card'>
              <ImBooks className='about__icon' />
              <h5>Projects</h5>
              <small>30+</small>
            </article>
          </div>
          <p>
            Hello everyone, my name is Paul and I am front-end developer. My
            training started with HTML and CSS. After that I started to teach
            Java Script on the course of Bogdan Stashchuk "Complete JavaScript
            Course for Beginners". After the course, I wrote several training
            projects such as ToDo List. Now I'm learning React / Redux.
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
