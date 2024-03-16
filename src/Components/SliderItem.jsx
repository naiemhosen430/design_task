import React from "react";

export default function SliderItem() {
  return (
    <>
      <div className="shadow-2xl flex justify-center rounded-xl bg-slate-50">
        <div className="w-6/12 ">
          <img
            src="https://c8.alamy.com/comp/PXHN1P/side-view-of-handsome-businessman-working-with-computer-at-table-in-office-PXHN1P.jpg"
            alt=""
          />
        </div>
        <div className="w-6/12 bg-[#3fbeb0] p-10">
          <div>
            <h1 className=" text-2xl font-bold text-white">
              Members with photos
            </h1>
            <h1 className=" text-xl font-bold text-white">
              Get twice as many response
            </h1>
          </div>

          <div className="mt-5">
            <h1 className=" text-2xl font-bold text-white">
              Get more response
            </h1>
            <button className="text-3xl p-2 px-10 my-2 rounded-3xl text-[#869ea0] bg-yellow-50">
              Add Photo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
