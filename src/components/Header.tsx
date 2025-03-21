'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-3 sm:px-4 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="flex items-center focus-ring px-1 py-1"
          aria-label="f1spot home"
        >
          <span className="text-xl font-medium tracking-tight">
            f1<span className="text-rose-500 transition-standard">spot</span>
          </span>
        </Link>
        
        <nav className="flex items-center gap-3 sm:gap-5">
          <Link 
            href="/" 
            className="text-sm sm:text-base font-medium text-slate-700 hover:text-rose-500 transition-standard dark:text-slate-200 dark:hover:text-rose-400 focus-ring px-2 py-1"
          >
            Home
          </Link>
          <Link 
            href="/gps" 
            className="text-sm sm:text-base font-medium text-slate-700 hover:text-rose-500 transition-standard dark:text-slate-200 dark:hover:text-rose-400 focus-ring px-2 py-1"
          >
            GPs
          </Link>
        </nav>
      </div>
    </header>
  );
} 