import { Outlet } from "react-router-dom";
import MainNavigation from "./components/Navigation/MainNavigation";

export default function HomePage() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
