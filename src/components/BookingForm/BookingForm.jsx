import React from 'react';

// Import the background image
import bgImage from "../../assets/Booking form.jpeg";

function BookingForm() {
  return (
    <section 
      className="relative flex items-start justify-start min-h-screen bg-cover text-white p-8"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div> 

      <div className="relative z-10 max-w-lg p-8 rounded-lg shadow-lg ml-4 md:ml-16">
        <p className="text-sm text-red-600 font-bold">Book Now</p>
        <h2 className="text-3xl font-bold mb-4 text-white uppercase">Book Your Table</h2>
        <p className="mb-6">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
        
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <input type="text" id="name" className="w-full p-2 rounded bg-neutral-900 text-white placeholder-white border border-white focus:outline-none focus:ring-2 focus:ring-white" placeholder="Your name" />
            </div>

            <div className="w-full md:w-1/2">
              <input type="email" id="email" className="w-full p-2 rounded bg-neutral-900 text-white placeholder-white border border-white focus:outline-none focus:ring-2 focus:ring-white" placeholder="Your email" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <input type="date" id="date" className="w-full p-2 rounded bg-neutral-900 text-white placeholder-white border border-white focus:outline-none focus:ring-2 focus:ring-white" />
            </div>
            
            <div className="w-full md:w-1/2">
              <input type="number" id="time" className="w-full p-2 rounded bg-neutral-900 text-white placeholder-white border border-white focus:outline-none focus:ring-2 focus:ring-white" placeholder="Total people" />
            </div>
          </div>

          <div>
            <textarea id="message" className="w-full p-2 rounded bg-neutral-900 text-white placeholder-white border border-white focus:outline-none focus:ring-2 focus:ring-white" rows="4" placeholder="Message"></textarea>
          </div>

          <button type="submit" className="w-full md:w-auto py-2 px-6 mt-4 font-semibold text-gray-900 bg-yellow-400 rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-white">Book Now</button>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
