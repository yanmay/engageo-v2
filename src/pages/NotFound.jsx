import React from 'react';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--command-black)] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="relative z-10 max-w-2xl">
        <div className="mb-12 inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 animate-pulse">
          <AlertTriangle size={48} />
        </div>
        
        <div className="font-data text-[10px] text-[var(--recovery-blue)] font-bold tracking-[0.3em] uppercase mb-6">Error_Code: 404_Path_Not_Found</div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-none">
          Lost in the <br />
          <span className="text-white/40 italic font-drama">infrastructure.</span>
        </h1>
        
        <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-16 max-w-lg mx-auto">
          The page you are looking for has been moved, deleted, or never existed in this recovery node.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="/" 
            className="btn-magnetic group px-10 py-5 bg-[var(--recovery-blue)] text-white rounded-full font-bold text-sm tracking-wide flex items-center gap-3 shadow-2xl shadow-blue-500/20"
          >
            <Home size={18} />
            Return Home
          </a>
          <button 
            onClick={() => window.history.back()}
            className="px-10 py-5 border border-white/10 text-white/60 hover:text-white rounded-full font-bold text-sm tracking-wide transition-colors flex items-center gap-3"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
      
      {/* Absolute Bottom Label */}
      <div className="absolute bottom-12 left-0 w-full flex justify-center opacity-20">
        <span className="font-data text-[8px] tracking-[0.5em] text-white uppercase">Engageo_Node_v2.1_Diagnostic</span>
      </div>
    </div>
  );
}
