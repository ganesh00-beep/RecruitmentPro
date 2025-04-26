import { useEffect } from "react";
import { Link } from "wouter";

const RPO = () => {
  useEffect(() => {
    // Add Font Awesome CDN dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);
    
    // Update page title
    document.title = "Recruitment Process Outsourcing (RPO) | Recroot";
    
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
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Recruitment Process Outsourcing (RPO)</h1>
              <p className="text-lg text-gray-600 mb-6">
                Scale your hiring efficiently with our comprehensive RPO solutions tailored to your organization's unique needs.
              </p>
              <Link href="/contact-us" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition inline-block">
                Discuss Your RPO Needs
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-handshake text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">End-to-End Recruitment Solutions</h3>
              <p className="text-gray-600 text-center">
                We become an extension of your HR team, handling everything from job descriptions to onboarding new employees.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Our RPO Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our RPO solutions are designed to optimize your recruitment process, reduce costs, and improve the quality of hires.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-chart-line",
                title: "Increased Efficiency",
                description: "Streamline your recruitment process and reduce time-to-hire by up to 40%."
              },
              {
                icon: "fas fa-dollar-sign",
                title: "Cost Reduction",
                description: "Lower your recruitment costs by eliminating agency fees and optimizing resources."
              },
              {
                icon: "fas fa-user-check",
                title: "Quality of Hire",
                description: "Improve candidate quality with our rigorous screening and assessment processes."
              },
              {
                icon: "fas fa-expand-arrows-alt",
                title: "Scalability",
                description: "Easily scale your recruitment up or down based on your hiring needs."
              },
              {
                icon: "fas fa-chart-pie",
                title: "Data-Driven Insights",
                description: "Access detailed analytics and reporting to optimize your recruitment strategy."
              },
              {
                icon: "fas fa-cogs",
                title: "Process Standardization",
                description: "Implement consistent recruitment processes across all departments and locations."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <i className={`${benefit.icon} text-primary`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our RPO Service Components</h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full h-fit mr-4">
                <i className="fas fa-bullseye text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Talent Strategy Development</h3>
                <p className="text-gray-600">
                  We work with you to create a comprehensive talent acquisition strategy aligned with your business goals.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full h-fit mr-4">
                <i className="fas fa-search text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sourcing & Talent Acquisition</h3>
                <p className="text-gray-600">
                  Our team uses multiple channels to identify and attract qualified candidates for your open positions.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full h-fit mr-4">
                <i className="fas fa-clipboard-check text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Screening & Assessment</h3>
                <p className="text-gray-600">
                  We conduct thorough evaluations to ensure candidates meet your requirements before passing them to your team.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full h-fit mr-4">
                <i className="fas fa-comments text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Interview Management</h3>
                <p className="text-gray-600">
                  From scheduling to conducting initial interviews, we handle the entire process to save your team time.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full h-fit mr-4">
                <i className="fas fa-file-contract text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Offer Management</h3>
                <p className="text-gray-600">
                  We manage the offer process, including negotiations, to ensure a smooth transition for new hires.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full h-fit mr-4">
                <i className="fas fa-user-friends text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Onboarding Support</h3>
                <p className="text-gray-600">
                  Our team assists with the onboarding process to help new employees integrate quickly and effectively.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full h-fit mr-4">
                <i className="fas fa-chart-bar text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Analytics & Reporting</h3>
                <p className="text-gray-600">
                  We provide detailed reports and insights to help you measure and optimize your recruitment performance.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="bg-primary bg-opacity-10 p-3 rounded-full h-fit mr-4">
                <i className="fas fa-tools text-primary text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Technology & ATS Support</h3>
                <p className="text-gray-600">
                  Leverage our recruitment technology and expertise to streamline your hiring processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">RPO Success Story</h2>
          
          <div className="bg-secondary rounded-xl p-8 md:p-12 relative">
            <div className="md:flex gap-8 items-center">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h3 className="text-2xl font-semibold mb-4">Technology Company Scales Hiring by 300%</h3>
                <p className="text-gray-600 mb-4">
                  A rapidly growing tech company needed to hire 150 employees across multiple departments in just six months. Our RPO solution enabled them to:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Reduce time-to-hire from 45 to 22 days</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Decrease cost-per-hire by 35%</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Improve candidate quality and retention rates</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Scale their team by 300% while maintaining company culture</span>
                  </li>
                </ul>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                    <span className="text-gray-600 text-xs">JD</span>
                  </div>
                  <div>
                    <p className="font-medium">Jane Doe</p>
                    <p className="text-sm text-gray-600">VP of HR, Tech Innovation Inc.</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl font-bold text-primary">35%</div>
                    <div className="text-sm text-gray-500">Cost Reduction</div>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl font-bold text-primary">50%</div>
                    <div className="text-sm text-gray-500">Time Savings</div>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl font-bold text-primary">300%</div>
                    <div className="text-sm text-gray-500">Hiring Scale</div>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
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
            <h2 className="text-3xl font-bold mb-6">Ready to transform your recruitment process?</h2>
            <p className="text-gray-600 mb-8">
              Partner with Recroot's RPO team to scale your hiring efficiently while maintaining quality and reducing costs.
            </p>
            <Link href="/contact-us" className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition inline-block">
              Schedule an RPO Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RPO;
