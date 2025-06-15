import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Newsletter from '../components/Newsletter';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <main className="relative bg-white">
        <Stats />
        <Features />
        <Courses />
        <Testimonials />
        <CTA />
        <Newsletter />
      </main>
    </div>
  );
}

export default Home;