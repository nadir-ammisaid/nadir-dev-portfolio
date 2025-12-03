import Link from "next/link";
import { profile } from "../../data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-20 bg-white text-slate-900 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
              Nadir AMMI-SAID
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-300">
              Full Stack Developer specialized in React, Node.js, Next.js and
              Java Spring Boot.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                href="/projects"
                className="block text-sm text-gray-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/experience"
                className="block text-sm text-gray-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/services"
                className="block text-sm text-gray-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-gray-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
              Connect
            </h3>
            <div className="space-y-2">
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="block text-sm text-gray-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-slate-700 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-slate-400">
          <p>&copy; {currentYear} Nadir AMMI-SAID. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
