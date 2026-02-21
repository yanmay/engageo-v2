import React from 'react';

const integrations = [
  {
    name: 'Google Calendar',
    icon: (
      <svg viewBox="0 0 48 48" width="28" height="28">
        <rect width="48" height="48" rx="8" fill="#fff" />
        <path d="M35 13H13a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V15a2 2 0 0 0-2-2Z" fill="#fff" stroke="#E2E8F0" strokeWidth="1.5" />
        <path d="M11 20h26" stroke="#E2E8F0" strokeWidth="1.5" />
        <rect x="17" y="9" width="3" height="8" rx="1.5" fill="#3D5AFE" />
        <rect x="28" y="9" width="3" height="8" rx="1.5" fill="#3D5AFE" />
        <rect x="16" y="24" width="7" height="7" rx="1" fill="#3D5AFE" opacity="0.7" />
        <rect x="25" y="24" width="7" height="7" rx="1" fill="#3D5AFE" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp Business',
    icon: (
      <svg viewBox="0 0 48 48" width="28" height="28">
        <rect width="48" height="48" rx="8" fill="#25D366" />
        <path d="M36 12.2A16.8 16.8 0 0 0 24 8C15.2 8 8 15.2 8 24c0 2.8.7 5.5 2.1 7.9L8 40l8.4-2.2A16.8 16.8 0 0 0 40 24c0-4.5-1.7-8.7-4.8-11.8Zm-12 23c-2.3 0-4.6-.6-6.6-1.8l-.5-.3-5 1.3 1.3-4.8-.3-.5A13.8 13.8 0 0 1 24 11.2c7.6 0 13.8 6.2 13.8 13.8S31.6 38.8 24 38.8Z" fill="white" />
        <path d="M31.3 27c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2-.2.4-.9 1.3-1.2 1.6-.2.3-.4.3-.8.1-.4-.2-1.8-.7-3.4-2.1-1.3-1.1-2.1-2.5-2.4-2.9-.2-.4 0-.6.2-.8l.5-.6.3-.5v-.5l-1.2-3c-.3-.8-.6-.7-.9-.7h-.7c-.3 0-.7.1-1 .4C18 17.6 17 18.8 17 21c0 2.3 1.7 4.5 1.9 4.8.2.3 3.3 5 8 7 1.1.5 2 .8 2.7 1 1.1.3 2.1.3 2.9.2.9-.1 2.7-1.1 3.1-2.2.4-1 .4-1.9.3-2.1-.1-.2-.4-.3-.8-.5Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Meta Ads',
    icon: (
      <svg viewBox="0 0 48 48" width="28" height="28">
        <rect width="48" height="48" rx="8" fill="#1877F2" />
        <path d="M26 38v-9h3l.5-4h-3.5v-2.5c0-1 .5-2 2-2H30v-3.5s-1.5-.5-3-.5c-3 0-5 2-5 5V25h-3v4h3v9h4Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Practo',
    icon: (
      <svg viewBox="0 0 48 48" width="28" height="28">
        <rect width="48" height="48" rx="8" fill="#5DB075" />
        <text x="24" y="30" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="14" fill="white">Pr</text>
      </svg>
    ),
  },
  {
    name: 'Google Ads',
    icon: (
      <svg viewBox="0 0 48 48" width="28" height="28">
        <rect width="48" height="48" rx="8" fill="#fff" stroke="#E2E8F0" strokeWidth="1" />
        <circle cx="16" cy="32" r="7" fill="#FBBC05" />
        <circle cx="32" cy="32" r="7" fill="#34A853" />
        <circle cx="24" cy="18" r="7" fill="#4285F4" />
      </svg>
    ),
  },
  {
    name: 'MediBuddy',
    icon: (
      <svg viewBox="0 0 48 48" width="28" height="28">
        <rect width="48" height="48" rx="8" fill="#00C9A7" />
        <text x="24" y="30" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="13" fill="white">MB</text>
      </svg>
    ),
  },
];

export default function Integrations() {
  return (
    <section className="py-20 px-6 md:px-12 border-y border-border/50 bg-canvas relative z-10">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Label */}
          <div className="shrink-0 text-center md:text-left">
            <p className="font-mono text-[10px] uppercase tracking-widest text-subtle font-semibold mb-1">
              Plug-and-play with
            </p>
            <h3 className="font-sans text-xl font-bold text-obsidian tracking-tight">
              Your existing stack
            </h3>
          </div>

          {/* Integration pills */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            {integrations.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2.5 px-4 py-2.5 glass-card rounded-2xl hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {item.icon}
                <span className="font-sans text-xs font-semibold text-obsidian whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}

            {/* More coming */}
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-dashed border-border text-subtle text-xs font-medium">
              + More on request
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
