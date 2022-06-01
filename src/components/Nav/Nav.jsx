import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserAstronaut} from 'react-icons/fa'
import {ImBooks} from 'react-icons/im'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {useState} from 'react'
 

const Nav = () => { 
  const[state, setState] = useState('#')
  return ( 
    <nav>
      <a href="#" onClick={() => setState('#')} className={state === '#'? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setState('#about')} className={state === '#about'? 'active' : ''} ><FaUserAstronaut/></a>
      <a href="#experience" onClick={() => setState('#experience')} className={state === '#experience'? 'active' : ''}><ImBooks/></a>
      <a href="#portfolio" onClick={() => setState('#services')} className={state === '#services'? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setState('#contact')} className={state === '#contact'? 'active' : ''}><BiMessageRoundedDetail/></a>

    </nav>

    )
}

export default Nav