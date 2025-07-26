import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-6 mb-12">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Welcome!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Portfolio and Personal Website
          </p>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Preston Horne
          </p>
        </div>
      </section>

      {/* Status Section */}
      <section className="card max-w-2xl mx-auto text-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full">
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Site Under Construction</span>
          </div>
          
          <p className="text-lg">
            Currently building my portfolio website.
          </p>
        </div>
      </section>
    </div>
  );
}