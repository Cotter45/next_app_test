import { Inter } from 'next/font/google'
import Stars from '@/components/Stars'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sean Cotter',
  description: 'I am a full stack software developer with a passion for building beautiful and functional web applications. I am currently working as a software engineer at Nestle Nespresso SA.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://cotter.tech',
    title: 'Sean Cotter',
    description: 'I am a full stack software developer with a passion for building beautiful and functional web applications. I am currently working as a software engineer at Nestle Nespresso SA.',
    images: [
      {
        url: '/splash.png',
        width: 500,
        height: 500,
        alt: 'splash',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative w-full h-[calc(100%-4rem)] min-h-[calc(100%-4rem)] flex flex-col z-10 overflow-y-auto">
          <div
            className='h-full w-full z-10 flex flex-col items-center'
          >
            {children}
          </div>
        </main>
        <Stars />
      </body>
    </html>
  );
}
