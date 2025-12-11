import { MapPin } from "lucide-react";
import React from "react";

const PanelMemberTemplate = (item) => {
  return (
    <div className="container mx-auto flex flex-col items-center px-2 md:px-16">
      {/* image  */}
      <div
        className="w-[100%] mx-auto h-[58vh] text-center flex flex-col justify-center items-center bg-gray-900 mb-12 rounded-3xl"
       
      >
        <img
          src={item.banner}
          alt={item.name}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      <div className="relative z-10 -mt-44">
        <img
          src={item.image}
          alt={item.name}
          className="max-w-64 max-h-64 object-cover rounded-full shadow-[0_10px_30px_0_rgb(44,175,173)] border-0 border-one bg-white"
          loading="lazy"
        />
      </div>
      <div className="relative mt-4 flex flex-col items-center">
        <h1 className="text-3xl font-semibold">{item.name}</h1>
        <p className="text-xl font-gray-800">{item.about}</p>
        <p className="text-one text-lg">{item.from}</p>
      </div>
      <div className="w-3/2 my-8 mx-10 mb-24">
        <p className="text-lg leading-[28px] text-center">{item.desc}</p>
      </div>
    </div>
  );
};

export default PanelMemberTemplate;
