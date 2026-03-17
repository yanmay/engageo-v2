import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('engageo_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('engageo_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-80 z-[modal] animate-fade-in">
      <div className="bg-[var(--command-black)]/90 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
        <div className="font-data text-[10px] text-[var(--recovery-blue)] font-bold tracking-[0.2em] uppercase mb-3">Cookie_Directive</div>
        <p className="text-white/60 text-xs leading-relaxed mb-6 font-medium">
          We use functional cookies to optimize your recovery node experience. No tracking, just performance.
        </p>
        <div className="flex gap-4">
          <button 
            onClick={handleAccept}
            className="flex-1 py-3 bg-[var(--recovery-blue)] text-white text-[10px] font-bold tracking-widest uppercase rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all"
          >
            Accept_All
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="flex-1 py-3 border border-white/10 text-white/40 text-[10px] font-bold tracking-widest uppercase rounded-full hover:text-white transition-all"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
