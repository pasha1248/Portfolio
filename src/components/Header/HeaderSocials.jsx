import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/pavlo-ivashkiv-045977230/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/pasha1248/" target='_blank'><BsGithub/></a>

    </div>
  )
}

export default HeaderSocials