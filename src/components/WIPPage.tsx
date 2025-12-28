'use client';

import Header from '@/components/Header';

export default function WIPPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          {/* Animated indicator */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-rose-500 uppercase tracking-wider">
              Work in Progress
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
            We're preparing for the{' '}
            <span className="text-rose-500">2026 season</span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl">
            We're researching and updating our data for the upcoming F1 season.
            Check back soon for the latest circuit guides and seating information.
          </p>
        </div>
      </div>
    </main>
  );
}
