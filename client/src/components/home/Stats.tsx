const Stats = () => {
  const stats = [
    { 
      value: "5,000+", 
      label: "Successful Placements",
      icon: "fas fa-handshake"
    },
    { 
      value: "1,200+", 
      label: "Partner Companies",
      icon: "fas fa-building"
    },
    { 
      value: "98%", 
      label: "Satisfaction Rate",
      icon: "fas fa-smile"
    },
    { 
      value: "45", 
      label: "Day Average Time-to-Hire",
      icon: "fas fa-calendar-check"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-700 skew-y-2 -translate-y-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Making Recruitment Fast, Easy and Effective
          </h2>
          <p className="text-blue-100 text-lg">
            Our platform consistently delivers results for companies of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl blur opacity-30"></div>
              <div className="bg-white rounded-xl p-6 md:p-8 text-center relative h-full flex flex-col items-center justify-center transform transition duration-500 hover:scale-105">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <i className={`${stat.icon} text-primary text-2xl`}></i>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/about-us" className="inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 transition-colors py-3 px-6 rounded-lg">
            Learn more about us
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;
