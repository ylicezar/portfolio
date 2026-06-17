import { Outlet } from "react-router";
import NavigationMenu from "./components/navigation-menu";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <NavigationMenu />
      <Outlet />
      <Footer />
    </div>
  );
}