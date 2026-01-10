import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Library from "./pages/Library";
import Compiler from "./pages/Compiler";
import Semester3 from "./pages/Semester3";
import Semester4 from "./pages/Semester4";
import CppOverview from "./pages/CppOverview";
import DfsOverview from "./pages/DfsOverview";
import CppUnit1 from "./pages/CppUnit1";
import CppUnit2 from "./pages/CppUnit2";
import CppUnit3 from "./pages/CppUnit3";
import CppSection from "./pages/CppSection";
import DfsUnit1 from "./pages/DfsUnit1";
import DfsUnit2 from "./pages/DfsUnit2";
import DfsUnit3 from "./pages/DfsUnit3";
import DfsSection from "./pages/DfsSection";
import CppOverviewII from "./pages/CppOverviewII";
import DfsOverviewII from "./pages/DfsOverviewII";
import CppUnit1II from "./pages/CppUnit1II";
import CppUnit3II from "./pages/CppUnit3II";
import CppSectionII from "./pages/CppSectionII";
import DfsUnit1II from "./pages/DfsUnit1II";
import DfsUnit2II from "./pages/DfsUnit2II";
import DfsUnit3II from "./pages/DfsUnit3II";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/library" element={<Library />} />
          <Route path="/compiler" element={<Compiler />} />
          
          {/* Semester 3 */}
          <Route path="/semester3" element={<Semester3 />} />
          <Route path="/semester3/cpp" element={<CppOverview />} />
          <Route path="/semester3/dfs" element={<DfsOverview />} />
          <Route path="/semester3/cpp-unit1" element={<CppUnit1 />} />
          <Route path="/semester3/cpp-unit2" element={<CppUnit2 />} />
          <Route path="/semester3/cpp-unit3" element={<CppUnit3 />} />
          <Route path="/semester3/cpp-unit2/:section" element={<CppSection />} />
          <Route path="/semester3/cpp-unit3/:section" element={<CppSection />} />
          <Route path="/semester3/dfs-unit1" element={<DfsUnit1 />} />
          <Route path="/semester3/dfs-unit2" element={<DfsUnit2 />} />
          <Route path="/semester3/dfs-unit3" element={<DfsUnit3 />} />
          <Route path="/semester3/dfs-unit3/:section" element={<DfsSection />} />
          
          {/* Semester 4 */}
          <Route path="/semester4" element={<Semester4 />} />
          <Route path="/semester4/cpp" element={<CppOverviewII />} />
          <Route path="/semester4/dfs" element={<DfsOverviewII />} />
          <Route path="/semester4/cpp-unit1" element={<CppUnit1II />} />
          <Route path="/semester4/cpp-unit1/:section" element={<CppSectionII />} />
          <Route path="/semester4/cpp-unit3" element={<CppUnit3II />} />
          <Route path="/semester4/cpp-unit3/:section" element={<CppSectionII />} />
          <Route path="/semester4/dfs-unit1" element={<DfsUnit1II />} />
          <Route path="/semester4/dfs-unit1/:section" element={<DfsSection />} />
          <Route path="/semester4/dfs-unit2" element={<DfsUnit2II />} />
          <Route path="/semester4/dfs-unit2/:section" element={<DfsSection />} />
          <Route path="/semester4/dfs-unit3" element={<DfsUnit3II />} />
          <Route path="/semester4/dfs-unit3/:section" element={<DfsSection />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
