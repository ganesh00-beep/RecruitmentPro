import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="h-10 text-white font-bold text-2xl mb-4">Recroot</div>
            <p className="text-gray-400 mb-4">Making recruitment simple and effective for employers and job seekers worldwide.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/executive-search" className="text-gray-400 hover:text-white">Executive Search</Link></li>
              <li><Link href="/services/leadership-hiring" className="text-gray-400 hover:text-white">Leadership Hiring</Link></li>
              <li><Link href="/services/rpo" className="text-gray-400 hover:text-white">RPO</Link></li>
              <li><Link href="/services/talent-hiring" className="text-gray-400 hover:text-white">Talent Hiring</Link></li>
              <li><Link href="/services/tech-hiring" className="text-gray-400 hover:text-white">Tech Hiring</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li><Link href="/get-started/employer" className="text-gray-400 hover:text-white">For Employers</Link></li>
              <li><Link href="/get-started/job-seeker" className="text-gray-400 hover:text-white">For Job Seekers</Link></li>
              <li><Link href="/get-started/agency" className="text-gray-400 hover:text-white">For Agencies</Link></li>
              <li><Link href="/login" className="text-gray-400 hover:text-white">Login</Link></li>
              <li><Link href="/register" className="text-gray-400 hover:text-white">Register</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/contact-us" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Press</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Recroot. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
