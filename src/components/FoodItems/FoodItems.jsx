import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/Frame 1707478074.png";
import image2 from "../../assets/pizza 1.png";
import image3 from "../../assets/french-fries 1.png";
import image4 from "../../assets/fried-shrimp-prawn-cake-white-plate 1.png";

function FoodItems() {
  const foodItems = [
    { name: 'vegetables burger', description: 'Barbecue Italian cuisine pizza', imageUrl: image1 },
    { name: 'Spacial Pizza ', description: 'Barbecue Italian cuisine pizza', imageUrl: image2 },
    { name: 'Spacial French fries', description: 'Barbecue Italian cuisine', imageUrl: image3 },
    { name: 'Cuisine Chicken', description: 'Japanese Cuisine Chicken', imageUrl: image4 },
   
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="p-8 bg-orange-50">
      <div className='max-w-6xl mx-auto'>
      <p className='text-sm text-red-600 font-bold'>Crispy, Every Bite Taste</p>
      <h2 className="text-2xl font-bold mb-6 uppercase">POPULAR FOOD ITEMS</h2>
      <Slider {...settings}>
        {foodItems.map((item, index) => (
          <div key={index} className="p-4">
            <div className="bg-base-100 p-4 rounded-lg shadow-lg">
              <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
}

export default FoodItems;