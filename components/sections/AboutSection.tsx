import Image from "next/image";
import { profile } from "../../data/profile";
import { Download, Eye } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/profile/nadir-about.png"
                alt={profile.name}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary-600 rounded-full opacity-10 -z-10"></div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>

              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                {profile.bio.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {profile.stats.experienceYears}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Years Experience
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {profile.stats.projects}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Projects Completed
                  </div>
                </div>
              </div> */}

              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <a
                  href="/cv/nadir-ammisaid-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors font-medium shadow-lg"
                >
                  <Eye size={20} />
                  View CV
                </a>

                <a
                  href="/cv/nadir-ammisaid-cv.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg transition-colors font-medium shadow-lg"
                >
                  <Download size={20} />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
