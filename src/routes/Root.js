import { Outlet } from "react-router-dom";

export default function Root() {

  return (
    <div className="App bg-slate-200 h-full min-h-screen pt-6 pb-8 px-4">
      <Outlet />
    </div>
  );
}

