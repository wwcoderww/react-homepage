import React from "react";
import { MdEdit } from "react-icons/md";

export default function Buttons({ setAdding }) {
  return (
    <div className="flex justify-end pr-1 gap-1">
      <button
        onClick={() => setAdding((x) => !x)}
        className="hover:cursor-pointer"
      >
        <MdEdit />
      </button>
    </div>
  );
}
