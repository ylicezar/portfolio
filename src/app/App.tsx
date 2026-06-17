import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}