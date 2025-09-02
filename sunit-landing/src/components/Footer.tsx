'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  ExternalLink,
  Heart,
  ArrowUp
} from 'lucide-react';
import { personalInfo } from '@/constants/data';
import { fadeInUp } from '@/hooks/useScrollAnimation';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: personalInfo.linkedIn,
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: 'hover:text-green-600'
    }
  ];

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
  };

  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Brand Section */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground">
                    {personalInfo.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {personalInfo.title}
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                {personalInfo.tagline}
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>{personalInfo.email}</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <Button
                    key={link.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollToSection(link.id)}
                    className="justify-start p-0 h-auto font-normal text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div variants={fadeInUp}>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="space-y-4">
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={social.name}
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(social.url, '_blank')}
                        className={`${social.color} transition-colors`}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {social.name}
                      </Button>
                    );
                  })}
                </div>
                
                <div className="pt-4">
                  <h5 className="font-medium text-foreground mb-2 text-sm">Areas of Focus</h5>
                  <div className="flex flex-wrap gap-1">
                    {['Data Science', 'Machine Learning', 'Azure', 'AI Solutions'].map((area) => (
                      <Badge key={area} variant="outline" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} {personalInfo.name}. Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>using Next.js, TypeScript & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-xs">
                <ExternalLink className="w-3 h-3 mr-1" />
                Open to Opportunities
              </Badge>
              
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}