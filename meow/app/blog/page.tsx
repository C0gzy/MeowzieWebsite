import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BlogList } from '@/components/blog/BlogList';

/**
 * Blog page for the meowzie website
 * Displays a list of blog posts that users can browse through
 */
export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <div className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto">
            <div className="mb-16 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">meowzie Blog</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest cat trends, tips, and meowzie updates
              </p>
            </div>
            
            <BlogList />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
