import React from 'react'  /* eslint-disable */
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} Download className="btn" target="_blank">Download CV</a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA