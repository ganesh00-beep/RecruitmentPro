import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "./contexts/AuthContext";

// Layout Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Pages
import Home from "@/pages/Home";
import ExecutiveSearch from "@/pages/services/ExecutiveSearch";
import LeadershipHiring from "@/pages/services/LeadershipHiring";
import RPO from "@/pages/services/RPO";
import TalentHiring from "@/pages/services/TalentHiring";
import TechHiring from "@/pages/services/TechHiring";
import ForEmployer from "@/pages/onboarding/ForEmployer";
import ForJobSeeker from "@/pages/onboarding/ForJobSeeker";
import ForAgency from "@/pages/onboarding/ForAgency";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16">
        <Switch>
          <Route path="/" component={Home} />
          
          {/* Service pages */}
          <Route path="/services/executive-search" component={ExecutiveSearch} />
          <Route path="/services/leadership-hiring" component={LeadershipHiring} />
          <Route path="/services/rpo" component={RPO} />
          <Route path="/services/talent-hiring" component={TalentHiring} />
          <Route path="/services/tech-hiring" component={TechHiring} />
          
          {/* Onboarding pages */}
          <Route path="/get-started/employer" component={ForEmployer} />
          <Route path="/get-started/job-seeker" component={ForJobSeeker} />
          <Route path="/get-started/agency" component={ForAgency} />
          
          {/* Auth pages */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          
          {/* Company pages */}
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          
          {/* 404 page */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
