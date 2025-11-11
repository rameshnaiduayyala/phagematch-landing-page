import "./App.css";
import CollaborationSection from "./components/CollaborationSection";
import ContactSection from "./components/ContactSection";
import CrisisSection from "./components/CrisisSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import SolutionSection from "./components/SolutionSection";
import TeamSection from "./components/TeamSection";
import ValidationSection from "./components/ValidationSection";
import WhyPhageMatch from "./components/WhyPhageMatch";
import WorkInProgress from "./components/WorkInProgress";

function App() {
  return (
    <div className="font-inter text-slate-900 bg-slate-50">
      <HeroSection />
      <CrisisSection />
      <SolutionSection />
      <WhyPhageMatch />
      <ValidationSection />
      <CollaborationSection />
      <TeamSection />
      <WorkInProgress />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
