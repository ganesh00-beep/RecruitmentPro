import { useEffect } from "react";
import { Link } from "wouter";

const ForJobSeeker = () => {
  useEffect(() => {
    // Add Font Awesome CDN dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);
    
    // Update page title
    document.title = "For Job Seekers | Recroot";
    
    return () => {
      // Clean up
      document.head.removeChild(link);
    };
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Find Your Dream Job with Recroot</h1>
              <p className="text-lg text-gray-600 mb-6">
                Discover opportunities that match your skills, experience, and career goals with personalized job recommendations.
              </p>
              <Link href="/register" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition inline-block">
                Create Your Profile
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-user-tie text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">For Professionals at All Levels</h3>
              <p className="text-gray-600 text-center">
                Whether you're starting your career or are an experienced professional, we connect you with employers who value your unique skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits for Job Seekers</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-bullseye text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Job Matches</h3>
              <p className="text-gray-600">
                Our AI-powered matching algorithm connects you with positions that align with your skills and career goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-eye text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Increased Visibility</h3>
              <p className="text-gray-600">
                Get noticed by top employers looking for your specific skills and experience in your industry.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-hands-helping text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Support</h3>
              <p className="text-gray-600">
                Receive guidance from recruitment experts who can help optimize your profile and application materials.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-search-dollar text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Salary Insights</h3>
              <p className="text-gray-600">
                Access industry salary data to help you negotiate compensation packages with confidence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-shield-alt text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy Control</h3>
              <p className="text-gray-600">
                Manage who sees your profile with our privacy settings and keep your job search confidential if needed.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-lightbulb text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Resources</h3>
              <p className="text-gray-600">
                Access valuable resources including resume templates, interview preparation, and skills development.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works for Job Seekers</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our streamlined process helps you find and apply for positions that match your career goals.
          </p>
          
          <div className="relative">
            <div className="hidden md:block absolute left-0 right-0 top-24 h-1 bg-gray-200"></div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Create Your Profile",
                  description: "Build a comprehensive profile highlighting your skills, experience, and career goals."
                },
                {
                  step: 2,
                  title: "Discover Opportunities",
                  description: "Browse personalized job recommendations or search for specific positions and companies."
                },
                {
                  step: 3,
                  title: "Apply & Connect",
                  description: "Apply directly through our platform and connect with recruiters and hiring managers."
                },
                {
                  step: 4,
                  title: "Interview & Get Hired",
                  description: "Prepare for interviews with our resources and receive support throughout the hiring process."
                }
              ].map((process, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-12 h-12 bg-primary text-white text-xl font-bold rounded-full flex items-center justify-center mx-auto relative z-10">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mt-4 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries & Roles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Find Opportunities Across Industries</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We connect professionals with jobs in diverse industries and role types.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: "fas fa-laptop-code", title: "Technology" },
              { icon: "fas fa-chart-line", title: "Finance" },
              { icon: "fas fa-heartbeat", title: "Healthcare" },
              { icon: "fas fa-shopping-cart", title: "Retail & E-commerce" },
              { icon: "fas fa-industry", title: "Manufacturing" },
              { icon: "fas fa-building", title: "Real Estate" },
              { icon: "fas fa-graduation-cap", title: "Education" },
              { icon: "fas fa-bullhorn", title: "Marketing" },
              { icon: "fas fa-tools", title: "Construction" },
              { icon: "fas fa-utensils", title: "Hospitality" },
              { icon: "fas fa-truck", title: "Logistics" },
              { icon: "fas fa-leaf", title: "Energy & Utilities" }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:border-primary hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className={`${industry.icon} text-primary`}></i>
                </div>
                <h3 className="font-semibold">{industry.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-4">All Experience Levels Welcome</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Whether you're just starting your career or are a seasoned professional, we have opportunities for you.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="fas fa-user-graduate text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Entry-Level</h3>
                <p className="text-gray-600">
                  Find your first professional role with companies that invest in developing new talent.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="fas fa-user text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Mid-Level</h3>
                <p className="text-gray-600">
                  Take the next step in your career with positions that leverage your growing expertise.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="fas fa-user-tie text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Senior & Executive</h3>
                <p className="text-gray-600">
                  Find leadership roles where you can apply your extensive experience and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Career Resources & Support</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex mb-6">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <i className="fas fa-file-alt text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Resume Building</h3>
                  <p className="text-gray-600">
                    Access templates and expert advice to create a standout resume that highlights your strengths.
                  </p>
                </div>
              </div>
              <Link href="#" className="text-primary font-medium inline-flex items-center">
                Learn more <i className="fas fa-arrow-right ml-1 text-sm"></i>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex mb-6">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <i className="fas fa-comments text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interview Preparation</h3>
                  <p className="text-gray-600">
                    Prepare for interviews with industry-specific questions and expert tips.
                  </p>
                </div>
              </div>
              <Link href="#" className="text-primary font-medium inline-flex items-center">
                Learn more <i className="fas fa-arrow-right ml-1 text-sm"></i>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex mb-6">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <i className="fas fa-chart-bar text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Salary Insights</h3>
                  <p className="text-gray-600">
                    Research salary ranges for different roles and industries to negotiate better compensation.
                  </p>
                </div>
              </div>
              <Link href="#" className="text-primary font-medium inline-flex items-center">
                Learn more <i className="fas fa-arrow-right ml-1 text-sm"></i>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex mb-6">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <i className="fas fa-graduation-cap text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
                  <p className="text-gray-600">
                    Identify and develop the skills that will make you more competitive in today's job market.
                  </p>
                </div>
              </div>
              <Link href="#" className="text-primary font-medium inline-flex items-center">
                Learn more <i className="fas fa-arrow-right ml-1 text-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-gray-600 mb-6">
                "After months of searching, I found my dream job through Recroot in just 3 weeks. The personalized matches and recruiter support made all the difference."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">JR</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-dark">James Reed</p>
                  <p className="text-sm text-gray-500">Software Developer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-gray-600 mb-6">
                "The career resources helped me prepare for interviews and negotiate a salary that was 20% higher than my previous position. I'm now at a company I love!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">LM</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-dark">Lisa Martinez</p>
                  <p className="text-sm text-gray-500">Marketing Manager</p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="ml-2 text-sm text-gray-600">4.5</span>
              </div>
              <p className="text-gray-600 mb-6">
                "As a career changer, I was worried about finding opportunities. Recroot's platform connected me with companies that valued my transferable skills."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">DT</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-dark">David Taylor</p>
                  <p className="text-sm text-gray-500">Business Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3">Is it free to create a profile?</h3>
              <p className="text-gray-600">
                Yes, creating a profile and applying for jobs on Recroot is completely free for job seekers. We offer premium services for additional features, but our core functionality is available at no cost.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">How do I increase my chances of getting noticed?</h3>
              <p className="text-gray-600">
                Complete your profile 100%, add portfolio pieces if applicable, keep your skills updated, and be specific about your career goals. Our algorithm promotes profiles that are complete and regularly updated.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Can I keep my job search private?</h3>
              <p className="text-gray-600">
                Absolutely. Our privacy settings allow you to control who sees your profile and when. You can make your search confidential so your current employer doesn't discover you're looking for new opportunities.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">What support do I receive as a job seeker?</h3>
              <p className="text-gray-600">
                All job seekers receive access to our resource library, job alerts, and application tracking. Premium members get additional benefits like resume reviews, priority application status, and career coaching.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">How current are the job listings?</h3>
              <p className="text-gray-600">
                We actively manage our job listings and remove positions that are filled or expired. Most of our listings are updated in real-time as employers post new opportunities or close filled positions.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Can I apply for jobs in different locations?</h3>
              <p className="text-gray-600">
                Yes, you can search and apply for jobs based on location preferences, including remote opportunities. You can set up location preferences in your profile to receive relevant job matches.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to find your dream job?</h2>
            <p className="text-gray-600 mb-8">
              Join thousands of professionals who have found their ideal positions through Recroot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition">
                Create Your Profile
              </Link>
              <Link href="/contact-us" className="bg-white border border-gray-300 text-dark px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition">
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForJobSeeker;
