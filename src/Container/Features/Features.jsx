import React from "react";
import "./Features.css";
const Features = () => {
  return (
    <div>
      <div className="flex flex-col border m-2  rounded-xl lg:flex-row items-center">
        <div className="flex flex-col lg:w-5/6  items-center m-2 p-2 rounded ">
          <div className="gradient-text text-xl m-2 p-1 font-semibold flex justify-center text-center md:text-2xl">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </div>
          <div className="text-neutral-500">Request Early Access to Get Started</div>
        </div>
        <div className="flex flex-col">
          <div className="border-2 border-dashed p-2 flex flex-row m-4 justify-between items-center  px-2 rounded-md">
            <div className="topic flex flex-col items-start justify-start">
              <div className=" h-1 w-12 gradient-bg rounded-xl"></div>
              <div className="heading font-semibold basis-2/4 md:text-xl">
                Improving end distrusts instantly{" "}
              </div>
            </div>
            <div className="m-3 basis-2/4">
              From they fine john he give of rich he. They age and draw mrs
              like. Improving h end distrusts<span className="sm:hidden">...</span> <span className="hidden sm:inline"> may instantly was household hi i m
              applauded.</span>
            </div>
          </div>
          <div className="border-2 border-dashed p-2 flex flex-row m-4 self-left justify-between items-center  px-2 rounded-md">
            <div className="topic flex flex-col items-start justify-start">
              <div className=" h-1 w-12 gradient-bg rounded-xl"></div>
              <div className="heading font-semibold basis-2/4 md:text-xl">
              Become the tended active
              </div>
            </div>
            <div className="m-3 basis-2/4 ">
            Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.
            </div>
          </div>
          <div className="border-2 border-dashed p-2 flex flex-row m-4 justify-between items-center  px-2 rounded-md">
            <div className="topic flex flex-col items-start">
              <div className=" h-1 w-12 gradient-bg rounded-xl"></div>
              <div className="heading font-semibold basis-2/4 md:text-xl">
              Message or am nothing
              </div>
            </div>
            <div className="m-3 basis-2/4 ">
            Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.
            </div>
          </div>
          <div className="border-2 border-dashed p-2 flex flex-row m-4 justify-between items-center px-2 rounded-md">
            <div className="topic flex flex-col items-start">
              <div className=" h-1 w-12 gradient-bg rounded-xl"></div>
              <div className="heading font-semibold basis-2/4 md:text-xl">
              Really boy law county
              </div>
            </div>
            <div className="m-3 basis-2/4 ">
            Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
