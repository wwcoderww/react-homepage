import React from "react";

function Divider() {
  return <div className="border-b-2"></div>;
}

export default function LiLinks({ name, link }) {
  return (
    <>
      <li className="hover:opacity-50 pl-1 hover:cursor-pointer">
        <a href={link}>{name}</a>
      </li>
      <Divider />
    </>
  );
}
