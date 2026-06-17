import { PROJECTS } from "../data/projects";
import { Link } from "react-router";

export default function Projects() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <Link key={p.id} to={`/projects/${p.id}`}>
            <div className="bg-white border rounded-xl p-5 hover:shadow-md">
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}