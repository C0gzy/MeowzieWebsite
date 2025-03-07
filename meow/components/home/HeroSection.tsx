'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

/**
 * Hero section for the meowzie homepage
 * Features a headline, app description, CTA buttons and
 * an animated TikTok-style scrolling interface
 */
export function HeroSection() {
  // Create a plugin ref for autoplay
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  // Sample video data for the carousel
  const videoData = [
    {
      id: 1,
      src: '/videos/215338_tiny.mp4', // We'll handle the case if these don't exist
      title: 'Soft Kitty',
      likes: '24.5K'
    },
    {
      id: 2,
      src: '/videos/meoww.mp4',
      title: 'Burping Kitty',
      likes: '18.2K'
    },
    {
      id: 3,
      src: '/videos/sleepy.mp4',
      title: 'Sleepy Kitty 😴',
      likes: '42.1K'
    },
    {
      id: 4,
      src: '/videos/free.mp4',
      title: 'Purring Kitty 🐱',
      likes: '31.7K'
    }
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              The Ultimate <span className="text-pink-500">Social App</span> for Your <span className="text-pink-500">Cats</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Share your feline friend's best moments, browse endless cat content, and join the fastest growing cat community on the internet.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="https://app.meowzie.com" target="_blank" rel="noopener noreferrer">
                  Try Web App
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Download App
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="size-8 rounded-full bg-muted border border-background" />
                ))}
              </div>
              <p>Joined by 100k+ cat lovers</p>
            </div>
          </div>
          
          {/* Right side - App interface mockup with vertical scrolling video carousel */}
          <div className="relative flex justify-center">
            <div className="relative w-64 h-[500px] bg-black rounded-3xl border-4 border-zinc-800 overflow-hidden shadow-2xl">
              {/* Phone frame */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10 flex justify-center">
                <div className="w-32 h-4 bg-zinc-800 rounded-b-lg"></div>
              </div>
              
              {/* App content - Vertical Scrolling TikTok-like interface with videos */}
              <Carousel 
                orientation="vertical" 
                plugins={[plugin.current]}
                className="w-full h-full"
                opts={{ loop: true }}
              >
                <CarouselContent className="-mt-4 h-[500px]">
                  {videoData.map(post => (
                    <CarouselItem key={post.id} className="pt-4">
                      <div className="relative w-full h-full bg-gradient-to-b from-zinc-800 to-zinc-900 p-3">
                        {/* Video or fallback image */}
                        <div className="absolute inset-0 w-full h-full">
                          <VideoOrFallback src={post.src} />
                        </div>

                        {/* Content overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent">
                          <div className="space-y-2 text-white z-10">
                            <p className="font-semibold">{post.title}</p>
                            <div className="flex items-center gap-1 text-xs">
                              <span>♥ {post.likes}</span>
                              <span className="bg-white/20 size-1 rounded-full"></span>
                              <span>Comments: 1.2K</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Like, comment, share buttons */}
                        <div className="absolute right-4 bottom-4 flex flex-col items-center gap-4">
                          <div className="flex flex-col items-center">
                            <div className="size-8 rounded-full bg-white/20 flex items-center justify-center mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                              </svg>
                            </div>
                            <span className="text-white text-xs">{post.likes}</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="size-8 rounded-full bg-white/20 flex items-center justify-center mb-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                              </svg>
                            </div>
                            <span className="text-white text-xs">1.2K</span>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 -translate-x-1/2 translate-y-1/4 size-[500px] rounded-full bg-pink-500/20 blur-3xl -z-10 opacity-50" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/2 size-[400px] rounded-full bg-pink-500/20 blur-3xl -z-10 opacity-40" />
    </section>
  );
}

/**
 * Component that displays a video if the source exists or a fallback image if it doesn't
 */
function VideoOrFallback({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = React.useState(false);

  // Check if we're running on the client side before adding event listeners
  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Handle error if video source doesn't exist
      const handleError = () => {
        setVideoError(true);
      };
      
      // Auto loop the video
      const handleEnded = () => {
        if (video) {
          video.play().catch(() => {
            // Silent catch for autoplay policy
          });
        }
      };
      
      video.addEventListener('error', handleError);
      video.addEventListener('ended', handleEnded);
      
      // Try to play the video (may be blocked by browser autoplay policy)
      video.play().catch(() => {
        // Silent catch for autoplay policy
      });
      
      return () => {
        video.removeEventListener('error', handleError);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);
  
  // If video source doesn't exist or there's an error, show a fallback image
  if (videoError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-zinc-900">
        <div className="text-white/20 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-12 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
            <path d="M12 16.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
            <path d="M12 13V9" />
          </svg>
          <p className="text-xs">Video not found</p>
        </div>
      </div>
    );
  }
  
  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover"
      muted
      playsInline
      loop
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
