import { Navbar } from "./components/navbar";
import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/ServicesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { CapitalSquarePage } from "./pages/projects/CapitalSquarePage";
import { TampinesOnePage } from "./pages/projects/TampinesOnePage";
import { ChangiAirportPage } from "./pages/projects/ChangiAirportPage";
import { DunnearnVillagePage } from "./pages/projects/DunnearnVillagePage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner@2.0.3";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/capital-square" element={<CapitalSquarePage />} />
          <Route path="/projects/tampines-one" element={<TampinesOnePage />} />
          <Route path="/projects/changi-airport" element={<ChangiAirportPage />} />
          <Route path="/projects/dunnearn-village" element={<DunnearnVillagePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
        </Routes>
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}