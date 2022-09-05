import React from 'react'
import {BsLinkedin, BsGithub, BsMedium, BsTwitter} from 'react-icons/bs'
import {AiFillMediumSquare} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/amel-khiri/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/algerina" target="_blank"><BsGithub /></a>
      <a href="https://medium.com/@kh.amelle" target="_blank"><AiFillMediumSquare /></a>
      <a href="https://twitter.com/AmalQahwadji" target="_blank"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials