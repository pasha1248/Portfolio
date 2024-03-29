/** @format */

import React from 'react'
import './Experience.css'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3Full } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import { BsBootstrapFill } from 'react-icons/bs'
import { SiTailwindcss } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { SiRedux } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import { SiExpress } from 'react-icons/si'
import { SiNestjs } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { FaSass } from 'react-icons/fa'
import { SiPostgresql } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'
import { SiReactrouter } from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Front-end Development</h3>
          <div className='experience__content'>
            <article className='experience__tails'>
              <AiOutlineHtml5 />
              <h4>HTML</h4>
            </article>
            <article className='experience__tails'>
              <DiCss3Full />
              <h4>CSS</h4>
            </article>
            <article className='experience__tails'>
              <SiJavascript />
              <h4>JavaScript</h4>
            </article>
            <article className='experience__tails'>
              <BsBootstrapFill />
              <h4>Bootstrap</h4>
            </article>
            <article className='experience__tails'>
              <SiTailwindcss />
              <h4>Tailwind</h4>
            </article>
            <article className='experience__tails'>
              <GrReactjs />
              <h4>React</h4>
            </article>
            <article className='experience__tails'>
              <SiRedux />
              <h4>Redux</h4>
            </article>{' '}
            <article className='experience__tails'>
              <BsGithub />
              <h4>Git</h4>
            </article>
            <article className='experience__tails'>
              <SiExpress />
              <h4>Express.js</h4>
            </article>
            <article className='experience__tails'>
              <SiNestjs />
              <h4>Nest.js</h4>
            </article>
            <article className='experience__tails'>
              <SiTypescript />
              <h4>TypeScript</h4>
            </article>
            <article className='experience__tails'>
              <SiPostgresql />
              <h4>PostgreSQL</h4>
            </article>
            <article className='experience__tails'>
              <FaSass />
              <h4>Scss</h4>
            </article>
            <article className='experience__tails'>
              <FaDatabase />
              <h4>TypeORM</h4>
            </article>
            <article className='experience__tails'>
              <SiReactrouter />
              <h4>React-Router</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
