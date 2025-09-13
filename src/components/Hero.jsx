import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-32"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Quick Loan Offer $100-$5000
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            How Much Do You Need?<br />
            All Credit Welcome • Repay in 3 - 72 Months
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#inquiry" className="btn btn-primary text-lg px-8 py-4">
              Apply Now
            </a>
            <a href="#about" className="btn btn-secondary text-lg px-8 py-4">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;