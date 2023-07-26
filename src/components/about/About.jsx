import React from 'react'
import './about.css'
import ME from '../../assests/me10.jpg'

const About = () => {
  return (
    <section id = "about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className = "about__me-image">
              <img src = {ME} alt = "About Image"/>

            </div>
        </div>
        <div className='about_content'>
          <p>
          I am a passionate final year Computer Science and Engineering student at Graphic Era(Deemed) University with a profound enthusiasm for solving real-world challenges through technology. My expertise spans a wide range of cutting-edge frameworks, including React, TensorFlow, Keras, NLP (Natural Language Processing), and deep learning. These frameworks, along with Pytorch and OpenCV, have allowed me to delve into the exciting world of machine learning and artificial intelligence, empowering me to tackle complex challenges with data-driven solutions. In addition to my strong technical skills, I hold certifications as an AWS Certified Cloud Practitioner and Solutions Architect. Demonstrating excellence in various subjects, I have maintained an outstanding record throughout my academic journey.<br></br>
          As I present my portfolio, I am excited to share my projects, experiences, and the impact of my work in various domains. Collaborating with like-minded individuals and organizations on innovative ventures is something I eagerly look forward to. Let's create something amazing together!

          </p>
          <div className = "button_contact">
          <a href="#contact" className= 'btn btn-primary'>Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
