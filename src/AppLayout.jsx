import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "./features/banner/Banner";
import Sidebar from "./features/sidebar/Sidebar";

export default function AppLayout() {
  return (
    <div>
      <div className="w-screen h-screen">
        <Banner />
        <div className="flex h-full">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
