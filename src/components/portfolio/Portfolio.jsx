import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/proj1.png'
import IMG2 from '../../assests/proj2.png'
import IMG3 from '../../assests/proj3.jpg'
import IMG4 from '../../assests/proj4.jpeg'
import IMG5 from '../../assests/proj5.png'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <a href='https://github.com/bharat1611/Attendance-System-Face-Detection' ><img src={IMG1} alt="" /></a>
          </div>
          <h3>Real-time Face Attendance Recognition System </h3>
          <div className="portfolio__item-cta"><a href='https://github.com/bharat1611/Attendance-System-Face-Detection' className='btn'>Github</a></div>
          <p>With Firebase integration, created an attendance system using face-recognition using Python, OpenCV, Deep Learning and Face-Recognition libraries. </p>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <a href='https://github.com/bharat1611/Netflix-Clone'><img src={IMG2} alt="" />
            </a>
          </div>
          <h3>Netflix Clone</h3>
          <div className="portfolio__item-cta"><a href='https://github.com/bharat1611/Netflix-Clone' className='btn'>Github</a></div>
          <p>Utilized ReactJS, Firebase and APIs to create a web application that emulates the design, responsiveness and functionality of the popular streaming service, Netflix.</p>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <a href='https://github.com/bharat1611/AI_Chatbot-NLP_DeepLearning' ><img src={IMG3} alt="" /></a>
          </div>
          <h3>Artificially Intelligent Chatbot using NLP</h3>
          <div className="portfolio__item-cta"><a href='https://github.com/bharat1611/AI_Chatbot-NLP_DeepLearning' className='btn'>Github</a></div>
          <p>Using Pytorch, NLP, NNN and deep learning, this chatbot automates responses to help treat social anxiety and depression.</p>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <a href='https://github.com/bharat1611/realtime-emotion-detection-keras'><img src={IMG4} alt="" /></a>
          </div>
          <h3>Realtime Facial Emotion Detection</h3>
          <div className="portfolio__item-cta"><a href='https://github.com/bharat1611/realtime-emotion-detection-keras' className='btn'>Github</a></div>
          <p>Using Keras, Tensorflow, CNN and OpenCV, this model accurately identifies emotions from facial expressions in real-time video streams.</p>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Fraud Detection Using ML & Neo4j</h3>
          <div className="portfolio__item-cta"><a href='https://github.com/bharat1611/Neo4j---Fraud-Detection---Insurance-Claims' className='btn'>Github</a></div>
          <p>Created a model to help detect fraud in Automobile Insurance Claims using Python, ML and Neo4j Graph Database.</p>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
