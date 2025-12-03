import { Code2, Database, Wrench, BookOpen } from "lucide-react";
import { skills } from "../../data/skills";

export default function SkillsPage() {
  const categories = [
    {
      name: "Frontend",
      icon: Code2,
      skills: skills.filter((skill) => skill.category === "frontend"),
    },
    {
      name: "Backend",
      icon: Code2,
      skills: skills.filter((skill) => skill.category === "backend"),
    },
    {
      name: "Database",
      icon: Database,
      skills: skills.filter((skill) => skill.category === "database"),
    },
    {
      name: "Tools",
      icon: Wrench,
      skills: skills.filter((skill) => skill.category === "tools"),
    },
    {
      name: "Methodologies",
      icon: BookOpen,
      skills: skills.filter((skill) => skill.category === "methodologies"),
    },
  ];

  const getSkillLevel = (level: number) => {
    if (level >= 80) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  const getSkillColor = (level: number) => {
    if (level >= 80) return "bg-green-500";
    if (level >= 60) return "bg-blue-500";
    return "bg-orange-500";
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <section className="bg-gradient-subtle dark:bg-slate-800/40 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Code2
              size={64}
              className="mx-auto mb-6 text-primary-600 dark:text-primary-400"
            />
            <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Technical Skills
            </h1>

            <p className="text-gray-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across
              frontend, backend, databases, tools, and methodologies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="bg-white dark:bg-slate-800 border border-gray-200 
                  dark:border-slate-700 rounded-2xl shadow-lg p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon
                      size={32}
                      className="text-primary-600 dark:text-primary-400"
                    />
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {category.name}
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-slate-400 ml-auto">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {skill.name}
                            </span>

                            <span
                              className={`text-xs px-2 py-1 rounded-full font-medium
                                ${
                                  skill.level >= 80
                                    ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                                    : skill.level >= 60
                                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                                    : "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300"
                                }
                              `}
                            >
                              {getSkillLevel(skill.level)}
                            </span>
                          </div>

                          <span className="text-sm font-medium text-gray-600 dark:text-slate-300">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out ${getSkillColor(
                              skill.level
                            )}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div
            className="max-w-4xl mx-auto bg-gradient-subtle dark:bg-slate-800 
            rounded-2xl shadow-lg p-8 text-center border border-gray-200 dark:border-slate-700"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h2>

            <p className="text-gray-600 dark:text-slate-300 text-lg mb-6">
              Technology evolves rapidly, and so do I. I continuously update my
              skills through courses, projects, and industry trends.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              {[
                "Continuous Learning",
                "Side Projects",
                "Tech Watch",
                "Hackathons",
                "Meetups",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-white dark:bg-slate-800 
                  border border-gray-200 dark:border-slate-700 
                  rounded-lg text-sm font-medium text-gray-700 dark:text-slate-300 
                  shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
