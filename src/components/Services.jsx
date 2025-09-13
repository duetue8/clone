import React from 'react';
import { 
  CreditCardIcon, 
  BanknotesIcon, 
  DevicePhoneMobileIcon 
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: CreditCardIcon,
      title: 'Funds Request Made Easy',
      description: 'Request money by filling out a simple online form. Funds are conveniently sent to the bank account of your choice, upon lender\'s approval'
    },
    {
      icon: BanknotesIcon,
      title: 'Find the Funds You Need',
      description: 'A personal loan can pay for big purchases, cover unexpected events or combine debts into one easy payment.'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Quick Procedure',
      description: 'Requesting funds is a quick process. If approved by a lender, you may receive your loan by the next business day.'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                {/* Decorative shape */}
                <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-6 -z-10 group-hover:rotate-12 transition-transform duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;