'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Zap, 
  TrendingUp, 
  Globe, 
  Clock, 
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Star,
  Award,
  Rocket,
  Search,
  Settings,
  BarChart3,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Target,
  Users
} from 'lucide-react';

export function About() {
  const tools = [
    { name: 'MERN Stack', icon: Code, category: 'Development', color: 'from-blue-500 to-cyan-500' },
    { name: 'WordPress', icon: Globe, category: 'CMS', color: 'from-indigo-500 to-purple-500' },
    { name: 'Facebook Ads', icon: TrendingUp, category: 'Marketing', color: 'from-green-500 to-emerald-500' },
    { name: 'Google Ads', icon: TrendingUp, category: 'Marketing', color: 'from-red-500 to-pink-500' },
    { name: 'Flowise', icon: Zap, category: 'Automation', color: 'from-yellow-500 to-orange-500' },
    { name: 'n8n', icon: Zap, category: 'Automation', color: 'from-purple-500 to-violet-500' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/sachinkumar', color: 'hover:bg-gray-900 hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/sachinkumar', color: 'hover:bg-blue-600 hover:text-white' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/sachinkumar', color: 'hover:bg-sky-500 hover:text-white' },
  ];

  const stats = [
    { value: '3+', label: 'Years Experience', icon: Code },
    { value: '3x', label: 'ROAS Achieved', icon: Award },
    { value: '50+', label: 'Projects Delivered', icon: Rocket },
    { value: '100%', label: 'Client Satisfaction', icon: Star },
  ];

  const testimonials = [
    {
      quote: "Sachin helped us 3x our ROAS and built a complete automation system that saves us 20+ hours weekly.",
      author: "Sarah Chen",
      role: "Founder, EcoFlow",
      rating: 5
    },
    {
      quote: "From website to funnel to ads - he delivered everything we needed to scale our D2C brand.",
      author: "Mike Rodriguez",
      role: "CEO, FitTech Pro",
      rating: 5
    }
  ];

  const workProcess = [
    {
      step: "01",
      title: "Discover & Strategize",
      description: "Understand your business, offer, and growth goals",
      icon: Search,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02", 
      title: "Build & Launch",
      description: "Deliver website, funnel, ads, and automations",
      icon: Settings,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Optimize & Scale", 
      description: "Track KPIs, improve ROI, and add leverage",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const keyBenefits = [
    "3x ROAS on ad campaigns",
    "Complete automation systems",
    "High-converting landing pages",
    "Scalable digital infrastructure",
    "Data-driven optimization",
    "24/7 system monitoring"
  ];

  const targetClients = [
    { type: "Founders", icon: Users, description: "Scale your startup with proven systems" },
    { type: "Coaches", icon: Target, description: "Automate client onboarding & delivery" },
    { type: "D2C Brands", icon: TrendingUp, description: "Build profitable customer acquisition" },
    { type: "Creators", icon: Star, description: "Monetize your audience effectively" }
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
            <Star className="h-3 w-3 md:h-4 md:w-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Full-Stack Marketer &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Technical Founder
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            with 3+ Years of Building Digital Growth Systems
          </p>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I'm Sachin Kumar — a hybrid operator who blends performance marketing with full-stack development 
            to help businesses grow smarter and scale faster.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg md:rounded-xl flex items-center justify-center">
                  <stat.icon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start mb-12 md:mb-16">
          {/* Left - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Profile Card */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16 opacity-50"></div>
              
              <div className="relative z-10">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6 md:mb-8">
                  <div className="relative mx-auto md:mx-0">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-xl md:rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                      <img
                        src="https://res.cloudinary.com/twosapiens/image/upload/v1750163800/WhatsApp_Image_2025-05-30_at_4.08.48_PM_uxhojj.jpg"
                        alt="Sachin Kumar - Technical Founder & Hybrid Operator"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-green-500 rounded-full p-1 md:p-1.5 shadow-lg">
                      <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Sachin Kumar</h3>
                    <p className="text-base md:text-lg text-gray-600 mb-3">Full-Stack Marketer & Technical Founder</p>
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-500">
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        <span>Greater Noida, UP</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Clock className="h-4 w-4 text-green-500" />
                        <span>Available for projects</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 border border-gray-200">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Contact Information</h4>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center space-x-3 group">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                        <Mail className="h-3 w-3 md:h-4 md:w-4 text-blue-600 group-hover:text-white" />
                      </div>
                      <a href="mailto:sachinkumarmail7@gmail.com" className="text-sm md:text-base text-gray-700 hover:text-blue-600 transition-colors font-medium break-all">
                        sachinkumarmail7@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                        <Phone className="h-3 w-3 md:h-4 md:w-4 text-green-600 group-hover:text-white" />
                      </div>
                      <a href="tel:+919877034726" className="text-sm md:text-base text-gray-700 hover:text-green-600 transition-colors font-medium">
                        +91 9877034726
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                        <ExternalLink className="h-3 w-3 md:h-4 md:w-4 text-purple-600 group-hover:text-white" />
                      </div>
                      <a href="https://www.devsachinkumar.com" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-gray-700 hover:text-purple-600 transition-colors font-medium break-all">
                        www.devsachinkumar.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Benefits - Fills empty space */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 md:mt-8"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Key Benefits
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm md:text-base text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Target Clients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 md:mt-8"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">I Help</h4>
                <div className="space-y-3">
                  {targetClients.map((client, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <client.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm md:text-base">{client.type}</div>
                        <div className="text-xs md:text-sm text-gray-600">{client.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-12 order-1 lg:order-2"
          >
            {/* Journey Section */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Rocket className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">My Journey</h3>
              </div>
              <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 text-base md:text-lg">🚀 Technical Foundation</h4>
                  <p>
                    Over the last 3 years, I've built and launched websites, e-commerce platforms, and automation systems 
                    using the MERN stack, WordPress, and no-code tools like n8n and Zapier.
                  </p>
                </div>
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 text-base md:text-lg">📈 Marketing Excellence</h4>
                  <p>
                    After gaining a strong technical foundation, I transitioned into marketing — where I've driven real ROI 
                    through Meta/Google Ads, CRO-focused landing pages, and automated funnels.
                  </p>
                </div>
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2 md:mb-3 text-base md:text-lg">🎯 Hybrid Approach</h4>
                  <p>
                    Today, I combine tech + marketing to deliver performance systems for founders and brands — whether it's 
                    a launch-ready website, a sales-generating funnel, or an automation that saves hours. I've helped 
                    businesses 3x their ROAS, optimize conversion flows, and scale digital presence using data-backed strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Tools Section */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Code className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Smart Mix of Tools</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
                  >
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${tool.color} rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <tool.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-base md:text-lg">{tool.name}</p>
                        <p className="text-xs md:text-sm text-gray-500 font-medium">{tool.category}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
} 