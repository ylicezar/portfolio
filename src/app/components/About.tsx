import { Target, Users, TrendingUp, Award } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Target,
      title: "Strategic Vision",
      description: "Defined product roadmaps that increased user engagement by 150%"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams of 15+ engineers, designers, and stakeholders"
    },
    {
      icon: TrendingUp,
      title: "Growth Focus",
      description: "Launched features that drove $10M+ in annual recurring revenue"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Products recognized by industry leaders and publications"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm passionate about building products that make a real difference in people's lives.
            My approach combines data-driven decision making with deep user empathy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="p-6 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-colors border border-gray-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-indigo-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
