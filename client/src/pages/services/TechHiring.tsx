import { useEffect } from "react";
import { Link } from "wouter";

const TechHiring = () => {
  useEffect(() => {
    // Add Font Awesome CDN dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);
    
    // Update page title
    document.title = "Tech Hiring Solutions | Recroot";
    
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
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">Tech Talent Hiring Solutions</h1>
              <p className="text-lg text-gray-600 mb-6">
                Find specialized tech talent for your innovative projects and digital transformation initiatives.
              </p>
              <Link href="/contact-us" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition inline-block">
                Hire Tech Talent
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-laptop-code text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Specialized Tech Expertise</h3>
              <p className="text-gray-600 text-center">
                Our tech talent pool includes software engineers, data scientists, cybersecurity experts, and more to meet your specific technology needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Tech Expertise We Provide</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our tech talent network spans a wide range of technologies, frameworks, and programming languages.
          </p>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-12">
            {[
              "JavaScript", "Python", "Java", "C#", "Ruby", "Go",
              "React", "Angular", "Vue.js", "Node.js", "Django", ".NET",
              "AWS", "Azure", "GCP", "Kubernetes", "Docker", "DevOps"
            ].map((tech, index) => (
              <div key={index} className="bg-secondary py-3 px-4 rounded-md text-center">
                <p className="font-medium">{tech}</p>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-code text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Software Development</h3>
              <p className="text-gray-600 mb-4">
                Full-stack, frontend, and backend developers with expertise in modern frameworks and languages.
              </p>
              <ul className="text-gray-600">
                <li className="flex items-start mb-2">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Web & Mobile Application Development</span>
                </li>
                <li className="flex items-start mb-2">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>API Development & Integration</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Microservices Architecture</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-database text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data & AI</h3>
              <p className="text-gray-600 mb-4">
                Data scientists, analysts, and AI specialists who can transform your data into valuable insights.
              </p>
              <ul className="text-gray-600">
                <li className="flex items-start mb-2">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Machine Learning & AI Development</span>
                </li>
                <li className="flex items-start mb-2">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Big Data Processing & Analytics</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Business Intelligence Solutions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-shield-alt text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Infrastructure & Security</h3>
              <p className="text-gray-600 mb-4">
                DevOps engineers and cybersecurity experts to build and protect your digital infrastructure.
              </p>
              <ul className="text-gray-600">
                <li className="flex items-start mb-2">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Cloud Architecture & Migration</span>
                </li>
                <li className="flex items-start mb-2">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>DevOps & CI/CD Implementation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Cybersecurity & Compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Roles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Tech Roles We Fill</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From individual contributors to tech leadership, we connect you with the right tech talent for your specific needs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Software Engineers",
                description: "Full-stack, frontend, and backend developers skilled in modern languages and frameworks."
              },
              {
                title: "DevOps Engineers",
                description: "Experts in automating and optimizing development workflows and infrastructure."
              },
              {
                title: "Data Scientists",
                description: "Specialists who can extract insights and build predictive models from your data."
              },
              {
                title: "UX/UI Designers",
                description: "Creative professionals who design intuitive and engaging user experiences."
              },
              {
                title: "QA Specialists",
                description: "Quality assurance experts who ensure your software meets the highest standards."
              },
              {
                title: "Cybersecurity Experts",
                description: "Professionals who protect your systems and data from security threats."
              },
              {
                title: "Cloud Architects",
                description: "Specialists in designing and implementing scalable cloud-based solutions."
              },
              {
                title: "Product Managers",
                description: "Tech-savvy leaders who can guide product development and strategy."
              },
              {
                title: "Scrum Masters",
                description: "Agile practitioners who facilitate efficient development processes."
              }
            ].map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary transition-colors duration-300">
                <h3 className="text-lg font-semibold mb-2">{role.title}</h3>
                <p className="text-gray-600">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Tech Hiring Service</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <i className="fas fa-search text-primary"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Technical Screening Expertise</h3>
                <p className="text-gray-600">
                  Our tech recruiters have domain expertise and use rigorous technical assessments to ensure candidates have the skills they claim.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <i className="fas fa-users text-primary"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Specialized Talent Network</h3>
                <p className="text-gray-600">
                  Access our extensive network of pre-vetted tech professionals across various specializations and experience levels.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <i className="fas fa-bolt text-primary"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rapid Placement</h3>
                <p className="text-gray-600">
                  Our efficient process helps you fill critical tech positions quickly without sacrificing quality or cultural fit.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <i className="fas fa-chart-line text-primary"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
                <p className="text-gray-600">
                  Stay informed with the latest tech recruitment trends, salary benchmarks, and skills in demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Hiring Models Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Flexible Hiring Models</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-user-plus text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Direct Placement</h3>
              <p className="text-gray-600">
                Hire full-time tech employees who become permanent members of your team.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="font-medium">Ideal for:</p>
                <p className="text-gray-600">Long-term strategic roles and core team positions</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-project-diagram text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Contract Hiring</h3>
              <p className="text-gray-600">
                Engage tech professionals for specific project durations or timeframes.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="font-medium">Ideal for:</p>
                <p className="text-gray-600">Project-based work and specialized skill requirements</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="fas fa-hand-holding text-primary text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Contract-to-Hire</h3>
              <p className="text-gray-600">
                Start with a contract period before transitioning to permanent employment.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="font-medium">Ideal for:</p>
                <p className="text-gray-600">Evaluating cultural fit and technical abilities before committing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to build your tech team?</h2>
                <p className="text-gray-600">
                  Partner with Recroot to find the specialized tech talent you need to innovate and grow.
                </p>
              </div>
              <div>
                <Link href="/contact-us" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition inline-block">
                  Request Tech Talent
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechHiring;
