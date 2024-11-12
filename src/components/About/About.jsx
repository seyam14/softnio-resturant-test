import { FaTruck, FaUtensils, FaBoxOpen } from "react-icons/fa";
import image from "../../assets/Frame 1707478063.png";

function About() {
  return (
    <section id="about" className="p-8 lg:p-16 bg-base-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-8">
        
        {/* Image Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
          <img
            src={image}
            alt="Delicious culinary experience"
            className="rounded-lg shadow-lg w-full h-auto lg:max-w-md"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="mb-4">
            <button className="bg-red-600 text-white px-4 py-1 rounded-full text-xs mr-2">
              About
            </button>
            <button className="bg-transparent text-gray-600 px-4 py-1 rounded-full text-xs border border-gray-300 mr-2">
              Experience
            </button>
            <button className="bg-transparent text-gray-600 px-4 py-1 rounded-full text-xs border border-gray-300">
              Contact
            </button>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Exceptional Culinary <br /> Experience and Delicious Food
          </h2>
          <p className="mb-6 text-sm md:text-base lg:text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.
          </p>
          <div className="flex justify-center lg:justify-start items-center space-x-4 mb-4">
            <button className="bg-yellow-500 px-6 py-2 rounded text-sm md:text-base hover:bg-yellow-600">
              About More
            </button>
            <p className="text-sm md:text-base font-semibold text-gray-800">
              📞 +88 3426 739 485
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-8 lg:py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaTruck className="text-4xl text-red-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Fast Delivery</h3>
              <p className="text-gray-600">Within 30 minutes</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaUtensils className="text-4xl text-red-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Absolute Dining</h3>
              <p className="text-gray-600">Best buffet restaurant</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center p-4 border rounded-lg shadow-md">
            <FaBoxOpen className="text-4xl text-red-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Pickup Delivery</h3>
              <p className="text-gray-600">Grab your food order</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
