import { Link } from "wouter";

const GetStarted = () => {
  const features = [
    { icon: "fas fa-search", title: "Smart Matching", description: "AI-powered matching that connects the right people with the right opportunities" },
    { icon: "fas fa-clock", title: "Time Saving", description: "Reduce time-to-hire by up to 40% with streamlined processes" },
    { icon: "fas fa-chart-line", title: "Data-Driven", description: "Make informed decisions with advanced analytics and insights" }
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-blue-100 to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-indigo-100 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Get Started Today
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Ready to transform your <span className="text-primary">hiring process</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of companies and job seekers who have found success with Recroot's intelligent recruitment platform.
            </p>
            
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    <i className={`${feature.icon} text-primary`}></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/get-started/employer" 
                className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 text-center"
              >
                I'm an Employer
              </Link>
              <Link 
                href="/get-started/job-seeker" 
                className="bg-white border border-gray-200 text-gray-800 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 text-center"
              >
                I'm a Job Seeker
              </Link>
            </div>
            
            <div className="mt-6">
              <Link 
                href="/get-started/agency" 
                className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
              >
                I'm a Recruitment Agency <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </Link>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="bg-white p-1.5 rounded-2xl shadow-xl">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-1 rounded-xl">
                <div className="bg-white rounded-lg p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Hiring Dashboard</h3>
                      <p className="text-sm text-gray-500">Enterprise plan</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <i className="fas fa-chart-pie text-primary text-xl"></i>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold text-gray-900">Recruitment Progress</h4>
                      <span className="text-blue-600 bg-blue-100 px-2 py-0.5 rounded text-xs font-medium">+12.5%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-blue-500 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>35 positions filled</span>
                      <span>47 open positions</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                          <i className="fas fa-briefcase text-primary"></i>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-900">Senior Developer</h5>
                          <p className="text-xs text-gray-500">12 applicants • 5 interviews</p>
                        </div>
                        <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-medium">
                          In progress
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-blue-50 p-2 rounded-full">
                  <i className="fas fa-check text-primary text-xl"></i>
                </div>
                <div className="ml-3">
                  <p className="text-xs text-gray-500">Time Saved</p>
                  <p className="font-bold text-gray-900">30+ hours/week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
