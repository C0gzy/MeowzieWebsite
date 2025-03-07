import React from 'react';
import Link from 'next/link';

/**
 * Footer component for the meowzie website
 * Contains links, social media icons, and copyright information
 */
export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">meowzie</h3>
            <p className="text-muted-foreground mb-4">
              A TikTok-like app made specially for cat content.
              Share your feline friend's best moments with the world!
            </p>
            <div className="flex gap-4">
              {/* Social Media Icons */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-foreground/70 hover:text-foreground transition-colors">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-foreground/70 hover:text-foreground transition-colors">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  App Features
                </Link>
              </li>
              <li>
                <Link href="/#donations" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Donations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Our Partners</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.rspca.org.uk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  RSPCA
                </a>
              </li>
              <li>
                <a href="https://www.alleycatrescue.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Alley Cat Rescue
                </a>
              </li>
              <li>
                <a href="https://www.cats.org.uk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cats Protection
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} meowzie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
