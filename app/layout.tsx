import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Augmented Memories — Your Life, Searchable Forever',
  description: 'Turn your stories, photos, and experiences into a living AI memory your family can search and explore — long after you\'re gone.',
  openGraph: {
    title: 'Augmented Memories — Your Life, Searchable Forever',
    description: 'A living AI archive of your life for the people you love.',
    url: 'https://augmentedmemories.org',
    siteName: 'Augmented Memories',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
    <link rel="icon" href="https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/images/AHC%20droid%20head.webp" type="image/webp" />
    <link rel="apple-touch-icon" href="https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/images/AHC%20droid%20head.webp" />
    <link rel="shortcut icon" href="https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/images/AHC%20droid%20head.webp" type="image/webp" />
    <meta property="og:image" content="https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/images/AHC%20droid%20head.webp" />
    <meta name="twitter:image" content="https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/images/AHC%20droid%20head.webp" />
    <meta name="twitter:card" content="summary" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
