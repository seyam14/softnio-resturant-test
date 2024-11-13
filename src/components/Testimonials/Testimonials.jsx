import React from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import image from "../../assets/Video.png";

const Testimonials = () => (
  <div className="flex flex-col py-12 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      {/* Title */}
      <p className="text-sm text-red-600 font-bold">Crispy, Every Bite Taste</p>
      <h2 className="text-2xl font-bold mb-6 uppercase text-center lg:text-left">
        What Some of My Customers Say
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center mx-auto">
        {/* Left */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-yellow-300 text-gray-800 rounded-lg shadow-md w-full lg:w-1/2 p-6">
          <FaQuoteLeft className="text-3xl text-gray-700 mb-4" />
          <p className="text-lg leading-relaxed">
            "You can't go wrong with Chicken Mandi. I had it twice. The chicken
            was cooked perfectly, juicy & soft (usually mandi chicken is a bit
            dry). I would definitely recommend it."
          </p>
          <div className="flex items-center mt-4 space-x-4">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h5 className="font-bold capitalize">Khalid Al Dawsry</h5>
              <p className="text-sm capitalize">Jeddah, Saudi</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center h-80 w-full lg:w-1/2 mt-6 lg:mt-0 rounded-lg overflow-hidden shadow-lg">
          <img src={image} alt="Dish" className="w-full h-full object-cover" />
          <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* arrows */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 hidden lg:block">
        <FaChevronLeft className="text-2xl text-gray-600 cursor-pointer" />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 hidden lg:block">
        <FaChevronRight className="text-2xl text-gray-600 cursor-pointer" />
      </div>
    </div>
  </div>
);

export default Testimonials;
