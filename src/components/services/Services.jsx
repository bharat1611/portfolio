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
              <h3>Technical Content Developer At APTCoder</h3>
              <h5>Feb 2023-Present</h5>

            </div>
            <ul className = "service__list">
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Collaborating with subject matter experts to actively research and develop engaging technical articles and tutorials.</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Authoring and editing content related to various frameworks, programming languages, cloud services and emerging technologies.</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Conducting in-depth reviews of existing projects, ensuring accuracy, clarity, and adherence to industry standards.</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Gaining valuable insights into content marketing strategies and audience targeting in the Tech industry.</p>
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
                <p>Collaborating with a multidisciplinary team of professors, researchers, and data scientists to analyze and interpret complex datasets.</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Collecting, cleaning, and preprocessing data to ensure its quality and readiness for analysis.</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Applying statistical techniques and machine learning algorithms to extract valuable patterns and trends from large datasets.</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Developing and refining predictive models to provide actionable recommendations for process optimization.</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Communicating findings effectively through data visualizations and reports to stakeholders.</p>
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
