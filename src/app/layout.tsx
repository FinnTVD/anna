import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { ContextProvider } from '@/context-provider';
import Head from 'next/head';

// const lato = Lato({
//   subsets: ['latin'],
//   weight: ['300', '400', '700', '900'],
//   // style: ['italic', 'normal']
// });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const fontNexa = localFont({
  src: [
    {
      path: '../assets/fonts/SVN-Nexa-Thin.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SVN-Nexa-Regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SVN-Nexa-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SVN-Nexa-XBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SVN-Nexa-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-Nexa',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Next App</title>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <body className={fontNexa.variable}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
