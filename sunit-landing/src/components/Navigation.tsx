'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Briefcase, 
  Code, 
  GraduationCap, 
  Mail,
  Download,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '@/constants/data';
import { useState, useEffect } from 'react';
import { publicPath } from '@/lib/paths';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'skills', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const handleDownloadResume = () => {
    // Link to resume with basePath support for GitHub Pages
    window.open(publicPath('/resume.pdf'), '_blank');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-lg text-foreground">
                  {personalInfo.name}
                </h1>
                <p className="text-sm text-muted-foreground -mt-1">
                  Data Scientist & Solutions Architect
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="relative font-medium"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary rounded-md -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadResume}
                className="font-medium"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <Button
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="fixed top-16 left-4 right-4 bg-background border border-border rounded-lg shadow-xl z-50 lg:hidden overflow-hidden"
            >
              <div className="p-4">
                {/* Mobile Navigation */}
                <div className="space-y-2 mb-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Button
                        variant={activeSection === item.id ? 'default' : 'ghost'}
                        className="w-full justify-start font-medium"
                        onClick={() => scrollToSection(item.id)}
                      >
                        <item.icon className="w-4 h-4 mr-3" />
                        {item.label}
                        {activeSection === item.id && (
                          <Badge variant="secondary" className="ml-auto text-xs">
                            Active
                          </Badge>
                        )}
                      </Button>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Actions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-3 pt-4 border-t border-border"
                >
                  <Button
                    variant="outline"
                    className="w-full font-medium"
                    onClick={handleDownloadResume}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button
                    className="w-full font-medium"
                    onClick={() => scrollToSection('contact')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Button>
                  
                  <div className="flex justify-center pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(personalInfo.linkedIn, '_blank')}
                      className="text-muted-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
