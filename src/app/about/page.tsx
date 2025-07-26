import Link from 'next/link';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Computer Science Graduate Student at Vanderbilt University
        </p>
      </header>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Introduction */}
        <section className="space-y-6">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-lg leading-relaxed mb-4">
              Hello! I&apos;m Preston Horne, a graduate student pursuing an MS in Computer Science at Vanderbilt University. 
              I&apos;m passionate about software development, systems programming, and emerging technologies.
            </p>
            <Link 
              href="/about/resume" 
              className="button-link"
            >
              View My Resume →
            </Link>
          </div>
        </section>

        {/* Learning Interests */}
        <section className="space-y-6">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Learning Interests</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Programming Languages</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Python
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    C/C++
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    C#
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Rust
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    Go
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Other Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">3D Printing</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Self-Hosting</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Setup and Contact */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* My Setup */}
        <section className="card">
          <h2 className="text-2xl font-semibold mb-4">My Setup</h2>
          <p className="mb-4 opacity-90">
            Check out my current PC build and hardware specifications.
          </p>
          <Link 
            href="/about/pc-specs" 
            className="button-link"
          >
            View PC Specifications →
          </Link>
        </section>

        {/* Contact Information */}
        <section className="card">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-500 rounded-sm flex-shrink-0"></div>
              <div>
                <p className="font-medium">Signal</p>
                <p className="text-sm opacity-75">prestonhorne.01</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-500 rounded-sm flex-shrink-0"></div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm opacity-75">me [at prestonhorne dot com]</p>
                <p className="text-sm opacity-75">preston.m.horne [at vanderbilt dot edu]</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Cryptocurrency */}
      <section className="card">
        <h2 className="text-2xl font-semibold mb-4">Cryptocurrency</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium mb-2">Bitcoin</h3>
            <p className="text-sm font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">
              [Bitcoin Address]
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Monero</h3>
            <p className="text-sm font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">
              [Monero Address]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}