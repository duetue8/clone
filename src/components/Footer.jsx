import React from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  const footerLinks = [
    'Apply for Loan',
    'Privacy Policy',
    'Terms & Condition',
    'Legal',
    'Rates',
    'FAQS',
    'Disclaimer',
    'CCPA Notice',
    'Marketing Practices',
    'Responsible Lending'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=180&h=60&fit=crop" 
                alt="Lend Insta" 
                className="h-12 w-auto mb-6"
              />
            </div>
            
            <div className="prose prose-gray prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                lendinsta.com (the "website") is not an offer or solicitation to lend. The website only provides a service 
                and is not an agent, representative, or broker of any lender and does not endorse or charge you for any loan or product. 
                The website operators are not lenders, do not make loans of any type, and do not make credit decisions.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions, contact your lender directly for details, questions, or concerns regarding your loan or credit product. 
                Short-term cash loans are meant to provide you with short-term financing to solve immediate cash needs and should not be considered a long-term solution.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                By submitting your request, you acknowledge, agree, and authorize that (a) your information may be sent to lenders 
                and/or third-party partners on your behalf, and (b) such lenders may obtain consumer reports and related information 
                about you from one or more consumer reporting agencies, such as TransUnion, Experian and Equifax to evaluate your creditworthiness.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 <a href="/" className="text-white hover:text-blue-300">lendinsta.com</a>. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm">
                <EnvelopeIcon className="h-4 w-4" />
                <a href="mailto:info@lendinsta.com" className="text-gray-300 hover:text-white">
                  info@lendinsta.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <PhoneIcon className="h-4 w-4" />
                <a href="tel:+18183924757" className="text-gray-300 hover:text-white">
                  +1 (818) 392-4757
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;