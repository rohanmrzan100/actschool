import React from "react";
import img1 from "../../../images/pixie_1598097779611.webp";
import img2 from "../../../images/pixie_1598097816217.webp";
import img3 from "../../../images/image-000-1-scaled.avif";

import { Carousel, Typography} from "@material-tailwind/react";

export default function Slider() {
  return (
    <Carousel autoplay="true" className="h-[90vh]">
      <div className="relative h-full w-full">
        <img src={img1} alt="image1" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
          
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img src={img2} alt="image2" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
           
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
        src={img3}        
          alt="image3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
         
          </div>
        </div>
      </div>
    </Carousel>
  );
}
