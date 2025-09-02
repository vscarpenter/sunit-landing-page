'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '@/constants/data';
import { useScrollAnimation, fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const { ref, animation } = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'text-green-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/sunitcarpenter',
      href: personalInfo.linkedIn,
      color: 'text-linkedin'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
      color: 'text-red-600'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/5">
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
            <Badge variant="outline" className="mb-4">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let&apos;s Discuss Your
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Data Science Project</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with data-driven solutions? I&apos;m here to help you leverage 
              machine learning and analytics to achieve your goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={fadeInLeft}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <Card key={method.label} className="p-4 border-border/50 hover:border-primary/20 transition-colors group cursor-pointer">
                          <CardContent className="p-0">
                            <a 
                              href={method.href} 
                              target={method.href.startsWith('http') ? '_blank' : '_self'}
                              rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                              className="flex items-center space-x-4 w-full"
                            >
                              <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <Icon className={`w-5 h-5 ${method.color} group-hover:scale-110 transition-transform`} />
                              </div>
                              <div>
                                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                                  {method.label}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {method.value}
                                </p>
                              </div>
                            </a>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/10 border-primary/20">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Response Time</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      I typically respond to inquiries within 24 hours during business days. 
                      For urgent matters, please call directly.
                    </p>
                    <div className="grid gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Business Hours:</span>
                        <span className="font-medium text-foreground">Mon - Fri, 9 AM - 6 PM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time Zone:</span>
                        <span className="font-medium text-foreground">Pacific Standard Time</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-gradient-to-r from-green-500/5 to-blue-500/5 border-green-500/20">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <MessageSquare className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-foreground">Areas of Expertise</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Machine Learning',
                        'Data Strategy',
                        'Azure Architecture',
                        'AI Solutions',
                        'Statistical Modeling',
                        'Cloud Migration',
                        'Consulting',
                        'Team Leadership'
                      ].map((area) => (
                        <Badge key={area} variant="outline" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInRight}>
              <Card className="p-8 border-border/50">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                  
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium text-green-800 dark:text-green-200">Message Sent Successfully!</p>
                        <p className="text-sm text-green-700 dark:text-green-300">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className={errors.name ? 'border-red-500' : ''}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <div className="flex items-center space-x-1 text-sm text-red-600">
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.name}</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={errors.email ? 'border-red-500' : ''}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <div className="flex items-center space-x-1 text-sm text-red-600">
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.email}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className={errors.subject ? 'border-red-500' : ''}
                        placeholder="What would you like to discuss?"
                      />
                      {errors.subject && (
                        <div className="flex items-center space-x-1 text-sm text-red-600">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.subject}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                        placeholder="Please describe your project or inquiry in detail..."
                      />
                      {errors.message && (
                        <div className="flex items-center space-x-1 text-sm text-red-600">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.message}</span>
                        </div>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full font-medium"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                    By submitting this form, you agree to be contacted regarding your inquiry. 
                    Your information will be kept confidential and secure.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}