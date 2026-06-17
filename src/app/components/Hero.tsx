import { ArrowRight, Linkedin, Mail, Github } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-indigo-600 font-medium">Hi, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Alex Morgan</h1>
            <h2 className="text-2xl md:text-3xl text-gray-700">Senior Product Manager</h2>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            I transform complex problems into elegant product solutions. With 8+ years of experience
            leading cross-functional teams, I've launched products that serve millions of users worldwide.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
              View My Work <ArrowRight size={20} />
            </button>
            <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors">
              Download Resume
            </button>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="#" className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail size={24} />
            </a>
            <a href="#" className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9kdWN0JTIwbWFuYWdlciUyMHdvcmtzcGFjZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Nzg3NjU4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Product Manager workspace"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
            <p className="text-3xl font-bold text-indigo-600">8+</p>
            <p className="text-sm text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
