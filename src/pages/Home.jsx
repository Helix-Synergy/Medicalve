import { LocateIcon, MapPin } from "lucide-react";
import React from "react";
import HomeTemplate from "../components/HomeTemplate";
import FlipClock from "../components/ui/FlipClock";
import { home_section } from "../content/home";

const Home = () => {
  const targetDate = "2026-01-01T00:00:00";
  return (
    <>
    
      <div className="scroll-smooth relative h-[86vh] home flex flex-col md:flex-row py-12 scroll-x-hidden w-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950 bg-opacity-50 z-0"></div>

        {/* Content */}
        <div className="relative z-2 flex flex-col items-start px-1 md:px-8 mt-4 justify-center h-full text-white text-2xl md:text-3xl font-bold">
          <div className="flex flex-row items-center gap-4">
            <h1 className="text-one text-5xl md:text-6xl">{home_section.month}</h1>
            <div className="flex flex-col items-start">
              <p className="text-base md:text-lg font-normal">{home_section.date}</p>
              <p className="text-base md:text-lg gap-2 flex flex-row font-normal">
                {home_section.venue}
              </p>
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl my-4 w-full md:w-[90vw]">
            {home_section.title}
          </h1>
          <p className="text-2xl md:text-5xl">{home_section.subTitle}</p>
          {/* <p className="text-sm md:text-lg font-normal my-4 w-full md:w-1/2">
            There are many variations of passing available but the majority have
            suffered alteration in some from by injected humour.
          </p> */}

          <div className="float-end mt-8">
            <FlipClock />
          </div>
        </div>
        <div className="fixed bottom-6 right-6 space-y-3 z-50">
          {/* Add floating action buttons if needed */}
        </div>
      </div>

      {/* Sections */}
      {/* <AboutUs /> */}
      {/* <PanelMembers /> */}
      {/* <Tracks /> */}
      {/* <Orators /> */}
      {/* <EventSchedule /> */}
      {/* <Venue /> */}
      <HomeTemplate />
      {/* <Partners /> */}
      {/* <FlipClock /> */}
    </>
  );
};

export default Home;
