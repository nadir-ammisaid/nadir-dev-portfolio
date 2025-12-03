import Image from "next/image";
import Link from "next/link";
import { Download, MapPin, Mail, Phone, Languages, Award } from "lucide-react";
import { profile } from "../../data/profile";

export default function AboutPage() {
  const formations = [
    {
      title: "Master of Science - Web & Mobile Development",
      school: "Epitech",
      location: "Lyon, France",
      period: "September 2025 - September 2028",
      description: "Apprenticeship program in full-stack development",
      highlights: [
        "Web, mobile and software development",
        "AI, UX, Security, DevOps, CI/CD",
        "Agile methodology and project management",
        "Languages: HTML/CSS, JS, TS, React, Java, C#, Python, C/C++",
        "REST APIs, OAuth2 authentication, Git/GitHub",
      ],
    },
    {
      title: "Full Stack Developer Bootcamp (700h - Bac+2)",
      school: "Wild Code School",
      location: "Lyon, France",
      period: "September 2024 - April 2025",
      description: "Intensive full-stack web development training",
      highlights: [
        "Full-stack: React.js, TypeScript, Node.js, MySQL",
        "REST APIs, authentication, security, UX/UI basics",
        "Agile Scrum methodology, Git versioning",
        "Technical documentation and testing with Jest",
        "Hackathons, meetups, and tech watch",
      ],
    },
    {
      title: "Scientific Preparatory Year & Language Immersion",
      school: "Universität Duisburg-Essen",
      location: "Essen, Germany",
      period: "September 2014 - August 2016",
      description: "German language immersion and scientific studies",
      highlights: [],
    },
    {
      title: "Bachelor in Materials Science - Fundamental Physics",
      school: "University of Science & Technology of Oran",
      location: "Oran, Algeria",
      period: "September 2011 - July 2014",
      description: "Scientific bachelor's degree",
      highlights: [],
    },
  ];

  const languages = [
    { name: "French", level: "Bilingual", flag: "🇫🇷" },
    { name: "English", level: "Bilingual", flag: "🇬🇧" },
    { name: "Arabic", level: "Bilingual", flag: "🇩🇿" },
    { name: "Amazigh", level: "Native", flag: "ⵣ" },
    { name: "German", level: "Intermediate B1", flag: "🇩🇪" },
  ];

  const softSkills = [
    {
      title: "Rigor",
      description: "Health demands tracking with zero error tolerance",
      gradient: "from-blue-400 to-blue-200",
    },
    {
      title: "Adaptability",
      description: "Career change and multicultural environment",
      gradient: "from-green-400 to-teal-200",
    },
    {
      title: "Team Spirit",
      description: "Sprints, daily meetings, pair programming",
      gradient: "from-purple-400 to-pink-200",
    },
    {
      title: "Time Management",
      description: "Multi-project management and client deadlines",
      gradient: "from-orange-400 to-yellow-200",
    },
    {
      title: "Problem Solving",
      description: "Debugging, query optimization, business anomalies",
      gradient: "from-red-400 to-orange-200",
    },
    {
      title: "Autonomy",
      description: "Personal full-stack projects in production",
      gradient: "from-indigo-400 to-purple-200",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/profile/nadir-about.png"
                    alt={profile.name}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary-600 dark:bg-primary-500 rounded-full opacity-10 -z-10"></div>
              </div>

              <div>
                <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                  About Me
                </h1>
                <div className="flex flex-col gap-2 mb-6 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={18}
                      className="text-primary-600 dark:text-primary-400"
                    />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail
                      size={18}
                      className="text-primary-600 dark:text-primary-400"
                    />
                    <a
                      href={`mailto:${profile.email}`}
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone
                      size={18}
                      className="text-primary-600 dark:text-primary-400"
                    />
                    <span>{profile.phone}</span>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-6">
                  {profile.bio.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <a
                  href="/cv/nadir-ammisaid-cv.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg transition-colors font-medium shadow-lg"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Education & Training
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                My academic and professional journey
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-900"></div>

              <div className="space-y-12">
                {formations.map((formation, index) => (
                  <div key={index} className="relative pl-20">
                    <div className="absolute left-5 top-2 w-6 h-6 bg-primary-600 dark:bg-primary-500 rounded-full border-4 border-white dark:border-gray-800"></div>

                    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-600">
                      <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {formation.title}
                        </h3>
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                          {formation.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mb-3 text-gray-600 dark:text-gray-300 flex-wrap">
                        <span className="font-medium text-primary-600 dark:text-primary-400">
                          {formation.school}
                        </span>
                        <span className="text-sm">{formation.location}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {formation.description}
                      </p>
                      {formation.highlights.length > 0 && (
                        <ul className="space-y-1">
                          {formation.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                            >
                              <span className="text-primary-600 dark:text-primary-400 mt-1">
                                •
                              </span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Soft Skills
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Interpersonal qualities developed through my experiences
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="relative rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${skill.gradient} opacity-90`}
                  ></div>
                  <div className="absolute inset-0 bg-black/25 dark:bg-black/20"></div>

                  <div className="relative p-6 z-10">
                    <h3 className="text-xl font-bold text-black mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-black/90">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Languages
                size={48}
                className="mx-auto mb-4 text-primary-600 dark:text-primary-400"
              />
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Languages
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Comfortable in international environments
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-600 text-center hover:shadow-lg transition-shadow w-64"
                >
                  <div className="text-5xl mb-3">
                    {language.flag === "ⵣ" ? (
                      <span
                        className="bg-[linear-gradient(90deg,#0072CE_0%,#0072CE_30%,#F7D117_45%,#E5322D_70%,#E5322D_100%)] 
             bg-clip-text text-transparent"
                      >
                        ⵣ
                      </span>
                    ) : (
                      language.flag
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {language.name}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {language.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border border-gray-100 dark:border-gray-700">
            <Award
              size={48}
              className="mx-auto mb-4 text-primary-600 dark:text-primary-400"
            />
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Fun Fact
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              {profile.funFact}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Interested in collaborating? Check out my projects or get in
              touch!
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/projects"
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg transition-colors font-medium shadow-md"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 rounded-lg transition-colors font-medium"
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
