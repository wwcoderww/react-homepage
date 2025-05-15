import React from "react";
import LiLinks from "../ui/LiLinks";
import useBookmarks from "./useBookmarks";

export default function Sidebar() {
  const data = useBookmarks();
  return (
    <div className="w-55 bg-blue-300 border-r-1">
      <ul>
        {data &&
          data.map((item) => (
            <LiLinks name={item.name} link={item.link} key={item.link} />
          ))}
      </ul>
    </div>
  );
}
