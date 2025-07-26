import type { Metadata } from "next";
import Link from 'next/link'
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preston Horne",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased min-h-screen grid grid-rows-[auto_1fr_auto]`}>
        <nav className="p-4 border-b border-foreground">
          <Link href="/" className="text-xl font-semibold">
            Home
          </Link>
        </nav>

        <main className="flex items-center justify-center p-8">
          {children}
        </main>
        
        <footer className="p-4 border-t border-foreground text-center">
          <p>&copy; 2025 Preston Horne. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
