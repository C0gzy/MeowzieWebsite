import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Features section for the meowzie homepage
 * Showcases the key features of the meowzie app
 * 
 * 
 *     {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="size-12 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
          <line x1="9.69" y1="8" x2="21.17" y2="8" />
          <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
          <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
          <line x1="14.31" y1="16" x2="2.83" y2="16" />
          <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
        </svg>
      ),
      title: 'AI-Powered Recommendations',
      description: 'Smart recommendations that learn your cat content preferences over time.'
    },


        {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="size-12 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M9 8H6c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-3" />
          <path d="M8 15h2" />
          <path d="M8 18h2" />
          <path d="M15 8h0" />
        </svg>
      ),
      title: 'Content Creation Tools',
      description: 'Easy-to-use tools for creating, editing, and sharing your cat videos with special feline filters.'
    },

 */
export function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="size-12 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      ),
      title: 'Cat-Only Content',
      description: 'An exclusive platform dedicated to cat content. No dogs allowed (sorry, canine friends!).'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="size-12 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      title: 'Feline-Friendly Interface',
      description: 'User interface designed specifically for cat lovers with paw-some animations and purr-fect navigation.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="size-12 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      title: 'Cat Community',
      description: 'Connect with fellow cat enthusiasts, share tips, and discuss everything feline-related.'
    },


    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="size-12 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.4 10.6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
          <path d="M18.7 10.6h-3.6" />
          <path d="M18.7 14.4h-3.6" />
          <path d="M18.7 6.8h-3.6" />
          <path d="M5.9 20.4a4.2 4.2 0 0 1 4.2-4.2c.6 0 1.2.1 1.7.3" />
          <path d="m15.7 18.5 1.9 1.9 3.2-3.2" />
        </svg>
      ),
      title: 'Charitable Donations',
      description: 'A portion of our revenue goes to cat welfare organizations around the world.'
    },
  ];
  
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Purr-fect Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why cat lovers and their feline friends are flocking to meowzie
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-background/50 backdrop-blur-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
