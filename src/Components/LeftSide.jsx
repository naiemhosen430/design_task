import React from "react";
import ActivityBox from "./ActivityBox";
import SliderItem from "./SliderItem";

export default function LeftSide() {
  return (
    <div className="lg:w-8/12">
      <div>
        <h1 className="text-[#5d5c62] text-5xl font-bold">
          Your activity summary
        </h1>

        <div className="">
          <ActivityBox text={"No Panding Invitation"} value={0} />
          <ActivityBox text={"Accepted invitation"} value={2} />
          <ActivityBox text={"No Serent Visitor"} value={0} />
          <ActivityBox text={"Contact viewed"} value={0} />
          <ActivityBox text={"Chat initated"} value={0} />
        </div>
      </div>

      <div>
        <h1 className="text-[#5d5c62] py-5 text-5xl font-bold">
          Improve your profile
        </h1>

        <div className="w-10/12 py-5 m-auto">
          <SliderItem />
        </div>
      </div>
    </div>
  );
}
