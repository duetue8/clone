import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: '5.98%', label: 'Minimum Approx. APR' },
    { value: '36.99%', label: 'Maximum Approx. APR' },
    { value: '$1,000', label: 'Minimum Loan Amount' },
    { value: '$5,000', label: 'Maximum Loan Amount' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container">
        <div className="grid grid-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center transform transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold opacity-90">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;