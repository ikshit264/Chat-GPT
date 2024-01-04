import React from "react";
import Ai from "../../assets/ai.png";
import People from "../../assets/people.png";
import header from "./Header.css";
import { useState } from "react";

const Header = () => {
  let [Read, setRead] = useState(false);

  return (
    <div className={`p-4 sm:p-2 sm:pt-0 lg:p-4 overflow-hidden`}>
      <div className="flex">
        <div className="flex flex-col p-2 lg:p-4">
          <div className=" text-[20px] lg:p-2 text-zinc-50 md:2xl lg:text-5xl md:text-3xl gradient-text font-medium">
            Let's Build Someting amazing withGPT-3 OpenAI
          </div>
          <div className="text-[15px] p-1 sm:py-3 text-neutral-500 xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nulla
            atque quisquam magnam, asperiores earum?
            <span className={`sm:hidden ${Read ? "text-blue-600 text-2xl" : "hidden"}`}>
              ...{" "}
            </span>
            <span className={`sm:inline ${Read ? "hidden" : ""}`}>
              Impedit perferendis quae adipisci accusamus tenetur aperiam saepe
              sed voluptates? Rem, ratione. Maiores delectus qui velit molestiae
              eaque laborum optio reprehenderit nulla praesentium odit quia,
              quaerat ipsa, sit perspiciatis sunt voluptate quasi est esse!
              Molestias.
              <span className={`sm:hidden ${Read ? "hidden" : "text-blue-600 text-2xl"}`}>
                ...{" "}
              </span>
            </span>
            <span
              onClick={() => setRead(!Read)}
              class={`sm:hidden text-blue-500 focus:outline-none ${
                Read ? "" : "hidden"
              } `}
            >
              Read More
            </span>
            <span
              onClick={() => setRead(!Read)}
              class={`sm:hidden text-blue-500 focus:outline-none ${
                Read ? "hidden" : ""
              } `}
            >
              Hide
            </span>
          </div>
          <div className="">
            <div className="flex m-2 justify-center items-center  lg:justify-start lg:p-10">
              <input className="px-8 bg-cyan-900 rounded text-purple-50 min-h-8 sm:px-2 lg:w-[50%]"
                type="text"/>
              <button class="px-2 py-1 rounded mx-1 border-amber-600 border-2 ">
                Get Started
              </button>
            </div>
            <div className="flex items-center m-1 border rounded sm:border-none sm:mx-0">
              <img src={People} alt="People" className="m-1" />
              <div className="text-[12px] m-2 text-neutral-500 xl:text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione, quidem?
              </div>
            </div>
          </div>
        </div>
        <div className="md:block hidden">
          <img src={Ai} alt="AI" className=" lg:max-w-lg xl:max-w-xl"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
