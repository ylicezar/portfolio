import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import CaseAudiometr from "../pages/CaseAudiometr";
import CaseDetiKlinika from "../pages/CaseDetiKlinika";
import CaseInteracoustics from "../pages/CaseInteracoustics";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:id", element: <ProjectDetails /> },
      { path: "/cases/audiometr", element: <CaseAudiometr /> },
      { path: "/cases/deti-klinika", element: <CaseDetiKlinika /> }
      { path: "/cases/interacoustics", element: <CaseInteracoustics /> },
    ],
  },
]);
