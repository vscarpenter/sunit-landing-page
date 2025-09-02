'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Brain, 
  Cloud, 
  Settings, 
  Users,
  Zap,
  Star,
  TrendingUp
} from 'lucide-react';
import { skills } from '@/constants/data';
import { useScrollAnimation, fadeInUp, staggerContainer } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

export default function Skills() {
  const { ref, animation } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoryConfig = {
    programming: {
      title: 'Programming Languages',
      icon: Code2,
      color: 'bg-blue-500',
      description: 'Languages and frameworks for building robust solutions'
    },
    technical: {
      title: 'Data Science & AI',
      icon: Brain,
      color: 'bg-purple-500',
      description: 'Machine learning, analytics, and statistical modeling expertise'
    },
    tools: {
      title: 'Tools & Frameworks',
      icon: Settings,
      color: 'bg-green-500',
      description: 'Development tools and ML frameworks'
    },
    cloud: {
      title: 'Cloud & Microsoft Stack',
      icon: Cloud,
      color: 'bg-cyan-500',
      description: 'Cloud platforms and enterprise technologies'
    },
    soft: {
      title: 'Leadership & Consulting',
      icon: Users,
      color: 'bg-orange-500',
      description: 'Business skills and stakeholder management'
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const getLevelIcon = (level: string | undefined) => {
    switch (level) {
      case 'expert':
        return <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />;
      case 'advanced':
        return <TrendingUp className="w-3 h-3 text-green-500" />;
      case 'intermediate':
        return <Zap className="w-3 h-3 text-blue-500" />;
      default:
        return <Zap className="w-3 h-3 text-gray-400" />;
    }
  };

  const getLevelColor = (level: string | undefined) => {
    switch (level) {
      case 'expert':
        return 'border-yellow-500/30 bg-yellow-500/5 text-yellow-700 dark:text-yellow-300';
      case 'advanced':
        return 'border-green-500/30 bg-green-500/5 text-green-700 dark:text-green-300';
      case 'intermediate':
        return 'border-blue-500/30 bg-blue-500/5 text-blue-700 dark:text-blue-300';
      default:
        return 'border-gray-500/30 bg-gray-500/5 text-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section id="skills" className="py-24 bg-secondary/5">
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
            <Badge variant="outline" className="mb-4">Technical Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Skills &
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit spanning programming, data science, cloud technologies, and leadership skills
            </p>
          </motion.div>

          {/* Category Overview */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.entries(categoryConfig).map(([key, config]) => {
              const Icon = config.icon;
              const categorySkills = groupedSkills[key] || [];
              const isSelected = selectedCategory === key;
              
              return (
                <motion.div
                  key={key}
                  variants={fadeInUp}
                  className="group cursor-pointer"
                  onClick={() => setSelectedCategory(isSelected ? null : key)}
                >
                  <Card className={`p-6 transition-all duration-300 hover:shadow-lg ${
                    isSelected 
                      ? 'border-primary ring-2 ring-primary/20 shadow-lg' 
                      : 'border-border/50 hover:border-primary/20'
                  }`}>
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${config.color} rounded-lg flex items-center justify-center text-white transform transition-transform group-hover:scale-110`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {config.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {config.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">
                              {categorySkills.length} skills
                            </Badge>
                            <div className="text-xs text-muted-foreground">
                              {isSelected ? 'Click to collapse' : 'Click to expand'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Skills Detail View */}
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-16"
            >
              <Card className="p-8 border-primary/20 bg-primary/5">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 ${categoryConfig[selectedCategory as keyof typeof categoryConfig].color} rounded-lg flex items-center justify-center text-white`}>
                      {(() => {
                        const Icon = categoryConfig[selectedCategory as keyof typeof categoryConfig].icon;
                        return <Icon className="w-6 h-6" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {categoryConfig[selectedCategory as keyof typeof categoryConfig].title}
                      </h3>
                      <p className="text-muted-foreground">
                        {categoryConfig[selectedCategory as keyof typeof categoryConfig].description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {groupedSkills[selectedCategory]?.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center justify-between p-3 rounded-lg border ${getLevelColor(skill.level)} transition-colors hover:shadow-sm`}
                      >
                        <span className="font-medium text-sm">{skill.name}</span>
                        <div className="flex items-center space-x-1">
                          {getLevelIcon(skill.level)}
                          <span className="text-xs capitalize opacity-75">
                            {skill.level || 'intermediate'}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* All Skills Overview */}
          {!selectedCategory && (
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  All Skills Overview
                </h3>
                <p className="text-muted-foreground">
                  Click on any category above to explore skills in detail
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                  <Card key={category} className="p-4 border-border/50">
                    <CardContent className="p-0">
                      <h4 className="font-semibold text-sm text-foreground mb-3">
                        {categoryConfig[category as keyof typeof categoryConfig]?.title}
                      </h4>
                      <div className="space-y-2">
                        {categorySkills.slice(0, 4).map((skill) => (
                          <div key={skill.name} className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              {skill.name}
                            </span>
                            {getLevelIcon(skill.level)}
                          </div>
                        ))}
                        {categorySkills.length > 4 && (
                          <div className="text-xs text-primary font-medium pt-1">
                            +{categorySkills.length - 4} more
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
