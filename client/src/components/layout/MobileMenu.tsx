import { useState } from "react";
import { Link } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
}

interface DropdownState {
  services: boolean;
  getStarted: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  const [dropdownState, setDropdownState] = useState<DropdownState>({
    services: false,
    getStarted: false
  });

  const toggleDropdown = (key: keyof DropdownState) => {
    setDropdownState(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2">
      <div className="py-1">
        <button 
          className="w-full text-left px-4 py-2 flex justify-between items-center"
          onClick={() => toggleDropdown('services')}
        >
          Services <i className={`fas fa-chevron-down text-xs transform ${dropdownState.services ? 'rotate-180' : ''} transition-transform`}></i>
        </button>
        <div className={`pl-4 py-1 ${dropdownState.services ? 'block' : 'hidden'}`}>
          <Link href="/services/executive-search" className="block px-4 py-2 text-sm hover:bg-secondary">Executive Search Hiring</Link>
          <Link href="/services/leadership-hiring" className="block px-4 py-2 text-sm hover:bg-secondary">Leadership Hiring</Link>
          <Link href="/services/rpo" className="block px-4 py-2 text-sm hover:bg-secondary">RPO</Link>
          <Link href="/services/talent-hiring" className="block px-4 py-2 text-sm hover:bg-secondary">Talent Hiring</Link>
          <Link href="/services/tech-hiring" className="block px-4 py-2 text-sm hover:bg-secondary">Tech Hiring</Link>
        </div>
      </div>
      
      <div className="py-1">
        <button 
          className="w-full text-left px-4 py-2 flex justify-between items-center"
          onClick={() => toggleDropdown('getStarted')}
        >
          Get Started <i className={`fas fa-chevron-down text-xs transform ${dropdownState.getStarted ? 'rotate-180' : ''} transition-transform`}></i>
        </button>
        <div className={`pl-4 py-1 ${dropdownState.getStarted ? 'block' : 'hidden'}`}>
          <Link href="/get-started/employer" className="block px-4 py-2 text-sm hover:bg-secondary">For Employer</Link>
          <Link href="/get-started/job-seeker" className="block px-4 py-2 text-sm hover:bg-secondary">For Job Seeker</Link>
          <Link href="/get-started/agency" className="block px-4 py-2 text-sm hover:bg-secondary">For Freelancer/Recruitment Agency</Link>
        </div>
      </div>
      
      <Link href="/about-us" className="block px-4 py-2 hover:bg-secondary">About Us</Link>
      <Link href="/contact-us" className="block px-4 py-2 hover:bg-secondary">Contact Us</Link>
      <div className="border-t border-gray-200 my-2"></div>
      <Link href="/login" className="block px-4 py-2 hover:bg-secondary">Login</Link>
      <Link href="/register" className="block px-4 py-2 text-primary hover:bg-secondary">Register</Link>
    </div>
  );
};

export default MobileMenu;
