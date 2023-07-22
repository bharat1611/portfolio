import React from 'react'
import './services.css'
import {AiOutlineRightCircle} from 'react-icons/ai'


const Services = () => {
  return (
    <div>
      <section id="services">
        <h5>What I have done</h5>
        <h2>Experience</h2>

        {/* Aptcoder heading */}
        <div className="container services__container">
          <article className = "service">
            <div className = "service__head">
              <h3>Technical Content Dev At APTCoder</h3>
              <h5>Feb 2023-Present</h5>

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
          {/*  aptcoder end */}


          {/* Data Science intern */}
          <article className = "service">
            <div className = "service__head">
              <h3>Data Science Intern At GEU</h3>
              <h5>Aug 2023 - Present</h5>
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
          {/* data science end */}


        </div>
      </section>
    </div>
  )
}

export default Services
