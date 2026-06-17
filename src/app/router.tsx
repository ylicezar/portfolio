import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:id", element: <ProjectDetails /> },
    ],
  },
]);