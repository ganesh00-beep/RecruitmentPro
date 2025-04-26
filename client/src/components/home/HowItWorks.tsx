const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description: "Build your comprehensive profile to showcase your skills and experience.",
      icon: "fas fa-user-edit"
    },
    {
      number: 2,
      title: "Connect with Opportunities",
      description: "Our matching system connects you with relevant job openings or candidates.",
      icon: "fas fa-handshake"
    },
    {
      number: 3,
      title: "Hire or Get Hired",
      description: "Complete the process with our streamlined interview and onboarding tools.",
      icon: "fas fa-check-circle"
    }
  ];

  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div className="max-w-2xl mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="h-0.5 w-12 bg-primary mr-4"></div>
              <span className="text-primary font-medium">How It Works</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 3-Step Recruitment Process
            </h2>
            <p className="text-gray-600 max-w-xl">
              Our streamlined approach helps connect the right talent with the right opportunities quickly and efficiently.
            </p>
          </div>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-blue-100 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-blue-100"
              >
                <div className="mb-6 flex justify-between items-start">
                  <div className="w-16 h-16 bg-blue-50 text-primary rounded-lg flex items-center justify-center text-2xl">
                    <i className={step.icon}></i>
                  </div>
                  <span className="text-5xl font-bold text-blue-100">0{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href="/get-started" className="inline-flex items-center justify-center bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Get Started Now
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
