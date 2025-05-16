import React from "react";
import { Link } from "react-router-dom";

export default function BannerOptions({ name, path }) {
  return (
    <div className="hover:cursor-pointer text-2xl py-2">
      <Link to={path}>{name}</Link>
    </div>
  );
}
