import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'


const Testimonials = () => {
  return (
    <section id = "testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className = "client__avatar">
            <img src = {AVTR1} alt = "Avatar One"/>
            </div>
            <h5 class = 'client__name'>Ernest Achiever</h5>
            <small className = 'client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci tempora, sint obcaecati eligendi beatae consectetur nemo amet repellat assumenda nihil blanditiis distinctio quidem magni, accusantium ex esse. Maxime, impedit eos?
            </small>
        </article>

        <article className="testimonial">
          <div className = "client__avatar">
            <img src = {AVTR2} alt = "Avatar One"/>
            </div>
            <h5 class = 'client__name'>Ernest Achiever</h5>
            <small className = 'client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci tempora, sint obcaecati eligendi beatae consectetur nemo amet repellat assumenda nihil blanditiis distinctio quidem magni, accusantium ex esse. Maxime, impedit eos?
            </small>
        </article>

        <article className="testimonial">
          <div className = "client__avatar">
            <img src = {AVTR3} alt = "Avatar One"/>
            </div>
            <h5 class = 'client__name'>Ernest Achiever</h5>
            <small className = 'client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci tempora, sint obcaecati eligendi beatae consectetur nemo amet repellat assumenda nihil blanditiis distinctio quidem magni, accusantium ex esse. Maxime, impedit eos?
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials
