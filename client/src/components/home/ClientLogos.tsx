const ClientLogos = () => {
  const logos = [
    { name: "Google", icon: "fab fa-google" },
    { name: "Amazon", icon: "fab fa-amazon" },
    { name: "Microsoft", icon: "fab fa-microsoft" },
    { name: "Apple", icon: "fab fa-apple" },
    { name: "Slack", icon: "fab fa-slack" },
    { name: "Shopify", icon: "fab fa-shopify" }
  ];

  return (
    <section className="border-y border-gray-100 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-3">Trusted by 1,000+ companies</p>
          <p className="text-gray-700 text-lg">Join the leading organizations using our recruitment platform</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {logos.map((logo, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center justify-center bg-white rounded-lg py-6 px-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <i className={`${logo.icon} text-4xl text-gray-700 mb-3`}></i>
              <span className="text-gray-600 text-sm">{logo.name}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">
            View all our partners <i className="fas fa-arrow-right ml-2 text-sm"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
