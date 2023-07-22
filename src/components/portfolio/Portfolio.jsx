import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/proj1.png'
import IMG2 from '../../assests/proj2.png'
import IMG3 from '../../assests/proj3.jfif'
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
          <h3>Face Attendance Recognition System</h3>
          <div className="portfolio__item-cta"><a href='https://github.com/bharat1611/Attendance-System-Face-Detection' className='btn'>Github</a></div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <a href='https://github.com/bharat1611/Netflix-Clone'><img src={IMG2} alt="" />
            </a>
          </div>
          <h3>Netflix Clone</h3>
          <div className="portfolio__item-cta"><a href='https://github.com/bharat1611/Netflix-Clone' className='btn'>Github</a></div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <a href='https://github.com/bharat1611/AI_Chatbot-NLP_DeepLearning' ><img src={IMG3} alt="" /></a>
          </div>
          <h3>Artificially Intelligent Chatbot</h3>
          <div className="portfolio__item-cta"><a href='https://github.com/bharat1611/AI_Chatbot-NLP_DeepLearning' className='btn'>Github</a></div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <a href='https://github.com/bharat1611/realtime-emotion-detection-keras'><img src={IMG4} alt="" /></a>
          </div>
          <h3>Realtime Facial Emotion Detection</h3>
          <div className="portfolio__item-cta"><a href='https://github.com/bharat1611/realtime-emotion-detection-keras' className='btn'>Github</a></div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Fraud Detection Using ML & Neo4j</h3>
          <div className="portfolio__item-cta"><a href='https://github.com/bharat1611/Neo4j---Fraud-Detection---Insurance-Claims' className='btn'>Github</a></div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
