import { useEffect } from "react";
import { Link } from "wouter";

const TalentHiring = () => {
  useEffect(() => {
    // Add Font Awesome CDN dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);
    
    // Update page title
    document.title = "Talent Hiring Solutions | Recroot";
    
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
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Talent Hiring Solutions</h1>
              <p className="text-lg text-gray-600 mb-6">
                Connect with skilled professionals across various industries who will drive your business forward.
              </p>
              <Link href="/contact-us" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition inline-block">
                Hire Talent Now
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-briefcase text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Professional Talent Pool</h3>
              <p className="text-gray-600 text-center">
                Access our extensive network of pre-screened professionals ready to join your team and contribute to your success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Industries We Serve</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We provide talent solutions across a wide range of industries, connecting you with professionals who have the specific skills you need.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: "fas fa-laptop-code", title: "Technology" },
              { icon: "fas fa-chart-line", title: "Finance" },
              { icon: "fas fa-heartbeat", title: "Healthcare" },
              { icon: "fas fa-shopping-cart", title: "Retail" },
              { icon: "fas fa-industry", title: "Manufacturing" },
              { icon: "fas fa-building", title: "Real Estate" },
              { icon: "fas fa-graduation-cap", title: "Education" },
              { icon: "fas fa-cog", title: "Engineering" },
              { icon: "fas fa-truck", title: "Logistics" },
              { icon: "fas fa-hotel", title: "Hospitality" },
              { icon: "fas fa-leaf", title: "Energy" },
              { icon: "fas fa-bullhorn", title: "Marketing" }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:border-primary hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className={`${industry.icon} text-primary`}></i>
                </div>
                <h3 className="font-semibold">{industry.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Roles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Professional Roles We Fill</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From entry-level positions to specialized roles, we help you find the right talent for your specific needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 pb-4 border-b border-gray-100">Business Operations</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Administrative Professionals</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Office Managers</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Project Coordinators</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Operations Analysts</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Executive Assistants</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 pb-4 border-b border-gray-100">Sales & Marketing</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Account Executives</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Marketing Specialists</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Digital Marketers</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Business Development</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Content Creators</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 pb-4 border-b border-gray-100">Finance</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Accountants</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Financial Analysts</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Bookkeepers</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Payroll Specialists</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Credit Analysts</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 pb-4 border-b border-gray-100">Human Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>HR Coordinators</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Recruiters</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Benefits Specialists</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Training Coordinators</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>HR Generalists</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 pb-4 border-b border-gray-100">Customer Service</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Customer Support Reps</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Account Managers</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Client Success Managers</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Help Desk Support</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Call Center Representatives</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 pb-4 border-b border-gray-100">Creative</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Graphic Designers</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>UX/UI Designers</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Content Writers</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Video Editors</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-circle text-primary text-xs mr-3"></i>
                  <span>Copywriters</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Talent Acquisition Process</h2>
          
          <div className="relative">
            <div className="hidden md:block absolute left-0 right-0 top-24 h-1 bg-gray-200"></div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Understand Your Needs",
                  description: "We start by learning about your company culture, role requirements, and specific needs."
                },
                {
                  step: 2,
                  title: "Source Candidates",
                  description: "We use our extensive network and multi-channel sourcing to find qualified candidates."
                },
                {
                  step: 3,
                  title: "Evaluate & Screen",
                  description: "Candidates undergo thorough assessment to ensure they meet your specific requirements."
                },
                {
                  step: 4,
                  title: "Present & Support",
                  description: "We present only the best matches and support you through interview and hiring."
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
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Recroot helped us build our marketing team from scratch. They found us skilled professionals who not only had the right experience but also fit perfectly with our company culture. Our team is now thriving!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">RL</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-dark">Robert Lee</p>
                  <p className="text-sm text-gray-500">Marketing Director, Consumer Brands Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "We've been working with Recroot for over two years to fill various roles in our finance department. Their understanding of our industry and requirements has saved us countless hours in the hiring process."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">AP</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-dark">Amanda Porter</p>
                  <p className="text-sm text-gray-500">HR Manager, Financial Services LLC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to find the perfect talent for your team?</h2>
            <p className="text-gray-600 mb-8">
              Partner with Recroot to access our extensive pool of qualified professionals across various industries.
            </p>
            <Link href="/contact-us" className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition inline-block">
              Discuss Your Hiring Needs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalentHiring;
