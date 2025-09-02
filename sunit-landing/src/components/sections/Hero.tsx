'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '@/constants/data';
import { fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import { publicPath } from '@/lib/paths';

export default function Hero() {
  const handleDownloadResume = () => {
    // Link to resume with basePath support for GitHub Pages
    window.open(publicPath('/resume.pdf'), '_blank');
  };

  const handleContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLinkedIn = () => {
    window.open(personalInfo.linkedIn, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <motion.div variants={fadeInUp} className="space-y-4">
                <Badge variant="outline" className="text-sm font-medium">
                  <MapPin className="w-3 h-3 mr-2" />
                  {personalInfo.location}
                </Badge>
                
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {personalInfo.name.split(' ')[0]}
                  </span>
                  <br />
                  <span className="text-foreground">
                    {personalInfo.name.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
                
                <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                  {personalInfo.title}
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  {personalInfo.tagline}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleContact} size="lg" className="font-medium">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={handleDownloadResume}
                    className="font-medium"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
                
                <div className="flex items-center gap-4 pt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLinkedIn}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    {personalInfo.phone}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 pt-4">
                {['Machine Learning', 'Data Science', 'Azure', 'Python', 'AI Solutions'].map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </motion.div>
            </div>

            {/* Right side - Profile Image */}
            <motion.div variants={fadeInUp} className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 to-primary/10 rounded-2xl transform -rotate-2 scale-110"></div>
                
                {/* Profile image container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-secondary to-background rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                  {/* Professional headshot */}
                  <Image
                    src={publicPath('/sunit-headshot.jpg')}
                    alt="Sunit S. Carpenter - Professional Headshot"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 320px, 384px"
                  />
                  
                  {/* Elegant border overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-muted-foreground tracking-wider uppercase">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border border-muted-foreground/30 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-2 bg-muted-foreground/50 rounded-full mt-2"
              animate={{ height: [8, 16, 8] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
