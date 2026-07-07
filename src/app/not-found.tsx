import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or perhaps you mistyped the URL.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
      >
        Return Home
      </Link>
    </div>
  );
}
