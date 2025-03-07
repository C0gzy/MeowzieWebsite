import React from 'react';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BlogPost } from '@/components/blog/BlogPost';
import { blogPosts } from '@/components/blog/blog-data';

/**
 * Types for the page props
 */
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

/**
 * Dynamic blog post page component that displays the full content of a blog post
 */
export default function BlogPostPage({ params }: BlogPostPageProps) {
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
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
