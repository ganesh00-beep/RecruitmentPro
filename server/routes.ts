import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the recruitment platform
  
  // User management endpoints
  app.post("/api/users", async (req: Request, res: Response) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const newUser = await storage.createUser(userData);
      
      // Don't return the password in the response
      const { password, ...userWithoutPassword } = newUser;
      
      res.status(201).json({
        message: "User created successfully",
        user: userWithoutPassword
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Invalid user data", 
          errors: error.errors 
        });
      }
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Failed to create user" });
    }
  });
  
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
  
  // Authentication endpoints
  app.post("/api/auth/register", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      // Validation using Zod schema
      const userData = insertUserSchema.parse({ username, password });
      
      // Check if user already exists
      const existingUser = await storage.getUserByUsername(username);
      if (existingUser) {
        return res.status(409).json({ message: "Username already exists" });
      }
      
      // In a real application, we would hash the password here
      const newUser = await storage.createUser(userData);
      
      // Don't return the password in the response
      const { password: _, ...userWithoutPassword } = newUser;
      
      res.status(201).json({ 
        message: "Registration successful! You can now log in.",
        success: true,
        user: userWithoutPassword
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Invalid registration data", 
          errors: error.errors 
        });
      }
      console.error("Registration error:", error);
      res.status(500).json({ message: "Registration failed" });
    }
  });
  
  app.post("/api/auth/login", async (req, res) => {
    const { username, password } = req.body;
    
    // Simple validation
    if (!username || !password) {
      return res.status(400).json({ message: "Please provide username and password" });
    }
    
    try {
      // Look up the user in the database
      const user = await storage.getUserByUsername(username);
      
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      // In a real app, we would use bcrypt to compare the hashed password
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      // Set up session
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.isAuthenticated = true;
      
      // Don't return the password in the response
      const { password: _, ...userWithoutPassword } = user;
      
      res.status(200).json({ 
        message: "Login successful!",
        success: true,
        user: userWithoutPassword
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "An error occurred during login" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
