import React, { useState, useEffect } from "react";
import { logo, med_logo } from "../assets";
import { Menu, Phone, X } from "lucide-react";
import "../styles/googleTranslate.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav_links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-global-medical-conclave" },
    { name: "Executive Panel", link: "/executive-panel-members" },
    { name: "Tracks", link: "/mediclave-conference-tracks" },
    { name: "Orators", link: "/international-mediclave-summit-orators" },
    { name: "Schedule", link: "/world-mediclave-event-schedule" },
    { name: "Venue", link: "/venue" },
    { name: "Event Partners", link: "/event_partners" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 w-full shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 md:py-2 transition-all duration-300">
        {/* Logo */}
        <div
          className={`transition-all duration-300 ${
            scrolled ? "h-20" : "h-20"
          }`}
        >
          <img
            src={med_logo}
            alt="Helix Conferences"
            className={`rounded-full object-fill transition-all duration-300`}
            loading="lazy"
                        style={{
              height:
                isOpen && window.innerWidth < 1024
                  ? "5rem" // smaller when burger menu is open
                  : scrolled
                  ? "5rem"
                  : "8rem",
              width:
                isOpen && window.innerWidth < 1024
                  ? "6rem"
                  : scrolled
                  ? "6rem"
                  : "8rem",
              marginTop:
                isOpen && window.innerWidth < 1024
                  ? "0.5rem"
                  : scrolled
                  ? "0rem"
                  : "1rem",
              border:
                isOpen && window.innerWidth < 1024
                  ? "none"
                  : scrolled
                  ? "none"
                  : "2px solid black",
              backgroundColor:
                isOpen && window.innerWidth < 1024
                  ? "transparent"
                  : scrolled
                  ? "transparent"
                  : "white",
              padding:
                isOpen && window.innerWidth < 1024
                  ? "0px"
                  : scrolled
                  ? "0px"
                  : "4px",
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center text-md ${
            scrolled ? "gap-8 ml-4" : "gap-6 ml-8"
          }`}
        >
          {nav_links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`hover-underline-animation text-gray-700 hover:text-accent transition ${
                location.pathname === item.link
                  ? "border-slate-700"
                  : "border-transparent"
              }`}
              style={{
                marginRight: scrolled ? "0px" : "2px",
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Register + Phone */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-4">
            <a
            target="blank"
              href="https://helixconferences.com/buy-a-ticket"
              className="py-2 px-8 text-accent rounded-full bg-accent text-white transition"
            >
              Register
            </a>
            <div className="flex flex-col items-start justify-center pr-8">
              <div
                id="google_translate_element"
                className="font-sm text-one"
              ></div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto z-300">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-4 shadow-md">
          {nav_links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block text-sm text-gray-800 hover:text-accent transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-2">
            <a
              href="https://helixconferences.com/buy-a-ticket"
              className="block w-full border border-accent text-center py-2 rounded-full text-accent hover:bg-accent hover:text-white transition"
            >
              Register
            </a>
            <div
              id="google_translate_element"
              className="font-sm text-one"
            ></div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

