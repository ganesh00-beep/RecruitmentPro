const Stats = () => {
  const stats = [
    { value: "5000+", label: "Successful Placements" },
    { value: "1200+", label: "Partner Companies" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "45", label: "Day Average Time-to-Hire" }
  ];

  return (
    <section className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
