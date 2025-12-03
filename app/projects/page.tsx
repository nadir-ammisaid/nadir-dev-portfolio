"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Github, ExternalLink, Search, Folder } from "lucide-react";
import { projects } from "../../data/projects";
import ProjectImage from "../../components/ui/ProjectImage";

type CategoryFilter = "all" | "frontend" | "backend" | "fullstack";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase();

      const matchesSearch =
        q === "" ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <section className="bg-gradient-subtle dark:bg-slate-800/40 py-8">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <Folder
            size={64}
            className="mx-auto mb-6 text-primary-600 dark:text-primary-400"
          />
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My Projects
          </h1>
          <p className="text-gray-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills from UI development to
            full-stack applications.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search by name, description or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  w-full pl-10 pr-4 py-3 rounded-lg 
                  border border-gray-300 dark:border-slate-600 
                  bg-white dark:bg-slate-800
                  text-gray-900 dark:text-white
                  focus:outline-none focus:ring-2 focus:ring-primary-500
                "
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as CategoryFilter)}
                className={`px-6 py-2 rounded-full font-medium transition-all
                  ${
                    selectedCategory === cat.id
                      ? "bg-primary-600 text-white shadow-md dark:bg-primary-500"
                      : "bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-600"
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-center mb-8">
            <p className="text-gray-600 dark:text-slate-300">
              Showing{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {filteredProjects.length}
              </span>{" "}
              project{filteredProjects.length !== 1 ? "s" : ""}
            </p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group rounded-xl overflow-hidden
                  bg-white dark:bg-slate-800 
                  border border-gray-200 dark:border-slate-700 
                  hover:shadow-xl hover:-translate-y-2
                  transition-all duration-300"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="relative h-48 bg-slate-100 dark:bg-slate-700 overflow-hidden flex items-center justify-center">
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                      fallback={
                        <div className="flex items-center justify-center bg-gradient-subtle dark:bg-slate-700 h-full w-full">
                          <span className="text-7xl font-bold text-primary-400 opacity-80">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      }
                    />

                    <div className="absolute top-4 right-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold
                      bg-white/80 dark:bg-slate-900/70 
                      text-primary-600 dark:text-primary-400 backdrop-blur-sm"
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full font-medium
                          bg-primary-50 text-primary-600 
                          dark:bg-slate-700 dark:text-primary-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-xs px-3 py-1 rounded-full font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-600">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                      >
                        View Details →
                      </Link>

                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            <Github size={18} />
                          </a>
                        )}

                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 dark:text-slate-400 text-lg">
                No projects found matching your criteria
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
