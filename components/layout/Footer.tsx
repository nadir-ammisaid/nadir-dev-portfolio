import Link from "next/link";
import { Gamepad2 } from "lucide-react";
import { profile } from "../../data/profile";
import Image from "next/image";

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
            <ul className="space-y-2 text-sm text-gray-600 dark:text-slate-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
              Connect
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
              >
                GitHub
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-gray-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-slate-400">
          <p>&copy; {currentYear} Nadir AMMI-SAID. All rights reserved.</p>

          <div
            className="flex items-center gap-2 mt-4 md:mt-0 opacity-40 hover:opacity-100 transition-opacity cursor-help group"
            title="Try the Konami Code"
          >
            <Image
              src="/konami-logo.png"
              alt="Konami Logo"
              width={24}
              height={24}
              className="opacity-70 group-hover:opacity-100 transition-opacity"
            />

            <Gamepad2 size={18} className="text-gray-500 dark:text-slate-400" />

            <span className="text-s text-black/70 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors tracking-wide">
              ↑↑↓↓←→←→BA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
