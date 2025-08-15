import Image from 'next/image';

export default function About() {
  const programmingLanguages = [
    {
      name: "C",
      url: "https://www.c-language.org",
      icon: "/icons/c.svg"
    },
    {
      name: "C++",
      url: "https://isocpp.org",
      icon: "/icons/cplusplus.svg"
    },
    {
      name: "Rust",
      url: "https://www.rust-lang.org",
      icon: "/icons/rust.svg",
      className: "rust-icon"
    },
    {
      name: "Go",
      url: "https://go.dev",
      icon: "/icons/go.svg"
    },
    {
      name: "Python",
      url: "https://www.python.org",
      icon: "/icons/python.svg"
    },
  ];

  const developmentTools = [
    {
      name: "Docker",
      url: "https://www.docker.com",
      icon: "/icons/docker.svg"
    },
    {
      name: "Raspberry Pi",
      url: "https://www.raspberrypi.com",
      icon: "/icons/raspberrypi.svg"
    },
    {
      name: "Neovim",
      url: "https://neovim.io",
      icon: "/icons/neovim.svg"
    }
  ];

  const operatingSystems = [
    {
      name: "Arch Linux",
      url: "https://archlinux.org",
      icon: "/icons/archlinux.svg"
    },
    {
      name: "Debian",
      url: "https://www.debian.org",
      icon: "/icons/debian.svg"
    },
    {
      name: "GrapheneOS",
      url: "https://grapheneos.org",
      icon: "/icons/grapheneos.svg"
    }
  ];

  const interests = [
    "Privacy",
    "Decentralization",
    "Free and open-source software (FOSS)",
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">About Me</h1>
      </header>
      
      <div className="space-y-8">
        <section className="card">
          <h2 className="text-2xl font-semibold mb-6">Introduction</h2>
            <p className="indent-8 text-lg leading-relaxed">
              Hello! My name is Preston Horne and I&apos;m a graduate student pursuing a Master of Science in Computer Science at Vanderbilt University. 
              I&apos;m passionate about software engineering, cybersecurity, and innovative technologies.
            </p>
        </section>
        <section className="card">
          <h2 className="text-2xl font-semibold mb-6">Technical Interests</h2>
          <div className="space-y-6">
              <h3 className="text-lg font-medium mb-4">Programming Languages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {programmingLanguages.map((lang) => (
                  <a 
                    key={lang.name}
                    href={lang.url} 
                    className="tech-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={lang.name}
                  >
                    <Image
                      src={lang.icon}
                      alt={lang.name}
                      width={20}
                      height={20}
                    />
                    <span>{lang.name}</span>
                  </a>
                ))}
            </div>
              <h3 className="text-lg font-medium mb-4">Development Tools</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {developmentTools.map((tool) => (
                  <a 
                    key={tool.name}
                    href={tool.url} 
                    className="tech-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tool.name}
                  >
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={20}
                      height={20}
                    />
                    <span>{tool.name}</span>
                  </a>
                ))}
              </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Operating Systems</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {operatingSystems.map((os) => (
                  <a 
                    key={os.name}
                    href={os.url} 
                    className="tech-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={os.name}
                  >
                    <Image
                      src={os.icon}
                      alt={os.name}
                      width={20}
                      height={20}
                    />
                    <span>{os.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Topics</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}