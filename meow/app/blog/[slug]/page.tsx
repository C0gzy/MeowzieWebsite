import React from 'react';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BlogPost } from '@/components/blog/BlogPost';
import { blogPosts } from '@/components/blog/blog-data';

// Define the params type with the correct TypeScript for Next.js 15+
type BlogPostParams = { slug: string };

/**
 * Dynamic blog post page component that displays the full content of a blog post
 */
export default async function BlogPostPage({ 
  params 
}: { 
  params: BlogPostParams 
}) {
  // In Next.js 15, we need to handle params correctly in async components
  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  // If the post doesn't exist, show a 404 page
  if (!post) {
    notFound();
  }
  
  return (
    <>
      <Header />
      <main>
        <BlogPost post={post} />
      </main>
      <Footer />
    </>
  );
}

/**
 * Generate static params for all blog posts to optimize performance
 */
export async function generateStaticParams(): Promise<BlogPostParams[]> {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
