import { useEffect } from "react";
import { Link } from "wouter";

const AboutUs = () => {
  useEffect(() => {
    // Add Font Awesome CDN dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);
    
    // Update page title
    document.title = "About Us | Recroot";
    
    return () => {
      // Clean up
      document.head.removeChild(link);
    };
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary relative overflow-hidden py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">About Recroot</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to make recruitment simple, efficient, and effective for everyone.
            </p>
          </div>
        </div>
        <div className="absolute -top-20 -right-20 h-64 w-64 bg-primary bg-opacity-10 rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 bg-primary bg-opacity-10 rounded-full"></div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Recroot was founded in 2019 by a team of HR professionals and tech entrepreneurs who experienced firsthand the challenges of traditional recruitment processes.
              </p>
              <p className="text-gray-600 mb-4">
                After years of witnessing inefficient hiring practices, mismatched job placements, and frustrated candidates, we decided to build a solution that would transform recruitment for all parties involved.
              </p>
              <p className="text-gray-600 mb-4">
                Today, Recroot connects thousands of employers with qualified candidates across various industries. Our platform leverages technology and human expertise to create meaningful employment connections.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-6">
                  <i className="fas fa-quote-left text-4xl text-primary opacity-20 mr-4"></i>
                  <p className="italic text-gray-600">
                    "We built Recroot to eliminate the friction in hiring and create a platform where talent can connect with opportunity seamlessly."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-medium">JD</span>
                  </div>
                  <div>
                    <p className="font-bold">Jane Doe</p>
                    <p className="text-sm text-gray-500">Co-founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Our Mission & Values</h2>
            <p className="text-gray-600">
              At Recroot, we're guided by a set of core principles that shape how we build our product and serve our users.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-handshake text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Transparency</h3>
              <p className="text-gray-600">
                We believe in honest communication and creating a trustworthy platform where all parties have access to the information they need.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-balance-scale text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fairness & Equity</h3>
              <p className="text-gray-600">
                We're committed to creating equal opportunities and eliminating bias in the recruitment process for candidates of all backgrounds.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-lightbulb text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our platform with cutting-edge technology to provide the best possible recruitment experience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-users text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">People-First</h3>
              <p className="text-gray-600">
                We recognize that recruitment is ultimately about people, and we design our platform with human needs and experiences at the forefront.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-shield-alt text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality & Excellence</h3>
              <p className="text-gray-600">
                We're dedicated to maintaining high standards in everything we do, from the candidates we source to the service we provide.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-globe text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-gray-600">
                We measure our success by the positive difference we make in people's careers and the growth we enable for businesses.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">
              Meet the experienced professionals behind Recroot's mission to transform recruitment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jane Doe",
                title: "Co-founder & CEO",
                bio: "With 15+ years in HR technology, Jane leads Recroot's vision and strategy. Previously led talent acquisition at Fortune 500 companies."
              },
              {
                name: "John Smith",
                title: "Co-founder & CTO",
                bio: "Tech entrepreneur with multiple successful startups. John oversees Recroot's technology development and innovative roadmap."
              },
              {
                name: "Sarah Johnson",
                title: "Chief Operations Officer",
                bio: "Former recruiting agency executive with extensive experience in scaling operations and optimizing recruitment processes."
              },
              {
                name: "Michael Chen",
                title: "VP of Product",
                bio: "Product leader with a background in UX design. Michael ensures Recroot's platform is intuitive and solves real user problems."
              },
              {
                name: "Lisa Rodriguez",
                title: "VP of Marketing",
                bio: "Marketing strategist who has helped multiple SaaS companies achieve significant growth through data-driven campaigns."
              },
              {
                name: "David Kim",
                title: "Head of Customer Success",
                bio: "Customer experience expert focused on ensuring Recroot's clients and candidates achieve their goals through the platform."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 font-medium text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                <p className="text-primary text-sm text-center mb-4">{member.title}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Growth Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Growth Journey</h2>
            <p className="max-w-2xl mx-auto">
              Since our founding, we've been rapidly expanding our impact in the recruitment space.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold">50K+</p>
              <p className="mt-2">Successful Placements</p>
            </div>
            <div>
              <p className="text-4xl font-bold">10K+</p>
              <p className="mt-2">Companies</p>
            </div>
            <div>
              <p className="text-4xl font-bold">250K+</p>
              <p className="mt-2">Job Seekers</p>
            </div>
            <div>
              <p className="text-4xl font-bold">15+</p>
              <p className="mt-2">Countries</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">What People Say About Us</h2>
            <p className="text-gray-600">
              Hear from the employers and job seekers who have transformed their recruitment experience with Recroot.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary p-6 rounded-lg">
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
                "Recroot has transformed our hiring process. We've reduced time-to-hire by 40% and improved the quality of our candidates significantly."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">TC</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-dark">Thomas Clark</p>
                  <p className="text-sm text-gray-500">HR Director, TechCorp</p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
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
                "As a job seeker, I appreciate how Recroot matched me with positions that truly aligned with my skills and career goals. I found my dream job in half the time."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">AJ</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-dark">Alicia James</p>
                  <p className="text-sm text-gray-500">Marketing Manager</p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
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
                "Our boutique recruiting agency has expanded its reach through Recroot's platform. The tools and client connections have helped us double our business."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">MP</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium text-dark">Marcus Patel</p>
                  <p className="text-sm text-gray-500">Agency Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Investors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Backed By Industry Leaders</h2>
            <p className="text-gray-600">
              Recroot is supported by investors who believe in our vision for the future of recruitment.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <div className="text-gray-400 font-medium">Investor {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Career Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 bg-primary bg-opacity-10 rounded-full"></div>
            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-dark mb-4">Join Our Team</h2>
                <p className="text-gray-600 mb-8">
                  We're always looking for talented individuals who are passionate about improving how people find jobs and companies hire talent.
                </p>
                <Link href="/careers" className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition inline-block">
                  View Open Positions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Office Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Our Global Presence</h2>
            <p className="text-gray-600">
              With offices around the world, we're helping companies and candidates connect globally.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: "San Francisco",
                country: "United States",
                address: "123 Market Street, San Francisco, CA 94105",
                phone: "+1 (415) 555-1234"
              },
              {
                city: "London",
                country: "United Kingdom",
                address: "456 Oxford Street, London, W1C 1AP",
                phone: "+44 20 7946 0958"
              },
              {
                city: "Singapore",
                country: "Singapore",
                address: "789 Marina Boulevard, Singapore 018984",
                phone: "+65 6123 4567"
              }
            ].map((office, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-2">{office.city}</h3>
                <p className="text-primary mb-4">{office.country}</p>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-2 text-gray-400"></i>
                    <span>{office.address}</span>
                  </p>
                  <p className="flex items-start">
                    <i className="fas fa-phone-alt mt-1 mr-2 text-gray-400"></i>
                    <span>{office.phone}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to experience Recroot?</h2>
            <p className="text-gray-600 mb-8">
              Join thousands of companies and job seekers who are transforming their recruitment experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition">
                Get Started
              </Link>
              <Link href="/contact-us" className="bg-white border border-gray-300 text-dark px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
