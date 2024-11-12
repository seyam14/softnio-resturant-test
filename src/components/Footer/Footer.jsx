import React from 'react';
import { FiClock, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative text-white py-10">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/footer.jpeg')" }}
      ></div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          We’re Ready to Have You the Best Dining Experiences
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div>
            <FiClock className="mx-auto text-2xl mb-2" />
            <h3 className="font-semibold">Opening Hours</h3>
            <p>Monday - Sunday</p>
            <p>9:00 AM - 11:00 PM</p>
          </div>
          
          <div>
            <FiPhone className="mx-auto text-2xl mb-2" />
            <h3 className="font-semibold">Let’s Talk</h3>
            <p>Phone: +1 800 123 456</p>
            <p>Fax: +1 800 123 457</p>
          </div>
          
          <div>
            <FiMail className="mx-auto text-2xl mb-2" />
            <h3 className="font-semibold">Book a Table</h3>
            <p>Email: example@example.com</p>
            <p>Support: support@example.com</p>
          </div>
          
          <div>
            <FiMapPin className="mx-auto text-2xl mb-2" />
            <h3 className="font-semibold">Our Address</h3>
            <p>123 Main Street</p>
            <p>City, State, Zip</p>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mb-4">
          <FaFacebook className="text-xl hover:text-gray-300 cursor-pointer" />
          <FaTwitter className="text-xl hover:text-gray-300 cursor-pointer" />
          <FaInstagram className="text-xl hover:text-gray-300 cursor-pointer" />
          <FaLinkedin className="text-xl hover:text-gray-300 cursor-pointer" />
        </div>
        
        <p className="text-sm">&copy; 2023 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
