import React from 'react'
import './ComponentsA.css'
import Image1 from '../Assets/FeautureA.jpg'
import Image2 from '../Assets/FeatureB.jpg'
import Image3 from '../Assets/FeatureC.jpg'



export default function NewsSec() {
  return (
    <>
    <h2>FEATURED NEWS</h2>
    < div id='NewsSec'>
        <div className='board'>
          <img src= {Image1} alt="News1" />
        </div>
        <div className='board'>
          <img src= {Image2} alt="News2" />
        </div>
        <div className='board'>
          <img src= {Image3} alt="News3" />
        </div>
        <div className='board'>
          <img src= {Image2} alt="News2" />
        </div>
    </div>
    </>
  )
}
