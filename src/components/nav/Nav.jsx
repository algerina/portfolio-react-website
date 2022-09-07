import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { CgWorkAlt } from 'react-icons/cg'
import { BiMessageRoundedDetail } from 'react-icons/bi'



const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#portfolio"><CgWorkAlt/></a>
      <a href="#contact"><BiMessageRoundedDetail/></a>
    </nav>
  )
}

export default Nav