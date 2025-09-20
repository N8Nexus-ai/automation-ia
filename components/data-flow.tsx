"use client"

export function DataFlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Flowing data lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-pulse delay-1000" />
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse delay-2000" />

      {/* Vertical data streams */}
      <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse delay-500" />
      <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent/15 to-transparent animate-pulse delay-1500" />

      {/* Floating automation symbols */}
      <div className="absolute top-20 left-10 text-primary/20 animate-float">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
        </svg>
      </div>

      <div className="absolute top-40 right-20 text-accent/20 animate-float delay-1000">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5Z" />
        </svg>
      </div>

      <div className="absolute bottom-32 left-1/3 text-primary/15 animate-float delay-2000">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      </div>

      <div className="absolute top-1/3 right-1/4 text-accent/25 animate-float delay-500">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
      </div>
    </div>
  )
}
