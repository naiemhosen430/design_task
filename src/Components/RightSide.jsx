import React from "react";

export default function RightSide() {
  return (
    <div className="lg:w-4/12">
      <div className="rounded-md  bg-[#e43941] p-10">
        <div className="flex mb-48 items-center justify-center">
          <div className="w-6/12">
            <h1 className="text-8xl text-right text-white font-bold">Just</h1>
          </div>

          <div className="w-6/12 bg-white text-center p-2 rounded-xl">
            <h1 className="text-7xl  text-[#ff5a5e] font-bold">4u</h1>
            <h4 className="text-5xl  text-[#01bbd1] font-bold">today</h4>
          </div>
        </div>

        <div className="mt-48">
          <div className="flex items-center justify-center">
            <div className=" text-right">
              <h1 className="text-4xl  text-[#fcccc9] font-bold">Save</h1>
              <h1 className="text-4xl  text-[#fcccc9] font-bold">upto</h1>
            </div>

            <div className="">
              <h1 className="text-8xl font-bold  text-white">55%</h1>
            </div>
          </div>

          <h1 className="text-4xl text-center  text-[#fcccc9] font-bold">
            On Premium Plan
          </h1>

          <div className="py-5">
            <button className="w-full block p-4  px-4 text-4xl rounded-xl font-bold text-[#5c3b00] bg-[#ffb500]">
              Upgrade now
            </button>
          </div>

          <h1 className="text-2xl text-center  text-[#ffffff] font-bold">
            Offer valid only for today
          </h1>
        </div>
      </div>
    </div>
  );
}
