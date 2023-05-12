import { Inter } from 'next/font/google'
import Stars from '@/components/Stars'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sean Cotter',
  description: 'My name is Sean Cotter, I am a full stack web developer located outside of Philadelphia, PA. I specialize in React, Typescript, Node.JS and Go.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://cotter.tech',
    title: 'Sean Cotter',
    description: 'My name is Sean Cotter, I am a full stack web developer located outside of Philadelphia, PA. I specialize in React, Typescript, Node.JS and Go.',
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
        <main className="relative w-full h-full min-h-full flex flex-col z-10 overflow-y-auto">
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
