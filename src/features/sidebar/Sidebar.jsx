import React, { useState } from "react";
import LiLinks from "../ui/LiLinks";
import Button from "./Button";
import Form from "./Form";
import useBookmarks from "./useBookmarks";
import { FaTrash } from "react-icons/fa";
import delBookmark from "./useDelBookmark";

export default function Sidebar() {
  const [adding, setAdding] = useState(false);
  const data = useBookmarks();
  const mutate = delBookmark();

  function handleDelete(id) {
    mutate(id);
  }

  return (
    <div className="w-55 bg-blue-300 border-r-1">
      <Button setAdding={setAdding} />
      {adding && <Form />}
      <ul>
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between">
                <LiLinks name={item.name} link={item.link} divider={false} />
                {adding && (
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="pr-1 hover:cursor-pointer"
                  >
                    <FaTrash />
                  </button>
                )}
              </div>
              <div className="border-b-2"></div>
            </div>
          ))}
      </ul>
    </div>
  );
}
