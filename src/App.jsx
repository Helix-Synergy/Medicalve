import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import MiniNavbar from "./components/MiniNavbar";
// import AboutUs from "./components/AboutUs";
import QuickLinks from "./components/ui/QuickLinks";
// import ActualNavbar from "./components/ActualNavbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Executive_members from "./pages/Executive_members";
import Orators from "./pages/Orators";
import Venue from "./pages/Venue";
import About from "./pages/About";
import HassanElTamimi from "./pages/executive_members/HassanElTamimi";
import MohamedHosni from "./pages/executive_members/MohamedHosni";
import DanaYork from "./pages/executive_members/DanaYork";
import AlirezaHeidari from "./pages/executive_members/AlirezaHeidari";
import LauraGabrielaSARBU from "./pages/executive_members/LauraGabrielaSARBU";
import MihailLucianBirsa from "./pages/executive_members/MihailLucianBirsa";
import SobiaHasan from "./pages/executive_members/SobiaHasan";
import WillieSaiHoChan from "./pages/executive_members/WillieSaiHoChan";
import EventSchedule from "./pages/EventSchedule";
import SponsorshipPackages from "./pages/SponsorshipPackages";
import AboutMediclave from "./pages/About";
import Joaquin from "./pages/orators_pages/Joaquin";
import Abu from "./pages/orators_pages/Abu";
import ContactForm from "./pages/Contact";
import ContactTable from "./pages/Data/ContactTable";
import RotatingLogos from "./pages/RotatingLogos";
import Chrysoula from "./pages/orators_pages/Chrysoula";
import AbstractSubmission from "./pages/AbstractSubmission";
import BrochureDownload from "./pages/BrochureDownload";
import FAQPage from "./pages/FAQPage";
import TracksSection from "./pages/TrackSection";

function App() {
  const [showMiniNavbar, setShowMiniNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowMiniNavbar(window.scrollY < 90);
    };

    console.log(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {/* {showMiniNavbar && <MiniNavbar />} */}
      <QuickLinks />
      <Navbar showMiniNavbar={showMiniNavbar} />
      {/* <ActualNavbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/executive-panel-members" element={<Executive_members />} />
        <Route path="/international-mediclave-summit-orators" element={<Orators />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/about-global-medical-conclave" element={<About />} />
        <Route path="/world-mediclave-event-schedule" element={<EventSchedule />} />
        <Route path="/about" element={<AboutMediclave />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/mediclave-conference-tracks" element={<RotatingLogos />} />
        <Route path="/abstract-submission" element={<AbstractSubmission />} />
        <Route path="/brochure-download" element={<BrochureDownload />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/hassan-el-tamimi" element={<HassanElTamimi />} />
        <Route path="/mohamed-hosni" element={<MohamedHosni />} />
        <Route path="/dana-york" element={<DanaYork />} />
        <Route path="/alireza-heidari" element={<AlirezaHeidari />} />
        <Route path="/laura-babriela-sarbu" element={<LauraGabrielaSARBU />} />
        <Route path="/mihail-lucian-birsa" element={<MihailLucianBirsa />} />
        <Route path="/sobia-hasan" element={<SobiaHasan />} />
        <Route path="/willie-sai-ho-chan" element={<WillieSaiHoChan />} />

        <Route path="/event_partners" element={<SponsorshipPackages />} />

        <Route path="/joaquin-cayon" element={<Joaquin />} />
        <Route path="/mohammed-abu-ragheef" element={<Abu />} />
        <Route path="chrysoula-i" element={<Chrysoula />} />
        <Route path="/mohamed-honsi" element={<MohamedHosni />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
