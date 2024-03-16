import React from "react";

export default function ActivityBox({ text, value }) {
  return (
    <>
      <div className="w-4/12 inline-block py-3 px-2">
        <div
          className={`bg-white ${
            value === 0 ? "opacity-50" : "opacity-100"
          } rounded-md p-5`}
        >
          <h1 className="text-5xl font-bold">{value}</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
