import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>
      <div className="testimonials__container container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
 
          </div>
          <h5 className="client__name">Client Name</h5>
            <small className="client__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Excepturi soluta corporis eveniet eos ipsum voluptatibus numquam fuga ab voluptatem tenetur
              deleniti asperiores sapiente optio non voluptate quaerat vero, quae aut?</small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
           
          </div>
          <h5 className="client__name">Client Name</h5>
            <small className="client__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Excepturi soluta corporis eveniet eos ipsum voluptatibus numquam fuga ab voluptatem tenetur
              deleniti asperiores sapiente optio non voluptate quaerat vero, quae aut?</small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
           
          </div>
          <h5 className="client__name">Client Name</h5>
            <small className="client__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Excepturi soluta corporis eveniet eos ipsum voluptatibus numquam fuga ab voluptatem tenetur
              deleniti asperiores sapiente optio non voluptate quaerat vero, quae aut?</small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
         
          </div>
          <h5 className="client__name">Client Name</h5>
            <small className="client__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Excepturi soluta corporis eveniet eos ipsum voluptatibus numquam fuga ab voluptatem tenetur
              deleniti asperiores sapiente optio non voluptate quaerat vero, quae aut?</small>
        </article>
        
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          
          </div>
          <h5 className="client__name">Client Name</h5>
            <small className="client__review">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Excepturi soluta corporis eveniet eos ipsum voluptatibus numquam fuga ab voluptatem tenetur
              deleniti asperiores sapiente optio non voluptate quaerat vero, quae aut?</small>
        </article>

      </div>
    </section>
  )
}

export default Testimonials