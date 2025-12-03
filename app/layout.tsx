import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import ThemeProvider from "../components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nadir AMMI-SAID - Full Stack Developer",
  description:
    "Full Stack Developer specialized in React, Node.js, Next.js and Java Spring Boot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50`}
      >
        <ThemeProvider>
          <Header />
          <main className="pt-16 min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
