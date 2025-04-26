import { useEffect } from "react";
import { Link } from "wouter";

const LeadershipHiring = () => {
  useEffect(() => {
    // Add Font Awesome CDN dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);
    
    // Update page title
    document.title = "Leadership Hiring | Recroot";
    
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
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Leadership Hiring Solutions</h1>
              <p className="text-lg text-gray-600 mb-6">
                Build strong leadership teams that drive innovation and guide your organization to success.
              </p>
              <Link href="/contact-us" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition inline-block">
                Start Building Your Team
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-users text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Strategic Leadership Talent</h3>
              <p className="text-gray-600 text-center">
                We help you find and secure directors, VPs, and other leaders who can implement your vision and drive organizational growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Positions We Fill</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-briefcase",
                title: "Department Directors",
                description: "Experienced directors who can lead functional departments and implement strategic initiatives."
              },
              {
                icon: "fas fa-chart-line",
                title: "VP & Senior Managers",
                description: "Senior leaders with proven track records of building and managing successful teams."
              },
              {
                icon: "fas fa-project-diagram",
                title: "Project Leaders",
                description: "Skilled managers who can deliver complex projects on time and within budget."
              },
              {
                icon: "fas fa-lightbulb",
                title: "Innovation Leaders",
                description: "Forward-thinking professionals who drive innovation and transformation."
              },
              {
                icon: "fas fa-globe",
                title: "Regional Leadership",
                description: "Leaders who understand regional markets and can drive growth in specific territories."
              },
              {
                icon: "fas fa-cogs",
                title: "Technical Leadership",
                description: "Technical managers who combine deep expertise with strong leadership capabilities."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-primary`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Hiring Approach</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                Comprehensive Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                We take time to understand your organization's culture, goals, and specific leadership needs before beginning the search process.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>In-depth analysis of role requirements</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Cultural assessment to ensure alignment</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Strategic goal mapping</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                Targeted Search
              </h3>
              <p className="text-gray-600 mb-4">
                Our specialized approach combines active headhunting, our extensive network, and advanced sourcing techniques.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Industry-specific talent mapping</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Access to passive candidates</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Competitor analysis and targeting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                Rigorous Selection
              </h3>
              <p className="text-gray-600 mb-4">
                We employ a multi-stage evaluation process to identify leaders with the right skills, experience, and cultural fit.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Competency-based interviews</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Leadership assessment tools</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Reference verification</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                Successful Integration
              </h3>
              <p className="text-gray-600 mb-4">
                Our support extends beyond the hire to ensure your new leaders integrate successfully and make an impact quickly.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Onboarding support</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>30/60/90 day check-ins</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Performance feedback loop</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to strengthen your leadership team?</h2>
            <p className="text-gray-600 mb-8">
              Partner with Recroot to find the leaders who will drive your organization's success and growth.
            </p>
            <Link href="/contact-us" className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition inline-block">
              Request a Leadership Hiring Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipHiring;
