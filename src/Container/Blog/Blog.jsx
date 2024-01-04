import React from "react";
import "./Blocg.css";
import Blog1 from "../../assets/blog01.png";
import Blog2 from "../../assets/blog02.png";
import Blog3 from "../../assets/blog03.png";
import Blog4 from "../../assets/blog04.png";
import Blog5 from "../../assets/blog05.png";
const Blog = () => {
  return (
    <div className="max-md:hidden">
      <div className="flex flex-col m-4 border p-1 rounded-xl items-center ">
        <div className="text-2xl text-center gradient-text font-medium lg:text-4xl p-1 lg:m-3">
          A lot is happening <div>We are blogging about it</div>
        </div>
        <div className="grid grid-cols gap-2 m-2 items-center border-2 border-dashed p-2">
          <div className="rounded-xl border col-start-1 col-span-2 row-span-2">
            <div className="flex flex-col justify-center max-w-xl ">
              <div className="">
                <img src={Blog1} alt="" className="rounded-xl"/>
              </div>
              <div className="flex flex-col border p-1">
                <div className="flex flex-col mb-8 mx-2">
                  <div className="text-sm ">Sep, 26, 2021</div>
                  <div className="text-xl">
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </div>
                </div>
                <div className="self-baseline">Read Full Article</div>
              </div>
            </div>
          </div>
          <div className="col-start-3 grid grid-row gap-2">
            <div className="rounded-xl border">
              <div className="">
                <img src={Blog2} alt="" className=""/>
              </div>
              <div className="">
                <div className="flex flex-col border rounded-md p-1">
                  <div className="flex flex-col mb-2 mx-2">
                    <div className="text-sm ">Sep 26, 2021</div>
                    <div className="text-[15px] my-2 px-2">
                      GPT-3 and Open AI is the future. Let us exlore how it is?
                    </div>
                  </div>
                  <div className="self-baseline">Read Full Article</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border row-start-2">
              <div>
                <img src={Blog3} alt="" />
              </div>
              <div className="">
                <div className="flex flex-col border rounded-md p-1">
                  <div className="flex flex-col mb-2 mx-2">
                    <div className="text-sm ">Sep 26, 2021</div>
                    <div className="text-[15px] my-2 px-2">
                      GPT-3 and Open AI is the future. Let us exlore how it is?
                    </div>
                  </div>
                  <div className="self-baseline">Read Full Article</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-4 grid grid-row gap-2">
            <div className="rounded-xl border">
              <div>
                <img src={Blog4} alt="" />
              </div>
              <div className="">
                <div className="flex flex-col border rounded-md p-1">
                  <div className="flex flex-col mb-2 mx-2">
                    <div className="text-sm ">Sep 26, 2021</div>
                    <div className="text-[15px] my-2 px-2">
                      GPT-3 and Open AI is the future. Let us exlore how it is?
                    </div>
                  </div>
                  <div className="self-baseline">Read Full Article</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border row-start-2">
              <div>
                <img src={Blog5} alt="" />
              </div>
              <div className="">
                <div className="border rounded-md p-1 flex flex-col justifu-center">
                  <div className="mb-2 mx-2">
                    <div className="text-sm">Sep 26, 2021</div>
                    <div className="text-[15px] my-2 px-2">
                      GPT-3 and Open AI is the future. Let us exlore how it is?
                    </div>
                  </div>
                  <div className="self-baseline">Read Full Article</div>
                </div>
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Blog;
