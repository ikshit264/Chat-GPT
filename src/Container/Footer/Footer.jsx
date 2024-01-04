import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="border w-screen overflow-hidden">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <div className="max-w-60 text-center rounded-lg p-2 m-3 border sm:mt-9">
              Do you want to step in to the future before others
            </div>
            <button className="m-4 p-2 border bg-transparent">
              Request Early Access
            </button>
          </div>
          <div className="flex flex-col m-4 justify-between w-[100%] items-center sm:items-start sm:flex-row sm:justify-between overflow-hidden">
            <div className="flex flex-col m-2 mt-0 p-4 sm:items-end items-start">
              <div className="text-xl font-medium m-2 text-center sm:text-5xl ">GPT-3</div>
              <div className="text-xs hidden p-1 sm:block sm:w-40 sm:text-right">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </div>
            </div>
            <div className="flex w-[100%] flex-col sm:items-start p-8 pb-4 sm:px-10 px-20 sm:flex-row sm:justify-around">
              <div className="sm:mx-4">
                <div className="text-3xl font-normal text-center mb-6">Links</div>
                <div className="text-sm sm:text-base flex flex-row gap-8 items-center justify-center mt-2 sm:flex-col sm:max-w-36 ">
                  <div href="/">Overons</div>
                  <div href="/">Social Media</div>
                  <div href="/">Counters</div>
                  <div href="/">Contact</div>
                </div>
              </div>
              <div className="hidden sm:block sm:mx-4">
                <div className="text-3xl font-normal text-center mb-6">Company</div>
                <div className="text-sm sm:text-base flex flex-row gap-4 mt-2 sm:flex-col max-w-36 ">
                  <div href="/">Terms & Condations</div>
                  <div href="/">Privacy Policy</div>
                  <div href="/">Contact</div>
                </div>
              </div>
              <div className="hidden sm:block sm:mx-4">
                <div className="text-3xl font-normal text-center mb-6">Get In Touch</div>
                <div className="text-sm sm:text-base flex flex-row gap-4 mt-2 sm:flex-col max-w-36">
                  <div href="/" className="">Crechterwoord K12 182 DK Alknjkcb</div>
                  <div href="/">085-132567</div>
                  <div href="/">info@payme.net</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
