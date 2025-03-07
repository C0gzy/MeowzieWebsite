import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

/**
 * Header component for the meowzie website
 * Contains the navigation links and logo
 */
export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl">😺 meowzie</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/#features" className="text-foreground/80 hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/#donations" className="text-foreground/80 hover:text-foreground transition-colors">
            Donations
          </Link>
          <Link href="/blog" className="text-foreground/80 hover:text-foreground transition-colors">
            Blog
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link href="https://app.meowzie.com" target="_blank" rel="noopener noreferrer">
              Open Web App
            </Link>
          </Button>
          <Button size="sm">Download App</Button>
        </div>
      </div>
    </header>
  );
}
