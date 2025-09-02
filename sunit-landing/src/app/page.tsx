'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}