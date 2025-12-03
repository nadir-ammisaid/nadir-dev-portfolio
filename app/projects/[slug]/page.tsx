import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { projects } from "../../../data/projects";
import ProjectImage from "../../../components/ui/ProjectImage";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={16} />
                  {new Date(project.date).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>

                <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full font-medium">
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {project.description}
          </p>

          <div className="flex gap-4 mb-8">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors font-medium"
              >
                <Github size={20} />
                View Code
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors font-medium"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Technologies Used
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg font-medium text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 mb-8">
          <div className="rounded-xl overflow-hidden h-96 flex items-center justify-center">
            <ProjectImage
              src={project.image}
              alt={project.title}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              fallback={
                <div className="bg-gradient-subtle dark:bg-gray-800 rounded-xl h-full w-full flex items-center justify-center">
                  <span className="text-xl font-semibold text-gray-500 dark:text-gray-400">
                    Preview coming soon...
                  </span>
                </div>
              }
            />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            About This Project
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {project.longDescription}
          </div>
        </div>

        <div className="bg-gradient-subtle dark:bg-gray-900 rounded-2xl p-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Next Project
          </h3>

          <Link href={`/projects/${nextProject.slug}`} className="group block">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors text-gray-900 dark:text-white">
                  {nextProject.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  {nextProject.description}
                </p>
              </div>

              <div className="text-4xl font-bold text-primary-400 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
                <ArrowRight size={30} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
