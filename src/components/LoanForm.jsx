import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const LoanForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form data:', data);
    alert('Thank you! Your loan application has been submitted.');
    setIsSubmitting(false);
  };

  return (
    <section id="inquiry" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-4">
            Get a decision online in minutes with no paperwork
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What is the Loan Amount you would like up to?
          </h2>
          <p className="text-lg text-gray-600">
            Bad Credit? No Problem • Approved Your Loan In 3 Minutes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Enter Primary Phone no"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  {...register('phone', { required: 'Phone number is required' })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <input
                  type="number"
                  placeholder="Loan Amount"
                  min="100"
                  max="5000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  {...register('amount', { 
                    required: 'Loan amount is required',
                    min: { value: 100, message: 'Minimum amount is $100' },
                    max: { value: 5000, message: 'Maximum amount is $5000' }
                  })}
                />
                {errors.amount && (
                  <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Bank Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  {...register('bankName', { required: 'Bank name is required' })}
                />
                {errors.bankName && (
                  <p className="text-red-500 text-sm mt-1">{errors.bankName.message}</p>
                )}
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Continue'}
                </button>
              </div>
            </div>
          </form>

          <div className="text-center mt-8 text-sm text-gray-600">
            <p>
              Representative Example: $1,000 loan over a 12-month term would have a total cost, 
              including interest, a total payback amount of $1,134.72. APR 29.82%. 
              Rates between 5.99% APR and 35.99% APR. Loan term lengths from 61 days to 72 months for qualified consumers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanForm;