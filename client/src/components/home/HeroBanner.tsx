import { Link } from "wouter";

const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="mb-6">
              <span className="bg-blue-100 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                #1 Recruitment Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Connecting <span className="text-primary">great talent</span> with <span className="text-primary">great companies</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 mb-8">
              We simplify recruitment by connecting the right talent with the right opportunities. 
              Our platform provides a seamless experience for both job seekers and employers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-started/employer" 
                className="bg-primary text-white px-8 py-4 rounded-md font-medium hover:bg-blue-600 transition-colors duration-300 flex items-center">
                Find Talent <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link href="/get-started/job-seeker" 
                className="bg-white border border-gray-300 text-gray-700 px-8 py-4 rounded-md font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center">
                Find Jobs <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                    <span className="text-primary font-medium text-xs">R{item}</span>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Join 10,000+ companies</p>
                <div className="flex items-center mt-1">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="fas fa-star text-xs"></i>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">4.9/5 ratings</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative z-10">
              <div className="rounded-2xl shadow-xl w-full h-auto overflow-hidden bg-white aspect-w-4 aspect-h-3">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-1 h-full">
                  <div className="bg-white rounded-xl h-full p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="font-bold text-gray-900">Top Candidates</h3>
                        <p className="text-sm text-gray-500">Latest matches</p>
                      </div>
                      <div className="bg-blue-50 text-primary p-2 rounded-md">
                        <i className="fas fa-user-plus"></i>
                      </div>
                    </div>
                    
                    {/* Candidate cards */}
                    {[1, 2, 3].map((candidate) => (
                      <div key={candidate} className="mb-4 bg-gray-50 p-3 rounded-lg flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <span className="text-primary font-medium text-xs">U{candidate}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Software Engineer</h4>
                          <p className="text-xs text-gray-500">5 years exp • 98% match</p>
                        </div>
                        <div className="ml-auto">
                          <button className="text-xs bg-white p-1.5 rounded border border-gray-200 hover:bg-gray-50">
                            <i className="fas fa-eye"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                    
                    <button className="w-full text-center text-primary text-sm font-medium mt-2">
                      View all candidates
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full">
                  <i className="fas fa-chart-line text-primary text-xl"></i>
                </div>
                <div className="ml-3">
                  <p className="text-xs text-gray-500">Hiring Success Rate</p>
                  <p className="font-bold text-gray-900">98.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 h-64 w-64 bg-blue-200 opacity-20 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-indigo-200 opacity-20 rounded-full -ml-48 -mb-48"></div>
      <div className="absolute top-1/2 left-1/4 h-24 w-24 bg-accent opacity-10 rounded-full transform -translate-y-1/2"></div>
    </section>
  );
};

export default HeroBanner;
