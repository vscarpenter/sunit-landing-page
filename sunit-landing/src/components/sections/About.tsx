'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Users, 
  Target, 
  Award,
  Lightbulb,
  Shield
} from 'lucide-react';
import { personalInfo, achievements } from '@/constants/data';
import { useScrollAnimation, fadeInUp, staggerContainer, fadeInLeft } from '@/hooks/useScrollAnimation';

export default function About() {
  const { ref, animation } = useScrollAnimation();

  const values = [
    {
      icon: Brain,
      title: "Innovation",
      description: "Leveraging cutting-edge AI and machine learning technologies to solve complex business challenges"
    },
    {
      icon: Users,
      title: "Collaboration", 
      description: "Building strong partnerships with cross-functional teams and stakeholders to deliver exceptional results"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering measurable business impact through data-driven solutions and strategic insights"
    },
    {
      icon: Shield,
      title: "Security Excellence",
      description: "Maintaining the highest security standards with Top Secret clearance and White House access"
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "25+" },
    { label: "Major Projects Delivered", value: "100+" },
    { label: "Government Agencies Served", value: "15+" },
    { label: "Microsoft Awards", value: "Multiple" }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/5">
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
            <Badge variant="outline" className="mb-4">About Me</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transforming Data into 
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Strategic Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {personalInfo.summary}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <Card className="p-6 border-border/50 hover:border-primary/20 transition-colors">
                  <CardContent className="p-0">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Values Grid */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-16">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeInLeft}
                  className="group"
                >
                  <Card className="p-8 h-full border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-3">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Key Achievements */}
          <motion.div variants={fadeInUp} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Key Achievements
              </h3>
              <p className="text-muted-foreground">
                Recognized accomplishments in data science and technology leadership
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  variants={fadeInUp}
                  className="group"
                >
                  <Card className="p-6 h-full border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1 group-hover:bg-primary/20 transition-colors">
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-foreground leading-tight">
                              {achievement.title}
                            </h4>
                            <Badge variant="outline" className="text-xs ml-2">
                              {achievement.year}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {achievement.description}
                          </p>
                          <p className="text-xs text-primary font-medium">
                            {achievement.organization}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Interests */}
          <motion.div variants={fadeInUp} className="text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/10 border-primary/20">
              <CardContent className="p-0">
                <div className="flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Beyond Technology
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  When not architecting data solutions, I&apos;m passionate about mentoring the next generation of data scientists, 
                  contributing to open-source projects, and exploring the latest advances in artificial intelligence and machine learning. 
                  I believe in the transformative power of data to solve real-world problems and create positive impact.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {['Mentoring', 'Open Source', 'AI Research', 'Public Speaking', 'Continuous Learning'].map((interest) => (
                    <Badge key={interest} variant="secondary" className="text-sm">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}