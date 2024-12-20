import React from 'react';
import './ComponentsA.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeHero() {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    infinite: true,
    arrows: false, 
    dots: true, 
  };

  const HhContent = [
    { id: 41, text: "Welcome to Zeari Schools", button: "Learn More", link: "/#" },
    { id: 42, text: "Explore Our Programs", button: "Discover More", link: "/programs" },
  ];

  return (
    <div id="HomeHeroContainer">
      <div className="HomeHero">
        <div className="HH-Container">
          <Slider {...settings}>
            {HhContent.map((slideItem) => (
              <div key={slideItem.id} className="HH-slide">
                <p className="HH-text">{slideItem.text}</p>
                {slideItem.button && (
                  <a href={slideItem.link} className="HH-button">
                    {slideItem.button}
                  </a>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
