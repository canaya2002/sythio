"use client";

import { type ReactNode } from "react";

/* ─── MacBook Frame — realistic proportions ─── */
export function MacBookFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Laptop screen */}
      <div className="relative bg-zinc-900 rounded-t-2xl p-2 md:p-2.5 shadow-2xl">
        {/* Camera notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-900 rounded-b-xl z-10 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-zinc-700" />
        </div>
        {/* Screen */}
        <div className="rounded-xl overflow-hidden bg-white aspect-[16/10]">
          <div className="w-full h-full overflow-auto">
            {children}
          </div>
        </div>
      </div>
      {/* Keyboard base */}
      <div className="relative">
        <div className="h-4 md:h-5 bg-gradient-to-b from-zinc-300 to-zinc-400 rounded-b-xl mx-[1%]" />
        <div className="h-1.5 bg-zinc-500 rounded-b-lg mx-[6%]" />
      </div>
      {/* Shadow */}
      <div className="absolute -bottom-6 left-[3%] right-[3%] h-10 bg-black/8 blur-2xl rounded-full" />
    </div>
  );
}

/* ─── iPhone Frame — realistic proportions ─── */
export function IPhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative w-[320px] md:w-[375px] ${className}`}>
      {/* Phone body */}
      <div className="relative bg-zinc-900 rounded-[3rem] md:rounded-[3.5rem] p-3 md:p-3.5 shadow-2xl">
        {/* Dynamic Island */}
        <div className="absolute top-6 md:top-7 left-1/2 -translate-x-1/2 w-28 h-[26px] bg-black rounded-full z-20" />
        {/* Screen */}
        <div className="rounded-[2.25rem] md:rounded-[2.75rem] overflow-hidden bg-white relative">
          {/* Status bar — space for Dynamic Island */}
          <div className="h-16 md:h-[70px] bg-white flex items-end justify-between px-8 pb-1 relative z-10">
            <span className="text-[11px] font-semibold text-foreground">9:41</span>
            <div className="flex items-center gap-1.5">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" className="text-foreground">
                <rect x="0" y="5" width="3" height="7" rx="0.5" />
                <rect x="4.5" y="3" width="3" height="9" rx="0.5" />
                <rect x="9" y="1" width="3" height="11" rx="0.5" />
                <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" />
              </svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
                <path d="M12 3C7.8 3 4.1 4.8 1.6 7.6l1.4 1.4C5.2 6.5 8.4 5 12 5s6.8 1.5 9 4l1.4-1.4C19.9 4.8 16.2 3 12 3zm0 4c-2.7 0-5.2 1.1-7 3l1.4 1.4C8.1 9.9 9.9 9 12 9s3.9.9 5.6 2.4L19 10c-1.8-1.9-4.3-3-7-3zm0 4c-1.6 0-3.1.7-4.2 1.8L12 17l4.2-4.2C15.1 11.7 13.6 11 12 11z" />
              </svg>
              <div className="flex items-center">
                <div className="w-6 h-3 rounded-sm border border-foreground/80 relative">
                  <div className="absolute inset-[2px] right-[4px] bg-foreground rounded-[1px]" />
                </div>
                <div className="w-[2px] h-1.5 bg-foreground/80 rounded-r-full" />
              </div>
            </div>
          </div>
          {/* Content area — realistic height */}
          <div className="min-h-[580px] md:min-h-[680px]">
            {children}
          </div>
          {/* Home indicator */}
          <div className="flex justify-center pb-2 pt-3 bg-white">
            <div className="w-32 h-1 rounded-full bg-foreground/20" />
          </div>
        </div>
      </div>
      {/* Shadow */}
      <div className="absolute -bottom-6 left-[8%] right-[8%] h-10 bg-black/12 blur-2xl rounded-full" />
    </div>
  );
}

/* ─── iPad Frame ─── */
export function IPadFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative bg-zinc-900 rounded-[2rem] p-3 shadow-2xl">
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-zinc-700 z-10" />
        <div className="rounded-[1.5rem] overflow-hidden bg-white aspect-[4/3]">
          <div className="w-full h-full overflow-auto">
            {children}
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 left-[6%] right-[6%] h-8 bg-black/8 blur-2xl rounded-full" />
    </div>
  );
}

/* ─── Browser Window Frame ─── */
export function BrowserFrame({
  children,
  url = "app.sythio.com",
  className = "",
}: {
  children: ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="bg-white rounded-2xl border border-border shadow-[0_2px_8px_rgba(0,0,0,0.06),0_16px_48px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* Browser chrome */}
        <div className="h-12 bg-zinc-100 border-b border-border-light flex items-center px-5 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors" />
          </div>
          <div className="flex-1 max-w-lg mx-auto">
            <div className="h-7 bg-white rounded-lg border border-border-light flex items-center px-3">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#a3a3a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 shrink-0">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <span className="text-[11px] text-muted-light truncate">{url}</span>
            </div>
          </div>
          <div className="w-16" />
        </div>
        {/* Content */}
        <div>{children}</div>
      </div>
      <div className="absolute -bottom-5 left-[3%] right-[3%] h-10 bg-black/6 blur-2xl rounded-full" />
    </div>
  );
}
