import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { BlogPostData, blogPosts } from './blog-data';

/**
 * BlogList component
 * Displays a grid of blog post cards with images, titles, and excerpts
 */
export function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

/**
 * BlogPostCard component
 * Displays an individual blog post as a card with image, title, date, and excerpt
 */
function BlogPostCard({ post }: { post: BlogPostData }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow border-border">
      <Link href={`/blog/${post.slug}`} className="flex-grow">
        <div className="relative h-52 w-full overflow-hidden">
          <Image 
            src={post.coverImage} 
            alt={post.title}
            fill
            className="object-cover transition-transform hover:scale-105 duration-300" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="size-1 rounded-full bg-muted-foreground/50"></span>
            <span>{post.readTime} min read</span>
          </div>
          <h2 className="text-xl font-semibold leading-tight hover:text-pink-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </CardHeader>
        <CardContent className="pb-4">
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
      </Link>
      <CardFooter className="pt-0 pb-4 border-t border-border mt-auto">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-muted flex items-center justify-center">
            {post.author.charAt(0)}
          </div>
          <span className="text-sm font-medium">{post.author}</span>
        </div>
      </CardFooter>
    </Card>
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
