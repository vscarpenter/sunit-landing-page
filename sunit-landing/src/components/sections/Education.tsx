'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Award,
  Calendar,
  MapPin,
  Shield,
  Building,
  CheckCircle,
  Star
} from 'lucide-react';
import { education, certifications } from '@/constants/data';
import { useScrollAnimation, fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '@/hooks/useScrollAnimation';

export default function Education() {
  const { ref, animation } = useScrollAnimation();

  const getInstitutionLogo = (institution: string) => {
    const logos: { [key: string]: string } = {
      'University of California – UC Berkeley': 'UCB',
      'Marquette University': 'MU'
    };
    return logos[institution] || institution.split(' ').map(word => word[0]).join('').slice(0, 3);
  };

  const getInstitutionColor = (institution: string) => {
    const colors: { [key: string]: string } = {
      'University of California – UC Berkeley': 'bg-blue-600',
      'Marquette University': 'bg-yellow-600'
    };
    return colors[institution] || 'bg-primary';
  };

  const getCertificationIcon = (name: string) => {
    if (name.includes('Secret') || name.includes('White House')) {
      return Shield;
    }
    if (name.includes('Microsoft')) {
      return Building;
    }
    return Award;
  };

  const getCertificationColor = (name: string) => {
    if (name.includes('Secret') || name.includes('White House')) {
      return 'text-red-600';
    }
    if (name.includes('Microsoft')) {
      return 'text-blue-600';
    }
    return 'text-green-600';
  };

  return (
    <section id="education" className="py-24 bg-background">
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
            <Badge variant="outline" className="mb-4">Education & Credentials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Academic Excellence &
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Professional Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Strong foundation in engineering and data science with industry-leading certifications and security clearances
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <motion.div variants={fadeInLeft}>
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Education</h3>
                </div>
              </div>

              <div className="space-y-6">
                {education.map((edu) => (
                  <motion.div
                    key={edu.id}
                    variants={fadeInUp}
                    className="group"
                  >
                    <Card className="p-6 border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 ${getInstitutionColor(edu.institution)} rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                            {getInstitutionLogo(edu.institution)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                  {edu.degree}
                                </h4>
                                <p className="text-primary font-medium">
                                  {edu.field}
                                </p>
                              </div>
                              <Badge variant="outline" className="ml-2 flex-shrink-0">
                                {edu.graduationYear}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground font-medium mb-2">
                              {edu.institution}
                            </p>
                            {edu.location && (
                              <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 mr-1" />
                                {edu.location}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Education Highlights */}
              <motion.div variants={fadeInUp} className="mt-8">
                <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/10 border-primary/20">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <Star className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Academic Highlights</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>UC Berkeley Master&apos;s in Data Science & Machine Learning (2022) - cutting-edge curriculum</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Dual Master&apos;s degrees in technical disciplines spanning 30+ years</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Strong foundation in engineering and biomedical sciences</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div variants={fadeInRight}>
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
                </div>
              </div>

              <div className="space-y-4">
                {certifications.map((cert) => {
                  const Icon = getCertificationIcon(cert.name);
                  const colorClass = getCertificationColor(cert.name);
                  
                  return (
                    <motion.div
                      key={cert.id}
                      variants={fadeInUp}
                      className="group"
                    >
                      <Card className="p-5 border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-secondary/50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className={`w-4 h-4 ${colorClass}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="text-base font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                                  {cert.name}
                                </h4>
                                {cert.current && (
                                  <Badge variant="secondary" className="ml-2 text-xs flex-shrink-0">
                                    Active
                                  </Badge>
                                )}
                              </div>
                              <p className="text-primary font-medium text-sm mb-1">
                                {cert.issuer}
                              </p>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="w-3 h-3 mr-1" />
                                {cert.year && `Since ${cert.year}`}
                                {cert.expirationYear && ` - ${cert.expirationYear}`}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Security Clearance Highlight */}
              <motion.div variants={fadeInUp} className="mt-8">
                <Card className="p-6 bg-gradient-to-r from-red-500/5 to-blue-500/5 border-red-500/20">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="w-5 h-5 text-red-600" />
                      <h4 className="font-semibold text-foreground">Security Clearances</h4>
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm text-foreground">Top Secret/SCI</p>
                          <p className="text-xs text-muted-foreground">Sensitive Compartmented Information</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          Since 2012
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm text-foreground">Yankee White</p>
                          <p className="text-xs text-muted-foreground">White House Clearance</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          Since 2015
                        </Badge>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                      Maintaining the highest levels of security clearance for sensitive government and defense projects
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Microsoft Certifications Highlight */}
              <motion.div variants={fadeInUp} className="mt-6">
                <Card className="p-6 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border-blue-500/20">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <Building className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-foreground">Microsoft Expertise</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Azure Architect</Badge>
                      <Badge variant="outline" className="text-xs">Solutions Developer</Badge>
                      <Badge variant="outline" className="text-xs">SharePoint Specialist</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      Comprehensive Microsoft technology certifications spanning cloud, development, and collaboration platforms
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
