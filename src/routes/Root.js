import { Outlet } from "react-router-dom";

export default function Root() {

  return (
    <div className="App dark:bg-slate-800">
      <Outlet />
    </div>
  );
}

