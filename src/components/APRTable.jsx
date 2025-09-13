import React from 'react';

const APRTable = () => {
  const loanData = [
    {
      amount: '$1,000',
      interestRate: '24%',
      term: '12 Months',
      fee: '3%',
      feeCost: '$30',
      repayment: '$29.82',
      apr: '29.82%',
      totalPayments: '$1,134.74',
      totalCosts: '$164.72'
    },
    {
      amount: '$2,000',
      interestRate: '19%',
      term: '24 Months',
      fee: '5%',
      feeCost: '$100',
      repayment: '$100.82',
      apr: '24.12%',
      totalPayments: '$2,419.68',
      totalCosts: '$519.68'
    },
    {
      amount: '$5,000',
      interestRate: '13%',
      term: '48 Months',
      fee: '8%',
      feeCost: '$400',
      repayment: '$131.67',
      apr: '18.23%',
      totalPayments: '$6,320.12',
      totalCosts: '$1,720.12'
    },
    {
      amount: '$10,000',
      interestRate: '8%',
      term: '60 Months',
      fee: '10%',
      feeCost: '$1,000',
      repayment: '$202.28',
      apr: '9.20%',
      totalPayments: '$12,136.80',
      totalCosts: '$3,136.80'
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container">
        <div className="mb-12">
          <div className="grid grid-2 gap-8 items-start">
            <div>
              <p className="text-blue-600 font-semibold mb-4">Representative Example</p>
              <h2 className="text-4xl font-bold text-gray-900">
                APR Disclosures & Repayment Terms
              </h2>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                The Annual Percentage Rate (APR) is the annual rate charged for borrowing and is expressed as a percentage 
                that represents the actual yearly cost of funds over the term of the loan. As loans can vary in terms of 
                interest-rate structure, transaction fees, late penalties and other factors, a standardized computation such 
                as the APR provides borrowers with a bottom-line number they can easily compare to rates charged by other lenders.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Loan Amount</th>
                  <th className="px-6 py-4 text-left font-semibold">Interest Rate</th>
                  <th className="px-6 py-4 text-left font-semibold">Loan Term</th>
                  <th className="px-6 py-4 text-left font-semibold">Fee</th>
                  <th className="px-6 py-4 text-left font-semibold">Fee Cost</th>
                  <th className="px-6 py-4 text-left font-semibold">Repayment</th>
                  <th className="px-6 py-4 text-left font-semibold">APR</th>
                  <th className="px-6 py-4 text-left font-semibold">Total Payments</th>
                  <th className="px-6 py-4 text-left font-semibold">Total Costs</th>
                </tr>
              </thead>
              <tbody>
                {loanData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-100 hover:bg-blue-50 transition-colors ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-blue-600">{row.amount}</td>
                    <td className="px-6 py-4">{row.interestRate}</td>
                    <td className="px-6 py-4">{row.term}</td>
                    <td className="px-6 py-4">{row.fee}</td>
                    <td className="px-6 py-4">{row.feeCost}</td>
                    <td className="px-6 py-4">{row.repayment}</td>
                    <td className="px-6 py-4 font-semibold">{row.apr}</td>
                    <td className="px-6 py-4 font-semibold">{row.totalPayments}</td>
                    <td className="px-6 py-4 font-semibold text-green-600">{row.totalCosts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APRTable;