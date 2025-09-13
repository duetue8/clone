import React from 'react';
import { 
  BuildingLibraryIcon, 
  CreditCardIcon, 
  DevicePhoneMobileIcon 
} from '@heroicons/react/24/outline';

const Benefits = () => {
  const benefits = [
    {
      icon: BuildingLibraryIcon,
      title: 'Simple Form',
      description: 'Our online form is easy-to-follow and can be completed within minutes.'
    },
    {
      icon: CreditCardIcon,
      title: 'More Options',
      description: 'Get connected to a lender that is most suitable for your financial needs.'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Direct Deposit',
      description: 'Get funded in just a day after being approved by a lender.'
    }
  ];

  return (
    <section id="benefits" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4">
            Regardless of what you're borrowing for
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            We'll help you find a lender that accomplishes your financial goals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lend Insta was designed to be your fast & simple money solution to get a loan in any situation. 
            By providing your information in our secure online form, we can help get you the loan you want.
          </p>
        </div>

        <div className="grid grid-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <benefit.icon className="h-12 w-12 text-white" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;