import { Outlet, Link } from "react-router-dom";
import TopBar from "../components/TopBar";

export default function Root() {
  return (
    <>
      <TopBar>
        <Outlet />
      </TopBar>
    </>
  );
}
