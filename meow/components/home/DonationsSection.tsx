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
        name: 'International Cat Care',
        logo: '/images/Charities/icc_logo.avif', // Replace with actual logo
        description: 'A global organization dedicated to the welfare of cats',
        donationAmount: 0,
        website: 'https://icatcare.org/'
      },
      {
        name: 'Cats Protection',
        logo: '/images/Charities/catpro.png', // Replace with actual logo
        description: 'UK\'s leading cat welfare charity',
        donationAmount: 0,
        website: 'https://www.cats.org.uk'
      },
      {
        name: 'Alley Cat Rescue',
        logo: '/images/Charities/allycat.png', // Replace with actual logo
        description: 'Dedicated to the welfare of stray and feral cats',
        donationAmount: 0,
        website: 'https://www.alleycatrescue.org'
      },
    ]
  };

  return (
    <section id="donations" className="py-16 md:py-24 p-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
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
              <CardHeader className="pb-3">
                <div className="flex justify-center h-16 items-center mb-2">
                  {/* Placeholder for actual organization logos */}
                  <Image
                    src={org.logo}
                    alt={org.name}
                    width={100}
                    height={100}
                    className="w-auto h-auto rounded"
                  />
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
          <p className='text-muted-foreground'>
            Want to support us?
          </p>
          <Link href="https://ko-fi.com/meowzie" target="_blank" rel="noopener noreferrer" className="text-sm text-pink-600 hover:underline">
            Support Meowzie
          </Link>
          <p className="text-muted-foreground">
            Or want to contribute directly? Visit our partner organizations and make a donation today!
          </p>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 size-[400px] rounded-full bg-pink-500/10 blur-3xl -z-10 opacity-20" />
      <div className="absolute bottom-0 right-0 size-[450px] rounded-full bg-purple-500/10 blur-3xl -z-10 opacity-25" />
      <div className="absolute top-1/3 right-1/4 size-[350px] rounded-full bg-blue-500/10 blur-3xl -z-10 opacity-20" />
      
      {/* Decorative hearts floating in background */}
      <div className="absolute top-[10%] right-[12%] text-red-400/10 text-4xl transform rotate-[15deg] -z-10">❤️</div>
      <div className="absolute bottom-[15%] left-[10%] text-red-400/10 text-5xl transform -rotate-[10deg] -z-10">❤️</div>
      <div className="absolute top-[40%] left-[15%] text-red-400/10 text-3xl transform rotate-[25deg] -z-10">❤️</div>
      
      {/* Paw prints scattered around */}
      <div className="absolute top-[55%] right-[18%] text-pink-500/10 text-4xl transform -rotate-[20deg] -z-10">🐾</div>
      <div className="absolute bottom-[30%] right-[30%] text-pink-500/10 text-5xl transform rotate-[15deg] -z-10">🐾</div>
      
      {/* Cat silhouette */}
      <div className="absolute bottom-[8%] left-[25%] opacity-5 -z-10 transform scale-150">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,22 C7.581,22 4,18.419 4,14 C4,11.339 5.55389257,8.99879664 7.86151618,7.85401455 L6.62591873,3.43225985 C6.50981237,3.08221104 6.6658795,2.70438094 6.9793522,2.52107897 C7.29282491,2.337777 7.70529401,2.39225386 7.95466296,2.65450695 L11.0303061,5.94975738 C11.3484105,5.94208499 11.6707846,5.93388624 12,5.93388624 C12.3292154,5.93388624 12.6515895,5.94208499 12.9696939,5.94975738 L16.045337,2.65450695 C16.294706,2.39225386 16.7071751,2.337777 17.0206478,2.52107897 C17.3341205,2.70438094 17.4901876,3.08221104 17.3740813,3.43225985 L16.1384838,7.85401455 C18.4461074,8.99879664 20,11.339 20,14 C20,18.419 16.419,22 12,22 Z M9,13 C9.55228475,13 10,12.5522847 10,12 C10,11.4477153 9.55228475,11 9,11 C8.44771525,11 8,11.4477153 8,12 C8,12.5522847 8.44771525,13 9,13 Z M15,13 C15.5522847,13 16,12.5522847 16,12 C16,11.4477153 15.5522847,11 15,11 C14.4477153,11 14,11.4477153 14,12 C14,12.5522847 14.4477153,13 15,13 Z" />
        </svg>
      </div>
    </section>
  );
}
