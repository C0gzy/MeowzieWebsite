/**
 * Type definition for blog post data
 */
export interface BlogPostData {
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: number;
  coverImage: string;
  excerpt: string;
  content: string;
  tags: string[];
}

/**
 * Sample blog post data
 * In a real application, this would be fetched from a CMS or database
 */
export const blogPosts: BlogPostData[] = [
  {
    slug: 'introducing-meowzie',
    title: 'Introducing meowzie: The Ultimate Cat Social Platform',
    author: 'Thomas Cogzell',
    date: '2025-03-01',
    readTime: 4,
    coverImage: 'https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg',
    excerpt: 'Today, we\'re excited to announce the launch of meowzie, a social platform exclusively for cats and their human companions.',
    content: `
# Introducing meowzie: The Ultimate Cat Social Platform

Today, we're excited to announce the launch of meowzie, a social platform exclusively for cats and their human companions.

## Why meowzie?

In a world dominated by generic social media platforms, cats deserve their own space to shine. meowzie provides a safe, fun environment where cat lovers can share their furry friends' best moments without being drowned out by other content.

### Key Features

- Cat-Only Content: A feed filled exclusively with adorable cats
- Feline Filters: Special filters designed to make your cat look even more adorable
- Cat Community: Connect with other cat enthusiasts around the world
- Charitable Giving: A portion of our revenue goes to cat welfare organizations

We believe that cats deserve the spotlight, and meowzie is here to provide it. Join us today and be part of the fastest-growing cat community on the internet!

## Who I am

My name is Thomas Cogzell, and I'm the founder of meowzie. I'm a cat lover and a software engineer who's passionate about creating a platform that empowers cat owners to connect with their furry friends.
I am a second year student at the university of plymouth currently studying software engineering. I've built this app as a passion project to help people in our community to conenct and hopefully raise some
money for our favourite charities. if you have any questions or suggestions, please don't hesitate to contact me.
## How it works

If you love our project and want to help out, you can do so by donating to our KOFI page here: https://ko-fi.com/meowzie.
we will then use this money to firstly cover the costs of running the app and secondly to donate to our favourite charities.
We will then display the amount of money raised on the website and use it to raise more money for our favourite charities.
We believe in transparency and honesty, and we want to make sure that you know where your money is going. We will also not track you personal data or sell to third parties.
All data is stored on a secure server and is only accessible to the founders of the project.

## What's Next?

We have big plans for meowzie in the coming months, including new features, partnerships with cat food brands, and exclusive content from cat influencers. Stay tuned for more updates!
    `,
    tags: ['Announcement', 'Product Launch', 'Social Media']
  }
];