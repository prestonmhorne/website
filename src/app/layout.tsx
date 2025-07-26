import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Navigation from './components/Navigation';
import Image from 'next/image';
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preston Horne",
  description: "Computer Science Graduate Student at Vanderbilt University",
};

// Enhanced Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-social">
          <a
            href="https://github.com/preston-horne"
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Image
              className="footer-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="GitHub"
              width={24}
              height={24}
            />
            <span className="ml-2">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/preston-horne-612964368/"
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Image
              className="footer-image"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
            <span className="ml-2">LinkedIn</span>
          </a>
        </div>
        
        {/* Copyright and Made With Section */}
        <div className="footer-info">
          <div className="footer-tech-stack">
            <div className="footer-tech-links">
              
            <span className="footer-made-text">Made with</span>
              <a
                href="https://react.dev"
                className="footer-tech-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="React"
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React"
                  width={16}
                  height={16}
                  className="footer-tech-icon"
                />
              </a>
              <a
                href="https://nextjs.org"
                className="footer-tech-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Next.js"
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg"
                  alt="Next.js"
                  width={16}
                  height={16}
                  className="footer-tech-icon"
                />
              </a>
              <a
                href="https://www.typescriptlang.org"
                className="footer-tech-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TypeScript"
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
                  alt="TypeScript"
                  width={16}
                  height={16}
                  className="footer-tech-icon"
                />
              </a>
              <a
                href="https://tailwindcss.com"
                className="footer-tech-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tailwind CSS"
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind CSS"
                  width={16}
                  height={16}
                  className="footer-tech-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <div className="layout-grid">
          <Navigation />
          
          <main className="main-content">
            <div className="content-wrapper">
              {children}
            </div>
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}