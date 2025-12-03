import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">
          404
        </h1>

        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Project Not Found
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          The project you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/projects"
          className="inline-block px-8 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors font-medium shadow-md"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
