import { useState } from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


const DashboardLayout = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="h-screen overflow-hidden bg-gray-100 dark:bg-zinc-950 transition-colors flex">
      <Sidebar
        open={open}
        setOpen={setOpen}
      />

      <div className="flex-1 flex flex-col">
        <Navbar setOpen={setOpen} />

        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;