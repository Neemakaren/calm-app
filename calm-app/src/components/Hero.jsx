import React from "react";
import { shape3, vec2, shape1, vec8, vec5, vec9 } from "../assets/images";

const Hero = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 container mx-auto">
      <div className="relative">
        <img src={shape3} alt="" className="w-[80em] -mt-10 -ml-60" />
        <div className="absolute ">
          <h2 className="-mt-80 tracking-wide font-bold text-5xl leading-16">
            I'am Here For You <br /> What Do You Need
          </h2>
        </div>
        
        <div className="flex items-end justify-end">
          <img src={vec8} alt="" className="w-36" />
        </div>
      </div>

      <div className="flex relative">
        <img src={vec2} alt="" className=""/>
        {/* <div className="mt-7 absolute">
          <img src={vec5} alt="" className="w-14 md:w-20" />
        </div> */}
        <div className="absolute flex items-end justify-end mt-14 w-full">
          <img src={vec9} alt="" className="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
