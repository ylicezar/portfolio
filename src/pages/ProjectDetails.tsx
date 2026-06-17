import { useParams } from "react-router";
import { PROJECTS } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === Number(id));

  if (!project) return <div className="p-10">Project not found</div>;

  return (
    <div className="max-w-[900px] mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-teal-600 mb-8">{project.role}</p>

      <h2 className="font-bold">Challenge</h2>
      <p className="mb-6">{project.challenge}</p>

      <h2 className="font-bold">Actions</h2>
      <p className="mb-6">{project.actions}</p>

      <h2 className="font-bold">Results</h2>
      <p>{project.results}</p>
    </div>
  );
}