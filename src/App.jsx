import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

// Skeleton pages for routing
const SkeletonPage = ({ title }) => (
  <div className="min-h-[100dvh] pt-32 px-12 bg-clinic-white text-slate-800 font-sans">
    <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full relative bg-clinic-white overflow-x-hidden min-h-screen flex flex-col font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<SkeletonPage title="Features" />} />
          <Route path="/pricing" element={<SkeletonPage title="Pricing" />} />
          <Route path="/how-it-works" element={<SkeletonPage title="How It Works" />} />
          <Route path="/compare" element={<SkeletonPage title="Compare" />} />
          <Route path="/faq" element={<SkeletonPage title="FAQ" />} />
          <Route path="/audit" element={<SkeletonPage title="Free Audit" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
