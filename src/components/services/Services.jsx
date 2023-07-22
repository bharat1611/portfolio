import React from 'react'
import './services.css'
import logo1 from '../../assests/aptcoder.png'
import {AiOutlineRightCircle} from 'react-icons/ai'


const Services = () => {
  return (
    <div>
      <section id="services">
        <h5>What I have done</h5>
        <h2>Experience</h2>

        <div className="container services__container">
          <article className = "service">
            <div className = "service__head">
              <h3>Technical Content Dev At APTCoder</h3>
              <img src = {logo1} className = 'logo1' href = "https://aptcoder.com/"></img>
            </div>
            <ul className = "service__list">
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
              </li>
            </ul>
          </article>
          {/* heading 1 end */}


          <article className = "service">
            <div className = "service__head">
              <h3>Heading 2</h3>
            </div>
            <ul className = "service__list">
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
              </li>
            </ul>
          </article>


        </div>
      </section>
    </div>
  )
}

export default Services
