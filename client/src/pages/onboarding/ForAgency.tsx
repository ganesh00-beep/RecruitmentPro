import { useEffect } from "react";
import { Link } from "wouter";

const ForAgency = () => {
  useEffect(() => {
    // Add Font Awesome CDN dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);
    
    // Update page title
    document.title = "For Recruitment Agencies & Freelancers | Recroot";
    
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
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Expand Your Recruitment Business</h1>
              <p className="text-lg text-gray-600 mb-6">
                Partner with Recroot to access more clients, streamline your processes, and scale your recruitment agency or freelance practice.
              </p>
              <Link href="/register" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition inline-block">
                Become a Partner
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-handshake text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">For Agencies & Independent Recruiters</h3>
              <p className="text-gray-600 text-center">
                Whether you're a large agency or an independent headhunter, our platform provides the tools and opportunities to grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Recroot</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-briefcase text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expanded Client Base</h3>
              <p className="text-gray-600">
                Access a diverse range of clients seeking specialized recruitment services across industries.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-cogs text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Powerful Tools</h3>
              <p className="text-gray-600">
                Utilize our comprehensive recruitment platform to streamline your sourcing, assessment, and placement processes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-money-check-alt text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Competitive Compensation</h3>
              <p className="text-gray-600">
                Earn attractive placement fees with our transparent and timely payment structure.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-chart-line text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Growth</h3>
              <p className="text-gray-600">
                Leverage our platform to scale your recruitment business without significant overhead costs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-database text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Market Intelligence</h3>
              <p className="text-gray-600">
                Access valuable industry insights and salary data to enhance your recruitment strategy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-chalkboard-teacher text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Training & Support</h3>
              <p className="text-gray-600">
                Benefit from ongoing training, industry updates, and dedicated account management.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">How Our Partnership Works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            A simple process to join our network and start making placements.
          </p>
          
          <div className="relative">
            <div className="hidden md:block absolute left-0 right-0 top-24 h-1 bg-gray-200"></div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Apply & Onboard",
                  description: "Complete our partner application and go through our verification and onboarding process."
                },
                {
                  step: 2,
                  title: "Access Requirements",
                  description: "Browse job requisitions from our clients that match your expertise and specialization."
                },
                {
                  step: 3,
                  title: "Submit Candidates",
                  description: "Present qualified candidates for open positions through our streamlined platform."
                },
                {
                  step: 4,
                  title: "Placement & Payment",
                  description: "Receive competitive fees when your candidates are successfully placed with our clients."
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
      
      {/* Partner Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Who Can Partner With Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-building text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Recruitment Agencies</h3>
              <p className="text-gray-600 mb-6">
                Established agencies looking to expand their client base and access new industries.
              </p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Access to exclusive enterprise clients</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Volume-based partnership tiers</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Multi-user access to the platform</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-user-tie text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Independent Recruiters</h3>
              <p className="text-gray-600 mb-6">
                Experienced recruiters operating independently who want to grow their business.
              </p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Reduced overhead costs</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Flexible working arrangements</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Comprehensive recruitment tools</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-laptop-house text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Boutique Consultancies</h3>
              <p className="text-gray-600 mb-6">
                Specialized firms focusing on specific industries or roles seeking to expand their reach.
              </p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Industry-specific opportunities</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Niche talent pool access</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Collaborative client relationships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Specializations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Industry Specializations</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We partner with recruitment specialists across various industries and functions.
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
      
      {/* Partner Tiers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Partnership Tiers</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Choose the partnership level that best suits your business needs and recruitment volume.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Silver Partner</h3>
                <p className="text-gray-600">For new partners and those with lower volume</p>
                <div className="mt-4">
                  <span className="text-lg text-gray-600">Commission rate</span>
                  <div className="text-4xl font-bold mt-1">15-20%</div>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Basic platform access</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Standard job requisitions</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Email support</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Monthly payment cycles</span>
                </li>
              </ul>
              
              <Link href="/register" className="w-full block text-center bg-white border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-white transition">
                Join as Silver Partner
              </Link>
            </div>
            
            <div className="bg-primary bg-opacity-5 p-8 rounded-lg shadow-md border border-primary relative transform md:scale-105">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                RECOMMENDED
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Gold Partner</h3>
                <p className="text-gray-600">For established agencies with consistent placements</p>
                <div className="mt-4">
                  <span className="text-lg text-gray-600">Commission rate</span>
                  <div className="text-4xl font-bold mt-1">20-25%</div>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Advanced platform features</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Priority job requisitions</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Bi-weekly payment cycles</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Performance bonuses</span>
                </li>
              </ul>
              
              <Link href="/register" className="w-full block text-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition">
                Join as Gold Partner
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Platinum Partner</h3>
                <p className="text-gray-600">For high-volume agencies with proven track record</p>
                <div className="mt-4">
                  <span className="text-lg text-gray-600">Commission rate</span>
                  <div className="text-4xl font-bold mt-1">25-30%+</div>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Premium platform access</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Exclusive high-value requisitions</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Strategic account executive</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Weekly payment cycles</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Enhanced performance bonuses</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Co-branding opportunities</span>
                </li>
              </ul>
              
              <Link href="/contact-us" className="w-full block text-center bg-white border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-white transition">
                Apply for Platinum Status
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Partner Success Stories</h2>
          
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
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-gray-600 mb-6">
                "Partnering with Recroot has doubled our agency's revenue in just 8 months. The platform's efficiency allows us to focus on candidate relationships while they handle the client-side logistics."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">AP</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-dark">Alex Patterson</p>
                  <p className="text-sm text-gray-500">Founder, TalentSource Recruiting</p>
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
                <span className="ml-2 text-sm text-gray-600">4.5</span>
              </div>
              <p className="text-gray-600 mb-6">
                "As an independent recruiter, Recroot has given me access to opportunities I couldn't have secured on my own. Their commission structure is fair and payments are always on time."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">SC</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-dark">Sarah Chen</p>
                  <p className="text-sm text-gray-500">Independent Tech Recruiter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3">What are the requirements to become a partner?</h3>
              <p className="text-gray-600">
                We look for partners with recruitment experience, industry knowledge, and a track record of successful placements. New partners undergo a verification process to ensure quality standards.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">How does the commission structure work?</h3>
              <p className="text-gray-600">
                Commission rates range from 15-30% of the placement fee based on your partnership tier, specialization, and placement volume. Rates increase as you advance through our partnership tiers.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">When and how will I get paid?</h3>
              <p className="text-gray-600">
                Payment cycles depend on your partnership tier, ranging from monthly to weekly. All payments are processed electronically to your designated account after successful candidate placement.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Can I work on multiple requisitions?</h3>
              <p className="text-gray-600">
                Yes, partners can work on multiple job requisitions simultaneously based on their capacity and specialization. There are no limits to the number of positions you can fill.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">What support do partners receive?</h3>
              <p className="text-gray-600">
                Depending on your tier, you'll receive various levels of support including platform training, dedicated account management, marketing resources, and access to our knowledge base.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Is there an exclusivity requirement?</h3>
              <p className="text-gray-600">
                No, we don't require exclusivity. You can continue working with your existing clients while leveraging our platform to expand your business and access new opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to grow your recruitment business?</h2>
            <p className="text-gray-600 mb-8">
              Join our partner network and gain access to exclusive opportunities, powerful tools, and competitive compensation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition">
                Apply to Become a Partner
              </Link>
              <Link href="/contact-us" className="bg-white border border-gray-300 text-dark px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForAgency;
