import React from "react";

const PanelMemberCard = (item) => {
  return (
    <div className="flex flex-col p-2 items-center rounded-lg">
      <div className="border-2 border-one rounded-full inline-block">
        <img
          src={item.image}
          alt={item.name}
          className="h-52 w-52 object-cover rounded-full m-2"
          loading="lazy"
        />
      </div>

      <h2 className="text-black font-bold text-lg">{item.name}</h2>
      <p className="text-one text-md font-semibold">{item.about}</p>
      <p>{item.from}</p>
    </div>
  );
};

export default PanelMemberCard;
