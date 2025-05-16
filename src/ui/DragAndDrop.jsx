import React, { useRef, useState } from "react";

const tempList = ["Kevin", "Kevin1", "Kevin2", "Kevin3", "Kevin4"];

export default function ToDo() {
  const dragPerson = useRef(0);
  const dragEnding = useRef(0);
  const [list, setList] = useState(tempList);

  function dragStart(index) {
    console.log(`Dragging`);
    dragPerson.current = index;
    console.log(dragPerson);
  }
  function dragOver(index) {
    dragEnding.current = index;
    console.log(dragEnding);
  }
  function dragEnd() {
    const tempList2 = [...list];
    [tempList2[dragPerson.current], tempList2[dragEnding.current]] = [
      tempList2[dragEnding.current],
      tempList2[dragPerson.current],
    ];
    setList(tempList2);
  }

  return (
    <div className="p-20">
      <ul>
        {list.map((person, index) => (
          <li
            key={person}
            draggable
            onDragStart={() => dragStart(index)}
            onDragOver={() => dragOver(index)}
            onDragEnd={() => dragEnd()}
          >
            {person}
          </li>
        ))}
      </ul>
    </div>
  );
}
