import { Link } from "wouter";

const HeroBanner = () => {
  return (
    <section className="bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">Making recruitment simple for everyone</h1>
            <p className="mt-4 text-lg text-gray-600">We connect top talent with great employers. Our platform streamlines the hiring process for both job seekers and companies.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/get-started/employer" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition flex items-center">
                Find Talent <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link href="/get-started/job-seeker" className="bg-white border border-gray-300 text-dark px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition flex items-center">
                Find Jobs <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg shadow-lg w-full h-auto overflow-hidden bg-gray-200 aspect-w-4 aspect-h-3">
              <svg className="w-full h-full text-gray-400" viewBox="0 0 100 100" preserveAspectRatio="none">
                <rect width="100" height="100" fill="currentColor" />
                <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="#666">Recruitment Image</text>
              </svg>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full">
                  <i className="fas fa-chart-line text-primary text-xl"></i>
                </div>
                <div className="ml-3">
                  <p className="text-xs text-gray-500">Hiring Success Rate</p>
                  <p className="font-bold text-dark">98.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-20 -right-20 h-64 w-64 bg-primary bg-opacity-10 rounded-full"></div>
      <div className="absolute -bottom-32 -left-32 h-96 w-96 bg-primary bg-opacity-10 rounded-full"></div>
    </section>
  );
};

export default HeroBanner;
