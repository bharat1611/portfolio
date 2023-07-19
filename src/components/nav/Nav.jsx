import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillBook} from 'react-icons/ai'
import {BsBuildingsFill} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  return (
    <div>
      <a href = "#head"><AiOutlineHome/></a>
      <a href = "#about"><AiOutlineUser/></a>
      <a href = "#experience"><AiFillBook/></a>
      <a href = "#portfolio"><BsBuildingsFill/></a>
      <a href = "#contact"><AiOutlineMessage/></a>
    </div>
  )
}

export default Nav
