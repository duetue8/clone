import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const CallToAction = () => {
  return (
    <section className="section bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container">
        <div className="grid grid-2 items-center gap-12">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg"
              alt="Business Loans"
              className="rounded-2xl shadow-2xl w-full"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>

          <div>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                Simple
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                Secure
              </span>
            </div>

            <h3 className="text-4xl font-bold mb-6 leading-tight">
              Get quick business loans
            </h3>

            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Fast approval process with competitive rates. 
              Apply today and get the funding your business needs to grow.
            </p>

            <div className="flex items-center gap-4">
              <a href="#inquiry" className="btn bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4">
                Apply For Loan
              </a>
              <ArrowRightIcon className="h-8 w-8 opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;