import { useState } from "react";
import { Link, useLocation } from "wouter";
import MobileMenu from "./MobileMenu";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="h-10 text-primary font-bold text-2xl">Recroot</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="dropdown-parent relative">
              <button className="text-dark hover:text-primary font-medium flex items-center">
                Services <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              <div className="dropdown absolute top-full -left-4 w-56 bg-white shadow-lg rounded-md py-2 mt-1">
                <Link href="/services/executive-search" className="block px-4 py-2 text-sm hover:bg-secondary hover:text-primary">
                  Executive Search Hiring
                </Link>
                <Link href="/services/leadership-hiring" className="block px-4 py-2 text-sm hover:bg-secondary hover:text-primary">
                  Leadership Hiring
                </Link>
                <Link href="/services/rpo" className="block px-4 py-2 text-sm hover:bg-secondary hover:text-primary">
                  RPO
                </Link>
                <Link href="/services/talent-hiring" className="block px-4 py-2 text-sm hover:bg-secondary hover:text-primary">
                  Talent Hiring
                </Link>
                <Link href="/services/tech-hiring" className="block px-4 py-2 text-sm hover:bg-secondary hover:text-primary">
                  Tech Hiring
                </Link>
              </div>
            </div>
            
            <div className="dropdown-parent relative">
              <button className="text-dark hover:text-primary font-medium flex items-center">
                Get Started <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              <div className="dropdown absolute top-full -left-4 w-64 bg-white shadow-lg rounded-md py-2 mt-1">
                <Link href="/get-started/employer" className="block px-4 py-2 text-sm hover:bg-secondary hover:text-primary">
                  For Employer
                </Link>
                <Link href="/get-started/job-seeker" className="block px-4 py-2 text-sm hover:bg-secondary hover:text-primary">
                  For Job Seeker
                </Link>
                <Link href="/get-started/agency" className="block px-4 py-2 text-sm hover:bg-secondary hover:text-primary">
                  For Freelancer/Recruitment Agency
                </Link>
              </div>
            </div>
            
            <Link href="/about-us" className={`text-dark hover:text-primary font-medium ${location === '/about-us' ? 'text-primary' : ''}`}>
              About Us
            </Link>
            <Link href="/contact-us" className={`text-dark hover:text-primary font-medium ${location === '/contact-us' ? 'text-primary' : ''}`}>
              Contact Us
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <span className="font-medium">{user?.username || 'User'}</span>
                    <i className="fas fa-chevron-down text-xs"></i>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link href="/profile" className="w-full">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard" className="w-full">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/login" className="text-dark hover:text-primary font-medium">
                  Login
                </Link>
                <Link href="/register" className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition">
                  Register
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              type="button" 
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <MobileMenu isOpen={isMobileMenuOpen} />
    </header>
  );
};

export default Header;
