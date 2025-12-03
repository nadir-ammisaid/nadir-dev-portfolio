"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Skills", href: "/skills" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const { resolvedTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b dark:border-slate-700 z-50 transition-colors">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <Link
            href="https://www.linkedin.com/company/nadir-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-xl"
          >
            Nadir-Dev
          </Link> */}

          <Link href="/" className="flex items-center gap-2">
            <Image
              src={
                resolvedTheme === "dark"
                  ? "/nadir-logo-dark2.png"
                  : "/nadir-logo.png"
              }
              alt="Nadir-Dev Logo"
              width={200}
              height={200}
              className="w-20 h-20"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="text-2xl">{mobileMenuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
