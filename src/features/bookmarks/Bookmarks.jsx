import React from "react";
import LiLinks from "../ui/LiLinks";

export default function Bookmarks() {
  return (
    <div className="flex">
      <ul className="p-2 w-50 text-center">
        <LiLinks name={"GitHub"} link={"https://github.com/"} />
        <LiLinks
          name={"The Odin Project"}
          link={"https://www.theodinproject.com/dashboard"}
        />
        <LiLinks name={"React Docs"} link={"https://react.dev/"} />
        <LiLinks name={"Tailwind"} link={"https://tailwindcss.com/"} />
        <LiLinks
          name={"Tailwind Prettier"}
          link={"https://github.com/tailwindlabs/prettier-plugin-tailwindcss"}
        />
        <LiLinks
          name={"React Icons"}
          link={"https://react-icons.github.io/react-icons/"}
        />
      </ul>
      <ul className="p-2 w-50 text-center">
        <LiLinks
          name={"Capital One"}
          link={"https://verified.capitalone.com/auth/signin"}
        />
        <LiLinks
          name={"Google Voice"}
          link={"https://voice.google.com/u/0/messages"}
        />
        <LiLinks
          name={"Proton Mail"}
          link={"https://mail.proton.me/u/0/inbox"}
        />
      </ul>
    </div>
  );
}
