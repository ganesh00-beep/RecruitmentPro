import { Link } from "wouter";

const GetStarted = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 bg-primary bg-opacity-10 rounded-full"></div>
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dark">Ready to transform your hiring process?</h2>
                <p className="mt-4 text-gray-600">Join thousands of companies and job seekers who have found success with Recroot.</p>
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <Link href="/get-started/employer" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition flex items-center justify-center">
                    I'm an Employer
                  </Link>
                  <Link href="/get-started/job-seeker" className="bg-white border border-gray-300 text-dark px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition flex items-center justify-center">
                    I'm a Job Seeker
                  </Link>
                </div>
                <Link href="/get-started/agency" className="mt-4 inline-block text-primary font-medium">I'm a Recruitment Agency →</Link>
              </div>
              <div className="relative hidden md:block">
                <div className="rounded-lg shadow-lg bg-gray-200 aspect-w-4 aspect-h-3">
                  <svg className="w-full h-full text-gray-400" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect width="100" height="100" fill="currentColor" />
                    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="#666">Office Image</text>
                  </svg>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full">
                      <i className="fas fa-check text-primary text-xl"></i>
                    </div>
                    <div className="ml-3">
                      <p className="text-xs text-gray-500">Time Saved</p>
                      <p className="font-bold text-dark">30+ hours/week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
