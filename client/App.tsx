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
          <Route path="/about" element={<PlaceholderPage />} />
          <Route path="/resources" element={<PlaceholderPage />} />
          <Route path="/sports" element={<PlaceholderPage />} />
          <Route path="/dance" element={<PlaceholderPage />} />
          <Route path="/goodphil" element={<PlaceholderPage />} />
          <Route path="/membership" element={<PlaceholderPage />} />
          <Route path="/media" element={<Media />} />
          <Route path="/events" element={<PlaceholderPage />} />
          <Route path="/pamilyas" element={<PlaceholderPage />} />
          <Route path="/faq" element={<PlaceholderPage />} />

          {/* Footer Pages */}
          <Route path="/newsletters" element={<PlaceholderPage />} />
          <Route path="/meeting-slides" element={<PlaceholderPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
