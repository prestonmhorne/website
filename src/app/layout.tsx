import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import ThemeScript from './components/ThemeScript';
import Footer from './components/Footer';
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preston Horne",
  description: "Computer Science Graduate Student at Vanderbilt University",
};


function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-grid">
      <Navigation />
      
      <main className="main-content">
        <div className="content-wrapper">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <LayoutContent>
            {children}
          </LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}