import React from 'react'
import './about.css'
import ME from '../../assests/me2.jpg'

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquam pariatur explicabo nulla quia, dignissimos id hic mollitia officiis animi quo provident quos sint quisquam corporis eveniet asperiores consequuntur dolores!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nostrum nisi, aliquam dolorem, possimus ea suscipit optio quisquam dolore quod cupiditate molestiae earum repellat doloremque non fugit cum eligendi atque!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, rem tenetur! Accusamus nobis harum voluptatum error saepe perspiciatis eos consectetur animi provident labore facere magni, doloremque ex exercitationem, officiis veniam?
          </p>
          <a href="#contact" className= 'btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About
