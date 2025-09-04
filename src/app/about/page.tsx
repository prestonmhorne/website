import Image from 'next/image';

export default function About() {
  const programmingLanguages = [
    {
      name: "C",
      url: "https://www.c-language.org",
      icon: "/icons/c.svg",
      iconClass: "icon-c"
    },
    {
      name: "C++",
      url: "https://isocpp.org",
      icon: "/icons/cplusplus.svg",
      iconClass: "icon-cpp"
    },
    {
      name: "Python",
      url: "https://www.python.org",
      icon: "/icons/python.svg",
      iconClass: "icon-python"
    },
    {
      name: "Go",
      url: "https://go.dev",
      icon: "/icons/go.svg",
      iconClass: "icon-go"
    },
    {
      name: "Rust",
      url: "https://www.rust-lang.org",
      icon: "/icons/rust.svg",
      iconClass: "rust-icon"
    },
    {
      name: "Swift",
      url: "https://www.swift.org",
      icon: "/icons/swift.svg",
      iconClass: "icon-js"
    },
    {
      name: "Kotlin",
      url: "https://kotlinlang.org",
      icon: "/icons/kotlin.svg",
      iconClass: "icon-js"
    },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: "/icons/javascript.svg",
      iconClass: "icon-js"
    }
  ];

  const developmentTools = [
    {
      name: "Docker",
      url: "https://www.docker.com",
      icon: "/icons/docker.svg",
      iconClass: "icon-docker"
    },
    {
      name: "Raspberry Pi",
      url: "https://www.raspberrypi.com",
      icon: "/icons/raspberrypi.svg",
      iconClass: "icon-raspberrypi"
    }
  ];

  const operatingSystems = [
    {
      name: "Arch Linux",
      url: "https://archlinux.org",
      icon: "/icons/archlinux.svg",
      iconClass: "icon-archlinux"
    },
    {
      name: "Debian",
      url: "https://www.debian.org",
      icon: "/icons/debian.svg",
      iconClass: "icon-debian"
    }
  ];

  const interests = [
    "Privacy",
    "Decentralization",
    "Free and Open-Source Software (FOSS)"
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">About Me</h1>
      </header>
      
      <div className="space-y-8">
        <section className="card transition-slow">
          <h2 className="text-2xl font-semibold mb-6">Introduction</h2>
          <p className="indent-8 text-lg leading-relaxed">
            Hello! My name is Preston Horne and I&apos;m a graduate student pursuing a Master of Science in Computer Science at Vanderbilt University. 
            I&apos;m passionate about artificial intelligence, cybersecurity, and innovative technologies.
          </p>
        </section>

        <section className="card transition-slow">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {programmingLanguages.map((lang) => (
                  <a
                    key={lang.name}
                    href={lang.url} 
                    className="tech-link hover-accent hover-border hover-lift transition-standard icon-filter-hover flex-none w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.5rem)] lg:w-[calc(25%-0.5625rem)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={lang.name}
                  >
                    <Image
                      src={lang.icon}
                      alt={lang.name}
                      width={20}
                      height={20}
                      className={lang.iconClass}
                    />
                    <span>{lang.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Development Tools</h3>
              <div className="flex flex-wrap gap-3">
                {developmentTools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url} 
                    className="tech-link hover-accent hover-border hover-lift transition-standard icon-filter-hover flex-none w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.5rem)] lg:w-[calc(33.333%-0.5rem)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tool.name}
                  >
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={20}
                      height={20}
                      className={tool.iconClass}
                    />
                    <span>{tool.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Operating Systems</h3>
              <div className="flex flex-wrap gap-3">
                {operatingSystems.map((os) => (
                  <a
                    key={os.name}
                    href={os.url} 
                    className="tech-link hover-accent hover-border hover-lift transition-standard icon-filter-hover flex-none w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.5rem)] lg:w-[calc(33.333%-0.5rem)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={os.name}
                  >
                    <Image
                      src={os.icon}
                      alt={os.name}
                      width={20}
                      height={20}
                      className={os.iconClass}
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