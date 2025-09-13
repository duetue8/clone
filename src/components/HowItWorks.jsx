import React from 'react';
import { 
  UserIcon, 
  ClockIcon, 
  BanknotesIcon 
} from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserIcon,
      title: 'Tell Us About Yourself',
      description: 'Complete our online form with your basic information, and we\'ll find a lender that is ready to meet your interests. Your personal data is safe with us.'
    },
    {
      icon: ClockIcon,
      title: 'Get Fast Lender Approval',
      description: 'You are not required to accept any offers unless you\'re completely satisfied with the terms. Shop around to compare the loan amounts and rates you qualify for.'
    },
    {
      icon: BanknotesIcon,
      title: 'Receive Your Money',
      description: 'Once you\'ve been approved, you can finalize Your Loan with the lender and have your funds deposited directly to your bank account.'
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2>How does it work</h2>
        </div>

        <div className="grid grid-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              
              <div className="card pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;