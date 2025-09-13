'use client';

import { motion } from 'framer-motion';
import { 
  Check,
  ArrowRight,
  Star,
  Package,
  Rocket,
  Briefcase,
  Zap,
  Globe,
  Smartphone,
  Target,
  BarChart3,
  Settings,
  MessageCircle,
  ShoppingCart,
  Brain,
  Palette,
  Mail,
  Calendar,
  Shield,
  TrendingUp,
  Users,
  Award,
  ExternalLink,
  TrendingDown,
  Users2,
  DollarSign,
  Zap as Lightning
} from 'lucide-react';

export function Services() {
  const mainServices = [
    {
      title: 'Custom E-Commerce Development',
      description: 'End-to-end website development tailored for small and mid-size businesses.',
      icon: ShoppingCart,
      price: '💡 Projects typically start at ₹25,000+',
      features: [
        'WooCommerce & Shopify Setup',
        'Custom MERN Stack Applications',
        'Speed Optimization & Maintenance',
        'Hosting & Domain Integration'
      ],
      cta: 'Start Project',
      popular: true,
      color: 'from-blue-500 to-cyan-500',
      subtitle: 'Built to convert, scale, and perform.'
    },
    {
      title: 'Digital Marketing Suite',
      description: 'Comprehensive solutions to boost sales and scale revenue.',
      icon: TrendingUp,
      price: '💡 Retainers typically start at ₹15,000/month',
      features: [
        'SEO & Content Marketing',
        'Social Media Management',
        'Email Marketing Automation',
        'PPC & Performance Marketing'
      ],
      cta: 'Boost Growth',
      popular: false,
      color: 'from-green-500 to-emerald-500',
      subtitle: 'Always-on growth with measurable ROI.'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Advanced solutions for scaling and automation needs.',
      icon: Briefcase,
      price: '💡 Tailored for mid-sized businesses & enterprises',
      features: [
        'Custom CRM Development',
        'Marketing & Sales Funnel Setup',
        'Business Process Automation',
        'Analytics & Reporting Systems'
      ],
      cta: 'Transform Business',
      popular: false,
      color: 'from-purple-500 to-pink-500',
      subtitle: 'Engineered for reliability, security, and scale.'
    }
  ];

  const addOnServices = [
    { name: 'Landing Page Design (High-Converting Sales Pages)', price: 'Starts ₹12,000', icon: Palette },
    { name: 'Custom Chatbots', price: 'Starts ₹8,000', icon: MessageCircle },
    { name: 'Analytics & Tracking Setup (GA, Pixel, Looker Studio Dashboards)', price: 'Starts ₹10,000', icon: BarChart3 },
    { name: 'Creative Design & Ad Videos (For Paid Campaigns)', price: 'Starts ₹7,500/project', icon: Award }
  ];

  const caseStudies = [
    {
      title: 'Enterprise Resource Planning System',
      industry: 'Manufacturing',
      stat: '85%',
      statLabel: 'Efficiency Gain',
      statIcon: Lightning,
      description: 'Problem: Disconnected systems causing operational inefficiencies. Solution: Custom ERP system with real-time tracking and automation. Result: 85% improvement in operational efficiency.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-Powered Customer Service Platform',
      industry: 'Technology',
      stat: '92%',
      statLabel: 'Query Resolution',
      statIcon: Brain,
      description: 'Problem: High volume of repetitive customer queries. Solution: AI-powered chatbot with human handoff. Result: 92% automated query resolution rate.',
      tech: ['React', 'Python', 'TensorFlow', 'OpenAI', 'MongoDB'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'B2B SaaS Analytics Dashboard',
      industry: 'Business Intelligence',
      stat: '3.2M',
      statLabel: 'Data Points/Day',
      statIcon: BarChart3,
      description: 'Problem: Complex data visualization needs. Solution: Real-time analytics dashboard with custom metrics. Result: Processing 3.2M data points daily with sub-second response.',
      tech: ['Vue.js', 'GraphQL', 'TimescaleDB', 'Redis', 'AWS'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Marketing Automation Platform',
      industry: 'Digital Marketing',
      stat: '245%',
      statLabel: 'ROI Increase',
      statIcon: TrendingUp,
      description: 'Problem: Manual campaign management was time-consuming. Solution: Automated marketing platform with AI-driven insights. Result: 245% increase in marketing ROI.',
      tech: ['React', 'Python', 'Kubernetes', 'Apache Kafka', 'ElasticSearch'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Supply Chain Management System',
      industry: 'Logistics',
      stat: '99.9%',
      statLabel: 'Accuracy Rate',
      statIcon: Package,
      description: 'Problem: Supply chain visibility and tracking issues. Solution: Real-time tracking system with predictive analytics. Result: 99.9% accuracy in inventory management.',
      tech: ['Angular', 'Java Spring', 'PostgreSQL', 'RabbitMQ', 'Docker'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Healthcare Data Platform',
      industry: 'Healthcare',
      stat: 'HIPAA',
      statLabel: 'Compliant',
      statIcon: Shield,
      description: 'Problem: Need for secure, compliant patient data management. Solution: HIPAA-compliant healthcare data platform. Result: Secure handling of sensitive patient data.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'AWS', 'Azure AD'],
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-4">
            <Settings className="h-3 w-3 md:h-4 md:w-4" />
            <span>Our Solutions</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Enterprise-Grade{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Solutions
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Custom SaaS development and digital marketing solutions for mid-size businesses looking to scale and innovate
          </p>
        </motion.div>

        {/* Main Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mobile-grid lg:grid-cols-3 gap-6 md:gap-8 mb-16"
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${
                service.popular 
                  ? 'border-green-500 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base mb-4">
                    {service.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-center justify-center gap-2 mb-6 text-indigo-600">
                    <Zap className="h-4 w-4" />
                    <div className="text-sm md:text-base font-medium text-gray-700">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Subtitle */}
                <div className="text-center mb-6">
                  <p className="text-sm md:text-base text-gray-500 italic">
                    {service.subtitle}
                  </p>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm md:text-base`}
                >
                  <span>{service.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Add-On Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Bonus Add-ons</h3>
            <p className="text-gray-600">Optional upsells to enhance your growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h5 className="font-semibold text-gray-900 text-sm md:text-base mb-2">{service.name}</h5>
                <div className="text-lg md:text-xl font-bold text-blue-600">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
} 