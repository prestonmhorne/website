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
            Hello! I&apos;m Preston Horne, a graduate student pursuing an Master&apos;s in Computer Science at Vanderbilt University. 
            I&apos;m passionate about software development, artificial intelligence, and emerging technologies.
          </p>
          <Link 
            href="/about/resume" 
            className="button-link"
          >
            View My Resume →
          </Link>
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
              <h3 className="text-lg font-medium mb-3">Activities</h3>
              <div className="flex flex-wrap gap-2">
                <span className="interest-tag">Self-Hosting</span>
                <span className="interest-tag">Operational Security</span>
                <span className="interest-tag">Data Privacy</span>
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
            <div className="tech-link">
              <Image
                src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/signal.svg"
                alt="Signal"
                width={20}
                height={20}
              />
              <div>
                <p className="font-medium">Signal</p>
                <p className="text-sm opacity-75">prestonhorne [ dot 01 ]</p>
              </div>
            </div>
            
            <div className="tech-link">
              <Image
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/maildotru.svg"
                alt="Email"
                width={20}
                height={20}
              />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm opacity-75">me [ at prestonhorne dot com ]</p>
                <p className="text-sm opacity-75">preston.m.horne [ at vanderbilt dot edu ]</p>
              </div>
            </div>
            
            <div className="tech-link">
              <Image
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/gnuprivacyguard.svg"
                alt="GPG"
                width={20}
                height={20}
              />
              <div>
                <p className="font-medium">GPG</p>
                <p className="text-sm opacity-75">[Public Key]</p>
                <p className="text-sm opacity-75">[Fingerprint]</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Cryptocurrency */}
      <section className="card">
        <h2 className="text-2xl font-semibold mb-4">Cryptocurrency</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="tech-link">
            <Image
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/bitcoin.svg"
              alt="Bitcoin"
              width={20}
              height={20}
            />
            <div>
              <h3 className="font-medium mb-2">Bitcoin</h3>
              <div className="crypto-address">
                [Bitcoin Address]
              </div>
            </div>
          </div>
          <div className="tech-link">
            <Image
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/monero.svg"
              alt="Monero"
              width={20}
              height={20}
            />
            <div>
              <h3 className="font-medium mb-2">Monero</h3>
              <div className="crypto-address">
                [Monero Address]
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}