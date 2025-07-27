import Image from 'next/image';

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/preston-horne",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/preston-horne-612964368/",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
    }
  ];

  const techStack = [
    {
      name: "React",
      url: "https://react.dev",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
      name: "Next.js",
      url: "https://nextjs.org",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg"
    },
    {
      name: "TypeScript",
      url: "https://www.typescriptlang.org",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    }
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Social Links */}
        <div className="footer-social">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.name} Profile`}
            >
              <Image
                className="footer-image"
                src={link.icon}
                alt={link.name}
                width={20}
                height={20}
              />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
        
        {/* Tech Stack */}
        <div className="footer-info">
          <div className="footer-tech-stack">
            <span className="footer-made-text">Made with</span>
            <div className="footer-tech-links">
              {techStack.map((tech) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  className="footer-tech-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tech.name}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={16}
                    height={16}
                    className="footer-tech-icon"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
