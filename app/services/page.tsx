"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Clock,
  Euro,
  ExternalLink,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { profile } from "../../data/profile";
// import { useState } from "react";

export default function ServicesPage() {
  // const [days, setDays] = useState(5);
  // const minRate = 400;
  // const maxRate = 600;
  // const estimatedMin = days * minRate;
  // const estimatedMax = days * maxRate;

  const platforms = [
    {
      name: "Malt",
      url: profile.social.malt,
      description: "Find me on Malt",
      logo: "/maltLogo3.png",
    },
    {
      name: "Fiverr",
      url: profile.social.fiverr,
      description: "Check out my services on Fiverr",
      logo: "/fiverrLogo.png",
    },
    {
      name: "LinkedIn",
      url: profile.social.linkedin,
      description: "Connect with me on LinkedIn",
      logo: "/linkedinLogo3.png",
    },
  ];

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
              Services & Availability
            </h1>

            <p className="text-gray-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              Full-stack developer specialized in Next.js, Node.js and Java
              Spring Boot. <br /> Available for freelance missions and
              consulting.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              What I Offer
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {profile.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 
                  rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={24}
                      className="text-primary-600 dark:text-primary-400 shrink-0 mt-1"
                    />
                    <p className="text-gray-700 dark:text-slate-300">
                      {service}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Availability & Pricing
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-subtle dark:bg-slate-800/50 rounded-xl p-8 text-center border border-gray-200 dark:border-slate-700">
                <Euro
                  size={48}
                  className="mx-auto mb-4 text-primary-600 dark:text-primary-400"
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  Daily Rate
                </h3>
                <p className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  150 €
                </p>
                <p className="text-sm text-gray-600 dark:text-slate-300">
                  Per day
                </p>
              </div>

              <div className="bg-gradient-subtle dark:bg-slate-800/50 rounded-xl p-8 text-center border border-gray-200 dark:border-slate-700">
                <CheckCircle2
                  size={48}
                  className="mx-auto mb-4 text-green-600 dark:text-green-400"
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  Current Status
                </h3>
                <p className="text-lg text-green-600 dark:text-green-400 font-semibold mb-2">
                  Available for Select Projects
                </p>
                <p className="text-sm text-gray-600 dark:text-slate-300">
                  Open to interesting opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Pricing Calculator
            </h2>

            <div className="bg-gradient-subtle dark:bg-slate-800/50 rounded-2xl p-8 border border-gray-200 dark:border-slate-700">
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  How many days do you need?
                </label>

                <input
                  type="range"
                  min="1"
                  max="20"
                  value={days}
                  onChange={(e) => setDays(parseInt(e.target.value))}
                  className="w-full h-3 bg-primary-200 dark:bg-primary-900/30 rounded-lg cursor-pointer"
                />

                <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-slate-300">
                  <span>1 day</span>
                  <span className="font-bold text-primary-600 dark:text-primary-400 text-lg">
                    {days} days
                  </span>
                  <span>20 days</span>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Euro
                      size={24}
                      className="text-primary-600 dark:text-primary-400"
                    />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Daily Rate
                    </span>
                  </div>

                  <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                    {minRate} - {maxRate} €
                  </span>
                </div>

                <div className="border-t border-gray-200 dark:border-slate-600 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Estimated Total
                    </span>

                    <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {estimatedMin.toLocaleString()} -{" "}
                      {estimatedMax.toLocaleString()} €
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
                    Final pricing may vary based on project complexity and
                    requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Availability
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock
                    size={32}
                    className="text-primary-600 dark:text-primary-400"
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Current Status
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-slate-300 mb-2">
                  {profile.availability.status}
                </p>

                <p className="text-sm text-gray-500 dark:text-slate-400">
                  In apprenticeship at Worldline Group
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar
                    size={32}
                    className="text-green-600 dark:text-green-400"
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Available From
                  </h3>
                </div>

                <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {profile.availability.availableFrom}
                </p>

                <p className="text-sm text-gray-500 dark:text-slate-400">
                  Open to freelance opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
              Find Me On
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 
                  rounded-xl p-6 hover:border-primary-600 dark:hover:border-primary-400 
                  hover:shadow-lg transition-all text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {platform.name}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-slate-300 mb-3">
                    {platform.description}
                  </p>

                  <div className="flex items-center justify-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-sm">
                    <span>Visit Profile</span>
                    <ExternalLink size={16} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Work Together?
            </h2>

            <p className="text-gray-600 dark:text-slate-300 mb-8">
              Let&apos;s discuss your project and how I can help you achieve
              your goals.
            </p>

            <div className="flex gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary-600 dark:bg-primary-500 text-white 
                rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 
                transition-colors font-medium shadow-md"
              >
                Contact Me
              </Link>

              <Link
                href="/projects"
                className="px-8 py-3 border-2 border-primary-600 dark:border-primary-500 
                text-primary-600 dark:text-primary-400 rounded-lg 
                hover:bg-primary-50 dark:hover:bg-slate-800 
                transition-colors font-medium"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
