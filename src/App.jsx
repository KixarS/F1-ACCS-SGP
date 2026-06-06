import "./App.css";
import "flowbite";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SponsorSection from "./components/SponsorSection";
import ProblemSection from "./components/ProblemSection";
import ServiceSection from "./components/ServiceSection";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingLineButton from "./components/FloatingLineButton";

function App() {
  return (
    <div className="flex w-full min-h-screen h-fit flex-col relative">
      <Navbar />
      <div className="flex lg:h-full flex-col overflow-hidden">
        <HeroSection />
        {/* <SponsorSection /> */}
        <ProblemSection />
        <ServiceSection />
        <CTASection />
        <ContactSection />
      </div>
      <Footer />
      <FloatingLineButton />
    </div>
  );
}

export default App;
