import React from 'react'
import './about.css'

import AboutImg from '../../img/about.png'
import Certificate from '../../img/award.jpg'
function About() {
  return (
    <div className='a'>
    <div className="a-left">
    <div className="a-card bg">

    </div>
    <div className="a-card">
<img src={AboutImg} alt="Programming" className='a-img' />
    </div>
    </div>

    <div className="a-right"><h1 className="a-title">
          About Me
      </h1>
      <p className="a-sub">
      From learning Data Structures to Competitive Coding, the intentions are to improve skills and get better in something I love to do!
      </p>
      <div className="a-award">
          <img src={Certificate} alt="" className="a-award-img" />
          <div className="a-award-text">
              <h4 className="a-award-title">
              Google Hashcode 2022 Qualification Round: Global Rank 2941.
              </h4>
          </div>
      </div>
      </div>
    </div>
  )
}

export default About
