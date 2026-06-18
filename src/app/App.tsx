import { Outlet, Link } from "react-router";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] flex flex-col">
      
      {/* Простое меню */}
      <header className="w-full px-6 py-4 border-b bg-white flex gap-6">
        <Link to="/" className="text-sm font-medium hover:opacity-70">
          Главная
        </Link>

        <Link to="/cases" className="text-sm font-medium hover:opacity-70">
          Кейсы
        </Link>
      </header>

      {/* Контент страниц */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Футер */}
      <Footer />
    </div>
  );
}