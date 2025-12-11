import React from "react";

const ImageGalleryCard = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* First row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjA5oYzXqK8I71REcwADGAy6LUyMNmBK4miQ&s"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Wien_-_Stephansdom_%281%29.JPG"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4bDJhc5g-CKFrVkL1FVXyWK8aczDusBRyA&s"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
      </div>

      {/* Second row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSSW_O-4aVra0eHuOXEnkGIoZdy8dGVzauA&s"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3KlNcQxGcDmGn1ZxBusig9UC-FqqUmvdoA&s"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7I2xdYisuAWgcMTvDFBopE61WQgJ_5zx18Q&s"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default ImageGalleryCard;
