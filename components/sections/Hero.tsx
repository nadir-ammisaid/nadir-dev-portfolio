import Link from "next/link";
import Image from "next/image";
import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-subtle py-20">
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob
                dark:bg-primary-900 dark:opacity-20 dark:mix-blend-screen dark:scale-75"
      ></div>

      <div
        className="absolute top-40 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000
                dark:bg-accent-900 dark:opacity-20 dark:mix-blend-screen dark:scale-75"
      ></div>

      <div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000
                dark:bg-primary-950 dark:opacity-20 dark:mix-blend-screen dark:scale-75"
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/profile/nadir.png"
            alt={profile.name}
            width={400}
            height={400}
            className="rounded-full object-cover w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          {profile.title}
        </h1>

        <p className="text-xl md:text-2xl text-primary-600 dark:text-primary-300 mb-3 font-semibold">
          {profile.name}
        </p>

        <p className="text-base text-gray-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          {profile.subtitle}
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <Link
            href="/projects"
            className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 transition-colors font-medium shadow-md"
          >
            View My Work
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 dark:border-primary-300 dark:text-primary-100 dark:hover:bg-primary-900 transition-colors font-medium"
          >
            Hire Me
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-300 mb-1">
              {profile.stats.projects}+
            </div>
            <div className="text-sm text-gray-600 dark:text-slate-300">
              Projects
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-300 mb-1">
              {profile.stats.experienceYears}+
            </div>
            <div className="text-sm text-gray-600 dark:text-slate-300">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-300 mb-1">
              {profile.stats.technologies}+
            </div>
            <div className="text-sm text-gray-600 dark:text-slate-300">
              Technologies
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-300 mb-1">
              {profile.stats.languages}
            </div>
            <div className="text-sm text-gray-600 dark:text-slate-300">
              Languages
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
