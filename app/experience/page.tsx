import Link from "next/link";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "../../data/experiences";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <section className="bg-gradient-subtle dark:bg-slate-800/40 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Briefcase
              size={64}
              className="mx-auto mb-6 text-primary-600 dark:text-primary-400"
            />
            <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Professional Experience
            </h1>
            <p className="text-gray-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              From account management to full-stack development, discover my
              professional journey and the skills I have acquired.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-10">
              {experiences.map((experience) => (
                <div
                  key={experience.id}
                  className="relative pl-8 pb-8 border-l-2 border-primary-300 dark:border-primary-900"
                >
                  <div
                    className="absolute -left-3 top-0 w-6 h-6 rounded-full 
                    bg-primary-600 dark:bg-primary-500 
                    border-4 border-white dark:border-slate-900"
                  ></div>

                  <div
                    className="bg-white dark:bg-slate-800 
                    rounded-xl shadow-md border border-gray-200 dark:border-slate-700 
                    p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {experience.position}
                        </h3>
                        <div className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                          {experience.company}
                        </div>
                      </div>

                      <span
                        className="text-sm font-medium 
                        text-primary-600 dark:text-primary-400 ml-4"
                      >
                        {experience.period.split(" - ")[0]}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-slate-300 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-slate-300 mb-4">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1">
                        {experience.tasks.map((task, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 dark:text-slate-300 flex items-start gap-2"
                          >
                            <span className="text-primary-600 dark:text-primary-400 mt-1">
                              •
                            </span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Skills & Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full text-sm font-medium
                            bg-primary-50 text-primary-600
                            dark:bg-slate-700 dark:text-primary-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in My Profile?
            </h2>
            <p className="text-gray-600 dark:text-slate-300 mb-8">
              Explore my projects or get in touch to discuss opportunities.
            </p>

            <div className="flex gap-4 justify-center">
              <Link
                href="/projects"
                className="px-8 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg 
                hover:bg-primary-700 dark:hover:bg-primary-600 
                transition-colors font-medium shadow-md"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-primary-600 dark:border-primary-500 
                text-primary-600 dark:text-primary-400 
                rounded-lg hover:bg-primary-50 dark:hover:bg-slate-800 
                transition-colors font-medium"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
