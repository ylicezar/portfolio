import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "AI Analytics Platform",
      category: "B2B SaaS",
      description: "Led the development of an enterprise analytics platform that uses machine learning to provide actionable insights. Scaled to 500K+ users with 99.9% uptime.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9kdWN0JTIwbWFuYWdlciUyMHdvcmtzcGFjZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Nzg3NjU4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      metrics: ["500K+ Users", "45% Retention Increase", "$5M ARR"],
      tags: ["Strategy", "Data Analytics", "B2B"]
    },
    {
      title: "Mobile Shopping App",
      category: "Consumer Mobile",
      description: "Transformed the mobile shopping experience with personalized recommendations and streamlined checkout. Achieved 1M downloads in 6 months.",
      image: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwbWFuYWdlciUyMHdvcmtzcGFjZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Nzg3NjU4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      metrics: ["1M+ Downloads", "4.8★ Rating", "30% Lower Churn"],
      tags: ["Mobile", "E-commerce", "UX Design"]
    },
    {
      title: "Collaboration Suite",
      category: "Productivity",
      description: "Built a real-time collaboration platform for distributed teams. Integrated video conferencing, document sharing, and project management in one place.",
      image: "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzc4NzY1ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      metrics: ["250K+ Teams", "150% Engagement", "40% Faster Delivery"],
      tags: ["Collaboration", "Real-time", "Enterprise"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600">
            Case studies of products I've led from concept to launch
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-indigo-600">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, i) => (
                      <span key={i} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">
                        {metric}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm group">
                  View Case Study <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
