import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href = "https://www.linkedin.com/in/bharat-upadhyay-05b939223/" rel="noopener noreferrer" target = "_blank"><BsLinkedin/></a>
        <a href = "https://github.com/bharat1611" rel="noopener noreferrer" target = "_blank"><BsGithub/></a>
        <a href = "https://leetcode.com/BharatUpadhyay/" rel="noopener noreferrer" target = "_blank"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials
