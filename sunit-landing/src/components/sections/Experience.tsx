'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle,
  Award,
  ExternalLink
} from 'lucide-react';
import { experiences } from '@/constants/data';
import { useScrollAnimation, fadeInUp, staggerContainer, fadeInLeft } from '@/hooks/useScrollAnimation';

export default function Experience() {
  const { ref, animation } = useScrollAnimation();

  const getCompanyLogo = (company: string) => {
    // In a real app, these would be actual logo images
    const logos: { [key: string]: string } = {
      'Microsoft Corporation': 'MS',
      'United States Department of Defense, US Southern Command': 'DOD',
      'The White House, Washington, DC': 'WH'
    };
    return logos[company] || company.substring(0, 2).toUpperCase();
  };

  const getCompanyColor = (company: string) => {
    const colors: { [key: string]: string } = {
      'Microsoft Corporation': 'bg-blue-500',
      'United States Department of Defense, US Southern Command': 'bg-green-600',
      'The White House, Washington, DC': 'bg-red-600'
    };
    return colors[company] || 'bg-primary';
  };

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={animation}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Professional Experience</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Career Journey &
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Over two decades of delivering innovative data science solutions across enterprise, government, and defense sectors
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={fadeInLeft}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 ${
                    index % 2 === 0 ? 'md:transform md:-translate-x-1/2' : 'md:transform md:-translate-x-1/2'
                  }`}>
                    {experience.current && (
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex items-start space-x-4 mb-4">
                          <div className={`w-12 h-12 ${getCompanyColor(experience.company)} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                            {getCompanyLogo(experience.company)}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                              {experience.title}
                            </h3>
                            <p className="text-primary font-medium mb-2">
                              {experience.company}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {experience.location}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {experience.startDate} - {experience.endDate}
                                {experience.current && (
                                  <Badge variant="secondary" className="ml-2 text-xs">
                                    Current
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-3 mb-6">
                          {experience.description.map((desc, descIndex) => (
                            <div key={descIndex} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {desc}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        {experience.technologies && (
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Highlights */}
          <motion.div variants={fadeInUp} className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Career Highlights
              </h3>
              <p className="text-muted-foreground">
                Key milestones and achievements throughout my professional journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-blue-500" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Microsoft Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    25+ years at Microsoft with multiple awards and recognition for outstanding contributions
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Security Clearance</h4>
                  <p className="text-sm text-muted-foreground">
                    Top Secret/SCI and White House clearances for high-level government projects
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ExternalLink className="w-6 h-6 text-purple-500" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Advanced Education</h4>
                  <p className="text-sm text-muted-foreground">
                    UC Berkeley Master&apos;s in Data Science & Machine Learning (2022)
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
