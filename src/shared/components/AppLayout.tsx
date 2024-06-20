import { Outlet } from "react-router-dom";
import Alerts from "./Alerts";

export default function AppLayout() {
  return (
    <div>
      <Alerts />
      <Outlet />
    </div>
  );
}
