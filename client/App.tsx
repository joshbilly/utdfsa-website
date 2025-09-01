import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import Media from "./pages/Media";
import About from "./pages/About";
import Pamilyas from "./pages/Pamilyas";
import Dance from "./pages/Dance";
import Faq from "./pages/Faq";
import Goodphil from "./pages/Goodphil";
import Events from "./pages/Events";
import Membership from "./pages/Membership";
import Newsletter from "./pages/Newsletter";
import PastOfficers from "./pages/PastOfficers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Vercel performance & analytics */}
      <SpeedInsights />
      <Analytics />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* FSA Navigation Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<PlaceholderPage />} />
          <Route path="/sports" element={<PlaceholderPage />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/goodphil" element={<Goodphil />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/media" element={<Media />} />
          <Route path="/events" element={<Events />} />
          <Route path="/pamilyas" element={<Pamilyas />} />
          <Route path="/faq" element={<Faq />} />

          {/* Footer Pages */}
          <Route path="/newsletters" element={<Newsletter />} />
          <Route path="/meeting-slides" element={<PlaceholderPage />} />
          <Route path="/past-officers" element={<PastOfficers />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
