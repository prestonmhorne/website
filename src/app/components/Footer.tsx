import Image from 'next/image';

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/preston-horne",
      icon: "/icons/github.svg"
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/prestonhorne/",
      icon: "/icons/linkedin.svg"
    }
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
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
      </div>
    </footer>
  );
}
