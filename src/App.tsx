import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import { CanonicalTag } from "./components/CanonicalTag";
import { StickyBottomBar } from "./components/StickyBottomBar";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <CanonicalTag />
          <div className="pb-16 lg:pb-0">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services/" element={<Services />} />
              <Route path="/services/:slug/" element={<ServiceDetail />} />
              <Route path="/gallery/" element={<Gallery />} />
              <Route path="/about/" element={<About />} />
              <Route path="/contact/" element={<Contact />} />
              <Route path="/booking/" element={<Booking />} />
              <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions/" element={<TermsAndConditions />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <StickyBottomBar />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
