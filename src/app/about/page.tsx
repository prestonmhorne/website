import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
      </header>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Introduction */}
        <section className="card">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg leading-relaxed mb-4">
            Hello! I&apos;m Preston Horne, a graduate student pursuing a MS in Computer Science at Vanderbilt University. 
            I&apos;m passionate about software development, artificial intelligence, and emerging technologies. 
          </p>
          <p className="text-lg leading-relaxed mb-4">
            When I&apos;m not immersed in computer science,
            you will likely find me at the gym lifting weights, relaxing in bed watching old animated cartoons, or getting lost in a good book. I also listen to plenty
            of music. Some of my favorite bands are Radiohead and Nirvana. 
          </p>
        </section>

        {/* Interests */}
        <section className="card">
          <h2 className="text-2xl font-semibold mb-4">Interests</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-3">Programming Languages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a 
                  href="https://www.python.org" 
                  className="tech-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Python"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                    alt="Python"
                    width={20}
                    height={20}
                  />
                  <span>Python</span>
                </a>
                
                <a 
                  href="https://isocpp.org" 
                  className="tech-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="C++"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg" 
                    alt="C/C++"
                    width={20}
                    height={20}
                  />
                  <span>C/C++</span>
                </a>
                
                <a 
                  href="https://dotnet.microsoft.com/en-us/languages/csharp" 
                  className="tech-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="C#"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg"
                    alt="C#"
                    width={20}
                    height={20}
                  />
                  <span>C#</span>
                </a>
                
                 <a 
                  href="https://www.rust-lang.org" 
                  className="tech-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rust"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"
                    alt="Rust"
                    width={20}
                    height={20}
                    className="rust-icon"
                  />
                  <span>Rust</span>
                </a>
                
                <a 
                  href="https://go.dev" 
                  className="tech-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
                    alt="Go"
                    width={20}
                    height={20}
                  />
                  <span>Go</span>
                </a>
                
                <a 
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
                  className="tech-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="JavaScript"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"                        
                    alt="JavaScript"
                    width={20}
                    height={20}
                  />
                  <span>JavaScript</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Development Tools</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a 
                  href="https://www.docker.com" 
                  className="tech-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Docker"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                    alt="Docker"
                    width={20}
                    height={20}
                  />
                  <span>Docker</span>
                </a>

                <a 
                  href="https://kubernetes.io" 
                  className="tech-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kubernetes"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg"
                    alt="Kubernetes"
                    width={20}
                    height={20}
                  />
                  <span>Kubernetes</span>
                </a>
                
                <a 
                  href="https://unity.com" 
                  className="tech-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Unity"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
                    alt="Unity"
                    width={20}
                    height={20}
                  />
                  <span>Unity</span>
                </a>

                <a 
                  href="https://ollama.com" 
                  className="tech-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ollama"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v13/icons/ollama.svg"
                    alt="Ollama"
                    width={20}
                    height={20}
                  />
                  <span>Ollama</span>
                </a>

                <a 
                  href="https://www.raspberrypi.com" 
                  className="tech-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Raspberry Pi"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-plain.svg"
                    alt="Raspberry Pi"
                    width={20}
                    height={20}
                  />
                  <span>Raspberry Pi</span>
                </a>

                <a 
                  href="https://neovim.io" 
                  className="tech-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Neovim"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg"
                    alt="Neovim"
                    width={20}
                    height={20}
                  />
                  <span>Neovim</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Topics</h3>
              <div className="flex flex-wrap gap-2">
                <span className="interest-tag">Self-Hosting</span>
                <span className="interest-tag">Operational Security (OPSEC)</span>
                <span className="interest-tag">System Administration</span>
                <span className="interest-tag">Data Privacy</span>
                <span className="interest-tag">Free and open-source software (FOSS)</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}