import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the recruitment platform
  
  // Get services
  app.get("/api/services", (req, res) => {
    const services = [
      {
        id: "executive-search",
        title: "Executive Search Hiring",
        description: "Find top-level executives who can lead your organization to success.",
        icon: "user-tie",
        link: "/services/executive-search"
      },
      {
        id: "leadership-hiring",
        title: "Leadership Hiring",
        description: "Build strong leadership teams that drive innovation and growth.",
        icon: "users",
        link: "/services/leadership-hiring"
      },
      {
        id: "rpo",
        title: "RPO",
        description: "Recruitment Process Outsourcing for efficient hiring at scale.",
        icon: "handshake",
        link: "/services/rpo"
      },
      {
        id: "talent-hiring",
        title: "Talent Hiring",
        description: "Connect with skilled professionals across various industries.",
        icon: "briefcase",
        link: "/services/talent-hiring"
      },
      {
        id: "tech-hiring",
        title: "Tech Hiring",
        description: "Find specialized tech talent for your innovative projects.",
        icon: "laptop-code",
        link: "/services/tech-hiring"
      }
    ];
    
    res.json(services);
  });
  
  // Get testimonials
  app.get("/api/testimonials", (req, res) => {
    const testimonials = [
      {
        id: 1,
        rating: 5.0,
        ratingText: "5.0",
        content: "Recroot helped us find the perfect CTO for our startup in just 3 weeks. The quality of candidates was exceptional, and the process was seamless.",
        author: {
          name: "Sarah Johnson",
          title: "CEO, TechStart Inc."
        }
      },
      {
        id: 2,
        rating: 5.0,
        ratingText: "5.0",
        content: "As a job seeker, I was impressed by how Recroot matched me with companies that aligned with my career goals. I found my dream job within a month!",
        author: {
          name: "Michael Chen",
          title: "Product Manager, InnovateCorp"
        }
      },
      {
        id: 3,
        rating: 4.5,
        ratingText: "4.5",
        content: "The RPO service from Recroot transformed our hiring process. We've reduced time-to-hire by 40% while improving candidate quality across all departments.",
        author: {
          name: "Emily Rodriguez",
          title: "HR Director, Global Solutions Ltd."
        }
      }
    ];
    
    res.json(testimonials);
  });
  
  // Get statistics
  app.get("/api/stats", (req, res) => {
    const stats = [
      { value: "5000+", label: "Successful Placements" },
      { value: "1200+", label: "Partner Companies" },
      { value: "98%", label: "Satisfaction Rate" },
      { value: "45", label: "Day Average Time-to-Hire" }
    ];
    
    res.json(stats);
  });
  
  // Submit contact form
  app.post("/api/contact", (req, res) => {
    const { fullName, email, phone, company, subject, message, inquiryType } = req.body;
    
    // Simple validation
    if (!fullName || !email || !subject || !message || !inquiryType) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }
    
    // Here we would typically save the contact form submission to a database
    // and/or send an email notification
    
    res.status(200).json({ 
      message: "Your message has been received. We'll get back to you soon.",
      success: true
    });
  });
  
  // Create application for job
  app.post("/api/applications", (req, res) => {
    const { fullName, email, jobId, resume, coverLetter } = req.body;
    
    // Simple validation
    if (!fullName || !email || !jobId) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }
    
    // Here we would typically save the job application to a database
    
    res.status(200).json({ 
      message: "Your application has been submitted successfully!",
      success: true,
      applicationId: `APP-${Date.now()}`
    });
  });
  
  // Authentication endpoints (for future implementation)
  app.post("/api/auth/register", (req, res) => {
    const { fullName, email, password, userType } = req.body;
    
    // Simple validation
    if (!fullName || !email || !password || !userType) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }
    
    // Here would be user registration logic with proper password hashing
    
    res.status(200).json({ 
      message: "Registration successful! You can now log in.",
      success: true
    });
  });
  
  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    
    // Simple validation
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }
    
    // Here would be authentication logic
    
    res.status(200).json({ 
      message: "Login successful!",
      success: true,
      token: "sample-token-for-future-implementation"
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
