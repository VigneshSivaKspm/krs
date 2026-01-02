// Navigation is now rendered at the app root so it's available on all routes
import { HeroSection } from "./components/hero-section";
import { IdeologySection } from "./components/ideology-section";
import { KeyLeadersSection } from "./components/key-leaders-section";
import { VijaySection } from "./components/vijay-section";
import { WardSecretariesSection } from "./components/ward-secretaries-section";
import { ExecutiveCommitteeSection } from "./components/executive-committee-section";
import { LeadershipCommitteeSection } from "./components/officers-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { WhatsAppFloatingButton } from "./components/whatsapp-floating-button";
import ReportFloatingButton from "./components/report-floating-button";
import { SEOContent, useSEO } from "./components/seo";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ReportForm from "./pages/ReportForm";
import { Routes, Route } from "react-router-dom";

function Home() {
  useSEO();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hidden SEO Content for Search Engines */}
      <SEOContent />
      <HeroSection />
      <VijaySection />
      <KeyLeadersSection />
      <IdeologySection />
      <LeadershipCommitteeSection />
      <ExecutiveCommitteeSection />
      <WardSecretariesSection />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      <ReportFloatingButton />
      <WhatsAppFloatingButton />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/report" element={<ReportForm />} />
    </Routes>
  );
}