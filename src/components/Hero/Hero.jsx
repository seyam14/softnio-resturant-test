import image from"../../assets/image 1.png"
function Hero() {
  return (
    <section className="bg-red-700 text-white p-8 md:p-16 lg:p-24 font-sans">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Taste the Authentic Saudi Cuisine</h2>
          <p className="mb-8 text-sm md:text-base lg:text-lg">
            Among the best Saudi chefs in the world, serving you something beyond flavor.
          </p>
          <button className="bg-yellow-500 px-6 py-2 rounded text-sm md:text-base hover:bg-yellow-600">
            Explore Menu
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <div className="relative">
            <img
              src={image} 
              alt="Delicious Saudi Cuisine"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 right-4 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              Today Offer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
