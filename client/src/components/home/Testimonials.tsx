import { useState } from "react";

interface Testimonial {
  rating: number;
  ratingText: string;
  content: string;
  author: {
    name: string;
    title: string;
  };
}

const testimonials: Testimonial[] = [
  {
    rating: 5.0,
    ratingText: "5.0",
    content: "Recroot helped us find the perfect CTO for our startup in just 3 weeks. The quality of candidates was exceptional, and the process was seamless.",
    author: {
      name: "Sarah Johnson",
      title: "CEO, TechStart Inc."
    }
  },
  {
    rating: 5.0,
    ratingText: "5.0",
    content: "As a job seeker, I was impressed by how Recroot matched me with companies that aligned with my career goals. I found my dream job within a month!",
    author: {
      name: "Michael Chen",
      title: "Product Manager, InnovateCorp"
    }
  },
  {
    rating: 4.5,
    ratingText: "4.5",
    content: "The RPO service from Recroot transformed our hiring process. We've reduced time-to-hire by 40% while improving candidate quality across all departments.",
    author: {
      name: "Emily Rodriguez",
      title: "HR Director, Global Solutions Ltd."
    }
  }
];

const Testimonials = () => {
  const [activePage, setActivePage] = useState(0);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark">What Our Clients Say</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Success stories from employers and job seekers who found their perfect match.</p>
        </div>
        
        <div className="relative">
          <div className="testimonial-slider flex overflow-x-auto pb-8 -mx-4 px-4 space-x-4 hide-scrollbar">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                    {testimonial.rating % 1 > 0 && (
                      <i className="fas fa-star-half-alt"></i>
                    )}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{testimonial.ratingText}</span>
                </div>
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600 text-xs">{testimonial.author.name.charAt(0)}</span>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-dark">{testimonial.author.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.author.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full ${index === activePage ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Page ${index + 1}`}
                onClick={() => setActivePage(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
