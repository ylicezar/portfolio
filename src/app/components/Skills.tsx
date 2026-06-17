export function Skills() {
  const skillCategories = [
    {
      category: "Product Strategy",
      skills: ["Product Roadmapping", "Market Research", "Competitive Analysis", "OKRs & KPIs", "Product Vision"]
    },
    {
      category: "Technical Skills",
      skills: ["SQL", "Analytics Tools", "API Design", "Agile/Scrum", "A/B Testing"]
    },
    {
      category: "User Research",
      skills: ["User Interviews", "Usability Testing", "User Personas", "Journey Mapping", "Surveys & Analytics"]
    },
    {
      category: "Leadership",
      skills: ["Cross-functional Leadership", "Stakeholder Management", "Team Mentoring", "Public Speaking", "Negotiation"]
    },
    {
      category: "Design & UX",
      skills: ["Wireframing", "Prototyping", "Figma", "Design Systems", "User Flows"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Jira", "Amplitude", "Mixpanel", "Google Analytics", "Slack", "Notion"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600">
            A comprehensive toolkit for building successful products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-indigo-600">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
