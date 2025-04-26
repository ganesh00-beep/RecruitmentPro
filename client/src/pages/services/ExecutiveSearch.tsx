import { useEffect } from "react";
import { Link } from "wouter";

const ExecutiveSearch = () => {
  useEffect(() => {
    // Add Font Awesome CDN dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);
    
    // Update page title
    document.title = "Executive Search Hiring | Recroot";
    
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
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Executive Search Hiring</h1>
              <p className="text-lg text-gray-600 mb-6">
                Find exceptional leaders who will drive your organization forward and shape your company's future.
              </p>
              <Link href="/contact-us" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition inline-block">
                Get Started
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-user-tie text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">World-Class Executive Talent</h3>
              <p className="text-gray-600 text-center">
                Our executive search process connects you with pre-vetted C-suite and senior leaders who align with your company's vision and culture.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Executive Search Service</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-network-wired text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Extensive Network</h3>
              <p className="text-gray-600">
                Access our exclusive network of top-tier executives across industries and markets globally.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-filter text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Rigorous Vetting</h3>
              <p className="text-gray-600">
                Our comprehensive assessment ensures candidates have the skills, experience, and cultural fit for success.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-handshake text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Approach</h3>
              <p className="text-gray-600">
                We create customized search strategies tailored to your specific leadership requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Executive Search Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: 1,
                title: "Needs Assessment",
                description: "We begin with an in-depth consultation to understand your organization, culture, and leadership requirements."
              },
              {
                number: 2,
                title: "Candidate Sourcing",
                description: "Our team leverages our extensive network to identify potential executives who match your criteria."
              },
              {
                number: 3,
                title: "Rigorous Evaluation",
                description: "Candidates undergo a comprehensive assessment of skills, experience, leadership style, and cultural fit."
              },
              {
                number: 4,
                title: "Selection & Onboarding",
                description: "We facilitate the final selection process and support the successful onboarding of your new executive."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mb-4 font-semibold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300 text-2xl">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to find your next executive leader?</h2>
                <p className="text-gray-600">
                  Let us help you identify and recruit the right leadership talent to take your organization to new heights.
                </p>
              </div>
              <div>
                <Link href="/contact-us" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition inline-block">
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveSearch;
