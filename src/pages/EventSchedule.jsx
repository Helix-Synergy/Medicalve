import { div } from "framer-motion/client";
import React, { Suspense } from "react";
import EventSchedule from "../components/EventSchedule";
import { banner_style } from "../assets/styles";

const eventSchedule = [
  { time: "8:00 AM - 9:00 AM", activity: "Breakfast", bg: "red-400" },
  { time: "9:00 AM - 9:30 AM", activity: "Registration", bg: "rose-400" },
  { time: "9:30 AM - 9:45 AM", activity: "Introduction" },
  { time: "9:45 AM - 10:15 AM", activity: "Keynote - 1" },
  { time: "10:15 AM - 10:45 AM", activity: "Keynote - 2" },
  { time: "10:45 AM - 11:15 AM", activity: "Keynote - 3" },
  { time: "11:15 AM - 11:30 AM", activity: "Refreshment" },
  { time: "11:30 AM - 11:50 AM", activity: "Oral Presentation - 1" },
  { time: "11:50 AM - 12:10 PM", activity: "Oral Presentation - 2" },
  { time: "12:10 PM - 12:30 PM", activity: "Oral Presentation - 3" },
  { time: "12:30 PM - 12:50 PM", activity: "Oral Presentation - 4" },
  { time: "12:50 PM - 1:10 PM", activity: "Oral Presentation - 5" },
  { time: "1:10 PM - 1:30 PM", activity: "Oral Presentation - 6" },
  { time: "1:30 PM - 2:00 PM", activity: "Lunch" },
  { time: "2:00 PM - 2:20 PM", activity: "Oral Presentation - 7" },
  { time: "2:20 PM - 2:40 PM", activity: "Oral Presentation - 8" },
  { time: "2:40 PM - 3:00 PM", activity: "Oral Presentation - 9" },
  { time: "3:00 PM - 3:20 PM", activity: "Oral Presentation - 10" },
  { time: "3:20 PM - 3:40 PM", activity: "Oral Presentation - 11" },
  { time: "3:40 PM - 4:00 PM", activity: "Oral Presentation - 12" },
  { time: "4:00 PM - 4:20 PM", activity: "Refreshment" },
  { time: "4:20 PM - 4:40 PM", activity: "Oral Presentation - 13" },
  { time: "4:40 PM - 5:00 PM", activity: "Oral Presentation - 14" },
  { time: "5:00 PM - 5:20 PM", activity: "Oral Presentation - 15" },
  { time: "5:20 PM - 5:40 PM", activity: "Oral Presentation - 16" },
  { time: "5:40 PM - 6:00 PM", activity: "Oral Presentation - 17" },
  { time: "6:00 PM - 6:20 PM", activity: "Oral Presentation - 18" },
];

const EventSchedulePDF = React.lazy(() => import("../components/EventSchedulePdf"));

const Schedule = () => {
  return (
    <div>
      <section className="w-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
        <div className={`${banner_style} event_schedule w-full`}>
                <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4">
            Mediclave - 2026
          </h1>
        </div>
        <div className="md:px-16 md:mb-8">
          <EventSchedule height={"auto"} name={"Download"} link={'/mediclave_schedule.pdf'}/>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
