import Slider from 'react-slick';

function Testimonials() {
  const testimonials = [
    { text: 'Best food experience!', author: 'Customer 1' },
    { text: 'Absolutely loved it.', author: 'Customer 2' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="p-8 bg-gray-100">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center">
            <p className="text-lg font-bold">{testimonial.text}</p>
            <p>- {testimonial.author}</p>
          </div>
        ))}
      </Slider>
      </section>
  );
}

export default Testimonials;

