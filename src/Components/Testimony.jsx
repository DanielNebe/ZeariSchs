import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './ComponentsA.css'


export default function Testimony() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const slide = [
    {id: 1, text: "The teachers and staff are always available to listen and offer guidance, making my child feel safe and supported."},
    {id: 2, text: "The school's extracurricular activities have helped my child discover new passions and talents, from sports to music and art."},
    {id: 3, text: "I am amazed at how much my child has grown academically since joining this school. The teachers are dedicated and provide individualized attention. - Mrs. Nneoma Okoro"},
    {id: 4, text: "The school's encouragement of independence and self-directed learning has prepared my child for future success and self-reliance. - Mr. Ayodeji Ajayi"}
  ];

  return (
    <>
      <h2>What our parents say</h2>

      < div className='Test-slider-container'>
        <Slider {...settings}>
          { slide.map( (slideItem) => (
            <div key={slideItem.id} className='T-slide'>
              <p>{slideItem.text}</p>
            </div>
         )) }
        </Slider>
      </div>
    </>
  );
}