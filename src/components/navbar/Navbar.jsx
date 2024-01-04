import React, { useState } from "react";
import "./Navbar.css";
import IonIcon from "@reacticons/ionicons";

const Navbar = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "WhatisGPT", link: "/" },
    { name: "Open AI", link: "/" },
    { name: "Case Studies", link: "/" },
    { name: "Library", link: "/" },
  ];

  let [Open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-row justify-between items-center p-4">
        <div className="h1 font-medium text-2xl order-first ">GPT-3</div>
        <div className="flex flex-col items-center order-last lg:order-none sm:bg-transparent sm:justify-around xl:p-[-30px]">
          <div className="lg:hidden z-10">
            <IonIcon
              className="z-10"
              onClick={() => setOpen(!Open)}
              name={Open ? "close" : "menu"}
            />
          </div>
          <div
            className={`flex flex-col absolute lg:flex-row lg:static border transition-all lg:block ease-in lg:border-none text-left xl:gap-8 xl:text-2xl bg-white md:bg-transparent ${
              Open ? "top-0 h-full right-0 w-full" : "hidden top-[-150px] "
            }`}
          >
          <div className="flex flex-col lg:flex-row ">
            {links.map((links) => (
              <div className={`my-4 py-6 px-8`}>
                <a href={links.link}>{links.name}</a>
              </div>
            ))}
            </div>
          </div>
        </div>
        <div
          className={`flex flex-row gap-8 items-center lg:static lg:mr-[80px] ${
            Open ? "absolute z-10 top-[550px] left-45" : ""
          }`}
         >
          <div className="text-xl order-1 w-20 ">Sign in</div>
          <div className="order-last w-20">
            <button className="text-xl border h-10 bg-[#FF4820] px-2 min-w-32 sm:w-24 rounded ">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
