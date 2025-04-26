import { useState } from "react";

interface Testimonial {
  rating: number;
  ratingText: string;
  content: string;
  author: {
    name: string;
    title: string;
    image?: string;
  };
  company?: string;
}

const testimonials: Testimonial[] = [
  {
    rating: 5.0,
    ratingText: "5.0",
    content: "Recroot helped us find the perfect CTO for our startup in just 3 weeks. The quality of candidates was exceptional, and the process was seamless.",
    author: {
      name: "Sarah Johnson",
      title: "CEO, TechStart Inc."
    },
    company: "TechStart"
  },
  {
    rating: 5.0,
    ratingText: "5.0",
    content: "As a job seeker, I was impressed by how Recroot matched me with companies that aligned with my career goals. I found my dream job within a month!",
    author: {
      name: "Michael Chen",
      title: "Product Manager, InnovateCorp"
    },
    company: "InnovateCorp"
  },
  {
    rating: 4.5,
    ratingText: "4.5",
    content: "The RPO service from Recroot transformed our hiring process. We've reduced time-to-hire by 40% while improving candidate quality across all departments.",
    author: {
      name: "Emily Rodriguez",
      title: "HR Director, Global Solutions Ltd."
    },
    company: "Global Solutions"
  }
];

const Testimonials = () => {
  const [activePage, setActivePage] = useState(0);

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-2xl mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="h-0.5 w-12 bg-primary mr-4"></div>
              <span className="text-primary font-medium">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-xl">
              Success stories from employers and job seekers who found their perfect match with Recroot.
            </p>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={() => {
                const newPage = activePage === 0 ? testimonials.length - 1 : activePage - 1;
                setActivePage(newPage);
              }}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <button 
              onClick={() => {
                const newPage = activePage === testimonials.length - 1 ? 0 : activePage + 1;
                setActivePage(newPage);
              }}
              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
              aria-label="Next testimonial"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-6 gap-8">
          {/* Featured testimonial */}
          <div className="col-span-full md:col-span-4">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-gray-100">
              <div className="flex mb-6">
                <div className="text-yellow-400 flex">
                  {[...Array(Math.floor(testimonials[activePage].rating))].map((_, i) => (
                    <i key={i} className="fas fa-star text-lg"></i>
                  ))}
                  {testimonials[activePage].rating % 1 > 0 && (
                    <i className="fas fa-star-half-alt text-lg"></i>
                  )}
                </div>
                <span className="ml-2 text-gray-600 font-medium">{testimonials[activePage].ratingText}</span>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-800 font-medium mb-8 leading-relaxed relative">
                <i className="fas fa-quote-left absolute -top-5 -left-2 text-blue-100 text-4xl opacity-50"></i>
                <p className="relative z-10">{testimonials[activePage].content}</p>
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xl">
                    {testimonials[activePage].author.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">{testimonials[activePage].author.name}</p>
                    <p className="text-gray-600">{testimonials[activePage].author.title}</p>
                  </div>
                </div>
                {testimonials[activePage].company && (
                  <div className="bg-blue-50 text-primary px-4 py-2 rounded-lg font-medium">
                    {testimonials[activePage].company}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Stats and highlight */}
          <div className="col-span-full md:col-span-2 grid grid-cols-1 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Trusted by thousands</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold mb-1">98%</p>
                  <p className="text-blue-100">Success rate</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-1">10k+</p>
                  <p className="text-blue-100">Happy clients</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-1">4.9/5</p>
                  <p className="text-blue-100">Average rating</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block bg-blue-50 rounded-2xl p-6">
              <div className="flex justify-center mb-4">
                <i className="fas fa-shield-alt text-4xl text-primary"></i>
              </div>
              <h3 className="text-center text-lg font-bold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-center text-gray-600 text-sm">
                We're committed to finding the right match or your money back.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activePage ? 'bg-primary w-6' : 'bg-gray-300'}`}
              aria-label={`Page ${index + 1}`}
              onClick={() => setActivePage(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
