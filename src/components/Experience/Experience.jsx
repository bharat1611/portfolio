import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Things I'm good at</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Machine Learning Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>Python</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>OpenCV</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>TensorFlow</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>

              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>Keras</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>Tkinter</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>Pytorch</h4>
                <small className='text-light'>Advanced</small></div>
            </article>
            <article className='experience__details'>

              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>NLP</h4>
                <small className='text-light'>Advanced</small></div>
            </article>
            <article className='experience__details'>

              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>Scikit-Learn</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>
          </div>

        </div>

        <div className="experience__backend">
          <h3>Miscellaneous Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>C++/C</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>Java</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>HTML and CSS</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>ReactJS</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>

              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>Neo4j Database</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>PHP</h4>
                <small className='text-light'>Experienced</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>

              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>Firebase Database</h4>
                <small className='text-light'>Advanced</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Experience
