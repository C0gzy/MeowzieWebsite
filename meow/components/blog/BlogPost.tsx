'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BlogPostData } from './blog-data';

/**
 * Props for the BlogPost component
 */
interface BlogPostProps {
  post: BlogPostData;
}

/**
 * BlogPost component for displaying the full content of a blog post
 */
export function BlogPost({ post }: BlogPostProps) {
  
  const handleShare = (platform: 'twitter' | 'facebook' | 'linkedin' | 'copy') => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const title = post.title;
    const text = post.excerpt;

    switch (platform) {
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          alert('Link copied to clipboard!');
        }).catch(err => {
          console.error('Could not copy link: ', err);
        });
        break;
      default:
        break;
    }
  };


  return (
    <article className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto">
        {/* Post Header */}
        <div className="max-w-3xl mx-auto mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-muted flex items-center justify-center">
                {post.author.charAt(0)}
              </div>
              <span>{post.author}</span>
            </div>
            <span className="bg-muted-foreground/20 size-1 rounded-full"></span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="bg-muted-foreground/20 size-1 rounded-full"></span>
            <span>{post.readTime} min read</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="relative h-[400px] w-full max-w-4xl mx-auto mb-12 rounded-lg overflow-hidden">
          <Image 
            src={post.coverImage} 
            alt={post.title}
            fill
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
        </div>
        
        {/* Post Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            {renderMarkdown(post.content)}
          </div>
        
          
          {/* Share and Navigation */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap justify-between gap-4">
              <div>
                <p className="text-sm font-medium mb-3">Share this post</p>
                <div className="flex gap-2">
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="rounded-full" 
                    onClick={() => handleShare('twitter')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="rounded-full"
                    onClick={() => handleShare('facebook')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="rounded-full"
                    onClick={() => handleShare('linkedin')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="rounded-full"
                    onClick={() => handleShare('copy')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                    <span className="sr-only">Copy link</span>
                  </Button>
                </div>
              </div>
              <Button variant="outline" asChild>
                <Link href="/blog">
                  <svg className="mr-2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Blog
                </Link>
              </Button>
            </div>
          </div>
      
          
          {/* Related Posts - Would normally be dynamic based on tags 
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getRelatedPosts(post).map((relatedPost) => (
                <div key={relatedPost.slug} className="border border-border rounded-lg overflow-hidden flex">
                  <div className="relative w-1/3 h-auto">
                    <Image
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 25vw"
                    />
                  </div>
                  <div className="w-2/3 p-4">
                    <Link 
                      href={`/blog/${relatedPost.slug}`}
                      className="text-lg font-medium hover:text-pink-600 transition-colors line-clamp-2"
                    >
                      {relatedPost.title}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">{formatDate(relatedPost.date)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          */}
         </div>

      </div>
    </article>
  );
}

/**
 * Helper function to format dates in a user-friendly way
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Basic markdown renderer that converts markdown text to React elements
 * In a real application, you would use a library like remark or MDX
 */
function renderMarkdown(content: string) {
  // This is a very simplified markdown renderer
  // In a real app, you would use a proper markdown library
  
  // Split the content by line breaks
  const lines = content.split('\n');
  
  // Process each line
  const elements = lines.map((line, index) => {
    // Headers
    if (line.startsWith('# ')) {
      return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.slice(2)}</h1>;
    }
    if (line.startsWith('## ')) {
      return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{line.slice(3)}</h2>;
    }
    if (line.startsWith('### ')) {
      return <h3 key={index} className="text-xl font-bold mt-5 mb-2">{line.slice(4)}</h3>;
    }

    if (line.startsWith('**')) {
      return <p key={index} className="font-bold">{line.slice(2)}</p>;
    }
    
    // Lists
    if (line.startsWith('- ')) {
      return <li key={index} className="ml-6 mb-1">{line.slice(2)}</li>;
    }
    
    // Empty line
    if (line.trim() === '') {
      return <br key={index} />;
    }
    
    // Default paragraph
    return <p key={index} className="mb-4">{line}</p>;
  });
  
  return <>{elements}</>;
}

/**
 * Get related posts based on tags (simplified version)
 * In a real app, this would use more sophisticated logic
 */
function getRelatedPosts(currentPost: BlogPostData): BlogPostData[] {
  // Get all posts except the current one
  return [];
}
