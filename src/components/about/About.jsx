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
              <img src = {ME} alt = "About Me"/>

            </div>
        </div>
        <div className='about_content'>
          <p>
          I am a passionate Software Development Engineer (SDE) with a Computer Science and Engineering degree from Graphic Era (Deemed) University.<br></br><br></br>

          My journey in technology is driven by a profound enthusiasm for solving real-world challenges through innovative solutions. I possess hands-on expertise in web development technologies like React.js, Node.js, Express, and MongoDB, as well as experience in building full-stack applications. Additionally, I have worked on machine learning and AI projects using cutting-edge frameworks such as CNN, TensorFlow, Keras, and PyTorch. My skills extend to Natural Language Processing (NLP), OpenCV, and emerging tools like Ollama, allowing me to develop both front-end and back-end systems as well as data-driven AI solutions.<br></br><br></br>

          In addition to my development skills, I am an AWS Certified Cloud Practitioner and Solutions Architect, bringing cloud computing expertise into my projects.<br></br><br></br>

          As I present my portfolio, I’m excited to showcase a diverse range of projects and experiences that reflect my growth as a software engineer and web developer. I look forward to collaborating with like-minded professionals and organizations on innovative ventures. Let’s create something amazing together!
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
