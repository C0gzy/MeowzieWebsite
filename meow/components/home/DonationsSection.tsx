import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Donations section component
 * Showcases donation information and financials as requested
 */
export function DonationsSection() {
  // Sample data for donations and financials - would be fetched from an API in a real app
  const donationData = {
    currentMonth: 'March 2025',
    totalDonated: 0,
    maintenanceCost: 0,
    donatedThisMonth: 0,
    organizations: [
      {
        name: 'RSPCA',
        logo: '/rspca-logo.png', // Replace with actual logo
        description: 'Royal Society for the Prevention of Cruelty to Animals',
        donationAmount: 0,
        website: 'https://www.rspca.org.uk'
      },
      {
        name: 'Cats Protection',
        logo: '/cats-protection-logo.png', // Replace with actual logo
        description: 'UK\'s leading cat welfare charity',
        donationAmount: 0,
        website: 'https://www.cats.org.uk'
      },
      {
        name: 'Alley Cat Rescue',
        logo: '/alley-cat-rescue-logo.png', // Replace with actual logo
        description: 'Dedicated to the welfare of stray and feral cats',
        donationAmount: 0,
        website: 'https://www.alleycatrescue.org'
      },
    ]
  };

  return (
    <section id="donations" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cat Charity Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every swipe, like and share on meowzie helps support cat welfare organizations worldwide.
            Here's how your engagement makes a difference.
          </p>
        </div>

        {/* Financial Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-muted-foreground">Total Donated</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">${donationData.totalDonated.toLocaleString()}</span>
                <span className="ml-2 text-sm text-muted-foreground">all time</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-muted-foreground">App Maintenance Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">${donationData.maintenanceCost.toLocaleString()}</span>
                <span className="ml-2 text-sm text-muted-foreground">this month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border bg-pink-500/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-pink-700 dark:text-pink-300">Donated This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-pink-600 dark:text-pink-400">
                  ${donationData.donatedThisMonth.toLocaleString()}
                </span>
                <span className="ml-2 text-sm text-pink-600/70 dark:text-pink-400/70">{donationData.currentMonth}</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Organizations We Support */}
        <h3 className="text-2xl font-bold mb-6 text-center">Organizations We Support</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {donationData.organizations.map((org, index) => (
            <Card key={index} className="border-border overflow-hidden">
              <CardHeader className="bg-muted/30 pb-3">
                <div className="flex justify-center h-16 items-center mb-2">
                  {/* Placeholder for actual organization logos */}
                  <div className="bg-muted w-48 h-12 rounded flex items-center justify-center font-semibold">
                    {org.name}
                  </div>
                </div>
                <CardTitle className="text-center">{org.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground text-center mb-4">{org.description}</p>
                <div className="text-center font-semibold text-lg mb-2">
                  ${org.donationAmount.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground text-center">donated this month</p>
              </CardContent>
              <CardFooter className="flex justify-center pb-4">
                <Link 
                  href={org.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-pink-600 hover:underline"
                >
                  Visit Website
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Additional Information */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Want to contribute directly? Visit our partner organizations and make a donation today!
          </p>
        </div>
      </div>
    </section>
  );
}
