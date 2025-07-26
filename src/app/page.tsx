export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4 pt-16 pb-8">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Welcome!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Portfolio and Personal Website
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Preston Horne
          </p>
        </div>
      </section>
    </div>
  );
}