import React from "react";
import DaysLeft from "./daysleft";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const image5 = "https://www.svgrepo.com/show/95408/chemistry.svg";
  const image6 = "https://www.svgrepo.com/show/473768/react.svg";
  const image7 = "https://www.svgrepo.com/show/120354/biology-microscope.svg";
  const image8 = "https://www.svgrepo.com/show/382925/math-finance.svg";

  const data = [
    {
      id: 1,
      images: image5,
    },
    {
      id: 2,
      images: image6,
    },
    {
      id: 3,
      image: DaysLeft,
    },
    {
      id: 4,
      image: image7,
    },
    {
      id: 5,
      image: image8,
    },
  ];

  return (
    <div className="flex w-full h-auto justify-between gap-4 items-center">
      <img src={image5} className="w-20 border-4 p-2" />
      <img src={image6} className="w-20 border-4 p-2" />
      <DaysLeft value={85} />
      <img src={image7} className="w-20 border-4 p-2" />
      <img src={image8} className="w-20 border-4 p-2" />
    </div>
  );
}
