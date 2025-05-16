import React from "react";
import BannerOptions from "./Options";

function BannerDivider() {
  return <div className="border-1"></div>;
}

export default function Banner() {
  return (
    <div className="w-screen flex justify-evenly px-2 border-b-2 bg-orange-400">
      <BannerOptions name="More Bookmarks" path={"/"} />
      <BannerDivider />
      <BannerOptions name={"To Do"} path={"/todo"} />
      <BannerDivider />

      <BannerOptions>Budget</BannerOptions>
    </div>
  );
}
