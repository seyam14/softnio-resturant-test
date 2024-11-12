import Slider from 'react-slick';
import image from "../../assets/Video.png";

function Testimonials() {
  const testimonials = [
    {
      text: "You can't go wrong with Chicken Mandu. I had it twice. The chicken was cooked perfectly, juicy & soft. I would definitely recommend it.",
      author: 'Anika, Goa',
    },
    {
      text: 'Best food experience!',
      author: 'Customer 1',
    },
    {
      text: 'Absolutely loved it.',
      author: 'Customer 2',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <section className="p-4 md:p-8 bg-orange-50">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-10"
          >
            {/* Left side - Text section */}
            <div className="w-full md:w-1/2 bg-yellow-400 p-6 rounded-lg flex flex-col justify-center md:justify-center md:h-full">
              <p className="text-lg font-semibold mb-4 text-center md:text-left">
                "{testimonial.text}"
              </p>
              <p className="font-bold text-center md:text-left">- {testimonial.author}</p>
            </div>

            {/* Right side - Image section */}
            <div className="w-full md:w-1/2">
              <img
                src={image}
                alt="Food dish"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;
