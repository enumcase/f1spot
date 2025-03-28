import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'f1spot - Formula 1 seating arrangements, race schedules, and more',
  description: 'Keep track of Formula 1 races with f1spot - your F1 information website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <footer className="py-6 border-t border-slate-200 dark:border-slate-800 mt-12">
          <div className="container mx-auto px-3 sm:px-4 text-center text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} f1spot. All rights reserved.
          </div>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
} 