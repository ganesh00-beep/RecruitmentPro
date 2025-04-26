import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: ""
  });
  
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be actual form submission logic
    
    // Show success message
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      inquiryType: ""
    });
  };
  
  useEffect(() => {
    // Add Font Awesome CDN dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);
    
    // Update page title
    document.title = "Contact Us | Recroot";
    
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-8">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
        </div>
        <div className="absolute -top-20 -right-20 h-64 w-64 bg-primary bg-opacity-10 rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 bg-primary bg-opacity-10 rounded-full"></div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're looking to hire, find a job, or partner with us, we're here to help. Fill out the form, and one of our team members will get back to you shortly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full h-fit mr-4">
                    <i className="fas fa-envelope text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">info@recroot.com</p>
                    <p className="text-gray-600">support@recroot.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full h-fit mr-4">
                    <i className="fas fa-phone-alt text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (415) 555-1234</p>
                    <p className="text-gray-600">+44 20 7946 0958</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full h-fit mr-4">
                    <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-600">123 Market Street</p>
                    <p className="text-gray-600">San Francisco, CA 94105</p>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full h-fit mr-4">
                    <i className="fas fa-clock text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name*</Label>
                      <Input 
                        id="fullName" 
                        name="fullName" 
                        value={formData.fullName} 
                        onChange={handleChange} 
                        placeholder="John Doe" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address*</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="+1 (123) 456-7890" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input 
                        id="company" 
                        name="company" 
                        value={formData.company} 
                        onChange={handleChange} 
                        placeholder="Your Company" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type*</Label>
                      <Select 
                        value={formData.inquiryType} 
                        onValueChange={handleSelectChange}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hiring">Hiring Talent</SelectItem>
                          <SelectItem value="job-seeking">Looking for a Job</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject*</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        placeholder="Your message subject" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message*</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="How can we help you?" 
                        rows={5} 
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Our Global Offices</h2>
            <p className="text-gray-600">
              With locations around the world, we're ready to serve you wherever you are.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">San Francisco</h3>
              <p className="text-primary mb-4">Headquarters</p>
              <p className="text-gray-600 mb-1">123 Market Street</p>
              <p className="text-gray-600 mb-1">San Francisco, CA 94105</p>
              <p className="text-gray-600 mb-4">United States</p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> +1 (415) 555-1234
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> sf@recroot.com
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">London</h3>
              <p className="text-primary mb-4">European Office</p>
              <p className="text-gray-600 mb-1">456 Oxford Street</p>
              <p className="text-gray-600 mb-1">London, W1C 1AP</p>
              <p className="text-gray-600 mb-4">United Kingdom</p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> +44 20 7946 0958
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> london@recroot.com
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Singapore</h3>
              <p className="text-primary mb-4">Asia-Pacific Office</p>
              <p className="text-gray-600 mb-1">789 Marina Boulevard</p>
              <p className="text-gray-600 mb-1">Singapore 018984</p>
              <p className="text-gray-600 mb-4">Singapore</p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> +65 6123 4567
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> singapore@recroot.com
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find quick answers to commonly asked questions about contacting and working with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3">How quickly can I expect a response?</h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 hours during business days. For urgent matters, please indicate in your message subject.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Can I schedule a call with a team member?</h3>
              <p className="text-gray-600">
                Yes, you can request a call in your message, and our team will reach out to schedule a convenient time for a phone or video consultation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Do you offer support for international clients?</h3>
              <p className="text-gray-600">
                Absolutely! We serve clients globally and have offices in multiple time zones to provide support regardless of your location.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">How do I submit my resume for job opportunities?</h3>
              <p className="text-gray-600">
                The best way is to create a profile on our platform. Alternatively, you can send your resume through this contact form specifying the job you're interested in.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your recruitment process?</h2>
            <p className="text-gray-600 mb-8">
              Join thousands of companies and job seekers who are already benefiting from our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition">
                Get Started
              </Link>
              <Link href="/contact-us" className="bg-white border border-gray-300 text-dark px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
