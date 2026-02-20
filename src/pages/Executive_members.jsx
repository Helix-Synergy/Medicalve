import React from "react";
import { panel_members_data } from "../assets";
import PanelMemberCard from "../components/ui/PanelMemberCard";
import { Link } from "react-router-dom";
import { banner_style } from "../assets/styles";

const Executive_members = () => {
  const total = panel_members_data.length;

  return (
    <div className="w-full 2xl:max-w-[1280px] mx-auto text-center">
      {/* Banner Section */}
      <div className={`${banner_style} executive_members`}>
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4 max-w-screen-lg mx-auto leading-tight">
          Mediclave – Executive Panel Members
        </h1>
      </div>

      {/* Intro */}
      <div className="w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 my-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Meet Our Esteemed Executive Panel
        </h2>
        <p className="w-full sm:w-11/12 md:w-2/3 text-sm sm:text-base text-slate-600">
          Our executive panel comprises visionary leaders and industry pioneers
          who bring deep expertise and strategic insight to guide our mission.
        </p>
      </div>

      {/* Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
gap-6 mt-8 w-full px-2 sm:px-8 md:px-12 lg:px-8 mb-12">
        {panel_members_data.map((item, idx) => {
          // ⭐ only FIRST card of last 3
          const isFirstOfLastThree = idx === total - 3;

          return (
            <Link
              to={item.link}
              key={idx}
              className={`hover:scale-95 transition-transform
            ${isFirstOfLastThree ? "lg:translate-x-0" : ""}

              `}
            >
              <PanelMemberCard
                name={item.name}
                about={item.about}
                from={item.from}
                image={item.image}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Executive_members;
