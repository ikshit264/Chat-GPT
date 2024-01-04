import React from "react";
import "./WhatGPT.css";
import { useState } from "react";

const WhatGPT = () => {
  let [Read, setRead] = useState(false);

  return (
    <div className={"m-2 p-2 rounded-xl md:m-8 md:w-auto overflow-hidden"}>
      <div className="border rounded-md p-2 m-8">
        <div className="flex flex-col lg:m-6 p-[.5px]">
          <div className="flex items-center gradient-bg rounded-xl">
            <div className="m-1 min-w-36 p-2 text-center font-medium lg:text-2xl lg:min-w-40">
              What is GPT?
            </div>
            <div className="text-[15px] sm:p-3 text-neutral-600 xl:text-2xl m-4 xl:mx-[5.5rem] lg:w-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              nulla
              <span
                className={`md:hidden ${
                  Read ? "text-blue-600 text-2xl" : "hidden"
                }`}
              >
                ...
              </span>
              <span className={`md:inline ${Read ? "hidden" : ""}`}>
                atque quisquam magnam, asperiores earum? Impedit perferendis
                quae adipisci accusamus tenetur aperiam saepe sed voluptates?
                Rem, ratione. Maiores delectus qui velit molestiae eaque laborum
                optio reprehenderit nulla praesentium odit quia, quaerat ipsa,
                sit perspiciatis sunt voluptate quasi est esse! Molestias.
                <span
                  className={`md:hidden ${
                    Read ? "hidden" : "text-blue-600 text-2xl"
                  }`}
                >
                  ...{" "}
                </span>
              </span>
              <span
                onClick={() => setRead(!Read)}
                class={`md:hidden text-blue-500 focus:outline-none ${
                  Read ? "" : "hidden"
                } `}
              >
                Read More
              </span>
              <span
                onClick={() => setRead(!Read)}
                class={`md:hidden text-blue-500 focus:outline-none ${
                  Read ? "hidden" : ""
                } `}
              >
                Hide
              </span>
            </div>
          </div>
          <div className="flex items-center md:justify-between">
            <div className="text-lg min-w-[180px] md:w-auto px-1 mx-2 md:my-8 md:p-1 md:text-3xl gradient-text font-medium">
              The possibility are beyond your Imigination
            </div>
            <div className="text-center text-sky-300 font-medium">
              Explore the Lirary
            </div>
          </div>
          <div className="border-2 border-dashed p-2 flex flex-col m-2 md:flex-row md:gap-8 lg:text-xl">
            <div className="flex flex-col items-center md:items-start">
              <div className="topic flex flex-col items-start p-1 m-1">
                <div className=" h-1 w-12 gradient-bg rounded-xl"></div>
                <div className="heading font-semibold basis-2/4 md:text-xl ">
                  Knowladgebase
                </div>
              </div>{" "}
              <div className="border p-2 rounded-md text-neutral-500 text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                nobis nemo, iste nesciunt maxime recusandae. Nam dolore
                distinctio illum quod.
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start ">
              <div className="topic flex flex-col items-start p-1 m-1">
                <div className=" h-1 w-12 gradient-bg rounded-xl"></div>
                <div className="heading font-semibold basis-2/4 md:text-xl">
                  Chatbots
                </div>
              </div>{" "}
              <div className="border p-2 rounded-md text-neutral-500 text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                nobis nemo, iste nesciunt maxime recusandae. Nam dolore
                distinctio illum quod.
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="topic flex flex-col items-start p-1 m-1">
                <div className=" h-1 w-12 gradient-bg rounded-xl"></div>
                <div className="heading font-semibold basis-2/4 md:text-xl">
                  Education
                </div>
              </div>{" "}
              <div className="border p-2 rounded-md text-neutral-500 text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                nobis nemo, iste nesciunt maxime recusandae. Nam dolore
                distinctio illum quod.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT;
