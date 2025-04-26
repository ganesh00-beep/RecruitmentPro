import { useEffect } from "react";
import { Link } from "wouter";

const ForEmployer = () => {
  useEffect(() => {
    // Add Font Awesome CDN dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);
    
    // Update page title
    document.title = "For Employers | Recroot";
    
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
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Hiring Made Simple for Employers</h1>
              <p className="text-lg text-gray-600 mb-6">
                Access top talent, streamline your recruitment process, and build high-performing teams with Recroot's employer solutions.
              </p>
              <Link href="/register" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition inline-block">
                Get Started
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-building text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">For Businesses of All Sizes</h3>
              <p className="text-gray-600 text-center">
                Whether you're a startup or enterprise, our platform provides the tools and talent you need to grow your team effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Employers Choose Recroot</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-user-check text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Candidates</h3>
              <p className="text-gray-600">
                Access pre-screened candidates who match your specific requirements and company culture.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-bolt text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Faster Hiring</h3>
              <p className="text-gray-600">
                Reduce time-to-hire by up to 50% with our streamlined recruitment process and tools.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-chart-pie text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Make informed decisions with detailed analytics on your recruitment performance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-hand-holding-usd text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost-Effective</h3>
              <p className="text-gray-600">
                Reduce your recruitment costs with our flexible pricing plans tailored to your hiring volume.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-tools text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Powerful Tools</h3>
              <p className="text-gray-600">
                Utilize our comprehensive suite of recruitment tools, from job posting to candidate management.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-users text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Get guidance from our recruitment specialists who understand your industry and hiring needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works for Employers</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our platform makes it easy to find, evaluate, and hire the right talent for your team.
          </p>
          
          <div className="relative">
            <div className="hidden md:block absolute left-0 right-0 top-24 h-1 bg-gray-200"></div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Create Your Account",
                  description: "Sign up and create your company profile with your hiring needs and requirements."
                },
                {
                  step: 2,
                  title: "Post Jobs & Requirements",
                  description: "Publish job openings or submit specific talent requirements to our recruitment team."
                },
                {
                  step: 3,
                  title: "Review Candidates",
                  description: "Evaluate pre-screened candidates through our platform and select the best matches."
                },
                {
                  step: 4,
                  title: "Hire & Onboard",
                  description: "Complete the hiring process with our support and bring new talent into your team."
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
      
      {/* Plans Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Our Employer Plans</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Choose the right plan for your business size and hiring needs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Startup</h3>
                <p className="text-gray-600">For small businesses with occasional hiring needs</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$299</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Up to 5 active job postings</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Access to candidate database</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Basic applicant tracking</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Email support</span>
                </li>
              </ul>
              
              <Link href="/register" className="w-full block text-center bg-white border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-white transition">
                Get Started
              </Link>
            </div>
            
            <div className="bg-primary bg-opacity-5 p-8 rounded-lg shadow-md border border-primary relative transform md:scale-105">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <p className="text-gray-600">For growing companies with regular hiring</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$799</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Up to 15 active job postings</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Advanced candidate filtering</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Comprehensive ATS functionality</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Phone & email support</span>
                </li>
              </ul>
              
              <Link href="/register" className="w-full block text-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition">
                Get Started
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600">For large organizations with high-volume hiring</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Unlimited job postings</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Custom recruitment workflow</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>API integration</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Advanced analytics & reporting</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Dedicated recruitment team</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Priority support</span>
                </li>
              </ul>
              
              <Link href="/contact-us" className="w-full block text-center bg-white border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-white transition">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Employers Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
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
                "Recroot has transformed our hiring process. We've reduced our time-to-hire by 40% and the quality of candidates has been exceptional."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">JD</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-dark">John Doe</p>
                  <p className="text-sm text-gray-500">HR Director, Tech Solutions Inc.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
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
                "As a small business owner, I needed a cost-effective way to find qualified staff. Recroot delivered beyond my expectations with their personalized service."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">MS</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-dark">Maria Smith</p>
                  <p className="text-sm text-gray-500">Owner, Boutique Retail</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
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
                "The analytics and insights from Recroot have helped us optimize our recruitment strategy. Their team truly understands our industry and hiring needs."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">RJ</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-dark">Robert Johnson</p>
                  <p className="text-sm text-gray-500">COO, Manufacturing Enterprise</p>
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
              <h3 className="text-xl font-semibold mb-3">How does the employer platform work?</h3>
              <p className="text-gray-600">
                Our platform allows you to create a company profile, post job openings, and access our database of pre-screened candidates. You can also use our tools to manage the entire recruitment process from sourcing to hiring.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">What types of roles can I hire for?</h3>
              <p className="text-gray-600">
                We support hiring across various industries and roles, including executive positions, tech roles, and general professional positions. Our specialized recruiters can help with specific niche requirements as well.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">How quickly can I expect to fill a position?</h3>
              <p className="text-gray-600">
                The timeline varies based on the role complexity and market conditions, but our clients typically see a 40-50% reduction in time-to-hire compared to traditional methods. Most positions are filled within 3-4 weeks.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Can I customize the recruitment process?</h3>
              <p className="text-gray-600">
                Yes, our Growth and Enterprise plans offer customization options to align with your internal processes. We can tailor the candidate screening, assessment, and interview stages to match your requirements.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">What support do I receive as an employer?</h3>
              <p className="text-gray-600">
                Depending on your plan, you'll receive support ranging from email assistance to a dedicated account manager or recruitment team who will guide you through the process and help optimize your hiring strategy.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Is there a guarantee on hiring quality?</h3>
              <p className="text-gray-600">
                We're confident in our screening process and offer replacement guarantees for candidates who don't meet expectations within the first months of employment. Details vary by plan and can be discussed with our team.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your hiring process?</h2>
            <p className="text-gray-600 mb-8">
              Join thousands of employers who have simplified their recruitment and found exceptional talent through Recroot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition">
                Create Employer Account
              </Link>
              <Link href="/contact-us" className="bg-white border border-gray-300 text-dark px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition">
                Speak to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForEmployer;
