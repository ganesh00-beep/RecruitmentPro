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
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark">Our Recruitment Services</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Tailored solutions to meet your hiring needs, no matter the industry or position.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className={`${service.icon} text-primary`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.link} className="text-primary font-medium inline-flex items-center">
                Learn more <i className="fas fa-arrow-right ml-1 text-sm"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
