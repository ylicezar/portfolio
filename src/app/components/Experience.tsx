import { Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: "TechCorp Inc.",
      role: "Senior Product Manager",
      period: "2021 - Present",
      achievements: [
        "Led the development of AI-powered analytics platform serving 500K+ users",
        "Increased user retention by 45% through data-driven product iterations",
        "Managed $5M product budget and coordinated 3 engineering teams"
      ]
    },
    {
      company: "InnovateSoft",
      role: "Product Manager",
      period: "2018 - 2021",
      achievements: [
        "Launched mobile app that achieved 1M downloads in first 6 months",
        "Reduced customer churn by 30% through improved onboarding experience",
        "Collaborated with design team to overhaul entire product UI/UX"
      ]
    },
    {
      company: "StartupHub",
      role: "Associate Product Manager",
      period: "2016 - 2018",
      achievements: [
        "Managed product backlog and sprint planning for agile development team",
        "Conducted user research and usability testing with 200+ participants",
        "Shipped 15+ features that directly addressed customer pain points"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience</h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-0 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="text-white" size={24} />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                      <p className="text-indigo-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="text-indigo-600 mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
