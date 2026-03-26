import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import ServicesPage from "@/pages/services";
import IndustriesPage from "@/pages/industries";
import ContactPage from "@/pages/contact";
import FractionalAdminPage from "@/pages/fractional-admin";
import ConsultingPage from "@/pages/consulting";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/fractional-admin" component={FractionalAdminPage} />
      <Route path="/services/consulting" component={ConsultingPage} />
      <Route path="/industries" component={IndustriesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
