import { Navigation } from "./components/navigation";
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

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
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
      <WhatsAppFloatingButton />
    </div>
  );
}