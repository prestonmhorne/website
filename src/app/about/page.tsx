import Image from 'next/image';

export default function About() {
  const programmingLanguages = [
    {
      name: "Python",
      url: "https://www.python.org",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    },
    {
      name: "C/C++",
      url: "https://isocpp.org",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg"
    },
    {
      name: "C#",
      url: "https://dotnet.microsoft.com/en-us/languages/csharp",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg"
    },
    {
      name: "Rust",
      url: "https://www.rust-lang.org",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
      className: "rust-icon"
    },
    {
      name: "Go",
      url: "https://go.dev",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
    },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
    }
  ];

  const developmentTools = [
    {
      name: "Docker",
      url: "https://www.docker.com",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    },
    {
      name: "Kubernetes",
      url: "https://kubernetes.io",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg"
    },
    {
      name: "Unity",
      url: "https://unity.com",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
    },
    {
      name: "Ollama",
      url: "https://ollama.com",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v13/icons/ollama.svg"
    },
    {
      name: "Raspberry Pi",
      url: "https://www.raspberrypi.com",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-plain.svg"
    },
    {
      name: "Neovim",
      url: "https://neovim.io",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg"
    }
  ];

  const operatingSystems = [
    {
      name: "Arch Linux",
      url: "https://archlinux.org",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg"
    },
    {
      name: "Debian",
      url: "https://www.debian.org",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-original.svg"
    },
    {
      name: "GrapheneOS",
      url: "https://grapheneos.org",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v13/icons/grapheneos.svg"
    }
  ];

  const interests = [
    "Data Privacy",
    "Operational Security (OPSEC)",
    "Free and open-source software (FOSS)"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
      </header>
      
      <div className="space-y-8">
        {/* Introduction */}
        <section className="card">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Hello! I&apos;m Preston Horne, a graduate student pursuing a MS in Computer Science at Vanderbilt University. 
              I&apos;m passionate about software development, artificial intelligence, and emerging technologies.
            </p>
            <p className="text-lg leading-relaxed">
              When I&apos;m not immersed in computer science, you will likely find me at the gym lifting weights, 
              relaxing in bed watching old animated cartoons, or getting lost in a fantasy novel. I also listen to plenty
              of music. Some of my favorite bands are Radiohead and Nirvana.
            </p>
          </div>
        </section>

        {/* Interests */}
        <section className="card">
          <h2 className="text-2xl font-semibold mb-6">Technical Interests</h2>
          
          <div className="space-y-6">
            {/* Programming Languages */}
            <div>
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
                      className={lang.className || ""}
                    />
                    <span>{lang.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Development Tools */}
            <div>
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
            </div>

            {/* Operating Systems */}
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

            {/* Topics */}
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