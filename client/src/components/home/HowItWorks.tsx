const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description: "Build your comprehensive profile to showcase your skills and experience."
    },
    {
      number: 2,
      title: "Connect with Opportunities",
      description: "Our matching system connects you with relevant job openings or candidates."
    },
    {
      number: 3,
      title: "Hire or Get Hired",
      description: "Complete the process with our streamlined interview and onboarding tools."
    }
  ];

  return (
    <section className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark">How Recroot Works</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">A simple 3-step process to connect the right talent with the right opportunities.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
