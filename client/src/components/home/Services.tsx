import { Link } from "wouter";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const services: ServiceItem[] = [
  {
    icon: "fas fa-user-tie",
    title: "Executive Search Hiring",
    description: "Find top-level executives who can lead your organization to success.",
    link: "/services/executive-search"
  },
  {
    icon: "fas fa-users",
    title: "Leadership Hiring",
    description: "Build strong leadership teams that drive innovation and growth.",
    link: "/services/leadership-hiring"
  },
  {
    icon: "fas fa-handshake",
    title: "RPO",
    description: "Recruitment Process Outsourcing for efficient hiring at scale.",
    link: "/services/rpo"
  },
  {
    icon: "fas fa-briefcase",
    title: "Talent Hiring",
    description: "Connect with skilled professionals across various industries.",
    link: "/services/talent-hiring"
  },
  {
    icon: "fas fa-laptop-code",
    title: "Tech Hiring",
    description: "Find specialized tech talent for your innovative projects.",
    link: "/services/tech-hiring"
  },
  {
    icon: "fas fa-chart-bar",
    title: "Recruitment Analytics",
    description: "Data-driven insights to optimize your hiring process.",
    link: "#"
  }
];

const Services = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="h-0.5 w-12 bg-primary mr-4"></div>
              <span className="text-primary font-medium">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Recruitment Solutions</h2>
            <p className="text-gray-600 max-w-xl">
              Tailored services to meet your hiring needs, no matter the industry or position you're looking to fill.
            </p>
          </div>
          <Link href="/services" className="text-primary font-medium hover:text-blue-700 transition-colors duration-200 flex items-center group">
            View all services 
            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-200"></i>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300 group hover:border-primary hover:border-opacity-50"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors duration-300">
                <i className={`${service.icon} text-primary text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              <Link 
                href={service.link} 
                className="text-primary font-medium inline-flex items-center group-hover:underline"
              >
                Learn more <i className="fas fa-arrow-right ml-2 text-sm group-hover:translate-x-1 transition-transform duration-200"></i>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:max-w-xl">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Ready to streamline your recruitment?</h3>
              <p className="text-blue-100">
                Join thousands of companies that have transformed their hiring process with our platform.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/get-started/employer" 
                className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
              >
                Get started <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link 
                href="/contact-us" 
                className="bg-blue-600 text-white border border-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Talk to an expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
