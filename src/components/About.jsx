import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-2 items-center gap-12">
          <div>
            <div className="mb-8">
              <p className="text-blue-600 font-semibold mb-4">
                Why should you choose Lend Insta?
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Getting a Loan is a Quick Step Process
              </h2>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <CheckCircleIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Why wait to get the funds you need today. Fill out our simple form and receive money as soon as possible.
                  </h3>
                </div>
              </div>
            </div>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                LendInsta was designed to be your fast & simple money solution to get a loan in any situation. 
                By providing your information in our secure online form, we can help get you the loan you want. 
                We have extensive partnerships with large authorized lenders allowing us to provide our free service 
                in almost all 50 states from the privacy of your own home.
              </p>
              
              <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Our Attitude</h4>
              <p>
                We care about our customers and we always want to share our knowledge with you. 
                Below are a few tips to ensure a smooth application process.
              </p>
            </div>

            <a href="#benefits" className="btn btn-primary">
              Discover More
            </a>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg"
                alt="Financial Services"
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              
              {/* Floating Text */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transform rotate-12">
                Finance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;