import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Therapists from "./pages/Therapists";
import Massages from "./pages/Massages";
import Benefits from "./pages/Benefits";
import Contact from "./pages/Contact";
import WorkWithUs from "./pages/WorkWithUs";
import SpaceRental from "./pages/SpaceRental";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/profissionais" element={<Therapists />} />
              <Route path="/massagens" element={<Massages />} />
              <Route path="/beneficios" element={<Benefits />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/trabalhe-conosco" element={<WorkWithUs />} />
              <Route path="/locacao" element={<SpaceRental />} />
              <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
              <Route path="/termos-uso" element={<TermsOfUse />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
