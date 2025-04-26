const ClientLogos = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-8">Trusted by leading companies worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 text-sm">Client {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
